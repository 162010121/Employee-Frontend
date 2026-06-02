import React, { useState } from 'react';
import './RRE.css';
import { Link } from "react-router-dom";



export default function RREmployee() {
    const [setIsRegistered] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsRegistered(true);

    };
    return (
        <div className='div1'>


            <form onSubmit={handleSubmit} className="rr-form">
                <h2 >Registration Successful!</h2>
                <div>
                <p>Your registration was successful. You can now proceed to 
                    <Link to="/employee-login">Login!</Link></p>
                    </div>
            </form>

        </div>
    );

}