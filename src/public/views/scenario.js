'use strict';

import Layout from './layout.js';
import React from 'react';
import { Grid, Row, Col, Input, Button } from 'react-bootstrap';
import serialize from 'form-serialize';

export default class Sceneario extends React.Component {

    constructor() {
        super();        
        this.state = { serialization: "" }
        this. _onSubmit = this. _onSubmit.bind(this);
    }


    _onSubmit(event) {         
        event.preventDefault();
        var form = this.refs.myForm.getDOMNode();             
        var data = serialize(form, { hash: true });  
        this.setState({serialization: data}, () => {
            console.log(this.state.serialization);    
        });

        this.props.saveValues('scenario',data)
        this.props.nextStep();
        
        
    }



    render() {
        var serialization = JSON.stringify(this.state.serialization, null, 2);
        return (
            <form ref='myForm' onSubmit={ false}>
            <Grid>
                <Row className="show-grid">
                    <Col xs={1} md={3}></Col>
                    <Col xs={10} md={6}>
                        <h1>Describe Scenario</h1>
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
                        <Button onClick={this._onSubmit} bsStyle="primary" bsSize="large" block>Next</Button>
                    </Col>
                    <Col xs={1} md={3}></Col>
                </Row>                
            </Grid>
            </form>
        );
    }
}
