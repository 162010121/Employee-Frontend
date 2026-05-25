import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./DeleteModal.css";

const EmployeeView = () => {
  const [employee, setEmployee] = useState([]);
  const [filteredEmployee, setFilteredEmployee] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);


  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;

  // Delete popup
  const [showDeletePopup, setShowDeletePopup] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    loadEmployee();
  }, []);

  const loadEmployee = async () => {
    try {
      const res = await axios.get(
        "http://localhost:2000/employee/getAllEmployee"
      );
      const data = Array.isArray(res.data) ? res.data : [];
      setEmployee(data);
      setFilteredEmployee(data);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error loading employees:", error);
    }
  };

  // 🔍 LIVE ADVANCED SEARCH
  const handleLiveSearch = (value) => {
    setSearchText(value);

    if (value.trim() === "") {
      setFilteredEmployee(employee);
      setCurrentPage(1);
      return;
    }

    const lowerValue = value.toLowerCase();

    const filtered = employee.filter((emp) =>
      emp.firstName.toLowerCase().includes(lowerValue) ||
      emp.lastName.toLowerCase().includes(lowerValue) ||
      emp.email.toLowerCase().includes(lowerValue)
    );

    setFilteredEmployee(filtered);
    setCurrentPage(1);
  };

  // Delete handlers
  const openDeletePopup = (id) => {
    setSelectedId(id);
    setShowDeletePopup(true);
  };

  const closePopup = () => {
    setShowDeletePopup(false);
    setSelectedId(null);
  };

  const confirmDelete = async () => {
    setLoading(true);
    try {
      await axios.delete(
        `http://localhost:2000/employee/deleteEmployee/${selectedId}`
      );

            await new Promise((resolve) => setTimeout(resolve, 1000));

      loadEmployee();
      closePopup();
      setLoading(false);
    } catch (error) {
      console.error("Delete failed:", error);
      setLoading(false);
    }
  };

  // Pagination
  const totalPages = Math.max(
    1,
    Math.ceil(filteredEmployee.length / recordsPerPage)
  );

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredEmployee.slice(
    indexOfFirstRecord,
    indexOfLastRecord
  );

  return (
    <section className="container mt-3">
      {/* HEADER */}
      <div className="d-flex justify-content-between align-items-center mb-3">
        <Link to="/register">
          <button className="btn btn-primary">Add New User</button>
        </Link>

        {/* 🔍 LIVE SEARCH INPUT */}
        <input
          type="text"
          className="form-control w-25"
          placeholder="Search by username / email..."
          value={searchText}
          onChange={(e) => handleLiveSearch(e.target.value)}
        />
      </div>

      {/* TABLE */}
      <table className="table table-striped table-hover text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Firstname</th>
            <th>Lastname</th>
            <th>Email</th>
            <th colSpan="3">Action</th>
          </tr>
        </thead>

        <tbody>
          {currentRecords.length === 0 ? (
            <tr>
              <td colSpan="7">No records found</td>
            </tr>
          ) : (
            currentRecords.map((emp, idx) => (
              <tr key={emp.id}>
                <td>{indexOfFirstRecord + idx + 1}</td>
                <td>{emp.firstName}</td>
                <td>{emp.lastName}</td>
                <td>{emp.email}</td>

                <td>
                  <Link
                    to={`/employee-profile/${emp.id}`}
                    className="btn btn-info btn-sm"
                  >
                    <FaEye />
                  </Link>
                </td>

                <td>
                  <Link
                    to={`/edit-employee/${emp.id}`}
                    className="btn btn-primary btn-sm"
                  >
                    <FaEdit />
                  </Link>
                </td>

                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => openDeletePopup(emp.id)}
                  >
                    <FaTrashAlt />
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* DELETE MODAL */}
      {showDeletePopup && (
        <div className="modal-overlay">
          <div className="modal-box animate-popup">
            <h4>Are you sure?</h4>
            <p>This record will be permanently deleted.</p>
            <div className="modal-buttons">
              <button className="btn btn-danger"
                onClick={confirmDelete}
                disabled={loading}
              >
                {loading ? "Deleting..." : "Yes, Delete"}
              </button>
              <button className="btn btn-secondary" onClick={closePopup}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PAGINATION */}
      <div className="d-flex justify-content-center mt-3">
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              Previous
            </button>
          </li>

          {Array.from({ length: totalPages }, (_, i) => (
            <li
              key={i}
              className={`page-item ${currentPage === i + 1 ? "active" : ""
                }`}
            >
              <button
                className="page-link"
                onClick={() => setCurrentPage(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          ))}

          <li
            className={`page-item ${currentPage === totalPages ? "disabled" : ""
              }`}
          >
            <button
              className="page-link"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              Next
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default EmployeeView;
