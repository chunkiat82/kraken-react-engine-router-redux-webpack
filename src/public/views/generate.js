import React from 'react'
import Scenario from './scenario'
import Cops from './cops'
import Crds from './crds'
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap';

export default class Wizard extends React.Component {
    constructor() {
        super();        
        this.state = {progress:10}
       
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState(prev => {
                var temp = ((prev.progress + 10) %100);
                return {
                    progress:temp
                }
            })
        },1000);
        this.props.generate();
    }

    render() {
        return (
            <Grid>
                <Row>
                    <Col xs={12} md={12}>
                        <ProgressBar striped bsStyle="success" now={this.state.progress} />
                    </Col>
                </Row>
            </Grid>
        );
    }
}
 