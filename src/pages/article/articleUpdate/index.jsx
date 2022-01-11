import React, { useContext } from 'react';
import { Button } from "antd";
import { compose } from 'ramda';
import factory from '../../../utils/factory';
import UpdateFormItem from '../components/articleEditForm'
import { Context } from "../articleModel";
const { createToolbarContainer, createMainComponent, createForm, ResetUpdateFormFieldsButton } = factory;

const ActionContainer = ({ dispatch, match: {params: {id}}, form }) => {
    return <>
        <ResetUpdateFormFieldsButton dispatch={dispatch} id={id} form={form} />
        <Button type='primary' htmlType="submit">更新</Button>
    </>
};

const ArticleUpdateComponent  = compose(
    createForm({action: 'update'}),
    createMainComponent(UpdateFormItem),
    createToolbarContainer
)({ActionContainerComponent: ActionContainer});

const ArticleUpdate = (props) => {
    const mapStateToProps = useContext(Context);
    return <>
        <ArticleUpdateComponent {...mapStateToProps} {...props} />
    </>
}

export default ArticleUpdate