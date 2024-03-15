import Mock from 'mockjs'

import user from './user'

import mainView from './mainView'

import showReservationStatus from './showReservationStatus'

import appointmentRecord from './appointmentRecord'

import applicationProcessing from './applicationProcessing'

Mock.mock('http://localhost:8080/api/login', 'post', user.login)
Mock.mock('http://localhost:8080/api/getUserInfo', 'get', user.getUserInfo)
Mock.mock(RegExp('http://localhost:8080/api/getUserInfo'), 'get', user.getUserInfo)

Mock.mock('http://localhost:8080/api/getNotification', 'get', mainView.getNotification)
Mock.mock('http://localhost:8080/api/getMachineroom', 'get', mainView.getMachineroom)
Mock.mock('http://localhost:8080/api/getMessage', 'get', mainView.getMessage)
Mock.mock('http://localhost:8080/api/quickReserve', 'get', mainView.quickReserve)
Mock.mock('http://localhost:8080/api/seachMachineroom', 'post', mainView.seachMachineroom)
Mock.mock('http://localhost:8080/api/reserveMachineroom', 'post', mainView.reserveMachineroom)


Mock.mock('http://localhost:8080/api/getCourse', 'get', showReservationStatus.getCourse)
Mock.mock(RegExp('http://localhost:8080/api/getCourse.*'), 'get', showReservationStatus.getCourse)
Mock.mock('http://localhost:8080/api/getRoomInfo', 'get', showReservationStatus.getRoomInfo)
Mock.mock(RegExp('http://localhost:8080/api/getRoomInfo.*'), 'get', showReservationStatus.getRoomInfo)
Mock.mock('http://localhost:8080/api/getPeriodCourse', 'get', showReservationStatus.getPeriodCourse)
Mock.mock(RegExp('http://localhost:8080/api/getPeriodCourse.*'), 'get', showReservationStatus.getPeriodCourse)

Mock.mock('http://localhost:8080/api/getAppointmentRecord', 'get', appointmentRecord.getAppointmentRecord)
Mock.mock(RegExp('http://localhost:8080/api/getAppointmentRecord.*'), 'get', appointmentRecord.getAppointmentRecord)
Mock.mock(RegExp('http://localhost:8080/api/cancelAppoinment.*'), 'get', appointmentRecord.cancelAppoinment)
Mock.mock(RegExp('http://localhost:8080/api/cancelAppoinment.*'), 'put', appointmentRecord.cancelAppoinment)

Mock.mock('http://localhost:8080/api/getApplication', 'get', applicationProcessing.getApplication)
Mock.mock(RegExp('http://localhost:8080/api/rejectApplication.*'), 'put', applicationProcessing.rejectApplication)
Mock.mock(RegExp('http://localhost:8080/api/agreeApplication.*'), 'put', applicationProcessing.agreeApplication)