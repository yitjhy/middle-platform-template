import { createReduxModel } from '../../utils/factory';
const namespace = 'ARTICLE';
const resource = '/article';
const list = []
for(let i = 0; i < 500; i++) {
    list.push({
        id: i,
        key: String(i),
        name: 'John Brown',
        age: i,
        address: '1 Lake Park',
        email: 'yitjhy@126.com',
        website: 'yitjhy.com',
        tags: ['nice'],

    },)
}
const articleModel = createReduxModel(
    {namespace, resource},
    {
        state: {
            list,
        }}
    )

export const { Context, Provider } = articleModel