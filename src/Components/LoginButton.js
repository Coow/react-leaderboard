import { useSelector, useDispatch } from 'react-redux';

import { signIn, user, userGuilds, userGuildsArray, userMe, expiresAt } from '../Actions'

import { DiscordLoginButton } from "react-social-login-buttons";
import OAuth2Login from 'react-simple-oauth2-login';

const onFailure = response => console.error(response);

export default function LoginButton(props) {
    const dispatch = useDispatch();

    const onSuccess = response => {
        dispatch(user(response));

        //Calculate when the token will expire
        let expire_date = new Date();
        expire_date.setDate(expire_date.getDate() + 7);
        dispatch(expiresAt(expire_date));

        dispatch(signIn());
        console.log("User logged in");
        //window.location.reload();
    }

    return (
        <OAuth2Login
            authorizationUrl="https://discord.com/api/oauth2/authorize"
            responseType="token"
            clientId="463493299387367438"
            //      redirectUri=
            redirectUri={window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/callback"}
            buttonText={<DiscordLoginButton className="text-3xl" iconSize={props.iconSize} size={props.size} />}
            scope="identify guilds email"
            onSuccess={onSuccess}
            onFailure={onFailure} />
    )
}