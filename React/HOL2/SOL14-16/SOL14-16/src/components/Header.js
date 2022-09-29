import React from "react"
import { ReactDOM } from "react"

function Header() {
    return (
        <header>
            <nav className="navBar">
                <img src='logo192.png' alt='' className="logo"></img>
                <ul className='nav-items'>
                    <li className="item">Tutorial</li>
                    <li className="item">About</li>
                    <li className="item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header