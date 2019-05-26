import React from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import Card from '../components/Card/Card.jsx';
import { materials_data } from '../models/Materials';


const Materials = (props) => {

    const materials = props.materials;
    const table_head = materials_data.map((item, key) => (
      <th key={key}>{item}</th>
    ));
    const table_body = materials ? (
      Object.values(materials).map((item, key) => {
        return (
          <tr key={key}>
            {Object.values(item).map((item, key) => {
              return <td key={key}>{item}</td>;
            })}
          </tr>
        );
      })
    ) : (
      <tr>
        <td>nothing yet</td>
      </tr>
    );

    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Total"
                category="Materials usage"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table striped hover>
                    <thead>
                      <tr>{table_head}</tr>
                    </thead>
                    <tbody>{table_body}</tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
};

export default Materials;
