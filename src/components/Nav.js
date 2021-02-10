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
            <Navbar collapseOnSelect expand="lg">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Navbar.Brand expand="sm">HustleBusters</Navbar.Brand>
                    <Nav.Link>
                        <Link to="/my-profile">My Profile</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/all-leads">All Leads</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/division-leads">All Divisions</Link>
                    </Nav.Link>
                </Nav>
                <Nav>
                    <Nav.Link>
                        <Link to ="/">Logout</Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to="/about">About</Link>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Navbar>

        </div>
    )
}

export default Navigation