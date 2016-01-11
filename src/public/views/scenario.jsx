'use strict';

import Layout from './layout.jsx';
import React from 'react';
import { Grid, Row, Col, Input, Button, Panel, Jumbotron } from 'react-bootstrap';
import serialize from 'form-serialize';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CounterActions from '../../actions/counter';

class Sceneario extends React.Component {

    constructor() {
        super();
        this.state = { serialization: "" }
        this._next = this._next.bind(this);
        this._previous = this._previous.bind(this);
        this._save = this._save.bind(this);
    }


    _next(event) {
        event.preventDefault();
        this._save();
        this.props.nextStep();
    }

    _previous(event) {
        event.preventDefault();
        this._save();
        this.props.prevStep();
    }


    _save(event){
        this.props.saveValues(this.props.fieldName,this.refs.myTextInput.getValue())
    }

    render() {
        const { step,fieldName, getValues, increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
        if (step == 1) {
            var nav = (
                <Row className="show-grid">
                    <Col xs={1} md={3}></Col>
                    <Col xs={10} md={6}>
                        <Button onClick={this._next} bsStyle="primary" bsSize="large" block>Next</Button>
                    </Col>
                    <Col xs={1} md={3}></Col>
                </Row>
            )
        }else{
            var nav = (
                <Row className="show-grid">
                    <Col xs={1} md={3}></Col>
                    <Col xs={5} md={3}>
                        <Button onClick={this._previous} bsStyle="primary" bsSize="large" block>Previous</Button>
                    </Col>
                    <Col xs={5} md={3}>
                        <Button onClick={this._next} bsStyle="primary" bsSize="large" block>Next</Button>
                    </Col>
                    <Col xs={1} md={3}></Col>
                </Row>
            )
        }

        //main render
        return (
            <Grid>
                <Jumbotron bsStyle="info">
                    <p>Simple Wizard Form - Clicked: {counter} times <Button onClick={increment}>+</Button></p>

                </Jumbotron>
                <Panel header='Data Collection' bsStyle="info">
                    <Row className="show-grid">
                        <Col xs={1} md={3}></Col>
                        <Col xs={10} md={6}>
                            <Input ref="myTextInput" onChange={this._save} type="text" id={this.props.fieldName} name={this.props.fieldName} placeholder={this.props.fieldName} value={getValues(fieldName)}/>
                        </Col>
                        <Col xs={1} md={3}></Col>
                    </Row>
                    {nav}
                </Panel>
            </Grid>

        );
    }
}
function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sceneario);
