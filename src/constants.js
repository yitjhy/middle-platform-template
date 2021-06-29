import * as _ from 'ramda';
export const getMenuData = _.always([
    { key: '1', title: '首页' },
    {
        key: '2',
        title: '营销数据管理',
        children: [
            {
                key: '2-1',
                title: '内容管理',
                pathname: '/article',
            },
            {
                key: '2-2',
                title: '主播管理',
                pathname: '/article/new',
            },
            {
                key: '2-3',
                title: '分类管理',
                pathname: '/app/anchor',
            },
            {
                key: '2-4',
                title: 'Tag标签管理',
                pathname: '/app/anchor',
            },
            {
                key: '2-5',
                title: '菜单管理',
                pathname: '/app/anchor',
            },
        ]
    },
    {
        key: '3',
        title: '资源管理',
        children: [
            {
                key: '3-1',
                title: '图片',
                pathname: '/app/content',
            },
            {
                key: '3-2',
                title: '音频',
                pathname: '/app/anchor',
            },
            {
                key: '3-3',
                title: '视频',
                pathname: '/app/anchor',
            },
        ]
    },
    {
        key: '4',
        title: '用户数据管理',
        children: [
            {
                key: '4-1',
                title: '用户管理',
                pathname: '/app/content',
            },
        ]
    },
]);
export const getNormalBasePath = _.always('/api');
export const getAjaxTimeout = _.always(5000000);
export const getRequestNormalCode = _.always(0);
export const getErrorCodeEnum = _.always({
    1: '密码错误',
    2: 'token错误',
    10: '账号已被禁用',
    11: '电话号码格式错误',
    12: '用户名已存在',
    default: '未知错误'
});
export const getResStatusCodeObj = _.always({
    200: '服务器成功返回请求的数据。',
    201: '新建或修改数据成功。',
    202: '一个请求已经进入后台排队（异步任务）。',
    204: '删除数据成功。',
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
    default: '未知错误'
});
