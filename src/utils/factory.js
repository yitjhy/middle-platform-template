import React, { useReducer, createContext, useEffect } from "react";
import { prop, has, omit, curry, always } from 'ramda';
import {Form, Pagination, Table, message, Button} from 'antd';
import { stringify } from 'qs';
import { createCrudService, replaceUrlState } from './helper';
import { UrlParser } from 'url-params-parser'
import './factory.css';

const getMockData = id => {
    return {
        id: id,
        key: String(id),
        name: 'John Brown',
        age: String(id),
        email: 'yitjhy@126.com',
        website: 'yitjhy.com',
        address: '1 Lake Park',
        tags: ['nice'],
    }
}
const paginationFields = {
    '当前页数': 'page',
    '每页条数': 'pageSize',
    '数据总数': 'total',

};
const defaultPagination = always({[paginationFields.当前页数]: 1, [paginationFields.每页条数]: 50, [paginationFields.数据总数]: 300})();
export const createReduxModel = (modelOptions, model) => {
    const { resource, namespace, crudService} = modelOptions;
    const { fetch, add, Delete, update, fetchDetail, fetchAll } = {...createCrudService(resource), ...(crudService || {})};
    const baseModel =  {
        namespace,
        state: {
            list: [],
            pagination: defaultPagination,
            detail: {},
            ...(prop('state', model) || {} )
        },
        effects: {
            async fetch({ payload }, { call, put, selector }) {
                let pagination = defaultPagination
                let requestParams = payload;
                if(has(paginationFields.当前页数, payload)) {
                    pagination = {
                        [paginationFields.当前页数]: Number(payload[paginationFields.当前页数]),
                        [paginationFields.每页条数]: Number(payload[paginationFields.每页条数]),
                        [paginationFields.数据总数]: selector('pagination')[paginationFields.数据总数],
                    };
                } else {
                    requestParams = {
                        ...requestParams,
                        [paginationFields.当前页数]: defaultPagination[paginationFields.当前页数],
                        [paginationFields.每页条数]: defaultPagination[paginationFields.每页条数]
                    };
                }
                put({type: 'savePagination', payload: {pagination}})
                await call(fetch, requestParams);
                const list = []
                for(let i = (pagination[paginationFields.当前页数] - 1) * pagination[paginationFields.每页条数]; i < (pagination[paginationFields.当前页数]) * pagination[paginationFields.每页条数]; i++) {
                    list.push(getMockData(i))
                }
                put({type: 'saveList', payload: {list}});
            },
            async update({ payload, callback }, { call, put }) {
                await call(update, payload);
                message.success('更新成功！');
                callback && callback();
                // window.history.back();
            },
            async fetchDetail({ payload, callback }, { call, put }) {
                await call(fetchDetail, payload);
                const detailValue = getMockData(payload);
                callback && callback(detailValue);
                put({type: 'saveDetail', payload: {detail: detailValue}})
            },
            async add({ payload, callback }, { call, put }) {
                await call(add, payload);
                message.success('新增成功！');
                callback && callback();
            },
            async refresh({ payload }, { call, put }) {
                await put({type: 'fetch'});
            },
            async delete({ payload, callback }, { call, put }) {
                await call(Delete, payload);
                message.success('删除成功！');
                callback && callback();
                // put({type: 'refresh', payload: {}});
            },
            ...(prop('effects', model) || {})
        },
        reducers: {
            saveList(state, action) {
                return { ...state, ...action.payload };
            },
            savePagination(state, action) {
                return { ...state, ...action.payload };
            },
            saveDetail(state, action) {
                return { ...state, ...action.payload };
            },
            default(state) {
                return state
            },
            ...(prop('effects', model) || {})
        }
    }
    const reducer = (state, action) => {
        return baseModel.reducers[action.type] ? baseModel.reducers[action.type](state, action) : baseModel.reducers['default'](state);
    }
    const Context = createContext(namespace);
    const Provider = ({ children }) => {
        const [state, dispatch] = useReducer(reducer, baseModel.state);
        const SELECTOR = field => {
            if (field === 'ROOT') return state;
            return state[field];
        }
        const selfDispatch = params => {
            const { type } = params;
            const reducersKeys = Object.keys(baseModel.reducers);
            const effectsKeys = Object.keys(baseModel.effects);
            if(reducersKeys.includes(type)) {
                dispatch(params);
            }
            if(effectsKeys.includes(type)) {
                const call = (execFn, execFnParam) => {
                    return execFn(execFnParam);
                }
                baseModel.effects[type](params, {call, selector: SELECTOR, put: selfDispatch})
            }
        }
        return (
            <Context.Provider value={{ dispatch: selfDispatch, SELECTOR }}>{children}</Context.Provider>
        );
    };
    return {
        Context,
        Provider
    }
}

const createList = tableParams => props => {
    const { buildColumns } = tableParams;
    const { SELECTOR, dispatch } = props;
    const fetchListData = () => {
        const urlParams = UrlParser(window.location.href).queryParams;
        let payload = urlParams;
        if (!has(paginationFields.当前页数, urlParams)) {
            payload = {...urlParams, ...(omit([paginationFields.数据总数], SELECTOR('pagination')))}
        }
        dispatch({ type: 'fetch', payload });
    };
    const columns = buildColumns(props);
    useEffect(() => {
        fetchListData()
    }, []);
    return (
        <Table columns={columns} dataSource={SELECTOR('list')} bordered scroll={{ y: 'calc(100vh - 150px)' }} pagination={false} {...props} />
    )
}

const createPagination = (paginationParams={}) => props => {
    const defaultPageSizeOptions =  ['10', '20', '30', '40'];
    const defaultSize = 'small';
    const defaultShowSizeChanger = true;
    const { SELECTOR, dispatch } = props;
    const page = SELECTOR('pagination')[paginationFields.当前页数];
    const pageSize = SELECTOR('pagination')[paginationFields.每页条数];
    const total = SELECTOR('pagination')[paginationFields.数据总数];
    const {
        pageSizeOptions = defaultPageSizeOptions,
        size = defaultSize,
        showSizeChanger = defaultShowSizeChanger,
    } = paginationParams || {};
    const onChange = (current, pageSize) => {
        const urlParams = UrlParser(window.location.href).queryParams;
        const payload = {[paginationFields.当前页数]: current, [paginationFields.每页条数]: pageSize};
        const params = {...urlParams, ...payload};
        replaceUrlState({search: params})
        dispatch({type: 'savePagination', payload: {pagination: {...payload, [paginationFields.数据总数]: total}}});
        dispatch({ type: 'fetch', payload: params });
    };
    return <Pagination current={page}
                       pageSize={pageSize}
                       total={total}
                       pageSizeOptions={pageSizeOptions}
                       size={size}
                       showSizeChanger={showSizeChanger}
                       showTotal={(total, range) => `第${range[0]}-${range[1]}条， 共${total || 10}条`}
                       onChange={onChange}
                       onShowSizeChange={onChange}
                       {...props}
    />
}

const createToolbarContainer = ({ActionContainerComponent, OtherComponent}) => props => {
    return <>
        <div className={'toolbar-container'}
             style={{
                 justifyContent: OtherComponent ? 'space-between' : 'flex-end',
                 paddingRight: OtherComponent ? '1rem' : '0',
             }}>
            <div className={'toolbar-action-container'}>
                <ActionContainerComponent {...props} />
            </div>
            <div>
                {
                    OtherComponent ? <OtherComponent {...props} /> : <div />
                }
            </div>
        </div>
    </>
}

const createMainComponent = (MainComponent, ToolbarComponent) => props => {
    return <>
        <div className={'article-container'}>
            <div>
                <MainComponent {...props} />
            </div>
            <div>
                <ToolbarComponent {...props} />
            </div>
        </div>
    </>
}

const createForm2 = ({ action='search', transFormFields }, Component) => {
    const defaultLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 15 },
    };
    const defaultValidateMessages = {
        required: '${label} 为必填项！',
        types: {
            email: '${label} 不是有效邮箱!',
            number: '${label} 不是有效数字!',
        },
        number: {
            range: '${label} 必须在 ${min} 和 ${max}之间',
        },
    };
    const formRef = React.createRef();
    class FormComponent extends React.Component {
        constructor(props) {
            super(props);
        }
        actionMap = {
            add: formValues => {
                const callback = () => {
                    const {match: {path}} = this.props;
                    const pathname = document.referrer ? UrlParser(document.referrer).pathname : '';
                    if(path.replace('/new', '') === pathname) {
                        this.props.history.push({pathname});
                    } else {
                        this.props.history.push({pathname: path.replace('/new', '')});
                    }
                };
                this.props.dispatch({type: 'add', payload: formValues, callback});
            },
            update: formValues => {
                const {match: {params: {id}}} = this.props;
                const callback = () => {
                    const {match: {path}} = this.props;
                    const urlParams = UrlParser(document.referrer).queryParams;
                    const pathname = UrlParser(document.referrer).pathname;
                    if(path.replace('/:id', '') === pathname) {
                        this.props.history.push({pathname, search: stringify(urlParams)});
                    } else {
                        // goBack太慢
                        this.props.history.goBack();
                    }
                };
                this.props.dispatch({type: 'update', payload: {...formValues, id}, callback});
            },
            search: formValues => {
                const urlParams = UrlParser(window.location.href).queryParams;
                replaceUrlState({search: {...urlParams, ...formValues}})
                this.props.dispatch({type: 'fetch', payload: formValues});
            },
            default: formValues => {console.log(formValues)}
        };
        onFinish(formValues) {
            let FormValues = formValues;
            if (transFormFields) {
                FormValues = transFormFields(formValues);
            }
            this.actionMap[action] ? this.actionMap[action](FormValues) : this.actionMap['default'](FormValues);
        };
        componentDidMount() {
            if(action === 'update') {
                const callback = detail => formRef.current.setFieldsValue(detail);
                const {match: {params: {id}}} = this.props;
                this.props.dispatch({type: 'fetchDetail', payload: id, callback});
            }
            if(action === 'search') {
                const urlParams = UrlParser(window.location.href).queryParams;
                formRef.current.setFieldsValue(urlParams);
            }
        }
        render() {
            return <Form {...defaultLayout}
                         ref={formRef}
                         name="nest-messages"
                         onFinish={this.onFinish.bind(this)}
                         validateMessages={defaultValidateMessages}
                         autoComplete='off'
                         {...this.props}
            >
                <Component {...this.props} form={formRef.current} />
            </Form>
        }
    }
    return {
        formRef,
        FormComponent
    }
}

const createForm = ({ action='search', transFormFields }, Component) => props => {
    const defaultLayout = {
        labelCol: { span: 6 },
        wrapperCol: { span: 15 },
    };
    const defaultValidateMessages = {
        required: '${label} 为必填项！',
        types: {
            email: '${label} 不是有效邮箱!',
            number: '${label} 不是有效数字!',
        },
        number: {
            range: '${label} 必须在 ${min} 和 ${max}之间',
        },
    };
    const [form] = Form.useForm();
    const actionMap = {
        add: formValues => {
            const callback = () => {
                const {match: {path}, dispatch} = props;
                const pathname = document.referrer ? UrlParser(document.referrer).pathname : '';
                dispatch({type: 'savePagination', payload: {pagination: defaultPagination}});
                if(path.replace('/new', '') === pathname) {
                    props.history.push({pathname});
                } else {
                    props.history.push({pathname: path.replace('/new', '')});
                }
            };
            props.dispatch({type: 'add', payload: formValues, callback});
        },
        update: formValues => {
            const {match: {params: {id}}} = props;
            const callback = () => {
                const {match: {path}} = props;
                const urlParams = UrlParser(document.referrer).queryParams;
                const pathname = UrlParser(document.referrer).pathname;
                if(path.replace('/:id', '') === pathname) {
                    props.history.push({pathname, search: stringify(urlParams)});
                } else {
                    // goBack太慢
                    props.history.goBack();
                }
            };
            props.dispatch({type: 'update', payload: {...formValues, id}, callback});
        },
        search: formValues => {
            const urlParams = UrlParser(window.location.href).queryParams;
            const { SELECTOR } = props;

            let payload = {...urlParams, ...formValues};
            if (!has(paginationFields.当前页数, urlParams)) {
                payload = {...payload, ...(omit([paginationFields.数据总数], SELECTOR('pagination')))}
            }

            replaceUrlState({search: payload});
            props.dispatch({type: 'fetch', payload});
        },
        default: formValues => {console.log(formValues)}
    };
    const onFinish = (formValues) => {
        let FormValues = formValues;
        if (transFormFields) FormValues = transFormFields(formValues);
        actionMap[action] ? actionMap[action](FormValues) : actionMap['default'](FormValues);
    };
    useEffect(() => {
        if (action === 'update') {
            const callback = detail => form.setFieldsValue(detail);
            const {match: {params: {id}}} = props;
            props.dispatch({type: 'fetchDetail', payload: id, callback});
        }
        if (action === 'search') {
            const urlParams = UrlParser(window.location.href).queryParams;
            form.setFieldsValue(urlParams);
        }
    }, [])
    return <Form {...defaultLayout}
                 form={form}
                 name="nest-messages"
                 onFinish={onFinish}
                 validateMessages={defaultValidateMessages}
                 autoComplete='off'
                 {...props}
    >
        <Component {...props} form={form} />
    </Form>
}

const createResetFormFieldsEmptyButton = params => props => {
    const { form, resetCallback } = params;
    const reset = () => {
        form.resetFields();
        resetCallback && resetCallback({...props, form});
    }
    return <>
        <Button onClick={reset} {...props}>重置</Button>
    </>
}

const ResetUpdateFormFieldsButton = ({ dispatch, id, form, ...restProps }) => {
    const reset = () => {
        const callback = detail => form.setFieldsValue(detail);
        dispatch({type: 'fetchDetail', payload: id, callback});
    }
    return <>
        <Button onClick={reset} {...restProps}>重置</Button>
    </>
}

const connect = mapStateToProps => Component => props => <Component {...props} {...mapStateToProps} />

export default {
    createList: curry(createList),
    createPagination: curry(createPagination),
    createToolbarContainer: curry(createToolbarContainer),
    createMainComponent: curry(createMainComponent),
    createForm: curry(createForm),
    connect: curry(connect),
    createResetFormFieldsEmptyButton,
    ResetUpdateFormFieldsButton,
}