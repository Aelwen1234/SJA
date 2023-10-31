import React from "react";
import { AiFillCar } from 'react-icons/ai'
import './Navbar.css'
import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <nav className="navigate">
            <div className="suksesjayaauto">
                <div className="icon">
                    <img src={logo} alt="" />
                </div>
            </div>

            <div className="text">

                <a className="item" onClick={() => {
                    navigate('SJA/')
                }}>Home</a>
                <a className="item" onClick={() => {
                    navigate('SJA/carinput')
                }}>Input Car</a>
                <a className="item">Sign In</a>
                <a className="item">Sign Up</a>
            </div>

        </nav>
    )
}

export default Navbar