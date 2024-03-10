<<<<<<< HEAD
function queryURLParams(url) {
    let pattern = /(\w+)=(\w+)/ig;
    let params = {};
    url.replace(pattern, ($, $1, $2) => {
        params[$1] = $2;
    })
    return params;
}

export default {
    getCourse: (config) => {
        console.log(config.url);
        const url = config.url;
        let params = queryURLParams(url);
        console.log(params);
        return {
            code: 200,
            data: {
                courseData: [[0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0],]
            }
        }
    },
    getRoomInfo: (config) => {
        console.log(config.url);
        const url = config.url;
        let params = queryURLParams(url);
        console.log(params);
        return {
            code: 200,
            data: {
                roomInfo: {
                    equipmentQuantity: 180,
                    adminContact: '12345678910',
                    Introduction: '这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，'
                }
            }
        }
    },
    getPeriodCourse: (config) => {
        console.log(config.url);
        const url = config.url;
        let params = queryURLParams(url);
        console.log(params);
        return {
            code: 200,
            data: {
                periodCourseInfo: {
                    courseName: '数据挖掘',
                    teacher: '张三',
                    applicant: '李四',
                    period: "第1周 周一 1-4节",
                    applicantContact: '11111112222'
                }
            }
        }
    }

=======
function queryURLParams(url) {
    let pattern = /(\w+)=(\w+)/ig;
    let params = {};
    url.replace(pattern, ($, $1, $2) => {
        params[$1] = $2;
    })
    return params;
}

export default {
    getCourse: (config) => {
        console.log(config.url);
        const url = config.url;
        let params = queryURLParams(url);
        console.log(params);
        return {
            code: 200,
            data: {
                courseData: [[0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 0, 0],]
            }
        }
    },
    getRoomInfo: (config) => {
        console.log(config.url);
        const url = config.url;
        let params = queryURLParams(url);
        console.log(params);
        return {
            code: 200,
            data: {
                roomInfo: {
                    equipmentQuantity: 180,
                    adminContact: '12345678910',
                    Introduction: '这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，'
                }
            }
        }
    },
    getPeriodCourse: (config) => {
        console.log(config.url);
        const url = config.url;
        let params = queryURLParams(url);
        console.log(params);
        return {
            code: 200,
            data: {
                periodCourseInfo: {
                    courseName: '数据挖掘',
                    teacher: '张三',
                    applicant: '李四',
                    period: "第1周 周一 1-4节",
                    applicantContact: '11111112222'
                }
            }
        }
    }

>>>>>>> c6dff60 (完善页面)
}