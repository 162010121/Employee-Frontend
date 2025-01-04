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
        <form>
            <section>
                <div className='mt-3 float-left'>
                    <Link to="/register">
                        <button className="btn btn-primary ">Add New User</button>
                    </Link>
                </div>
                <div className="text-right mt-3">
                </div>
                <table className='table table-bordered table-striped table-hover mt-3 text-center' style={{ borderColor: 'teal' }}>
                    <thead>
                        <tr className='tr'>
                            <th>ID</th>
                            <th>Firstname</th>
                            <th>Lastname</th>
                            <th>Email</th>
                            <th colSpan="3">Action</th>
                        </tr>
                    </thead>
                    <tbody className='tbody'>
                        {employee.map((employee, index) => (
                            <tr key={employee.id}>
                                <th scope='row' key={index}>
                                    {index + 1}
                                </th>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>

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
        </form>

    )
}

export default EmployeeView