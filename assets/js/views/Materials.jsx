import React from 'react';
import { Grid, Row, Col, Table } from 'react-bootstrap';
import Card from '../components/Card/Card.jsx';
import { materials_data } from '../models/Materials';
import ControlButton from '../components/ControlButtons/ControlButton';
import {NavLink} from "react-router-dom";

const Materials = props => {
  const materials = props.materials;
  const table_head = materials_data.map((item, key) => (
    <th key={key}>{item}</th>
  ));
  const table_body = materials ? (
    Object.values(materials).map((item, key) => {
      return (
        <tr key={key}>
          <td key={Math.random()}>{item.id}</td>
          <td key={Math.random()}>{item.name}</td>
          <td key={Math.random()}>{item.count}</td>
          <td key={Math.random()}>
            {new Date(item.createAt * 1000).toDateString()}
          </td>
          <td key={Math.random()}>{item.category}</td>
          <td key={Math.random()}>{item.category_id}</td>
          <td key={Math.random()}>{item.price}</td>
          <td>
            <ControlButton
              bsStyle="info"
              buttonClass="fa fa-edit"
              purpose="Edit material"
              link={"/base/edit/" + item.id }
            />
          </td>
          <td>
            <ControlButton
              bsStyle="danger"
              buttonClass="fa fa-times"
              purpose="Delete material"
              handleClick={() => props.handleDelete(item.id)}
            />
          </td>
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
