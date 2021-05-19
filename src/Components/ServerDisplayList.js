import ServerDisplay from "./ServerDisplay";
import "./ServerDisplayList.css"
import { Grid, Row } from 'react-flexbox-grid';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';


export default function (props) {
    const userGuildsCommon = useSelector(state => state.userGuildsCommon);

    const [guildsList, set_guildsList] = useState([])

    useEffect(() => {
        if(!userGuildsCommon){
            return;
        }
        //set_guildsList([""])
        let tempList = []
        console.log("Create server Displays")
        userGuildsCommon.forEach((guild, i) => {
            
            tempList.push(
                <ServerDisplay 
                    id={guild.id}
                    serverName={guild.name}
                    owner={guild.owner}
                    image={`https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`}
                />
            )
        });
        set_guildsList(tempList)
    }, [userGuildsCommon])
    return (
        <Grid fluid className="pb-16 z-10" style={{
            top: "20%"
        }}>
            <Row center="xs">
                {guildsList}
            </Row>
        </Grid>
    )
}