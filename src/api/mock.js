import Mock from 'mockjs'

import user from './user'

Mock.mock('http://localhost:8080/api/login', 'post', user.login)
Mock.mock('http://localhost:8080/api/getUserInfo', 'post', user.getUserInfo)