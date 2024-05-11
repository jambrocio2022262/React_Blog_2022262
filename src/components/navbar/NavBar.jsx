import React from "react";
import '../../styles/navBar.css'

export const NavBar = () =>{
    return(
        <nav className="navBar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <span style={{fontWeight: 'initial'}}>Josue Ambrocio</span>
                </li>
            </ul>
        </nav>
    )
}