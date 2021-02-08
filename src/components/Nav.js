import React from "react"
import { Link } from "react-router-dom"
//Import FontAwesome Component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Navigation = (props) => {
    

    return(
        <div className="nav-div">
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Link to="/my-profile">
                    <Nav.Link to="/my-profile">My Profile</Nav.Link>
                </Link>
                <Nav.Link>All Leads</Nav.Link>
                <Nav.Link>All Divisions</Nav.Link>
                </Nav>
                <Navbar.Brand>HustleBusters</Navbar.Brand>
                <Nav>
                <Nav.Link>Logout</Nav.Link>
                <Nav.Link>About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>


            {/* Mobile Nave */}
            <div className="nav-div-mobile">
                <FontAwesomeIcon icon="fa-ellipsis-h"/>
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

export default Navigation