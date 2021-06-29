import * as _ from 'ramda';
import { Maybe, Either } from 'ramda-fantasy';
import { stringify } from 'qs';
import { fetch, add, Delete, update, fetchDetail, fetchAll } from '../services';

/**
 * @Description: 判断是否存在 例如：例如[], {}, '', undefined, null都会返回false
 * @param  {*} params
 * @returns {boolean}
 */
export const judgeExist = params => !(_.isEmpty(params) || _.isNil(params));

/**
 * 根据输入的树形结构生成符合ant需要的树形结构数据
 */
export const getAntTreeData = params =>
  params.map(param => {
    param.key = param.id;
    param.title = param.name;
    param.value = param.id;
    if (param.children) {
      getAntTreeData(param.children);
    }
    return param;
  });

export const trace = _.curry((tag, x) => {
    console.log(tag, x);
    return x;
});
export const getUrlParams = url => {
  const params = {};
  let arr = url.split('?');
  if (arr.length <= 1) return url;
  arr = arr[1].split('&');
  for (let i = 0, l = arr.length; i < l; i += 1) {
    const a = arr[i].split('=');
    // eslint-disable-next-line prefer-destructuring
    params[a[0]] = a[1];
  }
  return params;
};

export const encodeUri = data => {
  const arr = [];
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (const item in data) {
    arr.push(`${item} = ${data[item]}`);
  }
  return arr.join('&');
};

const actions = { fetch, add, Delete, update, fetchDetail, fetchAll };
export const createCrudService = resource => {
    return Object.keys(actions).reduce((pre, cur) => {
        pre[cur] = _.curry(actions[cur])(resource);
        return pre;
    }, {})
};

/**
 * @Description 移除空项 map使用 例如：「 {a: 1, b: 2, c: undefined} -> {a: 1, b: 2} 」  「 {a: 1, b: 2, c: ''} -> {a: 1, b: 2} 」
 * @param {Object} params
 * @returns {Object}
 */
export const removeFieldByEmpty = params => _.filter(x => x || _.is(Boolean, x) || _.equals(0, x), params)

/**
 * @Description 类似Maybe作用的高阶函数
 * @param {function} fn
 * @returns {function(*=): null|*}
 */
export const security = fn => val => _.isNil(val) ? null : fn(val);

/**
 * @Description maybe高阶函数，用来避免空值判断  例如：后端传给我们的对象为空或少了某些list字段时使用
 * @param {function} fn
 * @param {Maybe} Maybe
 * @returns {Just | Nothing}
 */
export const highMaybe = fn => _.pipe(fn, Maybe);

/**
 * @Description 获取Functor Maybe的值
 * @param {Just | Nothing} maybeObj - Maybe实例对象
 * @returns {*}
 */
export const getMaybeValue = maybeObj => maybeObj.getOrElse();

/**
 * @Description 柯里化Functor（Maybe, Either, Io）实例的map方法  functorInstance为Functor实例
 * @param  {function} fn - 执行方法
 * @param  {(Io | Just | Nothing | Right | Left)} functorInstance - Functor(Maybe, Either, Io)的实例 eg: Maybe(666)
 * @returns {(Io | Just | Nothing | Right | Left)}
 */
export const highFnWithFunctorMap = _.curry((fn, functorInstance) => functorInstance.map(fn));

/**
 * @Description 验证信息，类似验证用户输入合法性
 * @param {Object[]} validateData - 验证数据
 * 例：
 *  [
 *    {
 *        validateFn: vEmpty,
 *        errMsg: '必填'
 *    },
 *    {
 *        validateFn: vMin,
 *        errMsg: '长度需要多于2个字符'
 *    }
 *  ]
 * @param {function} validateData[].validateFn - 验证方法
 * @param {string} validateData[].errMsg - 非法信息
 * @returns {function}
 */
export const validate = _.curry(validateData => {
    let Fns = _.reduce((pre, cur) => {
        pre.push(_.prop('validateFn', cur));
        return pre
    }, [], validateData);
    let errMsgs = _.reduce((pre, cur) => {
        pre.push(_.prop('errMsg', cur));
        return pre
    }, [], validateData);
    const highValidate = (cond,errMsg) => _.ifElse(cond,Either.Right,() => Either.Left(new Error(errMsg)));
    const vFns = _.ap([(fn) => highValidate(fn, errMsgs.shift())], Fns);
    console.log(vFns);
    return _.composeK(...vFns.reverse());
});

/**
 * @Description 获取表单参数
 * @param {Object} FormRef Antd表单实例
 * @returns {Promise<unknown>}
 */
export const getParamsByForm = FormRef =>
    new Promise(resolve => {
        FormRef.current.validateFields().then(res => {
            resolve(removeFieldByEmpty(res));
        });
    });

/**
 * @Description 重置表单（resolve表单实例，方便composeP）
 * @param {Object} FormRef Antd表单实例
 * @returns {Promise<unknown>}
 */
export const resetFormFields = FormRef =>
    new Promise(resolve => {
        FormRef.current.resetFields();
        resolve(FormRef)
    });

export const replaceUrlState = data => {
    const defaultReplaceUrl = `${window.location.origin}${window.location.pathname}`;
    let replaceUrl = defaultReplaceUrl;
    if (data) {
        if (typeof data === 'object') {
            const { url = defaultReplaceUrl, search } = data;
            if (search) {
                replaceUrl = `${url}?${stringify(search)}`;
            } else {
                replaceUrl = url;
            }
        } else {
            replaceUrl = data;
        }
    }
    // const { url=`${window.location.origin}${window.location.pathname}`, search } = data;
    // if (search) replaceUrl = `${replaceUrl}?${stringify(search)}`;
    window.history.replaceState({url: replaceUrl}, document.title, replaceUrl);
}