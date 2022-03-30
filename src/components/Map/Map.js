import React, { useState, Component } from 'react';

import { statesDictionary } from '../../data/statesDictionary';

import { geoMercator, geoEqualEarth, geoPath } from 'd3-geo';
import Badge from 'react-bootstrap/Badge';
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const projection = geoMercator()
.scale(400)
.center([-50,-15])
.translate([800 / 2, 500 / 2])

export default class Map extends Component {
  constructor(props) {
    
    super();
    this.state = {
      geographies: props ? props.geographies : null, //party1
      state1: props ? props.state1 : null
    };
    console.log("this.props");
    console.log(props);
    this.onValueChange = this.onValueChange.bind(this);
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

  render(){
    return (
      <>
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
                    className="country"
                    fill={ `rgba(38,50,56,${ 1 / this.state.geographies.length * 10})` }
                    stroke="#FFFFFF"
                    strokeWidth={ 0.5 }
                    onClick={ (e) => { /* this.state.state1.push(statesDictionary[i].name); */ e.currentTarget.classList.toggle("target"); this.onValueChange(statesDictionary[i].name) } }
                    tabIndex={i}
                  />
                </a>
              )) : null
            }            
          </g>
        </svg>
        <div style={{ display: "flex", margin: "2rem", flexDirection: "column" }}>
          <ButtonGroup aria-label="Basic example">
            <Button variant="outline-secondary" onClick={ e => { this.onValueChangeSpecific(['AC', 'AM', 'RR', 'RO', 'PA', 'AP', 'TO']) }}>N</Button>
            <Button variant="outline-secondary" onClick={ e => { this.onValueChangeSpecific(['MA', 'PI', 'CE', 'RN', 'PB', 'PE', 'SE', 'AL', 'BA']) }}>NE</Button>
            <Button variant="outline-secondary" onClick={ e => { this.onValueChangeSpecific(['MT', 'MS', 'GO', 'DF']) }}>CO</Button>
            <Button variant="outline-secondary" onClick={ e => { this.onValueChangeSpecific(['MG', 'SP', 'RJ', 'ES']) }}>SE</Button>
            <Button variant="outline-secondary" onClick={ e => { this.onValueChangeSpecific(['PR', 'SC', 'RS']) }}>S</Button>
          </ButtonGroup><br/>
          <h6>Estados {" "}
          <Badge pill bg="dark" style={{ wordWrap: "break-word", whiteSpace: "-moz-pre-wrap", whiteSpace: "pre-wrap", padding: ".8rem" }}>
            { this.state.state1.join(" · ") }
          </Badge>
          </h6>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button value="" variant="secondary" size="sm" onClick={ e => { this.onValueChangeAll(statesDictionary) }}>Inserir Todos</Button>&nbsp;
            <Button value="" variant="secondary" size="sm" onClick={ e => { this.onValueChangeAll(null) }}>Apagar Todos</Button>
          </div>
        </div>
        {/* <p>Estados: { this.state.state1 + ", " }</p> */}
      </>
    )
  }
}