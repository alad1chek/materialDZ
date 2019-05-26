import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import { InfoCard } from "../components/InfoCards/InfoCard.jsx";

class Dashboard extends Component {

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={3} sm={6}>
              <InfoCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Проёбано"
                statsValue="дохуя"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated now"
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
