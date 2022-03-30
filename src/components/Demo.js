import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';

import { partyLogoDictionary } from "../data/partyLogoDictionary";

import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from 'react-bootstrap/Badge';

var price;
var party1 = [];
var party;

export default class Demo extends Component {
    constructor(props) {
      super();
      this.state = {
        selectedOption: this.props ? this.props.party : [] //party1
      };
      this.onValueChange = this.onValueChange.bind(this);
      this.formSubmit = this.formSubmit.bind(this)
    }
  
    onValueChange(event) {
      //price = this.state.selectedOption;
      //party1.push(this.state.selectedOption);
      /* this.setState({
        //selectedOption: event.value
        selectedOption: [...this.state.selectedOption] //, event.value
      });
      
      console.log("PROPS");
      console.log(this.props);
      return this.state.selectedOption; */
      //event.preventDefault();

      if (this.state.selectedOption.includes(event)) {

        let selectedOptionCopy = [...this.state.selectedOption];
        let index = selectedOptionCopy.indexOf(event);
        selectedOptionCopy.splice(index, 1);
        /* alert(selectedOptionCopy); */
  
        this.setState({
          selectedOption: selectedOptionCopy
        }, () => { this.props.onClick(this.state.selectedOption) });
        
      } else {

        let selectedOptionCopy = [...this.state.selectedOption];
        selectedOptionCopy.push(event);
        /* alert("entrei aqui"); */

        this.setState({
          selectedOption: selectedOptionCopy
        }, () => { this.props.onClick(this.state.selectedOption) });

      }
    }

    onValueChangeAll(event){
      let selectedOptionCopy = [];
      event.map(e => selectedOptionCopy.push(e));
      /* alert("entrei aqui"); */

      this.setState({
        selectedOption: selectedOptionCopy
      }, () => { this.props.onClick(this.state.selectedOption) });
    }
  
    formSubmit(event) {
      //event.preventDefault();
    }
  
    render() {
      return (
        <div class="containerOuter">
          {/* { this.state.selectedOption.push(this.props.party) } */}
          <Row style={{ textAlign: "center", justifyContent: "space-evenly" }}>
            { Object.keys(partyLogoDictionary).sort().map((elements) => (
              (elements != "PATRI") ?
              <Col xs={6} md={4}>
                <Button value={ elements } size="sm" style={{ marginBottom: "3px", fontSize: ".7rem" }} onClick={ e => { /* this.state.selectedOption.push(e.currentTarget.value.toString()); */ this.onValueChange(e.currentTarget.value.toString()); /* console.log("value: " + party1 + " " + this.state.selectedOption + " " + party1.includes(e.currentTarget.value.toString())); */ /* this.props.onClick(this.state.selectedOption) */ } }>{ elements }</Button>
              </Col>
              : null  
            )) }
          </Row>
          <div class="container1">
            {/*<form onSubmit={this.formSubmit}>
              <input type="radio" class="hidden" id="input1" value="4" name="inputs" 
                checked={this.state.selectedOption === "4"}
                onChange={this.onValueChange} />
              <label class="entry" for="input1">
                <div class="circle"></div>
                <div class="entry-label">texto</div>
              </label>
              <input type="radio" class="hidden" id="input2" value="40" name="inputs" 
                checked={this.state.selectedOption === "40"}
                onChange={this.onValueChange} />
              <label class="entry" for="input2">
                <div class="circle"></div>
                <div class="entry-label">pequena</div>
              </label>
              <input type="radio" class="hidden" id="input3" value="50" name="inputs" 
                checked={this.state.selectedOption === "50"}
                onChange={this.onValueChange} />
              <label class="entry" for="input3">
                <div class="circle"></div>
                <div class="entry-label">larga</div>
              </label>
              <input type="radio" class="hidden" id="input4" value="75" name="inputs" 
                checked={this.state.selectedOption === "75"}
                onChange={this.onValueChange} />
              <label class="entry" for="input4">
                <div class="circle"></div>
                <div class="entry-label">meia-página</div>
              </label>
              <input type="radio" class="hidden" id="input5" value="95" name="inputs"
                checked={this.state.selectedOption === "95"}
                onChange={this.onValueChange} />
              <label class="entry" for="input5">
                <div class="circle"></div>
                <div class="entry-label">página inteira</div>
              </label>
              <div class="highlight"></div>
              <div class="overlay"></div>
            </form>*/}
            <div style={{ margin: "2rem" }}>
              
              <h6>Partidos {" "}
                <Badge pill bg="dark" style={{ wordWrap: "break-word", whiteSpace: "-moz-pre-wrap", whiteSpace: "pre-wrap", padding: ".8rem" }}>
                  { this.state.selectedOption.join(" · ") }
                </Badge>
              </h6> {/*{this.state.selectedOption}*/}
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Button value="" variant="secondary" size="sm" onClick={ e => { this.onValueChangeAll(Object.keys(partyLogoDictionary).sort()) }}>Inserir Todos</Button>&nbsp;
                <Button value="" variant="secondary" size="sm" onClick={ e => { this.onValueChangeAll([]) }}>Apagar Todos</Button>
              </div>
            </div>
            {/*<button className="btn btn-default" type="submit">
              Submit
            </button>*/}
          </div>
        </div>
      );
    }
}