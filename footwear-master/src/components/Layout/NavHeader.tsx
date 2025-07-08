import React, { useState } from "react"
import "./NavHeader.css"
import 'bootstrap-icons/font/bootstrap-icons.css';


const NavHeader: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }
    return (
        <header>
            <div className="title-search-container">
                <div className="title-and-menu">
                    <div className="title-container">
                        <a href="/">Footwear</a>
                    </div>
                    <div className="hamburger-menu" onClick={toggleMenu}>
                        <i className="bi bi-list"></i>
                    </div>
                </div>

                <div className="search-container">
                    <div className='search-input'>
                        <input
                            type='text'
                            placeholder='Search'

                        />
                        <i className="bi bi-search search-icon"></i>
                    </div>


                </div>
            </div>
            {menuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}


            <div className={`navigation-container ${menuOpen ? "open" : ""}`}>
                <div
                    className="close-button"
                    onClick={toggleMenu}
                    role="button"
                    aria-label="Close menu"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
                >
                    <i className="bi bi-x-lg"></i>
                </div>
                <div className="nav-links">
                    <ul>
                        <li className='nav-item'><a id='active' href="#">Home</a></li>
                        <li className='nav-item'><a href="#">Men</a></li>
                        <li className='nav-item'><a href="#">Women</a></li>
                        <li className='nav-item'><a href="#">About</a></li>
                        <li className='nav-item'><a href="#">Contact</a></li>
                        <li className='nav-item' ><a href="#" id="cart"><i className="bi bi-cart2 cart-icon"></i> Cart [0]</a></li>
                    </ul>

                </div>

            </div>
        </header>
    )
}

export default NavHeader
