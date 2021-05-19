export default function(props) {
    return (
        <div className={`${props.tier} mx-32 h-12 pt-2 align-middle`}>
            <a className="ml-8 text-white no-underline">{props.name}</a>
            
            <a></a>
            <a></a>
        </div>
    )
}