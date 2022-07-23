import React from "react";
import Img from "assets/Logo.svg"
import './style.scss'
const Footer = () => {
    return (
        <div className="footer">
            <div className="logo"><img src={Img} alt={''} /></div>
            <p className="footer-text"> Дипломный проект 2022</p>
            <div className="footer-colum">
                <div className='small'> Made by </div> Oleksandr Yepik
            </div>
        </div >
    )
}

export default Footer