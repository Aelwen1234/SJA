import React from "react";
import { AiFillCar } from 'react-icons/ai'
import './Navbar.css'
import logo from '../assets/logo.png'

const Navbar = () => {
    return(
        <nav className="navigate">
            <div className="suksesjayaauto">
                <div className="icon">
                    <img src={logo} alt="" />
                </div>
            </div>

            <div className="text">
                <a className="item">Home</a>
                <a className="item">Input Car</a>
                <a className="item">Sign In</a>
                <a className="item">Sign Up</a>
            </div>

        </nav>
    )
}

export default Navbar