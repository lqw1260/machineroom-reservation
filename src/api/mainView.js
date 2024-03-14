export default {
    getNotification: () => {
        return {
            code: 200,
            data: {
                notification: [{
                    notificationId: '111',
                    title: "关于111通知...",
                    time: "2020-11-11"
                },
                {
                    notificationId: '222',
                    title: "关于222通知...",
                    time: "2020-11-11"
                },
                {
                    notificationId: '333',
                    title: "关于333通知...",
                    time: "2020-11-11"
                }],
            }
        }
    },
    getMessage: () => {
        return {
            code: 200,
            data: {
                message: [
                    {
                        messageId: '111',
                        title: "关于xxx通知...",
                        time: "2020-11-11"
                    }],
            }
        }
    },
    getMachineroom: () => {
        return {
            code: 200,
            // data: {
            //     machineroom: [{
            //         imgSrc: 'xxx',
            //         machineroomId: '111',
            //         name: 'B7-137',
            //         admin: '李明',
            //         features: ['largeMargin', 'bigRoom'] //返回特征的编号，写死在前端
            //     },
            //     {
            //         imgSrc: 'xxx',
            //         machineroomId: '222',
            //         name: 'B7-138',
            //         admin: '刘子明',
            //         features: ['middleMargin', 'middleRoom'] //返回特征的编号，写死在前端
            //     },
            //     {
            //         imgSrc: 'xxx',
            //         machineroomId: '333',
            //         name: 'B7-139',
            //         admin: '王子鸣',
            //         features: ['smallMargin', 'smallRoom'] //返回特征的编号，写死在前端
            //     },
            //     {
            //         imgSrc: 'xxx',
            //         machineroomId: '444',
            //         name: 'B7-137',
            //         admin: '李明',
            //         features: ['noMargin', 'middleRoom'] //返回特征的编号，写死在前端
            //     },
            //     {
            //         imgSrc: 'xxx',
            //         machineroomId: '555',
            //         name: 'B7-231',
            //         admin: '李明',
            //         features: ['largeMargin', 'bigRoom'] //返回特征的编号，写死在前端
            //     },
            //     {
            //         imgSrc: 'xxx',
            //         machineroomId: '666',
            //         name: 'B7-137',
            //         admin: '李明',
            //         features: ['largeMargin', 'bigRoom'] //返回特征的编号，写死在前端
            //     },]
            // }
            "data": [
                {
                    "machineroomId": 1,
                    "name": "A240100",
                    "address": "B7-101",
                    "computerNumbers": 50,
                    "introduction": "软件学院机房",
                    "admin": "李老师",
                    "features": [
                        "AMD",
                        "largeMargin",
                        "bigRoom"
                    ]
                },
                {
                    "machineroomId": 2,
                    "name": "A240102",
                    "address": "B7-101",
                    "computerNumbers": 50,
                    "introduction": "软件学院机房",
                    "admin": "王五",
                    "features": [
                        "AMD",
                        "largeMargin",
                        "middleRoom"
                    ]
                },
                {
                    "machineroomId": 3,
                    "name": "A240103",
                    "address": "B7-101",
                    "computerNumbers": 50,
                    "introduction": "软件学院机房",
                    "admin": "李老师",
                    "features": [
                        "AMD",
                        "middleMargin",
                        "smallRoom"
                    ]
                },
                {
                    "machineroomId": 4,
                    "name": "A240104",
                    "address": "B7-101",
                    "computerNumbers": 50,
                    "introduction": "软件学院机房",
                    "admin": "李四",
                    "features": [
                        "AMD",
                        "smallMargin",
                        "middleRoom"
                    ]
                },
                {
                    "machineroomId": 5,
                    "name": "A240105",
                    "address": "B7-101",
                    "computerNumbers": 50,
                    "introduction": "软件学院机房",
                    "admin": "李老师",
                    "features": [
                        "AMD",
                        "smallMargin",
                        "bigRoom"
                    ]
                },
                {
                    "machineroomId": 6,
                    "name": "A240106",
                    "address": "B7-101",
                    "computerNumbers": 50,
                    "introduction": "软件学院机房",
                    "admin": "张三",
                    "features": [
                        "AMD",
                        "smallMargin",
                        "smallRoom"
                    ]
                },
                {
                    "machineroomId": 7,
                    "name": "A240107",
                    "address": "B7-101",
                    "computerNumbers": 50,
                    "introduction": "软件学院机房",
                    "admin": "李老师",
                    "features": [
                        "AMD",
                        "smallMargin",
                        "middleRoom"
                    ]
                },
                {
                    "machineroomId": 8,
                    "name": "A240108",
                    "address": "B7-101",
                    "computerNumbers": 50,
                    "introduction": "软件学院机房",
                    "admin": "李四",
                    "features": [
                        "AMD",
                        "smallMargin",
                        "smallRoom"
                    ]
                },
                {
                    "machineroomId": 9,
                    "name": "A240109",
                    "address": "B7-101",
                    "computerNumbers": 50,
                    "introduction": "软件学院机房",
                    "admin": "李老师",
                    "features": [
                        "AMD",
                        "smallMargin",
                        "smallRoom"
                    ]
                },
                {
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
                },
                {
                    "machineroomId": 11,
                    "name": "A240111",
                    "address": "B7-101",
                    "computerNumbers": 50,
                    "introduction": "软件学院机房",
                    "admin": "李老师",
                    "features": [
                        "AMD",
                        "smallMargin",
                        "smallRoom"
                    ]
                }
            ]
        }
    },
    seachMachineroom: (config) => {
        const form = JSON.parse(config.body).data;
        console.log(form);
        return {
            code: 200,
            data: {
                machineroom: [
                    {
                        imgSrc: 'xxx',
                        machineroomId: '444',
                        name: 'B7-137',
                        admin: '李明',
                        features: ['noMargin', 'middleRoom'] //返回特征的编号，写死在前端
                    },
                    {
                        imgSrc: 'xxx',
                        machineroomId: '555',
                        name: 'B7-231',
                        admin: '李明',
                        features: ['largeMargin', 'bigRoom'] //返回特征的编号，写死在前端
                    },
                    {
                        imgSrc: 'xxx',
                        machineroomId: '666',
                        name: 'B7-137',
                        admin: '李明',
                        features: ['largeMargin', 'bigRoom'] //返回特征的编号，写死在前端
                    },
                ]
            }
        }
    },
    quickReserve: () => {
        return {
            code: 200,
            data: {
                "machineroomId": 6,
                "name": "A240106",
                "address": "B7-101",
                "computerNumbers": 50,
                "introduction": "软件学院机房",
                "admin": "张三",
                "features": [
                    "AMD",
                    "smallMargin",
                    "smallRoom"
                ]
            }
        }
    },
    reserveMachineroom: (config) => {
        const room = JSON.parse(config.body).data;
        console.log(room);
        return {
            code: 200,
        }
    }
}


