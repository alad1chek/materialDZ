import React from "react";
import {
    Grid,
    Row,
    Col,
    Button,
    Table
} from "react-bootstrap";

import Card from "../components/Card/Card.jsx";
import FormInput from "../components/Form/FormInput.jsx";
import {spending_data} from "../models/Materials";


const CurrentMaterial = (props) => {
    const material = props.material;
    const spending = props.spending;
    const table_head = spending_data.map((item, key) => (
        <th key={key}>{item}</th>
    ));
    const table_body = spending ? Object.values(spending).map((item,key) => {
        return (
            <tr key={key}>
                <td key={item.id}>{item.id}</td>
                <td key={item.count}>{item.count}</td>
                <td key={item.reason}>{item.reason}</td>
                <td key={item.createAt}>{new Date(item.createAt * 1000).toLocaleString()}</td>
            </tr>
        )
    }) : <tr><td>Nothing yet</td></tr>
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={8}>
                            <Card
                                title="Edit Material"
                                content={
                                    material &&
                                    <form>
                                        <FormInput
                                            ncols={["col-md-6", "col-md-6"]}
                                            properties={[
                                                {
                                                    label: "Name",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Company",
                                                    defaultValue: material.name,
                                                    onChange: props.handleNameChange
                                                },
                                                {
                                                    label: "Category",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "There would be a category",
                                                    defaultValue: material.category
                                                },
                                            ]}
                                        />
                                        <FormInput
                                            ncols={["col-md-6", "col-md-6"]}
                                            properties={[
                                                {
                                                    label: "Count",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "There would be count",
                                                    defaultValue: material.count,
                                                    onChange: props.handleCountChange
                                                },
                                                {
                                                    label: "Price for an item",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "There would be price",
                                                    defaultValue: material.price,
                                                    onChange: props.handlePriceChange
                                                }
                                            ]}
                                        />

                                        <Col md={12}>
                                            <Button type="submit" style={{float: "right"}} onClick={props.handleUpdate}>
                                                Update material
                                            </Button>
                                        </Col>
                                        <div className="clearfix" />
                                    </form>
                                }
                            />
                        </Col>

                    </Row>
                    <Row>
                        <Col md={12}>
                            <Card
                                title="Spending Log"
                                category="Usage of materials"
                                ctTableFullWidth
                                ctTableResponsive
                                content={
                                    <Table striped hover>
                                        <thead>
                                        <tr>
                                            {table_head}
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {table_body}
                                        </tbody>
                                    </Table>
                                }
                            />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    };

export default CurrentMaterial;
