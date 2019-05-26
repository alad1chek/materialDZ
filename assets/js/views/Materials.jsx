import React from 'react';
import { Grid, Row, Col, Table, Modal, Button } from 'react-bootstrap';
import Card from '../components/Card/Card.jsx';
import ControlButton from '../components/ControlButtons/ControlButton';
import FormInput from "../components/Form/FormInput.jsx";

import { materials_data } from '../models/Materials';

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
          <td key={Math.random()}>{item.categoryId}</td>
          <td key={Math.random()}>{item.price}</td>
          <td>
            <ControlButton
              bsStyle="info"
              buttonClass="fa fa-edit"
              purpose="Edit material"
              link={'/base/edit/' + item.id}
            />
          </td>
          <td>
            <ControlButton
              bsStyle="info"
              buttonClass="fa fa-money"
              purpose="Spend material"
              handleClick={() => props.handleShow(item.id)}
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
              category="Materials"
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
        <Row>
          <Col md={12}>
            <Modal show={props.showModal} onHide={props.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Spend material</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Grid fluid>
                      <Row>
                          <Col md={12}>
                              <Card
                                  title=""
                                  content={
                                      <form>
                                          <FormInput
                                              ncols={["col-md-6", "col-md-6"]}
                                              properties={[
                                                  {
                                                      label: "Reason",
                                                      type: "text",
                                                      bsClass: "form-control",
                                                      placeholder: "Enter reason",
                                                      onChange: props.handleReasonChange
                                                  },
                                                  {
                                                      label: "Amount",
                                                      type: "text",
                                                      bsClass: "form-control",
                                                      placeholder: "Enter amount of items",
                                                      onChange: props.handleCountChange
                                                  },
                                              ]}
                                          />

                                          <div className="clearfix" />
                                      </form>
                                  }
                              />
                          </Col>

                      </Row>
                  </Grid>
              </Modal.Body>
              <Modal.Footer>
                  <Button onClick={props.handleSpend}>Spend</Button>
                <Button onClick={props.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
          </Col>
        </Row>
      </Grid>
    </div>
  );
};

export default Materials;
