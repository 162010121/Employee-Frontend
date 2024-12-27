import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
	const { id } = useParams();
	let navigate = useNavigate();
	const [employee, setEmployee] = useState({
		fristName: "",
		lastName: "",
		email: "",
		department: "",
	});
	const {
		fristName,
		lastName,
		email,
		department,
	} = employee;



	useEffect(() => {
		loadEmployee();
		//eslint-disable-next-line
	}, []);


	const loadEmployee = async () => {
		const result = await axios.get(
			`http://localhost:2000/employee/getEmployee/${id}`

		);
		setEmployee(result.data);
	};

	const handleInputChange = (e) => {
		setEmployee({
			...employee,
			[e.target.name]: e.target.value,
		});
	};


	const updateEmployee = async (e) => {
		e.preventDefault();
		await axios.put(
			`http://localhost:2000/employee/updateEmployee/${id}`
			, employee);
			alert("UPDATED SUCCESSFULLY...!");
		navigate("/view-employee");
	};

	return (
		<div className="login-form mt-5">
			<form onSubmit={(e) => updateEmployee(e)}>
			<h4 class="text-uppercase text-center">UPDATE EMPLOYEE DETAILS</h4>
			<hr></hr>
				<div className="input-group mb-4 mt-3">
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


				<div className="row mb-3">
					<div className="col-sm-3">
						<button
							type="submit"
							className="btn btn-outline-primary">
							Update
						</button>
					</div>

					<div className="col-sm">
						<Link
							to={"/view-employee"}
							type="submit"
							className="btn btn-outline-secondary">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
	);

}

export default EditEmployee