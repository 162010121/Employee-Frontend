import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate, useParams } from 'react-router-dom';
import "./UpdateModal.css";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    email: "",
    gender: "",
    department: "",
  });

  const [showUpdatePopup, setShowUpdatePopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // ✅ Success popup

  const { firstName, lastName, email, gender, department } = employee;

  useEffect(() => {
    loadEmployee();
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

  const handleUpdateClick = (e) => {
    e.preventDefault();
    setShowUpdatePopup(true);
  };

  const closePopup = () => setShowUpdatePopup(false);

  const confirmUpdate = async () => {
    setLoading(true); // start loading

    try {
      await axios.put(
        `http://localhost:2000/employee/updateEmployee/${id}`,
        employee
      );

      // optional small delay for UX
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setShowUpdatePopup(false);
      setLoading(false);
      setShowSuccessPopup(true); // ✅ Show success popup
    } catch (err) {
      console.error("Update failed:", err);
      setLoading(false);
    }
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    navigate("/view-employee"); // Navigate after closing success popup
  };

  return (

    <div className="login-form mt-5">

      <form onSubmit={handleUpdateClick}>
        <h4 className="text-uppercase text-center">USER DETAILS</h4>
        <hr />

        <div className="input-group mb-4 mt-3">
          <label className="input-group-text">First Name</label>
          <input
            className="form-control"
            type="text"
            name="firstName"
            required
            value={firstName}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mb-4">
          <label className="input-group-text">Last Name</label>
          <input
            className="form-control"
            type="text"
            name="lastName"
            required
            value={lastName}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mb-4">
          <label className="input-group-text">Gender</label>
          <input
            className="form-control"
            type="text"
            name="gender"
            required
            value={gender}
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mb-4">
          <label className="input-group-text">Your Email</label>
          <input
            className="form-control"
            type="email"
            name="email"
            required
            value={email}
            onChange={handleInputChange}
          />
        </div>

        <div className="row mb-3">
          <div className="col-sm-3">
            <button type="submit" className="btn btn-outline-primary">
              Update
            </button>
          </div>

          <div className="col-sm">
            <Link to={"/view-employee"} className="btn btn-outline-secondary">
              Cancel
            </Link>
          </div>
        </div>
      </form>

      {/* CONFIRMATION POPUP */}
      {showUpdatePopup && (
        <div className="modal-overlay">
          <div className="modal-box animate-popup">
            <h4>Confirm Update</h4>
            <p>Are you sure you want to update this employee details?</p>

            <div className="modal-buttons">
              <button
                className="btn btn-success"
                onClick={confirmUpdate}
                disabled={loading}
              >
                {loading ? "Updating..." : "Yes, Update"}
              </button>
              <button className="btn btn-secondary" onClick={closePopup} disabled={loading}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUCCESS POPUP */}
      {showSuccessPopup && (
        <div className="modal-overlay">
          <div className="modal-box animate-popup">
            <h4>Update Successful</h4>
            <p>Profile has been updated successfully!</p>
            <div className="modal-buttons">
              <button className="btn btn-primary" onClick={closeSuccessPopup}>
                OK
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditEmployee;
