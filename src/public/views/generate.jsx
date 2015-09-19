import React from 'react'
import Scenario from './scenario.jsx'
import Cops from './cops.jsx'
import Crds from './crds.jsx'
import { Grid, Row, Col, ProgressBar } from 'react-bootstrap';

export default class Wizard extends React.Component {
    constructor() {
        super();        
        this.state = {progress:10 , downloaded:false}
       
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState(prev => {
                var temp = ((prev.progress + 10) %100);                
                console.log(prev.progress + " " +prev.downloaded);
                if (prev.progress == 40 && !prev.downloaded) {            
                    this.props.generate();
                }
                return {
                    progress:temp,
                    downloaded:(prev.downloaded || temp === 50) 
                }
            })
        },1000);

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
 