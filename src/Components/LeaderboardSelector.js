import { useParams } from "react-router-dom";

export default function (props) {

    let { guildID, board } = useParams();

    function isCurrent(boardName) {
        if (board === boardName) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div className="grid grid-rows-1 gap-4 grid-flow-col py-4 text-center align-middle">
            <a
                href={`/leaderboard/${guildID}/soloq`}
                className={`text-white no-underline text-2xl mx-8 ${isCurrent("soloq") ? "active-board" : "non-active-board"}`}>
                Solo Queue
                </a>

            <a
                href={`/leaderboard/${guildID}/flex`}
                className={`text-white no-underline text-2xl ${isCurrent("flex") ? "active-board" : "non-active-board"}`}>
                Flex Queue
                </a>

            <a
                href={`/leaderboard/${guildID}/tft`}
                className={`text-white no-underline text-2xl ${isCurrent("tft") ? "active-board" : "non-active-board"}`}>
                TeamFight Tactics
                </a>

            <div
                className="text-white no-underline text-2xl">
                More to come!..
                </div>
        </div>
    )
}