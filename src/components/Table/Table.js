import "./Table.scss"

import React from 'react';

const Table = (props) => {

    return (
        <table className="following">
            <tbody>
            <tr>
                <td>{props.name[0]}</td>
                <td>{props.name[1]}</td>
                <td>{props.name[2]}</td>
            </tr>

            </tbody>
        </table>
    )

}


export  default Table
