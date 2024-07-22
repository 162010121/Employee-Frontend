import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaEdit, FaEye, FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const EmployeeView = () => {

    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        loadEmployee();
    }, []);

    const loadEmployee = async () => {
        const result = await axios.get("http://localhost:2000/employee/getAllEmployee");
        setEmployee(result.data);
    }
    const handleDelete = async (id) => {
        const result = await axios.delete(
            `http://localhost:2000/employee/deleteEmployee/${id}`

        )
        loadEmployee(result.data);


    };







    return (

        <section>
            <Link to="/register">
                <button className="btn btn-outline-primary">Add New Employee</button>
            </Link>
            <div className="text-right mt-3">
            </div>
            <table className='table table-bordered table-hover shadow'>
                <thead>
                    <tr className='text-center'>
                        <th>ID</th>
                        <th>FristName</th>
                        <th>LastName</th>
                        <th>Email</th>
                        <th>Department</th>

                        <th colSpan="3">Action</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {employee.map((employee, index) => (
                        <tr key={employee.id}>
                            <th scope='row' key={index}>
                                {index + 1}
                            </th>
                            <td>{employee.fristName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>{employee.department}</td>

                            <td className="mx-2">
                                <Link to={`/employee-profile/${employee.id}`} className="btn btn-info m-1">
                                    <FaEye />
                                </Link>
                            </td>
                            <td className="mx-2">
                                <Link to={`/edit-employee/${employee.id}`} className="btn btn-primary m-1">
                                    <FaEdit />
                                </Link>
                            </td>
                            <td className="mx-2">
                                <button className="btn btn-danger m-1"
                                    onClick={() => { if (window.confirm('Are you sure to delete this record?')) { handleDelete(employee.id) }; }}>
                                    <FaTrashAlt />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </section>

    )
}

export default EmployeeView