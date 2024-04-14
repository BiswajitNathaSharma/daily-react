import React from 'react'
import "./header.css"
function Header() {
    return (
        <nav className='nav'>
            <h1>Logo</h1>

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
