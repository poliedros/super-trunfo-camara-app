import React, { useState, Component } from 'react';

import RangeSlider from 'react-bootstrap-range-slider';

export default class Range extends Component {
    constructor(props) {
        super();
        this.state = {
            value: props ? props.value : 0
        };
    }

    onValueChange(event) {
        this.setState({
            value: event
        }, () => this.props.onChange(this.state.value));
    }

  render(){
    return (
      <>
        <RangeSlider value={this.state.value} step={5} onChange={ e => { this.onValueChange(Number(e.target.value) != null || Number(e.target.value) != undefined ? Number(e.target.value) : 0) } } min={0} max={100} tooltipLabel={currentValue => `${currentValue}%`} tooltip="on" />
        {/* <p>Valor: { this.state.value }</p> */}
      </>
    )
  }
}