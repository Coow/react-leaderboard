import React, { Component, useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import LeaderboardLine from "../Components/LeaderboardLine"
import { MDBDataTableV5 as MDBDataTable  } from 'mdbreact';
import Emblem_UNRANKED from "../Images/LeagueRanks/Emblem_Unranked.png"
import Emblem_BRONZE from "../Images/LeagueRanks/Emblem_Bronze.png"
import Emblem_SILVER from "../Images/LeagueRanks/Emblem_Silver.png"
import Emblem_GOLD from "../Images/LeagueRanks/Emblem_Gold.png"
import Emblem_PLATINUM from "../Images/LeagueRanks/Emblem_Platinum.png"
import Emblem_DIAMOND from "../Images/LeagueRanks/Emblem_Diamond.png"
import Emblem_MASTER from "../Images/LeagueRanks/Emblem_Master.png"
import Emblem_GRANDMASTER from "../Images/LeagueRanks/Emblem_Grandmaster.png"
import Emblem_CHALLENGER from "../Images/LeagueRanks/Emblem_Challenger.png"

import { pascalCase } from "pascal-case";

export default function () {

	const DIVLIST = [
		"CHALLENGER", "GRANDMASTER", "MASTER", "DIAMOND", "PLATINUM", "GOLD", "SILVER", "BRONZE", "IRON", "UNRANKED"
	]

	let { guildID, board } = useParams();

	const [leaderboardJSON, set_leaderboardJSON] = useState([]);
	const [leaderboard, set_leaderboard] = useState([]);
    const [tableData, set_tableData] = useState({});


	useEffect(() => {
		if (!guildID || !board) { return; }
		fetch(`https://api.mrcow.xyz/riotboard/v2/guild/${guildID}/${board}`)
			.then(result => result.json())
			.then(response => {
				set_leaderboardJSON(LeaderboardSorter(response))
			})
	}, [])

	useEffect(() => {
		if(!leaderboardJSON){return;}
		LeaderboardConstructor()
	}, [leaderboardJSON])

	function LeaderboardConstructor() {
		let _table = {
			columns: [
                {
                    label: "#",
                    field: "placement"
                },
                {
                    label: "",
                    field: "emblem"
                },
				{
                    label: "Name",
                    field: "name"
                },
				{
                    label: "Rank",
                    field: "ranking"
                },
				{
                    label: "LP",
                    field: "lp"
                },
				{
                    label: "Wins",
                    field: "wins"
                },
				{
                    label: "Losses",
                    field: "losses"
                },
				{
                    label: "Win Rate",
                    field: "winratio"
                },
				{
                    label: "Promos",
                    field: "miniSeries"
                }
			],
			rows: []
		}

		for(let i = 0; i < leaderboardJSON.length; i++) {
			_table.rows.push({
				placement: i + 1,
				emblem: <img className="emblem" src={EmblemSelector(leaderboardJSON[i].tier)}/>,
				name: leaderboardJSON[i].name,
				ranking: (pascalCase(leaderboardJSON[i].tier) + " " + leaderboardJSON[i].ranking),
				lp: leaderboardJSON[i].lp,
				wins: leaderboardJSON[i].wins,
				losses: leaderboardJSON[i].losses,
				winratio: CalculateWinRatio(leaderboardJSON[i].wins, leaderboardJSON[i].losses),
				miniSeries: PromoEmojis(leaderboardJSON[i].miniSeries),
			})
		}
		
		console.log(_table)
		set_tableData(_table)
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

	function LeaderboardSorter(json) {
		let sorted = []
		for (let i = 0; i < DIVLIST.length; i++) {
			for (let s = 0; s < json.length; s++) {
				if (json[s].tier == DIVLIST[i]) {
					sorted.push(json[s])
				}
			}
		}
		return sorted;
	}

	function EmblemSelector(ranking){
		switch(ranking) {
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

	function SetRowClass(){
		//TODO add a class to the table row, for some dank custom css 
	}

	return (
		<div className="text-white">
			<MDBDataTable
            className="w-3/5 place-self-center text-white resultTable pb-32"
            order={['placement']}
            hover
            paging={false}
            info={false}
            sortable={false}
			striped
            small
            searching={false}
            data={tableData} />
		</div>
	)
}