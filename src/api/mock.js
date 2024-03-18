import Mock from 'mockjs'

import user from './user'

import mainView from './mainView'

import showReservationStatus from './showReservationStatus'

import appointmentRecord from './appointmentRecord'

import applicationProcessing from './applicationProcessing'

import studentAccount from "@/api/studentAccount";

Mock.mock('http://localhost:8080/api/login', 'post', user.login)
Mock.mock('http://localhost:8080/api/getUserInfo', 'get', user.getUserInfo)
Mock.mock(RegExp('http://localhost:8080/api/getUserInfo'), 'get', user.getUserInfo)

Mock.mock('http://localhost:8080/api/getNotification', 'get', mainView.getNotification)
Mock.mock('http://localhost:8080/api/getMachineroom', 'get', mainView.getMachineroom)
Mock.mock('http://localhost:8080/api/getMessage', 'get', mainView.getMessage)
Mock.mock('http://localhost:8080/api/quickReserve', 'get', mainView.quickReserve)
Mock.mock('http://localhost:8080/api/seachMachineroom', 'post', mainView.seachMachineroom)
Mock.mock(RegExp('http://localhost:8080/api/seachMachineroom.*'), 'get', mainView.seachMachineroom)
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
Mock.mock(RegExp('http://localhost:8080/api/rejectApplication'), 'get', applicationProcessing.rejectApplication)
Mock.mock(RegExp('http://localhost:8080/api/agreeApplication'), 'get', applicationProcessing.agreeApplication)

Mock.mock('http://localhost:8080/api/getStudentUsersAccount', 'get', studentAccount.getStudentUsersAccount())
Mock.mock(RegExp('http://localhost:8080/api/deleteOneItem'), 'post', studentAccount.deleteOneItem)
Mock.mock('http://localhost:8080/api/search', 'post', studentAccount.search)
Mock.mock('http://localhost:8080/api/addNewItem', 'post', studentAccount.addNewItem)
Mock.mock(RegExp('http://localhost:8080/api/deleteItems'), 'post', studentAccount.deleteItems)
