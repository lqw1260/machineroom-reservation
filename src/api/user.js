//createUserList:次函数执行会返回一个数组,数组里面包含两个用户信息
function createUserList() {
    return [
        {
            userId: 1,
            avatar:
                'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            username: 'admin',
            password: '111111',
            name: '张三',
            desc: '平台管理员',
            roles: 'admin',
            buttons: ['cuser.detail'],
            routes: ['home'],
            token: 'Admin Token1',
        },
        {
            userId: 2,
            avatar:
                'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
            username: 'system',
            password: '111111',
            name: '李四',
            desc: '系统管理员',
            roles: 'teacher',
            buttons: ['cuser.detail', 'cuser.user'],
            routes: ['home'],
            token: 'System Token',
        },
    ]
}

export default {
    login: config => {
        const { username, password } = JSON.parse(config.body).data
        // console.log(JSON.parse(config.body))
        // console.log(username, password);
        // return {
        //     status: 200,
        //     data: { token: 'token' }
        // }
        //调用获取用户信息函数,用于判断是否有此用户
        const checkUser = createUserList().find(
            (item) => item.username === username && item.password === password,
        )
        //没有用户返回失败信息
        if (!checkUser) {
            return { code: 201, data: { message: '账号或者密码不正确' } }
        }
        //如果有返回成功信息
        const { token, roles } = checkUser
        return { code: 200, data: { token, roles } }
    },
    getUserInfo: config => {
        const { token } = JSON.parse(config.body).data
        // console.log(JSON.parse(config.body))
        // console.log(username, password);
        // return {
        //     status: 200,
        //     data: { token: 'token' }
        // }
        //调用获取用户信息函数,用于判断是否有此用户
        const checkUser = createUserList().find(
            (item) => item.token === token,
        )
        //没有用户返回失败信息
        if (!checkUser) {
            return { code: 401, data: { message: 'token已过期' } }
        }
        //如果有返回成功信息
        const { name } = checkUser
        //todo
        //返回身份权限roles
        return { code: 200, data: { name } }
    },
}