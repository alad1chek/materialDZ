import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Row } from "react-bootstrap";

const FormGroups = ({ label, ...props }) => {
    return (
        <FormGroup>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
};

export class FormInput extends Component {
    render() {
        const row = [];
        for (let i = 0; i < this.props.ncols.length; i++) {
            row.push(
                <div key={i} className={this.props.ncols[i]}>
                    <FormGroups {...this.props.properties[i]} />
                </div>
            );
        }
        return <Row>{row}</Row>;
    }
}

export default FormInput;
