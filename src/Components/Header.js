import React, { Component, useEffect, useState } from 'react'
import {
    NavLink
} from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { signOut, user, userGuilds, userMe } from '../Actions'

import iconlogo from '../Images/pfp_cropped.png'

import LoginButton from './LoginButton'

export default function () {
    const dispatch = useDispatch();

    const userState = useSelector(state => state.userReducer);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const userStateGuilds = useSelector(state => state.userGuilds);
    const userStateMe = useSelector(state => state.userMe);

    const [imgURL, set_imgURL] = useState("");

    useEffect(() => {
        if (userStateMe != null && isLoggedIn) {
            set_imgURL(`https://cdn.discordapp.com/avatars/${userStateMe.id}/${userStateMe.avatar}.png`)
        }
    }, [userStateMe])

    const logoutUser = () => {
        dispatch(user(null));
        dispatch(userGuilds(null));
        dispatch(userMe(null));
        dispatch(signOut());
        console.log("User logged out");
        window.location.reload();
    }

    return (
        <div>
            <Navbar expand="sm" variant="dark" className="ml-auto bg-gray-900 h-16 text-center ">
                <Navbar.Brand href="/" className="flex-row ml-4">
                    <img
                        src={iconlogo}
                        width="60"
                        height="60"
                        className="d-inline-block"
                        alt="Cowlandia Logo"
                    />{' '}
                </Navbar.Brand>
                <Nav className="">
                    <Nav.Link><NavLink className="no-underline text-gray-200" to="#">Commands</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="no-underline text-gray-200" to="#">Help</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="no-underline text-gray-200" to="#">API</NavLink></Nav.Link>
                    <Nav.Link><NavLink className="no-underline text-gray-200" to="#">Premium</NavLink></Nav.Link>
                </Nav>

                <Nav.Link className="ml-auto"><NavLink className="ml-auto no-underline text-gray-200" to="#">Add To Server</NavLink></Nav.Link>
                {isLoggedIn ?
                    <NavDropdown className="pr-16" title={
                        <img src={imgURL} className="rounded-full h-10"/>
                    } id="user-dropdown">
                        <NavDropdown.Item className="text-gray-800 hover:no-underline" onClick={logoutUser} >Sign Out</NavDropdown.Item>
                    </NavDropdown>
                    :
                    <LoginButton iconSize="20px"/>}
            </Navbar>
        </div>
    )
}