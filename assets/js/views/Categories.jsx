import React from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import { InfoCard } from '../components/InfoCards/InfoCard.jsx';

const Materials = props => {
  const categories = props.categories;

  const cards = categories ? Object.values(categories).map((item) => {


              return (
                  <Col lg={3} sm={6} key={item.id}>
                      <InfoCard
                          key={item.id}
                          bigIcon={<i className="pe-7s-server text-warning"/>}
                          statsText="Категория"
                          statsValue={item.name}
                      />
                  </Col>
              );
          }): <div>Loading...</div>;



  return (
    <div className="content">
      <Grid fluid>
        <Row>
            {cards}
        </Row>
      </Grid>
    </div>
  );
};

export default Materials;
