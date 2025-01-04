import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { Dropdown } from 'bootstrap';

const EmployeeProfile = () => {
	const { id } = useParams();
	const [employee, setEmployee] = useState({
		firstName: "",
		lastName: "",
		email: "",
		department: "",
		salary: " ",
	});
	const {
		firstName,
		lastName,
		email,
		department,
	} = employee;

	useEffect(() => {
		loadEmployee();
	}, []);

	const loadEmployee = async () => {
		const result = await axios.get(
			`http://localhost:2000/employee/getEmployee/${id}`
			, employee
		);
		setEmployee(result.data);
	};


	const handleInputChange = (e) => {
		setEmployee({
			...employee,
			[e.target.name]: e.target.value,
		});
	};


	return (
		<><div className="d-grid justify-content-md-end mt-3">
			<Link to="/">
				<button className='btn btn-outline-danger'>
					Logout
				</button>
			</Link>
		</div><div className="login-form">
				<div className=" text-center">
				</div>
				<form>
					<h4 class="text-uppercase text-center">USER DETAILS..!</h4>
					<hr></hr>

					<div className="input-group mb-4 mt-3">
						<label
							className="input-group-text"
							htmlFor="firstName">
							Frist Name
						</label>
						<input
							className="form-control col-sm-6"
							type="text"
							name="firstName"
							id="firstName"
							required
							value={firstName}
							onChange={(e) => handleInputChange(e)} />
					</div>

					<div className="input-group mb-4">
						<label
							className="input-group-text"
							htmlFor="lastName">
							Last Name
						</label>
						<input
							className="form-control col-sm-6"
							type="text"
							name="lastName"
							id="lastName"
							required
							value={lastName}
							onChange={(e) => handleInputChange(e)} />
					</div>

					<div className="input-group mb-4">
						<label
							className="input-group-text"
							htmlFor="email">
							Your Email
						</label>
						<input
							className="form-control col-sm-6"
							type="email"
							name="email"
							id="email"
							required
							value={email}
							onChange={(e) => handleInputChange(e)} />
					</div>
					<div className="row mb-3">
						<div className="col-sm-2">
							<Link
								to={"/view-employee"}
								type="submit"
								className="btn btn-outline-secondary ">
								OK
							</Link>
						</div>

						<div className="col-sm-2">
							<Link
								to={"/view-employee"}
								type="submit"
								className="btn btn-outline-primary ">
								CANCEL
							</Link>
						</div>


					</div>
				</form>
			</div></>
	);

}

export default EmployeeProfile