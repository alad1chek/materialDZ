import React from "react";
import {
    Grid,
    Row,
    Col,
    Button
} from "react-bootstrap";

import Card from "../components/Card/Card.jsx";
import FormInput from "../components/Form/FormInput.jsx";


const CurrentMaterial = (props) => {
    const material = props.material;
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
                                                    defaultValue: material.name
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
                                                },
                                                {
                                                    label: "Price for an item",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "There would be price",
                                                    defaultValue: material.price
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
                </Grid>
            </div>
        );
    };

export default CurrentMaterial;
