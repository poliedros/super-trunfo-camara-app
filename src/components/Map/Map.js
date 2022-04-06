import React, { useState, Component } from 'react';

import { statesDictionary } from '../../data/statesDictionary';

import { geoMercator, geoEqualEarth, geoPath } from 'd3-geo';
import Badge from 'react-bootstrap/Badge';
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import Collapse from 'react-bootstrap/Collapse';

import $ from 'jquery';

const projection = geoMercator()
.scale(400)
.center([-50,-15])
.translate([800 / 2, 500 / 2])

export default class Map extends Component {
  constructor(props) {
    
    super();
    this.state = {
      geographies: props ? props.geographies : null, //party1
      state1: props ? props.state1 : null,
      open: true
    };
    console.log("this.props");
    console.log(props);
    this.onValueChange = this.onValueChange.bind(this);
    this.setOpen = this.setOpen.bind(this);
  }

  onValueChange(event) {
    if (this.state.state1.includes(event)) {
      let state1Copy = [...this.state.state1];
      let index = state1Copy.indexOf(event);
      state1Copy.splice(index, 1);

      /* alert(state1Copy); */
      this.setState({
        state1: state1Copy
      }, () => { this.props.onClick(this.state.state1) });
      /* alert(event); */
    } else {
      let state1Copy = [...this.state.state1];
      state1Copy.push(event);
      this.setState({
        state1: state1Copy
      }, () => { this.props.onClick(this.state.state1) });
      /* alert("nao passou!"); */
    }
  }

  onValueChangeAll(event){
    let state1Copy = [];
    if(event != null)
      this.state.geographies.map((d,i) => (
        state1Copy.push(event[i].name)
      ))
    /* alert("entrei aqui"); */

    this.setState({
      state1: state1Copy.sort()
    }, () => { this.props.onClick(this.state.state1) });
  }

  onValueChangeSpecific(event){
    let state1Copy = [];
    event.map(e => (
      state1Copy.push(e)
    ))
    /* alert("entrei aqui"); */

    this.setState({
      state1: state1Copy.sort()
    }, () => { this.props.onClick(this.state.state1) });
  }

  setOpen(event){
    this.setState({
      open: event
    })
  }

  render(){
    return (
      <>
      <Collapse in={this.state.open}>
        <svg width={ 350 } height={ 350 } viewBox="200 100 350 300" style={{ marginTop: "0px" }}>
          <g className="codarea">
            { console.log("this.state.geographies") }
            { console.log(this.state.geographies) }
            {
              this.state.geographies ? this.state.geographies.map((d,i) => (
                <a className="mylink">
                  <path
                    key={ `path-${ i }` }
                    d={ geoPath().projection(projection)(d) ?? undefined }
                    className={ `state-${ i }` }
                    fill={ `rgba(38,50,56,${ 1 / this.state.geographies.length * 10})` }
                    stroke="#FFFFFF"
                    strokeWidth={ 0.5 }
                    onClick={ (e) => { /* this.state.state1.push(statesDictionary[i].name); */ e.currentTarget.attributes[2].value == "black" ? e.currentTarget.attributes[2].value = "rgba(38,50,56,0.37037037037037035)" : e.currentTarget.attributes[2].value = "black"; /* .classList.toggle("target"); */ /* $(e.currentTarget).addClass("target"); */ this.onValueChange(statesDictionary[i].name) } }
                    tabIndex={i}
                  />
                </a>
              )) : null
            }            
          </g>
        </svg>
        </Collapse>
        <div style={{ display: "flex", margin: "2rem", flexDirection: "column" }}>
          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-secondary" onClick={ e => { [0, 1, 2, 3, 4, 5, 6].map(i => $(`.state-${ i }`)[0].attributes[2].value = "black"); [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map(i => $(`.state-${ i }`)[0].attributes[2].value = "rgba(38,50,56,0.37037037037037035)"); /* this.state.geographies.filter((f, i) => { console.log(f) }).map((s) => { $(.state)}); */ this.onValueChangeSpecific(['AC', 'AM', 'RR', 'RO', 'PA', 'AP', 'TO']) }}>N</Button>
            <Button variant="outline-secondary" onClick={ e => { [7, 8, 9, 10, 11, 12, 13, 14, 15].map(i => $(`.state-${ i }`)[0].attributes[2].value = "black"); [0, 1, 2, 3, 4, 5, 6, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map(i => $(`.state-${ i }`)[0].attributes[2].value = "rgba(38,50,56,0.37037037037037035)"); /* this.setOpen(false); */ this.onValueChangeSpecific(['MA', 'PI', 'CE', 'RN', 'PB', 'PE', 'SE', 'AL', 'BA']) }}>NE</Button>
            <Button variant="outline-secondary" onClick={ e => { [23, 24, 25, 26].map(i => $(`.state-${ i }`)[0].attributes[2].value = "black"); [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22].map(i => $(`.state-${ i }`)[0].attributes[2].value = "rgba(38,50,56,0.37037037037037035)"); /* this.setOpen(false); */ this.onValueChangeSpecific(['MT', 'MS', 'GO', 'DF']) }}>CO</Button>
            <Button variant="outline-secondary" onClick={ e => { [16, 17, 18, 19].map(i => $(`.state-${ i }`)[0].attributes[2].value = "black"); [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23, 24, 25, 26].map(i => $(`.state-${ i }`)[0].attributes[2].value = "rgba(38,50,56,0.37037037037037035)"); /* this.setOpen(false); */ this.onValueChangeSpecific(['MG', 'SP', 'RJ', 'ES']) }}>SE</Button>
            <Button variant="outline-secondary" onClick={ e => { [20, 21, 22].map(i => $(`.state-${ i }`)[0].attributes[2].value = "black"); [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 23, 24, 25, 26].map(i => $(`.state-${ i }`)[0].attributes[2].value = "rgba(38,50,56,0.37037037037037035)"); /* this.setOpen(false); */ this.onValueChangeSpecific(['PR', 'SC', 'RS']) }}>S</Button>
          </ButtonGroup><br/>
          <h6>Estados {" "}
          <Badge pill bg="dark" style={{ wordWrap: "break-word", whiteSpace: "-moz-pre-wrap", whiteSpace: "pre-wrap", padding: ".8rem" }}>
            { this.state.state1.join(" · ") }
          </Badge>
          </h6>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button value="" variant="secondary" size="sm" onClick={ e => { [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map(i => $(`.state-${ i }`)[0].attributes[2].value = "black"); /* this.setOpen(false); */ this.onValueChangeAll(statesDictionary) }}>Inserir Todos</Button>&nbsp;
            <Button value="" variant="secondary" size="sm" onClick={ e => { [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26].map(i => $(`.state-${ i }`)[0].attributes[2].value = "rgba(38,50,56,0.37037037037037035)"); /* this.setOpen(true); */ this.onValueChangeAll(null) }}>Apagar Todos</Button>
          </div>
        </div>
        {/* <p>Estados: { this.state.state1 + ", " }</p> */}
      </>
    )
  }
}