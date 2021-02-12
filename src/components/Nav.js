import React from "react"
import { Link } from "react-router-dom"
//Import FontAwesome Component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'

const Navigation = (props) => { 

    return(
        <div className="nav-div">
            <Navbar className="nav-navbar" collapseOnSelect expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Navbar.Brand className="nav-brand" expand="sm">
                        <Link to="/my-profile">HustleBusters </Link>
                    </Navbar.Brand>
                    <Nav.Link className="nav-link">
                        <Link to="/my-profile">My Profile</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-link">
                        <Link to="/all-leads">All Leads</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-link">
                        <Link to="/division-leads">All Divisions</Link>
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link className="nav-link">
                        <Link to ="/">Logout</Link>
                    </Nav.Link>
                    <Nav.Link className="nav-link">
                        <Link to="/about">About</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Navigation