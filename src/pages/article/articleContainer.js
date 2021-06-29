import React from 'react';
import ArticleAdd from './articleAdd'
import ArticleUpdate from './articleUpdate'
import ArticleList from './articleList'

export const ArticleAddContainer = props => {
    return <>
        <ArticleAdd {...props} />
    </>
}

export const ArticleUpdateContainer = props => {
    return <>
        <ArticleUpdate {...props} />
    </>
}

export const ArticleListContainer = props => {
    return <>
        <ArticleList {...props} />
    </>
}

