import React, { Component, useEffect, useState } from 'react'
import {
    NavLink
} from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { signOut, user, userGuilds, userGuildsArray, userMe, expiresAt, userGuildsCommon } from '../Actions'

import iconlogo from '../Images/pfp_cropped.png'

import LoginButton from './LoginButton'

export default function () {
    const dispatch = useDispatch();

    const userState = useSelector(state => state.userReducer);
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const userStateGuilds = useSelector(state => state.userGuilds);
    const userStateMe = useSelector(state => state.userMe);
    const token_expiresAt = useSelector(state => state.expiresAt);

    const [imgURL, set_imgURL] = useState("");

    useEffect(() => {
        if (userStateMe != null && isLoggedIn) {
            set_imgURL(`https://cdn.discordapp.com/avatars/${userStateMe.id}/${userStateMe.avatar}.png`)
        }
    }, [userStateMe])

    const logoutUser = () => {
        dispatch(user(null));
        dispatch(userGuilds(null));
        dispatch(userGuildsArray(null));
        dispatch(expiresAt(null));
        dispatch(userMe(null));
        dispatch(userGuildsCommon(null));
        dispatch(signOut());
        console.log("User logged out");
        //window.location.reload();
    }

    //Check if the token has expired
    useEffect(() => {
        if (userStateMe != null) {
            let curDate = new Date()
            let tokenDate = new Date(token_expiresAt)
            console.log(tokenDate)
            if (tokenDate.getTime() < curDate.getTime()) {
                console.log("User token has expired! Logging out!")
                logoutUser();
            }
        }
    }, [])

    return (

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
                <Nav.Link><NavLink className="no-underline text-gray-200" to="/commands">Commands</NavLink></Nav.Link>
                <Nav.Link><NavLink className="no-underline text-gray-200" to="/FAQ">FAQ</NavLink></Nav.Link>
                <Nav.Link><NavLink className="no-underline text-gray-200" to="/api">API</NavLink></Nav.Link>
                <Nav.Link><NavLink className="no-underline text-gray-200" to="/premium">Premium</NavLink></Nav.Link>
            </Nav>

            <a className="ml-auto no-underline remote-header-link" onClick={() => window.open("https://discord.com/oauth2/authorize?client_id=463493299387367438&scope=bot&permissions=2148363344", "_blank")}>Add To Server</a>
            {isLoggedIn ?
                <NavDropdown className="pr-16" title={
                    <img src={imgURL} className="rounded-full h-10" />
                } id="user-dropdown">
                    <NavDropdown.Item className="text-gray-800 hover:no-underline" onClick={logoutUser} >Sign Out</NavDropdown.Item>
                </NavDropdown>
                :
                <LoginButton />}
        </Navbar>
    )
}