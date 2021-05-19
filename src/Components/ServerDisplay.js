
export default function (props) {
    return (
        //Image and name
        <a className="server-card no-underline m-4 block cursor-pointer relative border-solid border-2 border-gray-600 rounded-lg"
            href={`/leaderboard/${props.id}/soloq`} 
            style={{ width: "12rem" }}
        >
            <a className="text-white pt-2 text-lg no-underline">{props.serverName}</a>
            <img
                src={props.image}
                className="block object-cover m-w-full h-36 m-auto rounded-lg mb-2"
            />
        </a>
    )
}