import React from 'react';
import logo from '../images/logo.jpeg'
import { Link, NavLink } from 'react-router-dom'
const Header = (props) => {
console.log("count",props.productsCount)
    return (
        <>
            <header style={{position:"static"}}>
                <div className="header">
                    <div className="head_top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="top-box">
                                        <ul className="sociel_link">
                                            <li> <a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                            <li> <a href="#"><i className="fab fa-twitter"></i></a></li>
                                            <li> <a href="#"><i className="fab fa-instagram"></i></a></li>
                                            <li> <a href="#"><i className="fab fa-linkedin"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="top-box">
                                        <p>long established fact that a reader will be
                                        
                                                <NavLink to="/cart"> <i className="fas fa-cart-plus m-2"></i>({props.productsCount}) </NavLink>
                                           

                                        </p>

                                    </div>
                                </div>
                                {/* <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                    <div className="top-box">


                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div className="full">
                                    <div className="center-desk">
                                        <div className="logo"> <a href="index.html"><img src={logo} alt="logo" /></a> </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-9 col-sm-9">
                                <div className="menu-area">
                                    <div className="limit-box">
                                        <nav className="main-menu">
                                            <ul className="menu-area-main">
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/home">Home </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/about">AboutUs</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/menu" tabIndex="-1" > Shop</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/admin" tabIndex="-1" > Admin</NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink className="nav-link" to="/contact" tabIndex="-1" >Contact Us</NavLink>
                                                </li>

                                                <li className="nav-item mean-last">
                                                    <NavLink className="nav-link" to="/contact" tabIndex="-1" >Sign UP</NavLink>
                                                </li>

                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-2">
                                <li><a className="buy" href="#">Login</a></li>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    );

}

export default Header;