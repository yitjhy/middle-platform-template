import { useContext } from 'react';
import { Tag, Space, Button, Popconfirm, Row, Col } from 'antd';
import urlJoin from "url-join";
import {compose} from "ramda";
import { Context }  from '../articleModel'
import factory from "../../../utils/factory";
import { replaceUrlState } from "../../../utils/helper";
import ArticleSearchForm from './../components/articleSearchForm';
import {UrlParser} from "url-params-parser";
const { createToolbarContainer, createMainComponent, createList, createPagination, createForm, createResetFormFieldsEmptyButton } = factory;

const buildColumns = ({ match, dispatch, history }) => {
    const { path } = match;
    return [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: '姓名',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => <a href='javascript:void(0)' onClick={() => {
                history.push({pathname: urlJoin(path, String(record.id))})
            }}>{text}</a>,
        },
        {
            title: '年龄',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: '地址',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '邮箱',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: '网址',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: '标签',
            key: 'tags',
            dataIndex: 'tags',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = 'green'
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <Popconfirm
                    title="确认删除该条数据?"
                    okText="确认"
                    cancelText="取消"
                    onConfirm={() => {
                        const callback = () => {
                            const urlParams = UrlParser(window.location.href).queryParams;
                            dispatch({type: 'fetch', payload: urlParams});
                        };
                        dispatch({type: 'delete', payload: record.id, callback})
                    }}
                    onCancel={() => {}}
                >
                    <Space size="middle">
                        <Button type="danger">删除</Button>
                    </Space>
                </Popconfirm>
            ),
        },
    ];
};

const ActionContainer = props => {
    const { path } = props.match;
    const add = () => {
        props.history.push({pathname: urlJoin(path, 'new')})
    }
    return <>
        <Button type='primary' onClick={add}>新增</Button>
    </>
};

const ListComponent = createList({buildColumns});
const Com = props => {
    const { form, dispatch } = props;
    const resetCallback = () => {
        replaceUrlState();
        dispatch({type: 'fetch'});
    }
    const ResetBtn = createResetFormFieldsEmptyButton({form, resetCallback});
    return <>
        <div>
            <div style={{marginTop: '10px'}}>
                <Row>
                    <Col span={18}>
                        <ArticleSearchForm {...props} />
                    </Col>
                    <Col span={6}>
                        <div>
                            <Button type='primary' htmlType="submit">搜索</Button>
                            <ResetBtn style={{marginLeft: '0.7rem'}} />
                        </div>
                    </Col>
                </Row>
            </div>
            <ListComponent {...props} />
        </div>
    </>
}

const ArticleListComponent = compose(
    createForm({action: 'search'}),
    createMainComponent(Com),
    createToolbarContainer,
)({ActionContainerComponent: ActionContainer, OtherComponent: createPagination()});

const ArticleList = props => {
    const mapStateToProps = useContext(Context);
    return <>
        <ArticleListComponent {...mapStateToProps} {...props} />
    </>
}

export default ArticleList