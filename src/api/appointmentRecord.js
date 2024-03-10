<<<<<<< HEAD
export default {
    getAppointmentRecord: () => {
        return {
            code: 200,
            data: {
                records: [{
                    recordId: '001',
                    machineroomName: 'B7-137',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '同意',
                    operation: '\\'

                }, {
                    recordId: '002',
                    machineroomName: 'B7-138',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '同意',
                    operation: '\\'

                }, {
                    recordId: '003',
                    machineroomName: 'B7-139',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '待通过',
                    operation: '取消'

                }, {
                    recordId: '004',
                    machineroomName: 'B7-137',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '待通过',
                    operation: '取消'

                }, {
                    recordId: '005',
                    machineroomName: 'B7-137',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '已驳回',
                    operation: '\\'

                }, {
                    recordId: '006',
                    machineroomName: 'B7-137',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '已驳回',
                    operation: '\\'

                }, {
                    recordId: '001',
                    machineroomName: 'B7-137',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '同意',
                    operation: '\\'

                }, {
                    recordId: '002',
                    machineroomName: 'B7-138',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '同意',
                    operation: '\\'

                }, {
                    recordId: '003',
                    machineroomName: 'B7-139',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '待通过',
                    operation: '取消'

                }, {
                    recordId: '004',
                    machineroomName: 'B7-137',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '待通过',
                    operation: '取消'

                }, {
                    recordId: '005',
                    machineroomName: 'B7-137',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '已驳回',
                    operation: '\\'

                }, {
                    recordId: '006',
                    machineroomName: 'B7-137',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '已驳回',
                    operation: '\\'

                }]
            }
        }

    },
    cancelAppoinment: (config) => {
        console.log(config.url);
        return {
            code: 200
        }
    }
=======
export default {
    getAppointmentRecord: () => {
        return {
            code: 200,
            data: {
                records: [{
                    recordId: '001',
                    machineroomName: 'B7-137',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '同意',
                    operation: '\\'

                }, {
                    recordId: '002',
                    machineroomName: 'B7-138',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '同意',
                    operation: '\\'

                }, {
                    recordId: '003',
                    machineroomName: 'B7-139',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '待通过',
                    operation: '取消'

                }, {
                    recordId: '004',
                    machineroomName: 'B7-137',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '待通过',
                    operation: '取消'

                }, {
                    recordId: '005',
                    machineroomName: 'B7-137',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '已驳回',
                    operation: '\\'

                }, {
                    recordId: '006',
                    machineroomName: 'B7-137',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '已驳回',
                    operation: '\\'

                }, {
                    recordId: '001',
                    machineroomName: 'B7-137',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '同意',
                    operation: '\\'

                }, {
                    recordId: '002',
                    machineroomName: 'B7-138',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '同意',
                    operation: '\\'

                }, {
                    recordId: '003',
                    machineroomName: 'B7-139',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '待通过',
                    operation: '取消'

                }, {
                    recordId: '004',
                    machineroomName: 'B7-137',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '待通过',
                    operation: '取消'

                }, {
                    recordId: '005',
                    machineroomName: 'B7-137',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '已驳回',
                    operation: '\\'

                }, {
                    recordId: '006',
                    machineroomName: 'B7-137',
                    appoinmentWeek: 1,
                    appoinmentDate: '周六',
                    startSection: 1,
                    endSection: 4,
                    appoinmentTime: '2023-09-28',
                    appoinmentStatus: '已驳回',
                    operation: '\\'

                }]
            }
        }

    },
    cancelAppoinment: (config) => {
        console.log(config.url);
        return {
            code: 200
        }
    }
>>>>>>> c6dff60 (完善页面)
}