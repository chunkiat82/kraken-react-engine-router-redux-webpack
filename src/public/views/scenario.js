'use strict';

import Layout from './layout.js';
import React from 'react';
import { Grid, Row, Col, Input, Button } from 'react-bootstrap';
import { BasicForm,InputField  } from 'react-serial-forms';
import serialize from 'form-serialize';

export default class Sceneario extends React.Component {

    constructor() {
        super();        
        this.state = { serialization: "ssss" }
        this. _onSubmit = this. _onSubmit.bind(this);
    }


    _onSubmit(event) {         
        var form = this.refs.myForm.getDOMNode();
        var $form = $(form);
        var data = $form.serialize();
        console.log(data);
        this.setState({
          serialization: data
        });
        //event.preventDefault();
    }

    render() {
        var serialization = JSON.stringify(this.state.serialization, null, 2);
        return (
            <form ref='myForm' onSubmit={ false}>
            <Grid>
                <Row className="show-grid">
                    <Col xs={1} md={3}></Col>
                    <Col xs={10} md={6}>
                        <h1>Please enter the Scenario name to start...</h1>                        
                    </Col>
                    <Col xs={1} md={3}></Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={1} md={3}></Col>
                    <Col xs={10} md={6}>
                        <Input type="text" id='scenarioName' name="scenarioName" placeholder='Scenario Name' />
                    </Col>
                    <Col xs={1} md={3}></Col>
                </Row>
                <Row className="show-grid">
                    <Col xs={1} md={3}></Col>
                    <Col xs={10} md={6}>
                        <Input type="textarea" name="scenarioDescription" placeholder='Scenario Description' />
                    </Col>
                    <Col xs={1} md={3}></Col>
                </Row>
                 <Row className="show-grid">
                    <Col xs={1} md={3}></Col>
                    <Col xs={10} md={6}>
                        <Button onClick={this._onSubmit} bsStyle="primary" bsSize="large" block>Submit</Button>
                    </Col>
                    <Col xs={1} md={3}></Col>
                </Row>
                
                <Row className="show-grid">   
                    <Col xs={1} md={3}></Col>
                    <Col xs={10} md={6}>
                        <pre>
                            {serialization}
                        </pre>
                    </Col>
                    <Col xs={1} md={3}></Col>
                </Row>
            </Grid>
            </form>
        );
    }
}
