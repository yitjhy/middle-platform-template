import React from 'react';
import { Route, Switch } from 'react-router-dom';
import urlJoin from 'url-join';
import { ArticleAddContainer, ArticleListContainer, ArticleUpdateContainer } from './articleContainer';

const ArticleRoute = ({ match }) => {
    const { path } = match;
    return (
        <Switch>
            <Route path={urlJoin(path, 'new')} exact component={ArticleAddContainer} />
            <Route path={urlJoin(path, ':id')} exact component={ArticleUpdateContainer} />
            <Route path={path} exact component={ArticleListContainer} />
        </Switch>
    );
}
export default ArticleRoute;