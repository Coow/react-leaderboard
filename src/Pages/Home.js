import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { signIn, user } from '../Actions'

import { DiscordLoginButton } from "react-social-login-buttons";
import OAuth2Login from 'react-simple-oauth2-login';

const onFailure = response => console.error(response);

export default function () {
    const dispatch = useDispatch();

    const onSuccess = response => {
        dispatch(user(response));
        dispatch(signIn());
        console.log("User logged in");
    }

    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const userState = useSelector(state => state.userReducer);

    const [me, set_me] = useState([]);

    useEffect(() => {
        if(isLoggedIn) {
            fetch('https://discord.com/api/users/@me/guilds', {
			headers: {
				authorization: `${userState.token_type} ${userState.access_token}`
			}
		})
			.then(result => result.json())
            .then(response => {
                //set_me(JSON.stringify(response))
                console.log(response)
            })
        }
    }, [isLoggedIn])

    return (
        <div>
            {isLoggedIn ?
                "logged in" + me
                :
                "not logged in"
            }
            <br />
            
            <OAuth2Login
                authorizationUrl="https://discord.com/api/oauth2/authorize"
                responseType="token"
                clientId="463493299387367438"
                redirectUri="http://localhost:3000/callback"
                buttonText={<DiscordLoginButton className="max-w-xs"/>}
                scope="identify guilds email"
                onSuccess={onSuccess}
                onFailure={onFailure} />
        </div>
    )
}