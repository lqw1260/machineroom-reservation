export default {
    getApplication: () => {
        return {
            code: 200,
            data: {
                applications: [
                    {
                        applicationId: '001',
                        machineroomName: 'B7-137',
                        appoinmentWeek: 1,
                        appoinmentDate: '周六',
                        startSection: 1,
                        endSection: 4,
                        appoinmentTime: '2023-09-28',
                        applicant: '李明',
                        appoinmentReason: 'xxxxxxxxxxxxxxxxxxxxxxxxxx一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字',
                        appoinmentStatus: '未处理',

                    },
                    {
                        applicationId: '002',
                        // serialNumber: 1,
                        machineroomName: 'B7-138',
                        appoinmentWeek: 1,
                        appoinmentDate: '周六',
                        startSection: 1,
                        endSection: 4,
                        appoinmentTime: '2023-09-28',
                        applicant: '李明',
                        appoinmentReason: 'xxxxxxxxxxxxxxxxxxxxxxxxxx一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字',
                        appoinmentStatus: '未处理',

                    }, {
                        applicationId: '003',
                        // serialNumber: 1,
                        machineroomName: 'B7-137',
                        appoinmentWeek: 1,
                        appoinmentDate: '周六',
                        startSection: 1,
                        endSection: 4,
                        appoinmentTime: '2023-09-28',
                        applicant: '李明',
                        appoinmentReason: 'xxxxxxxxxxxxxxxxxxxxxxxxxx一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字',
                        appoinmentStatus: '已同意',

                    }, {
                        applicationId: '004',
                        // serialNumber: 1,
                        machineroomName: 'B7-137',
                        appoinmentWeek: 1,
                        appoinmentDate: '周六',
                        startSection: 1,
                        endSection: 4,
                        appoinmentTime: '2023-09-28',
                        applicant: '李明',
                        appoinmentReason: 'xxxxxxxxxxxxxxxxxxxxxxxxxx一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字',
                        appoinmentStatus: '已同意',

                    }, {
                        applicationId: '005',
                        // serialNumber: 1,
                        machineroomName: 'B7-137',
                        appoinmentWeek: 1,
                        appoinmentDate: '周六',
                        startSection: 1,
                        endSection: 4,
                        appoinmentTime: '2023-09-28',
                        applicant: '李明',
                        appoinmentReason: 'xxxxxxxxxxxxxxxxxxxxxxxxxx一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字',
                        appoinmentStatus: '已同意',

                    }, {
                        applicationId: '006',
                        // serialNumber: 1,
                        machineroomName: 'B7-137',
                        appoinmentWeek: 1,
                        appoinmentDate: '周六',
                        startSection: 1,
                        endSection: 4,
                        appoinmentTime: '2023-09-28',
                        applicant: '李明',
                        appoinmentReason: 'xxxxxxxxxxxxxxxxxxxxxxxxxx一段文字一段文字一段文字一段文字一段文字一段文字一段文字一段文字',
                        appoinmentStatus: '已同意',

                    }
                ]
            }
        }
    },
    rejectApplication: (config) => {
        console.log(config.url);
        return {
            code: 200
        }
    },
    agreeApplication: (config) => {
        console.log(config.url);
        return {
            code: 200,
        }
    }
}