import React, { Component, useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Link, useLocation, BrowserRouter as Router } from "react-router-dom";

import jwt_decode from "jwt-decode";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function () {
    const dispatch = useDispatch();
    
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const user = useSelector(state => state.user);

    let query = useQuery();

    //https://discord.com/api/oauth2/authorize?client_id=463493299387367438&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fcallback&response_type=code&scope=guilds%20identify%20connections%20email
    //console.log(jwt_decode(query.get("code")))
    return (
        <div>{query.get("code") || ""} query strings</div>
    )
}