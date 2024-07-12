import React, { useState } from 'react';
import './Sidebar.css';
import logo from '../../assest/Images/Logo.png';
import { TiHome } from "react-icons/ti";
import { FaUser, FaBriefcase, FaGraduationCap, FaStickyNote } from "react-icons/fa";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
    const [toggle, showMenu] = useState(false);

    const handleNavItemClick = () => {
        showMenu(false);
    };

    return (
        <>
            <aside className={toggle ? "aside show-menu" : "aside"}>
                <a href="#home" className='nav__logo'>
                    <img src={logo} alt="logo" />
                </a>

                <nav className='nav'>
                    <div className="nav__menu">
                        <ul className="nav__list">
                            <li className="nav__item">
                                <a href="#home" className="nav__link" onClick={handleNavItemClick}>
                                    <TiHome />
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link" onClick={handleNavItemClick}>
                                    <FaUser />
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#services" className="nav__link" onClick={handleNavItemClick}>
                                    <FaBriefcase />
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#resume" className="nav__link" onClick={handleNavItemClick}>
                                    <FaGraduationCap />
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#projects" className="nav__link" onClick={handleNavItemClick}>
                                    <FaStickyNote />
                                </a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link" onClick={handleNavItemClick}>
                                    <IoChatbubbleEllipses />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <div className="nav__footer">
                    <span className='copyright'>
                        &copy; 2024 - 2025.
                    </span>
                </div>
            </aside>

            <div className={toggle ? "nav__toggle nav__toggle-open" : "nav__toggle"} onClick={() => showMenu(!toggle)}>
                <RxHamburgerMenu className='icon-menu' />
            </div>
        </>
    );
}

export default Sidebar;
