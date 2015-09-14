import React from 'react'
import Scenario from './scenario'
import Cops from './cops'
import Crds from './crds'

export default class Wizard extends React.Component {
    constructor() {
        super();        
        this.state = {step : 1}
        this.saveValues = this.saveValues.bind(this);
        this.nextStep = this.nextStep.bind(this);        
    }

    saveValues(stepName,fields) {
        var temp = {};
        temp[stepName]=fields;
        this.setState(temp);
    }    
 
    nextStep() {
        var self = this;     
        this.setState({
            step : self.state.step + 1
        })
    }

    render() {
        console.log(JSON.stringify(this.state));        
        switch(this.state.step) {
            case 1:
                return <Scenario nextStep={this.nextStep} saveValues={this.saveValues} />            
            case 2:
                return <Crds nextStep={this.nextStep} saveValues={this.saveValues} />
            case 3:
                return <Cops nextStep={this.nextStep} saveValues={this.saveValues} />
        }
    }
}
 