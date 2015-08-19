'use strict';

import Layout from './layout.jsx';
import React from 'react';
import { Grid, Row, Col, Input, Button, Panel, Jumbotron } from 'react-bootstrap';
import serialize from 'form-serialize';

export default class Sceneario extends React.Component {

    constructor() {
        super();        
        this.state = { serialization: "" }
        this._onSubmit = this. _onSubmit.bind(this);
        this._save = this._save.bind(this);
    }


    _onSubmit(event) {         
        event.preventDefault();        
        this._save();
        this.props.nextStep();
    }

    _save(event){
        this.props.saveValues(this.props.fieldName,this.refs.myTextInput.getValue()) 
    }

    render() {
        var serialization = JSON.stringify(this.state.serialization, null, 2);
        return (
            <form onSubmit={ false}>
                <Grid>
                    <Jumbotron bsStyle="info">                    
                        <p>Simple Wizard Form</p>
                    </Jumbotron>
                    <Panel header='Data Collection' bsStyle="info"> 
                        <Row className="show-grid">
                            <Col xs={1} md={3}></Col>
                            <Col xs={10} md={6}>
                                <Input ref="myTextInput" onChange={this._save} type="text" id={this.props.fieldName} name={this.props.fieldName} placeholder={this.props.fieldName} value={this.props[this.props.fieldName]} />
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
                    </Panel>            
                </Grid>
            </form>
        );
    }
}
