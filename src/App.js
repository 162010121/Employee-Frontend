import React from 'react'
import Home from './Home'
import EmployeeView from './components/employee/EmployeeView'
import AddEmployee from './components/employee/AddEmployee'
import EditEmployee from './components/employee/EditEmployee'
import EmployeeLogin from './components/employee/EmployeeLogin'
import Registration from './components/employee/Registration'
import Navbar from './components/common/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EmployeeProfile from './components/employee/EmployeeProfile'
import './App.css';
import './components/employee/Login.css';
import ForgotPassword from './components/employee/ForgetPassword'


export const App = () => {
	return (

		
		<main className='container'>
			<Router>
				<Navbar />
				<Routes>
					<Route
						exact
						path="/"
						element={<Home />}></Route>
					<Route
						exact
						path="/view-employee"
						element={<EmployeeView />}></Route>
					<Route
						exact
						path="/employee-login"
						element={<EmployeeLogin />}></Route>
					<Route
						exact
						path="/add-employee"
						element={<AddEmployee />}></Route>
					<Route
						exact
						path="/edit-employee/:id"
						element={<EditEmployee />}></Route>
					<Route
						exact
						path="/employee-profile/:id"
						element={<EmployeeProfile />}></Route>
					<Route
						exact
						path="/register"
						element={<Registration />}></Route>
						<Route
						exact
						path="/forgot"
						element={<ForgotPassword />}></Route>
				</Routes>
			</Router>
			
		</main>
	)
}

export default App
