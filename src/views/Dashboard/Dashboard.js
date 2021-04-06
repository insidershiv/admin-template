import React, { Component } from 'react';
import { Card } from 'reactstrap';
import CardBody from 'reactstrap/lib/CardBody';
import CardComponent from '../../components/cardComponent';
import CardListItems from './__card'

class Dashboard extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="container-fluid" >
          <div className="row">
            <h4>Dashboard</h4>
          </div>
          <div className="row">
            {
              CardListItems.map((item) => {
                return (

                  <div className="col-md-3" key={item.id}>

                    <CardComponent count={item.count} title={item.title} img={item.img} />
                  </div>

                )
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
