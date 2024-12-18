import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link,useParams} from 'react-router-dom';
import { text } from '@fortawesome/fontawesome-svg-core';

const EmployeeProfile = () => {
    const { id } = useParams();
	const [employee, setEmployee] = useState({
		fristName: "",
		lastName: "",
		email: "",
		department: "",
		salary:" ",
	});
	const {
		fristName,
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
			,employee
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

		<div className="col-sm-6  px-5 offset-2">
			<div className=" text-center mb-4">
			<  h4>Employee Details</h4>
			</div>
			<form>
				<div className="input-group mb-4">
					<label
						className="input-group-text"
						htmlFor="fristName">
						First Name
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="fristName"
						id="fristName"
						required
						value={fristName}
						onChange={(e) => handleInputChange(e)}
					/>
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
						onChange={(e) => handleInputChange(e)}
					/>
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
						onChange={(e) => handleInputChange(e)}
					/>
				</div>

				<div className="input-group mb-4">
					<label
						className="input-group-text"
						htmlFor="department">
						Department
					</label>
					<input
						className="form-control col-sm-6"
						type="text"
						name="department"
						id="department"
						required
						value={department}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>
		

				<div className="row mb-5">

				<div className="col-sm-2">
						<Link
							to={"/view-employee"}
							type="submit"
							className="btn btn-outline-secondary ">
							Cancel
						</Link>
					</div>
					
					<div className="col-sm-2">
						<Link
						   to={"/view-employee"}
							type="submit"
							className="btn btn-outline-primary ">
							OK
						</Link>
					</div>
					
					
				</div>
			</form>
		</div>
	);
  
}

export default EmployeeProfile