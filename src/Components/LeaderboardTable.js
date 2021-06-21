import React from "react";
import PropTypes from 'prop-types';

export default class LeaderboardTable extends React.Component {
    
  

    render() {
        let headers = []
        let dataRows = []
    
        this.props.columns.forEach(column => {
            headers.push(
                <th key={column.field}>{column.label}</th>
            )
        });

        return (
            <>
                <thead>
                    <tr>{headers}</tr>
                </thead>
            </>
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