import React from "react";
import {
    Grid,
    Row,
    Col,
    Button
} from "react-bootstrap";

import Card from "../components/Card/Card.jsx";
import FormInput from "../components/Form/FormInput.jsx";

class CurrentMaterial extends React.Component {
    render() {
        return (
            <div className="content">
                <Grid fluid>
                    <Row>
                        <Col md={8}>
                            <Card
                                title="Edit Material"
                                content={
                                    <form>
                                        <FormInput
                                            ncols={["col-md-5", "col-md-4"]}
                                            properties={[
                                                {
                                                    label: "Name",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "Company",
                                                    defaultValue: "Some material name",
                                                },
                                                {
                                                    label: "Category",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "There would be a category",
                                                    defaultValue: "pizda"
                                                },
                                            ]}
                                        />
                                        <FormInput
                                            ncols={["col-md-5", "col-md-4"]}
                                            properties={[
                                                {
                                                    label: "Count",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "There would be count",
                                                    defaultValue: "10"
                                                },
                                                {
                                                    label: "Price for an item",
                                                    type: "text",
                                                    bsClass: "form-control",
                                                    placeholder: "There would be price",
                                                    defaultValue: "10$"
                                                }
                                            ]}
                                        />

                                        <Col md={12}>
                                            <Button type="submit" style={{float: "right"}}>
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
    }
}

export default CurrentMaterial;
