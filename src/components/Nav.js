import React from "react"
import { Link } from "react-router-dom"
//Import FontAwesome Component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'
//Shoelace library
// import wrapCustomElement from '@shoelace-style/react-wrapper';



const Nav = (props) => {
    

    return(
        <div className="nav-div">

            {/* Mobile Nave */}
            <div className="nav-div-mobile">
                <FontAwesomeIcon icon={faEllipsisH}/>
                <ul className="nav-ul-mobile">
                    <Link to="/my-profile">
                        <li className="nav-li-mobile">
                            My Profile
                        </li>
                    </Link>
                    <Link to="/all-leads">
                        <li className="nav-li-mobile">
                            All Leads
                        </li>
                    </Link>
                    <Link to="/division-leads">
                        <li className="nav-li-mobile">
                            All Divisions
                        </li>
                    </Link>
                    <Link to="/">
                        <li className="nav-li-mobile">
                            Logout
                        </li>
                    </Link>
                    <Link to="/about">
                        <li className="nav-li-mobile">
                            About
                        </li>
                    </Link>
                </ul>
            </div>
        

            {/* Desktop Nav */}
            <div className="nav-div-desktop">
                <p className="nav-div-logo">Hustle Busters</p>
                <ul className="nav-ul-desktop">
                    <Link to="/all-leads">
                        <li className="nav-li-desktop">
                            All Leads
                        </li>
                    </Link>
                    <Link to="/division-leads">
                        <li className="nav-li-desktop">
                            All Divisions
                        </li>
                    </Link>
                    <Link to="/my-profile">
                        <li className="nav-li-desktop">
                            My Profile
                        </li>
                    </Link>
                    <Link to="/my-profile">
                        <li className="nav-li-desktop">
                            Logout
                        </li>
                    </Link>    
                </ul>
            </div>

        </div>
    )
}

export default Nav