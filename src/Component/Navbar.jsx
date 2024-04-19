import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import './Nav.css';

const Navbar = () => {

    // const navigate = useNavigate();

    // const handleLoginClick = () => {
    //     navigate('/register');
    // };

    // const handleClick = () => {
    //     navigate('/login');
    // };
    const state = useSelector((state) => state.handleCart)
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4" href="/">SHOPPING</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/products">Products</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/About">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                            </li>



                        </ul>
                        <div className="buttons">
                            <NavLink to="/login" className="btn btn-outline-dark">
                                <i className="fa fa-sign-in me-1"></i>Login</NavLink>
                            <NavLink to="/register" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-user-plus me-1"></i>Register</NavLink>
                            <NavLink to="cart" className="btn btn-outline-dark ms-2">
                                <i className="fa fa-shopping-cart me-1"></i>Cart({state.length})</NavLink>



                        </div>
                        {/* <li className="ap nav-item dropdown" >
                            <NavLink className="nav-link dropdown-toggle headings" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <FaUserAlt className="icon" />
                            </NavLink>
                            <ul className="dropdown-menu">
                                <li><NavLink className="dropdown-item" href="#">My Profile</NavLink></li>
                                <li><NavLink className="dropdown-item" onClick={handleLoginClick} to="/register">New User?</NavLink></li>
                                <li><NavLink className="dropdown-item" onClick={handleClick} to="/login">Logout</NavLink></li>
                            </ul>
                        </li> */}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
