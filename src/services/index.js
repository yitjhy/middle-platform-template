import request from "../utils/request";
import { getNormalBasePath } from "../constants";
import { omit } from 'ramda';

export const fetch = (resource, params) => {
    return request({
        url: `${getNormalBasePath()}${resource}`,
        method: 'get',
        params: {
            ...params,
        }
    });
};
export const add = (resource, params) => {
    return request({
        url: `${getNormalBasePath()}${resource}`,
        method: 'post',
        data: {
            ...params,
        },
        headers: {
            'Content-Type': 'application/json'
        }
    });
};
export const Delete = (resource, id) => {
    return request({
        url: `${getNormalBasePath()}${resource}/${id}`,
        method: 'delete',
    });
};
export const update = (resource, params) => {
    return request({
        url: `${getNormalBasePath()}${resource}/${params.id}`,
        method: 'put',
        data: {
            ...params ? omit(['id'], params) : {},
        },
        headers: {
            'Content-Type': 'application/json'
        }
    });
}
export const fetchDetail = (resource, id) => {
    return request({
        url: `${getNormalBasePath()}${resource}/${id}`,
        method: 'get',
    });
}
export const fetchAll = resource => {
    return request({
        url: `${getNormalBasePath()}${resource}/all`,
        method: 'get',
    });
}