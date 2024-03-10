<<<<<<< HEAD
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
            data: {
                machineroom: [{
                    imgSrc: 'xxx',
                    machineroomId: '111',
                    name: 'B7-137',
                    admin: '李明',
                    features: ['largeMargin', 'bigRoom'] //返回特征的编号，写死在前端
                },
                {
                    imgSrc: 'xxx',
                    machineroomId: '222',
                    name: 'B7-138',
                    admin: '刘子明',
                    features: ['middleMargin', 'middleRoom'] //返回特征的编号，写死在前端
                },
                {
                    imgSrc: 'xxx',
                    machineroomId: '333',
                    name: 'B7-139',
                    admin: '王子鸣',
                    features: ['smallMargin', 'smallRoom'] //返回特征的编号，写死在前端
                },
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
                },]
            }
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
                quickRoom: {
                    imgSrc: 'xxx',
                    machineroomId: '222',
                    name: 'B7-138',
                    admin: '刘子明',
                    features: ['middleMargin', 'middleRoom'],
                }
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


=======
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
            data: {
                machineroom: [{
                    imgSrc: 'xxx',
                    machineroomId: '111',
                    name: 'B7-137',
                    admin: '李明',
                    features: ['largeMargin', 'bigRoom'] //返回特征的编号，写死在前端
                },
                {
                    imgSrc: 'xxx',
                    machineroomId: '222',
                    name: 'B7-138',
                    admin: '刘子明',
                    features: ['middleMargin', 'middleRoom'] //返回特征的编号，写死在前端
                },
                {
                    imgSrc: 'xxx',
                    machineroomId: '333',
                    name: 'B7-139',
                    admin: '王子鸣',
                    features: ['smallMargin', 'smallRoom'] //返回特征的编号，写死在前端
                },
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
                },]
            }
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
                quickRoom: {
                    imgSrc: 'xxx',
                    machineroomId: '222',
                    name: 'B7-138',
                    admin: '刘子明',
                    features: ['middleMargin', 'middleRoom'],
                }
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


>>>>>>> c6dff60 (完善页面)
