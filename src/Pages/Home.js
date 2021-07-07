import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { userGuilds, userMe, userGuildsArray, userGuildsCommon } from '../Actions'

import LoginButton from '../Components/LoginButton'

import ServerDisplayList from "../Components/ServerDisplayList"

export default function () {
    const dispatch = useDispatch();

    const isLoggedIn = useSelector(state => state.isLoggedIn);
    const userState = useSelector(state => state.userReducer);
    const userStateGuilds = useSelector(state => state.userGuilds);
    const _userGuildsArray = useSelector(state => state.userGuildsArray);

    //Get the guilds that the User is in
    useEffect(() => {
        if (isLoggedIn && userState) {
            fetch('https://discord.com/api/users/@me/guilds', {
                headers: {
                    authorization: `${userState.token_type} ${userState.access_token}`
                }
            })
                .then(result => result.json())
                .then(response => {
                    dispatch(userGuilds(response))
                    let arr = []
                    for (let i = 0; i < response.length; i++) {
                        arr.push(response[i].id)
                    }
                    dispatch(userGuildsArray(arr))
                })
        }
    }, [isLoggedIn])

    //Get personal user info
    useEffect(() => {
        if (isLoggedIn && userState) {
            fetch('https://discord.com/api/users/@me', {
                headers: {
                    authorization: `${userState.token_type} ${userState.access_token}`
                }
            })
                .then(result => result.json())
                .then(response => {
                    dispatch(userMe(response))
                })
        }
    }, [isLoggedIn])

    //Get oauth2 user info
    useEffect(() => {
        if (isLoggedIn && userState) {
            fetch('https://discord.com/api/oauth2/@me', {
                headers: {
                    authorization: `${userState.token_type} ${userState.access_token}`
                }
            })
                .then(result => result.json())
                .then(response => {
                    console.log(response)
                })
        }
    }, [isLoggedIn])

    //Get common servers
    useEffect(() => {
        if (isLoggedIn && userState) {
            //fetch('http://localhost:8080/riotboard/v2/guilds', {
            fetch('https://api.mrcow.xyz/riotboard/v2/guilds', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({guilds: _userGuildsArray})
            })
                .then(result => result.json())
                .then(response => {
                    //Filters through the userGuilds, and gets the Data from it, with servers that it has in common
                    let userGuildsFiltered = []
                    for(let g = 0; g < response.length; g++){
                        //If response[index] is equal to any server, push that child object 
                        let _guild = userStateGuilds.filter(_g => response[g] === _g.id)
                        //[0], because IDK
                        userGuildsFiltered.push(_guild[0])
                    }
                    dispatch(userGuildsCommon(userGuildsFiltered))
                })
        }
    }, [_userGuildsArray])

    return (
        <div>
            {isLoggedIn ?
                <div className="mt-20">
                    <ServerDisplayList />
                </div>
                :
                <div className="mt-80 flex flex-col items-center justify-content-center">
                    <h1 className="text-gray-200 text-5xl">Cowlandia - The LoL Leaderboard Bot</h1>
                    <LoginButton />
                </div>
            }
        </div>
    )
}