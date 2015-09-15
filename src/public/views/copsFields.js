'use strict';

import Layout from './layout.js';
import React from 'react';
import { Grid, Row, Col, Input, Button, Panel} from 'react-bootstrap';
import serialize from 'form-serialize';

export default class CopsFields extends React.Component {

    constructor() {
        super();               
    }

    render() {
        return (
            <Row className="show-grid">                
                <Col xs={12} md={12}>
                    <Panel header="Field">
                         <Row className="show-grid">                            
                            <Col xs={12} md={12}>
                                <Input type="select" onChange={this.props._onChange} label="Field Name" placeholder="select" name={this.props.fieldKey + '[fieldName]'}>
                                <option value="PERSON_FULL_NAME">PERSON_FULL_NAME</option>
                                <option value="DATE_OF_BIRTH">DATE_OF_BIRTH</option>
                                <option value="CPF">CPF</option>
                                <option value="HOME_ADDRESS">HOME_ADDRESS</option>
                                <option value="HOME_PHONE_NUMBER">HOME_PHONE_NUMBER</option>
                                <option value="OCCUPATION">OCCUPATION</option>
                                </Input>
                            </Col>                            
                        </Row>                    
                        <Row className="show-grid">
                            <Col xs={12} md={12}>
                                <Input type="select" onChange={this.props._onChange} label="Input type" placeholder="select" name={this.props.fieldKey + '[inputType]'}>
                                <option value="UPLOADED_DOCUMENT">UPLOADED_DOCUMENT</option>
                                <option value="INPUT_TEXT">INPUT_TEXT</option>
                                </Input>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={12} md={12}>
                                <Input type="select" onChange={this.props._onChange} label="constriant" placeholder="select" name={this.props.fieldKey + '[constraint]'}>
                                <option value="ALL_OF">ALL_OF</option>
                                <option value="ONE_OF">ONE_OF</option>
                                </Input>
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col xs={12} md={12}>
                                <Input type="select" onChange={this.props._onChange} label="Access Mode" placeholder="select" name={this.props.fieldKey + '[accessMode]'}>
                                <option value="READ_ONLY">READ_ONLY</option>
                                <option value="READ_WRITE">READ_WRITE</option>
                                </Input>
                            </Col>
                        </Row>
                    </Panel>
                </Col>                
            </Row>
        );
    }
}
