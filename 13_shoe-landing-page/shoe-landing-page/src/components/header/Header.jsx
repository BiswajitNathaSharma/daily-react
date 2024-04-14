import React from 'react'
import "./header.css"
import nike from "../../assets/nike.png"
function Header() {
    return (
        <nav className='nav'>
            <img src={nike} alt="" />

            <ul>
                <li>Home</li>
                <li>Sale</li>
                <li>Location</li>
                <li>Pricing</li>
            </ul>

            <button>Cart</button>
        </nav>
    )
}

export default Header
