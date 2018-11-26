import React, { Component } from 'react';
//import Input from './Input.js';
import { Container, Row, Col, Form, FormGroup, Label, Input, FormFeedback, Button } from 'reactstrap';
import '../css/Form.css';

let validationFunctions = {};

class UserForm extends Component {

    constructor(props) {
        super(props)

        let values = {};
        let errors = {};

        props.inputs.forEach(input => {
            values[input.name] = '';
            errors[input.name] = '';
        });

        this.state = {
            values,
            errors
        }

        this.renderInput = this.renderInput.bind(this);
    }

    render() {

        let renderedInputs = [];
        this.props.inputs.forEach(input => {
            //renderedInputs.push(<Input key={input.name} label={input.label} error={this.state.errors[input.name]} onChange={this.onInputChange.bind(this, input.name)}/>)
            renderedInputs.push(this.renderInput(input));
        });

        return (
            <Container>
                <Row>
                    <Col xs="4" className="testForm">
                        <div className="formTitle">{this.props.title}</div>
                        <Form className="formInputs">
                            {renderedInputs}
                            <Button onClick={this.onSubmit.bind(this)}>Submit</Button>
                        </Form>                        
                    </Col>
                </Row>
            </Container>
            
        
        );
    }

    renderInput (input) {

        let inputProps = {
            onChange: this.onInputChange.bind(this, input.name)
        }

        if (this.state.errors[input.name] != '') {
            inputProps.invalid = true;
        }

        return (
            <FormGroup key={input.label}>
                <Label>{input.label}</Label>
                <Input {...inputProps}/>
                <FormFeedback>{this.state.errors[input.name]}</FormFeedback>
            </FormGroup>)
    }

    onInputChange(name, e) {
        let values = this.state.values;
        values[name] = e.currentTarget.value;

        this.setState({
            values
        });
    }

    onSubmit() {
        let errors = {};
        let allValid = true;

        this.props.inputs.forEach(input => {

            let name = input.name;
            let validationFunc = validationFunctions[input.type];
            let error = validationFunc(this.state.values[name], input.label);

            errors[name] = error;
            if (error != '') {
                allValid = false;
            }

        });

        this.setState({
            errors
        });

        if (allValid) {
            let xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                   
                }
            };
            xhttp.open("POST", 'http://localhost:3001/addresses', true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send(JSON.stringify(this.state.values));
        }
    }
}

validationFunctions['text'] = (value, label) => {
    if (value == '') {
        return `${label} cannot be empty`
    }
    return '';
}

validationFunctions['email'] = value => {
    if (value == '') {
        return 'Email Address cannot be empty'
    }
    if (!/\S+@\S+/.test(value)) {
        return 'Not a valid email address'
    }
    return '';
}

validationFunctions['phone'] = value => {
    if (value == '') {
        return 'Phone Number cannot be empty'
    }
    if (/[^0-9]+$/.test(value) || value.length != 10) {
        return 'Not a valid phone number'
    }
    return '';
}

export default UserForm;