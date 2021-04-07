import React from 'react'

const TableComponent = (props) => {
    return (

        { props }
        // <table className="table table-responsive-sm">
        //     <thead className="thead-dark">
        //         <tr>


        //             {
        //                 props.heading.map((head) => {
        //                     return (
        //                         <th scope="col">{head}</th>
        //                     )
        //                 })
        //             }


        //         </tr>
        //     </thead>

        // </table>
    )
}

export const TableContainer = (props) => {
    return (
        <table className="table table-responsive-sm" >
            {props.children}
        </table >
    )
}

export const TableHead = (props) => {
    return (
        <thead className="thead-dark">
            <tr>

                {props.children}
            </tr>

        </thead>
    )
}

export const TableCell = ({ item }) => {
    return (
        <th className="scope text-center">{item}</th>

    )
}

export const TableBody = (props) => {
    return (
        <tbody>
            {props.childern}
        </tbody>
    )
}

export const TableRow = (props) => {
    return (
        <tr>
            {props.childern}
        </tr>
    )
}

export const TableRowItem = (rowItem) => {
    return (
        <td>{rowItem}</td>
    )
}
