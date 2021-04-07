import React, { useState } from 'react';
import { Card } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import CardComponent from '../../components/cardComponent';
import CardListItems from './__card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import ButtonComponent from '../../components/buttonComponent';
import { tableHeading, dashboardTableItems } from './__dashboardTable';
import { TableBody, TableCell, TableContainer, TableHead, TableRow, TableRowItem } from '../../components/tableComponent'
import ButtonRound from '../../components/buttonRound';


const element = <FontAwesomeIcon icon={faUser} size="2x" />

const Dashboard = ({ }) => {
  const [heading, setHeading] = useState(tableHeading)
  const [tableRows, setTableRows] = useState(dashboardTableItems.rows)
  return (
    <div className="container-fluid p-0 animated fadeIn" >
      <div className="container-fluid p-0" >
        <div className="row no-gutters">
          <h4>Dashboard</h4>
        </div>
        <div className="row">
          {
            CardListItems.map((item) => {
              return (

                <div className="col-md-4 col-sm-12" key={item.id}>

                  <CardComponent count={item.count} title={item.title} img={element} />
                </div>

              )
            })
          }
        </div>
        <hr />
        <div className="container">


          <div className="row">
            <div className="col-md-3 col-sm-4 ">
              {/* hi */}
              <ButtonComponent label="Up-coming Consultation" />
            </div>
            <div className="col-md-3 col-sm-4 ">
              {/* hi */}
              <ButtonComponent label="Up-coming Consultation" />
            </div>
            <div className="col-md-3 col-sm-4">

              <ButtonComponent label="Up-coming Consultation" />
            </div>
          </div>
        </div>

        {/* <ButtonComponent label="Complete Consultation" />
          <ButtonComponent label="Cancelled Consultation" /> */}


      </div>

      {/* <TableComponent items={DashboardTableItems.heading[0]} /> */}


      {/* Data Table  */}

      <div className="container-fluid">


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
      </div>

      <div className="row justify-content-end mt-5 pr-5">

        <ButtonRound label="Back" />
      </div>

    </div>
  );
}

export default Dashboard;
