import React from "react";
import PropTypes from 'prop-types';

import { pascalCase } from "pascal-case";

//Emblems
import Emblem_UNRANKED from "../Images/LeagueRanks/Emblem_Unranked.png"
import Emblem_BRONZE from "../Images/LeagueRanks/Emblem_Bronze.png"
import Emblem_SILVER from "../Images/LeagueRanks/Emblem_Silver.png"
import Emblem_GOLD from "../Images/LeagueRanks/Emblem_Gold.png"
import Emblem_PLATINUM from "../Images/LeagueRanks/Emblem_Platinum.png"
import Emblem_DIAMOND from "../Images/LeagueRanks/Emblem_Diamond.png"
import Emblem_MASTER from "../Images/LeagueRanks/Emblem_Master.png"
import Emblem_GRANDMASTER from "../Images/LeagueRanks/Emblem_Grandmaster.png"
import Emblem_CHALLENGER from "../Images/LeagueRanks/Emblem_Challenger.png"

import ugg from "../Images/ugg-logo.svg"

export default class LeaderboardTable extends React.Component {

    render() {
        let headers = []
        let dataRows = []

        this.props.columns.forEach(column => {
            headers.push(
                <th key={column.field}>{column.label}</th>
            )
        });

        this.props.rows.forEach((row, i) => {
            dataRows.push(<tr className={` ${row.tier}`}>
                <td className="">{i + 1}</td>
                <td className="">{<img className="emblem" src={EmblemSelector(row.tier)} />}</td>
                <td className="">{row.name}</td>
                <td className="">{pascalCase(row.tier) + " " + row.ranking}</td>
                <td className="">{row.lp}</td>
                <td className="">{row.wins}</td>
                <td className="">{row.losses}</td>
                <td className="">{CalculateWinRatio(row.wins, row.losses)}</td>
                <td className="">{PromoEmojis(row.miniSeries) + ""}</td>
                <td className="w-20"><a href={`https://u.gg/lol/profile/euw1/${row.name}/overview`} target="_blank"><img src={ugg}/></a></td>
            </tr>
            )
            console.log(row)
        })

        return (
            <table className="m-auto w-4/6 place-self-center">
                <thead>
                    <tr>{headers}</tr>
                </thead>
                <tbody>
                    {dataRows}
                </tbody>
            </table>
        )
    }
}

LeaderboardTable.defaultProps = {
    columns: [],
    rows: []
}

LeaderboardTable.propTypes = {
    columns: PropTypes.array,
    rows: PropTypes.array,
}

function EmblemSelector(ranking) {
    switch (ranking) {
        case 'UNRANKED':
            return Emblem_UNRANKED
        case 'BRONZE':
            return Emblem_BRONZE
        case 'SILVER':
            return Emblem_SILVER
        case 'GOLD':
            return Emblem_GOLD
        case 'PLATINUM':
            return Emblem_PLATINUM
        case 'DIAMOND':
            return Emblem_DIAMOND
        case 'MASTER':
            return Emblem_MASTER
        case 'GRANDMASTER':
            return Emblem_GRANDMASTER
        case 'CHALLENGER':
            return Emblem_CHALLENGER
        default:
            return "";
    }
}

function CalculateWinRatio(wins, losses) {
    //Convert the input to strings:
    let intWins = parseInt(wins);
    let intLosses = parseInt(losses);

    let totalGames = intWins + intLosses;

    let winRatio = intWins / totalGames;

    let winPercentage = (winRatio * 100);
    let winPercentageInt = Math.round(winPercentage);

    if(!winPercentageInt){
        return "";
    }

    return winPercentageInt + "%";
}

function PromoEmojis(promo) {
    if (promo.length == 0) {
        return "";
    }
    let emojiList = ""
    //W L N
    for (let p = 0; p < promo.length; p++) {
        switch (promo[p]) {
            case 'W':
                emojiList += "✅"
                break;
            case 'L':
                emojiList += "❌"
                break;
            default:
                emojiList += "➖"
        }
    }
    return emojiList;
}