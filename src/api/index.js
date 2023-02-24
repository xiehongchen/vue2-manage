import http from '../utils/request'

// 请求首页数据
export const getData = () => {
    // 返回一个promise对象
    return http.get('/home/getData')
}

export const getUser = (params) => {
    console.log(params,'params');
    // 返回用户列表
    return http.get('/user/getUser',params)
}
export const addUser = (data) => {
    // 添加
    return http.post('/user/add',data)
}
export const editUser = (data) => {
    // 编辑
    return http.post('/user/edit',data)
}
export const delUser = (data) => {
    // 删除
    return http.post('/user/del',data)
}

export const getMenu = (data) => {
    // 删除
    return http.post('/permission/getMenu',data)
}

