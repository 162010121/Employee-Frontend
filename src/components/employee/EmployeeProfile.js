import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./LogoutModal.css"; // uses the CSS below added to Login.css

const EmployeeProfile = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [employee, setEmployee] = useState({
		id: "",
		firstName: "",
		lastName: "",
		email: "",
		gender: "",
		department: "",
		salary: "",
	});

	const [loading, setLoading] = useState(false);
	const [logoutSuccess, setLogoutSuccess] = useState(false);

	const { firstName, lastName, email, gender } = employee;

	useEffect(() => {
		loadEmployee();
	}, []);

	const loadEmployee = async () => {
		const result = await axios.get(`http://localhost:2000/employee/getEmployee/${id}`);
		setEmployee(result.data);
	};

	// 🔥 Logout Function with Loading + Popup
	const handleLogout = () => {
		setLoading(true);

		// simulate 2-second loading wait
		setTimeout(() => {
			setLoading(false);
			setLogoutSuccess(true); // show popup

			// Redirect after animation
			setTimeout(() => {
				navigate("/");
			}, 1800);
		}, 2000);
	};

	return (
		<>
			<h5>Welcome, {firstName} {lastName}!</h5>

			{/* ⬆️ Logout + Loading Button */}
			<div className="d-grid justify-content-md-end mt-3">
				<button className="btn btn-outline-danger" onClick={handleLogout} disabled={loading}>
					{loading ? (
						<span className="spinner-border spinner-border-sm"></span>
					) : (
						"Logout"
					)}
				</button>
			</div>

			{/* 🔥 Logout Success Popup */}
			{logoutSuccess && (
				<div className="logout-popup">
					<div className="logout-popup-content">
						<div className="success-circle"></div>
						<h4>Logout Successful!</h4>
					</div>
				</div>
			)}

			<div className="login-form">
				<form>
					<h4 className="text-uppercase text-center">USER DETAILS..!</h4>
					<hr />





					<div className="input-group mb-4 mt-3">
						<label className="input-group-text">First Name</label>
						<input className="form-control" type="text"
							name="firstName" value={firstName} readOnly />
					</div>

					<div className="input-group mb-4">
						<label className="input-group-text">Last Name</label>
						<input className="form-control" type="text" name="lastName" value={lastName} readOnly />
					</div>

					<div className="input-group mb-4">
						<label className="input-group-text">Gender</label>
						<input className="form-control" type="text" name="gender" value={gender} readOnly />
					</div>

					<div className="input-group mb-4">
						<label className="input-group-text">Email</label>
						<input className="form-control" type="email" name="email" value={email} readOnly />
					</div>



					<div className="row mb-3">
						<div className="col-sm-2">
							<Link to={"/view-employee"} className="btn btn-outline-secondary">
								OK
							</Link>
						</div>

						<div className="col-sm-2">
							<Link to={"/view-employee"} className="btn btn-outline-primary">
								CANCEL
							</Link>
						</div>
					</div>
				</form>
			</div>


		</>
	);
};

export default EmployeeProfile;
