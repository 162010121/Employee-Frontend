import { useState } from "react";
import {
	Link,
	useNavigate,
} from "react-router-dom";
import axios from "axios";

const AddStudent = () => {
	let navigate = useNavigate();
	const [employee, setEmployee] = useState({
		fristName: "",
		lastName: "",
		email: "",
		department: "",
		password: "",
	});
	const {
		fristName,
		lastName,
		email,
		department,
		password,

	} = employee;

	const handleInputChange = (e) => {
		setEmployee({
			...employee,
			[e.target.name]: e.target.value,
		});
	};
	const saveEmployee = async (e) => {
		e.preventDefault();
		await axios.post(
			"http://localhost:2000/employee/add",
			employee
		);
		navigate("/view-employee");
	};




	return (
		<div className="col-sm-6  px-5 offset-2">
			<h2 className="mt-3 text-center mt-3"> Add Employee</h2>
			<form onSubmit={(e) => saveEmployee(e)}>
				<div className="input-group mb-4">
					<label
						className="input-group-text"
						htmlFor="fristName">
						First Name
					</label>
					<input
						className="form-control"
						type="text"
						name="fristName"
						id="fristName"
						autoFocus
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
						className="form-control"
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
						className="form-control"
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
				<div className="input-group mb-4">
					<label
						className="input-group-text"
						htmlFor="password">
						Password
					</label>
					<input
						className="form-control col-sm-6"
						type="password"
						name="password"
						id="password"
						required
						value={password}
						onChange={(e) => handleInputChange(e)}
					/>
				</div>


				<div className="row mb-5">
					<div className="col-sm-2">
						<button
							type="submit"
							className="btn btn-outline-success">
							Add
						</button>
					</div>

					<div className="col-sm-2">
						<Link
							to={"/view-employee"}
							type="submit"
							className="btn btn-outline-warning">
							Cancel
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AddStudent;
