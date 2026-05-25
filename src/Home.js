import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-page">

      <div className="home-content text-center">
        <h2 className="fw-bold">Welcome to Full Stack App</h2>

        <p className="mt-2" style={{ fontSize: "18px" }}>
          Manage employees, track updates, and stay connected efficiently.
        </p>

        <div className="d-flex justify-content-center gap-3 mt-4">

          <Link to="/register">
            <button className="btn btn-primary px-4 py-2">
              Registration
            </button>
          </Link>

          <Link to="/employee-login">
            <button className="btn btn-outline-light px-4 py-2">
              Login
            </button>
          </Link>

        </div>
      </div>

    </div>
  );
};

export default Home;
