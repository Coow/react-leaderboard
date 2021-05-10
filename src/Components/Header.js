import React from "react"
import {
    NavLink
} from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { signOut, user as userObject } from '../Actions'

import iconlogo from '../Images/pfp_cropped.png'

/*<button type="submit" onclick={
                function logoutUser() {
                    dispatch(userObject(null));
                    dispatch(signOut());
                    console.log("User logged out");
                }}>
                Logout
            </button>
*/

export default function () {
    const dispatch = useDispatch();

    const userState = useSelector(state => state.userReducer);
    const isLoggedIn = useSelector(state => state.isLoggedIn);


    const logoutUser = () => {
        dispatch(userObject(null));
        dispatch(signOut());
        console.log("User logged out");
    }

    return (
        <div>
            <Navbar expand="sm" variant="dark" className="bg-gray-900 h-16">
                <Navbar.Brand href="/" className="flex-row">
                    <img
                        src={iconlogo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="Cowlandia Logo"
                    />
                </Navbar.Brand>
                <Nav >
                    <Nav.Link><NavLink className="text-gray-200 hover:no-underline hover:text-orange-600" to="/compliance">Compliance</NavLink></Nav.Link>
                </Nav>
            {isLoggedIn ? 
                <NavDropdown className="ml-auto pr-16 text-orange-600  hover:text-orange-600" title={"Cow"} id="user-dropdown">
                    <NavDropdown.Item ><NavLink className="text-gray-800 hover:no-underline" to="/company">Company</NavLink></NavDropdown.Item>
                    <NavDropdown.Item className="text-gray-800 hover:no-underline" href="">Settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="text-gray-800 hover:no-underline" onClick={logoutUser} >Sign Out</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item className="text-gray-800 hover:no-underline" >Contact Support</NavDropdown.Item>
                </NavDropdown>
                :
                "" }
            </Navbar>
        </div>
    )
}