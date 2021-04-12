import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom'
const NavBar = props => {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">Navbar</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/home">Home </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">AboutUs</NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" tabIndex="-1" >Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/cart" tabIndex="-1" >shopping cart</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/menu" tabIndex="-1" > Menu</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin" tabIndex="-1" > Admin</NavLink>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={props.onSearch}>
                        <input ref={props.searchVal} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-warning my-2 my-sm-0" type="submit" >Search </button>
                    </form>

                    <span className="m-2" style={{ color: props.productsCount > 0 ? "#ffc107" : "black" }}><i className="fas fa-cart-plus m-2"></i>({props.productsCount})</span>
                </div>
            </nav>
        </>
    );

}
export default NavBar;