export default function(props) {
    let headers = []
    let dataRows = []

    props.columns.forEach(column => {
        headers.push(
            <th key={column.field}>{column.label}</th>
        )
    });

    //props.data.forEach(item => {
    //    let dataCells = []
//
    //    columns.forEach(column => {
    //      <td key={`${item[key]}-${col.property}`}>{item[col.property]}</td>
    //    })
//
    //    dataRows.push(
    //        
    //    )
    //})

    return (
        <>
            <thead>
                <tr>{headers}</tr>
            </thead>
        </>
    )
}