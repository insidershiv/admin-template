import React, { Component } from 'react';
import { Card } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import CardComponent from '../../components/cardComponent';
import CardListItems from './__card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import ButtonComponent from '../../components/buttonComponent';
import TableComponent from '../../components/tableComponent';
import DashboardTableItems from './__dashboardTable';

const element = <FontAwesomeIcon icon={faUser} size="2x" />

class Dashboard extends Component {
  render() {
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
              <div className="col-md-3 col-sm-3 ">
                {/* hi */}
                <ButtonComponent label="Up-coming Consultation" />
              </div>
              <div className="col-md-3 col-sm-3 ">
                {/* hi */}
                <ButtonComponent label="Up-coming Consultation" />
              </div>
              <div className="col-md-3 ">

                <ButtonComponent label="Up-coming Consultation" />
              </div>
            </div>
          </div>

          {/* <ButtonComponent label="Complete Consultation" />
          <ButtonComponent label="Cancelled Consultation" /> */}


        </div>

        {/* <TableComponent items={DashboardTableItems.heading[0]} /> */}



      </div>
    );
  }
}

export default Dashboard;
