'use strict';

import React from 'react'
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap';
import {convert} from '../../utils/handler';

export default class HelloWorld extends React.Component {
    constructor() {
        super();        
    }

    componentDidMount(){        
    }

    render() {
        var fontSize  = 16;

        // a test for client side objects
        if (typeof window !== 'undefined') {
            fontSize = window.innerHeight/30;
        }

        var styles= {
            "fontSize":fontSize
        }

        return (
            <Grid>                
                <Row>
                    <Col xs={5} md={4}></Col>
                    <Col xs={2} md={4}>
                        <div style={styles}>This is just to test the availability of Window Object</div>
                        <pre>
                            {JSON.stringify(convert({first_name:this.props.firstName, "last_name":this.props.lastName}))}
                        </pre>
                    </Col>
                    <Col xs={5} md={4}></Col>
                </Row>
                <Row>
                    <Col xs={5} md={5}></Col>
                    <Col xs={2} md={2}>
                        Hello...{this.props.firstName} , {this.props.lastName}!
                    </Col>
                    <Col xs={5} md={5}></Col>
                </Row>
            </Grid>
        );
    }
}
 