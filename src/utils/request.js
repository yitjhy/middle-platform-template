import axios from 'axios';
import { message } from 'antd';
import * as _ from 'ramda';
import { judgeExist, removeFieldByEmpty } from './helper';
import { getErrorCodeEnum, getResStatusCodeObj, getAjaxTimeout } from '../constants';

const request = axios.create({baseURL: '', timeout: getAjaxTimeout()});

const goLogin = () => {
    window.location.href = `${window.location.origin}${window.location.pathname}#/login`;
    return false
};

request.interceptors.request.use(
    config => {
        config['headers']['token'] = `${localStorage.getItem('token')}`;
        config.params = _.when(judgeExist, removeFieldByEmpty)(_.prop('params', config));
        return config;
    },
    () => {
        _.pipe(message.warning)('ajax请求时错误');
    },
);

request.interceptors.response.use(
    response => {
        _.when(
            _.has(_.path(['data', 'code'], response)),
            errorEnum => {_.compose(message.info, _.prop(_.__, errorEnum), _.path(['data', 'code']))(response)}
        )(getErrorCodeEnum());
        _.when(_.pathEq(['data', 'code'], -9999), goLogin)(response);
        return _.prop('data', response);
    },
    error => {
        // _.compose(message.warning, _.prop(_.__, resStatusCodeObj), _.when(_.isNil, () => 'default'), _.path(['response', 'status']))(error);
        _.compose(message.warning, _.prop(_.__, getResStatusCodeObj()), _.pathOr('default', ['response', 'status']))(error);
        _.when(_.pathEq(['response', 'status'], 401), goLogin)(error);
        return error.response.data;
    },
);

export default request;
