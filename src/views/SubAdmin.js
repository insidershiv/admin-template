import React, { useState } from 'react'
import ButtonComponent from '../components/buttonComponent'
import { Link, BrowserRouter } from "react-router-dom";
import ButtonRound from '../components/buttonRound';
import { subAdminTableItems } from './Dashboard/__dashboardTable';
import { TableBody, TableCell, TableContainer, TableHead, TableRow, TableRowItem } from '../components/tableComponent'

const SubAdmin = ({ }) => {
    const [heading, setHeading] = useState(subAdminTableItems.headings)
    const [tableRows, setTableRows] = useState(subAdminTableItems.rows)

    return (


        <div className="container-fluid" >

            {heading.map((head) => console.log(head))}

            <TableContainer>

                <TableHead>

                    {
                        heading.map((head, index) => {
                            return (
                                <TableCell item={head} key={index} />
                            )
                        })

                    }

                </TableHead>

                <tbody >

                    {
                        tableRows.map((tableRow, index) => {
                            return (
                                <tr key={index}>
                                    {
                                        tableRow.map((rowitem, index) => {
                                            return (
                                                <td className="text-center" key={index}>{rowitem}</td>
                                            )
                                        })
                                    }
                                </tr>
                            )
                        })
                    }

                </tbody>

            </TableContainer>


            <div className="row justify-content-end mt-5 pr-5">

                <div className="m-1">
                    <Link to="/subadmin_add">
                        <ButtonRound label="Back" />
                    </Link>
                </div>
                <div className="m-1">

                    <Link to="/subadmin_add">
                        <ButtonRound label="Add New" />
                    </Link>
                </div>

            </div>







        </div >
    )
}

export default SubAdmin