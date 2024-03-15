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
            // data: {
            //     courseData: [[0, 0, 1, 0, 0, 0, 0, 0, 0],
            //     [0, 0, 1, 0, 0, 0, 0, 0, 0],
            //     [0, 0, 1, 0, 0, 0, 0, 0, 0],
            //     [0, 0, 1, 0, 0, 0, 0, 0, 0],
            //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
            //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
            //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
            //     [0, 0, 0, 0, 0, 0, 0, 0, 0],
            //     [0, 0, 1, 0, 0, 0, 0, 0, 0],
            //     [0, 0, 1, 0, 0, 0, 0, 0, 0],
            //     [0, 0, 1, 0, 0, 0, 0, 0, 0],]
            // }
            "data": [
                {
                    "id": 2,
                    "createTime": "2024-02-27T15:30:53",
                    "updateTime": "2024-02-27T19:56:50",
                    "isDeleted": 0,
                    "orderJfCode": "A240102",
                    "orderDate": "2024-02-27",
                    "orderDay": 232420102,
                    "startSection": 1,
                    "endSection": 4,
                    "orderAccount": "2401",
                    "applyReason": "上课",
                    "remark": "提前10分钟开门",
                    "orderStatus": 1
                },
                {
                    "id": 3,
                    "createTime": "2024-02-27T15:30:53",
                    "updateTime": "2024-02-27T19:56:50",
                    "isDeleted": 0,
                    "orderJfCode": "A240102",
                    "orderDate": "2024-02-27",
                    "orderDay": 232420104,
                    "startSection": 9,
                    "endSection": 11,
                    "orderAccount": "2401",
                    "applyReason": "上课",
                    "remark": "提前10分钟开门",
                    "orderStatus": 1
                }
            ]
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
                // roomInfo: {
                //     equipmentQuantity: 180,
                //     adminContact: '12345678910',
                //     Introduction: '这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，这是一段机房介绍，'
                // }
                "machineroomId": 10,
                "name": "A240110",
                "address": "B7-101",
                "computerNumbers": 50,
                "introduction": "软件学院机房",
                "admin": "王老师",
                "features": [
                    "AMD",
                    "smallMargin",
                    "smallRoom"
                ]
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

}