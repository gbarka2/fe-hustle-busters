import React from "react"
import wrapCustomElement from '@shoelace-style/react-wrapper';



const Nav = (props) => {
    

    return(
        <div className="nav-div">

            {/* Mobile Nave */}
            <div className="nav-div-mobile">
                <ul className="nav-ul-mobile">
                    <li className="nav-li-mobile">
                        My Profile
                    </li>
                    <li className="nav-li-mobile">
                        All Leads
                    </li>
                    <li className="nav-li-mobile">
                        All Components
                    </li>
                    <li className="nav-li-mobile">
                        Lgout
                    </li>
                    <li className="nav-li-mobile">
                        About
                    </li>
                </ul>
            </div>
        

            {/* Desktop Nav */}
            <div className="nav-div-desktop">
                <p className="nav-div-logo">Hustle Busters</p>
                <ul className="nav-ul-desktop">
                    <li className="nav-li-desktop">
                        All Leads
                        </li>
                    <li className="nav-li-desktop">
                        All Divisions
                        </li>
                    <li className="nav-li-desktop">
                        My Profile
                        </li>
                    <li className="nav-li-desktop">
                        Logout
                        </li>
                </ul>
            </div>

        </div>
    )
}

export default Nav