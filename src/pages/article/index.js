import React  from 'react';
import ArticleRoute from './route';
import { Provider }  from './articleModel'

const Article = props => {
    return (
        <Provider>
            <ArticleRoute {...props} />
        </Provider>
    )
};
export default Article