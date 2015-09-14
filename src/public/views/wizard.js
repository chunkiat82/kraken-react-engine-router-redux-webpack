import React from 'react'
import Scenario from './scenario'
import Cops from './cops'

export default class Wizard extends React.Component {
    constructor() {
        super();        
        this.state = {step : 1}
        this.saveValues = this.saveValues.bind(this);
        this.nextStep = this.nextStep.bind(this);
    }

    saveValues(fields) {
        return function() {
            // Remember, `fieldValues` is set at the top of this file, we are simply appending
            // to and overriding keys in `fieldValues` with the `fields` with Object.assign
            // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
            //fieldValues = Object.assign({}, fieldValues, fields)
        }()
    }
 
    nextStep() {
        var self = this;
        console.log(JSON.stringify(self.state));
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
                return <Cops nextStep={this.nextStep} saveValues={this.saveValues} />
            case 3:
                return <Scenario nextStep={this.nextStep} saveValues={this.saveValues} />
        }
    }
}
 