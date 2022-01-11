import React, { useContext } from 'react';
import { Button } from "antd";
import { compose } from 'ramda';
import factory from '../../../utils/factory';
import AddFormItem from '../components/articleEditForm';
import { Context } from "../articleModel";
const { createToolbarContainer, createMainComponent, createForm, createResetFormFieldsEmptyButton } = factory;

const ActionContainer = ({form}) => {
    const ResetBtn = createResetFormFieldsEmptyButton({form});
    return <>
        <ResetBtn />
        <Button type='primary' htmlType="submit">保存</Button>
    </>
};

const ArticleAddComponent = compose(
    createForm({action: 'add'}),
    createMainComponent(AddFormItem),
    createToolbarContainer
)({ActionContainerComponent: ActionContainer});

const ArticleAdd = (props) => {
    const mapStateToProps = useContext(Context);
    return <>
        <ArticleAddComponent {...mapStateToProps} {...props} />
    </>
}

export default ArticleAdd