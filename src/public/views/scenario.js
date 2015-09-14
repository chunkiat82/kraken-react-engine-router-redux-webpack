'use strict';

import Layout from './layout.js';
import React from 'react';
import { Grid, Row, Col, Input, Button } from 'react-bootstrap';

export default class Sceneario extends React.Component {
    render() { 
        return (
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
                        <Input type="text" name="scenarioName" placeholder='Scenario Name' />
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
                        <Button block type='submit' bsStyle="primary" bsSize="small">Next</Button>
                    </Col>
                    <Col xs={1} md={3}></Col>
                </Row>
            </Grid>
        );
    }
}
