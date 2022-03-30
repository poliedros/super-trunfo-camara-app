import React from "react";
import { useState, useEffect, useContext } from "react";
import "./App.css";

import Demo from "./components/Demo";

import Map from "./components/Map/Map";
import Range from "./components/Range/Range";

import "bootstrap/dist/css/bootstrap.min.css";

import $ from 'jquery';

import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

import Table from "react-bootstrap/Table";

import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
//import RangeSlider from "react-bootstrap/RangeSlider";

import Offcanvas from "react-bootstrap/Offcanvas";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Tooltip from "react-bootstrap/Tooltip";

import Spinner from "react-bootstrap/Spinner";
import ProgressBar from "react-bootstrap/ProgressBar";

import Badge from "react-bootstrap/Badge";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

//import { ContextAwareToggle } from 'react-bootstrap/AccordionButton';
//import { useAccordionButton } from 'react-bootstrap/AccordionButton';
//const decoratedOnClick = useAccordionButton(eventKey: any, onClick: KeyboardEvent);

//import deputyExtraData from '../src/data/deputyExtraData.json';

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';

import * as d3 from 'd3';

import { geoMercator, geoEqualEarth, geoPath } from "d3-geo"
//import { feature } from "topojson-client"

import { Deputy, DeputyResponse } from "./interfaces/Deputy";
import DeputyComplete from "./interfaces/DeputyComplete";
import DeputyParty from "./interfaces/DeputyParty";
import DeputyProfession from "./interfaces/DeputyProfession";
import DeputyOccupation from "./interfaces/DeputyOccupation";
import { PoliticianRadar } from "./components/PoliticianRadar";

import axios from "axios";
import { Coordinate } from "./interfaces/Coordinate";
import { partyLogoDictionary } from "./data/partyLogoDictionary";
import { professionIconDictionary } from "./data/professionIconDictionary";
import { parliamentaryQuotaBudgetDictionary } from "./data/parliamentaryQuotaBudgetDictionary";
import { statesDictionary } from "./data/statesDictionary";
import { deputyExtraDataDictionary } from "./data/deputyExtraDataDictionary";
import { Legislature } from "./interfaces/Legislature";
import { Expense } from "./interfaces/Expense";
import { Speech } from "./interfaces/Speech";
import { Attendance } from "./interfaces/Attendance";
import { Proposition } from "./interfaces/Proposition";
import { getCoordinateData } from "./services/CoordinateService";
import TitleSuperTrunfo from "./components/TitleSuperTrunfo/TitleSuperTrunfo";

import Lottie from 'react-lottie';
import animationData from './lotties/candidate.json';

import ButtonGroup from 'react-bootstrap/ButtonGroup'

const cheerio = require("cheerio");

/*export function setLegislature(id: number) {
  const url =
    "https://totalcors.herokuapp.com/https://www.camara.leg.br/deputados/" +
    id +
    "/biografia";
}*/

interface Icon {
  urlSearch?: string,
  urlShare?: string,
  urlPrint?: string,
  urlQuestion?: string
}

interface Search {
  name: string,
  /*party: string,
  state: string,
  votingMin: number,
  votingMax: number,
  gender: boolea*/
}

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const projection = geoMercator()
.scale(400)
.center([-50,-15])
.translate([800 / 2, 500 / 2])

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [loaderShow, setLoaderShow] = useState(false);
  
  const [speechShow, setSpeechShow] = useState(false);
  const [expenseShow, setExpenseShow] = useState(false);

  const [deputiesData, setDeputiesData] = useState<Deputy[]>([]);
  const [deputiesDataFilter, setDeputiesDataFilter] = useState<Deputy[]>([]);
  const [deputyCompleteData, setDeputyCompleteData] =
    useState<DeputyComplete>();
  const [deputyPartyData, setDeputyPartyData] = useState<DeputyParty>();
  const [deputyProfessionData, setDeputyProfessionData] =
    useState<DeputyProfession>();
  const [deputyOccupationData, setDeputyOccupationData] =
    useState<DeputyOccupation>();

  const [urlPoliticianState, setUrlPolitician] = useState<string>();
  const [urlParty, setUrlParty] = useState<string>();
  const [idPolitician, setIdPolitician] = useState<number>();

  //const [legislatures, setLegislatures] = useState<Legislature>();
  const [expenses, setExpenses] = useState<Expense>();
  const [speechs, setSpeechs] = useState<Speech>();
  const [attendances, setAttendance] = useState<Attendance>();

  const [authorships, setAuthorships] = useState<Proposition>();
  const [reports, setReports] = useState<Proposition>();

  //const [loading, setLoading] = useState<number>();
  const [search, setSearch] = useState<Search>();
  const [inputName, setInputName] = useState<string>();
  const [icon, setIcon] = useState<Icon>();

  const [geographies, setGeographies] = useState([])

  const [show1, setShow1] = useState(false);
  const [state, setState] = useState<string>();

  const [ sttVotingMin, setSttVotingMin ] = React.useState(0);
  
  var polygons = [];

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v3/malhas/paises/BR?formato=application/vnd.geo+json&qualidade=maxima&intrarregiao=UF")
      .then(response => {
        //debugger
        if (response.status !== 200) {
          console.log(`There was a problem: ${response.status}`)
          return
        }
        
        response.json().then(worlddata => {

          for (var i=0; i < worlddata.features.length; ++i)
          {
              if(worlddata.features[i].geometry.type === "Polygon") {
                worlddata.features[i].geometry.coordinates[0] = worlddata.features[i].geometry.coordinates[0].reverse();
                  //console.log(topo.features[i].geometry.coordinates);
                  polygons.push(worlddata.features[i]);
              }
              else if(worlddata.features[i].geometry.type === "MultiPolygon")
              {
                  for(var j=0; j<worlddata.features[i].geometry.coordinates.length;++j)
                  {
                    worlddata.features[i].geometry.coordinates[j][0] = worlddata.features[i].geometry.coordinates[j][0].reverse();
                  }
                  //console.log(topo.features[i].geometry.coordinates)
                  polygons.push(worlddata.features[i]);
              }
          }

          //console.log("FEATURE")
          //console.log(worlddata)
          setGeographies(worlddata.features)
        })
        //debugger
      })

    const getData = async () => {
      const response = await axios.get<DeputyResponse>(
        "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome"
      );
      setDeputiesData(response.data.dados);
      setDeputiesDataFilter(response.data.dados);
    };

    const getIcon = async () => {
      const response1 = await axios.get('https://api.iconscout.com/v3/search?query=lens&product_type=item&asset=icon&price=free&per_page=1&page=61&sort=relevant', 
          {
            headers: {
              'accept': 'application/json',
              'Client-ID': '188982600146859'
          }
        }
      );
      const response2 = await axios.get('https://api.iconscout.com/v3/search?query=lens&product_type=item&asset=icon&price=free&per_page=1&page=61&sort=relevant', 
          {
            headers: {
              'accept': 'application/json',
              'Client-ID': '188982600146859'
          }
        }
      );
      const response3 = await axios.get('https://api.iconscout.com/v3/search?query=question&product_type=item&asset=icon&price=free&per_page=1&page=10&sort=relevant', 
          {
            headers: {
              'accept': 'application/json',
              'Client-ID': '188982600146859'
          }
        }
      );
      setIcon({urlSearch: response1.data.response.items.data[0].urls.original,
      urlShare: response2.data.response.items.data[0].urls.original, urlQuestion: response3.data.response.items.data[0].urls.original})
    }

    /*async function getIcon(icon:string) {

      const response = await axios.get('https://api.iconscout.com/v3/search?query=lens&product_type=item&asset=icon&price=free&per_page=1&page=61&sort=relevant', 
          {
            headers: {
              'accept': 'application/json',
              'Client-ID': '188982600146859'
          }
        }
      );
  
      console.log("RESPONSE")
      const final:string = response.data.response.items.data[0].urls.original //.then((message) => (message.data.response.items.data[0].urls.original))
      console.log(final)
      setIcon(final)
      //return final
    }*/
    

    getIcon();
    getData();
  }, []);

  /*const handleSubmit = (event) => {
    const form = event.currentTarget;
    setSearch({name: event})
  }*/

  var name: string;
  var party: string;
  var party1: string[];
  const [partyShow, setPartyShow] = useState<string[]>([]);
  party1 = [];
  var state1: string[];
  state1 = [];
  const [stateShow, setStateShow] = useState<string[]>([]);
  var stateGeo: string;
  var legislature: number;
  var attendanceMin: number = 0;
  var attendanceMax: number = 100;
  var speechMin: number = 0;
  var speechMax: number = 100;
  var votingMin: number = 0;
  var votingMax: number = 100;
  var expenseMin: number = 0;
  var expenseMax: number = 100;
  var gender: any;
  var order: string;
  //order = "voting";
  var ascendent: boolean;

  /*async function setValue(name: string) {
    setInputName(name)
  }*/

  async function setFilter(deputies: Deputy[]) {
    setDeputiesDataFilter(deputies)
  }

  const handleCountryClick = (countryIndex: number) => {
    return ;
  }

  function inArray(target: any, array: any)
  {

  /* Caching array.length doesn't increase the performance of the for loop on V8 (and probably on most of other major engines) */

    for(var i = 0; i < array.length; i++) 
    {
      if(array[i] === target)
      {
        return true;
      }
    }

    return false; 
  }

  function calcExpense(politician: Deputy) {
    const expense = (Math.round(
      ((
      ((deputyExtraDataDictionary[politician.id]
      ? deputyExtraDataDictionary[politician.id].expenses
      ? deputyExtraDataDictionary[politician.id].expenses?.cabinetPeriod
      ? (100 - ((((deputyExtraDataDictionary[politician.id].expenses?.cabinetExpense ?? 0) / (deputyExtraDataDictionary[politician.id].expenses?.cabinetPeriod ?? 0)) ?? 0) / 111675.59) * 100 ?? 0)
      : 0
      : 0
      : 0) +
      (deputyExtraDataDictionary[politician.id]
      ? deputyExtraDataDictionary[politician.id].expenses
      ? deputyExtraDataDictionary[politician.id].expenses?.parliamentaryQuotaPeriod
      ? (100 - ((((deputyExtraDataDictionary[politician.id].expenses?.parliamentaryQuotaExpense ?? 0) / (deputyExtraDataDictionary[politician.id].expenses?.parliamentaryQuotaPeriod ?? 0)) ?? 0) / (parliamentaryQuotaBudgetDictionary[politician.siglaUf].value)) * 100 ?? 0)
      : 0
      : 0
      : 0)) / 2
      ) ?? 0)
      *10)/10)
    if (expense > 0)
        return expense
    else
        return null
  }

  function calcAttendance(politician: Deputy) {
    const attendance = (Math.round(
      (
    (
      (deputyExtraDataDictionary[politician.id]
      ? ((deputyExtraDataDictionary[politician.id].presences?.commissionPresence ?? 0) +
      (deputyExtraDataDictionary[politician.id].presences?.commissionJustified ?? 0)) != 0 &&
      ((deputyExtraDataDictionary[politician.id].presences?.commissionPresence ?? 0) +
      (deputyExtraDataDictionary[politician.id].presences?.commissionJustified ?? 0) +
      (deputyExtraDataDictionary[politician.id].presences?.commissionMiss ?? 0)) != 0
        ? Math.round((
          ((deputyExtraDataDictionary[politician.id].presences?.commissionPresence ?? 0) +
          (deputyExtraDataDictionary[politician.id].presences?.commissionJustified ?? 0))/
          ((deputyExtraDataDictionary[politician.id].presences?.commissionPresence ?? 0) +
          (deputyExtraDataDictionary[politician.id].presences?.commissionJustified ?? 0) +
          (deputyExtraDataDictionary[politician.id].presences?.commissionMiss ?? 0))
        ) * 100)
        : 0
      : 0)
      +
      (deputyExtraDataDictionary[politician.id]
      ? ((deputyExtraDataDictionary[politician.id].presences?.plenaryPresence ?? 0) +
      (deputyExtraDataDictionary[politician.id].presences?.plenaryJustified ?? 0)) != 0 &&
      ((deputyExtraDataDictionary[politician.id].presences?.plenaryPresence ?? 0) +
      (deputyExtraDataDictionary[politician.id].presences?.plenaryJustified ?? 0) +
      (deputyExtraDataDictionary[politician.id].presences?.plenaryMiss ?? 0)) != 0
        ? Math.round((
          ((deputyExtraDataDictionary[politician.id].presences?.plenaryPresence ?? 0) +
          (deputyExtraDataDictionary[politician.id].presences?.plenaryJustified ?? 0))/
          ((deputyExtraDataDictionary[politician.id].presences?.plenaryPresence ?? 0) +
          (deputyExtraDataDictionary[politician.id].presences?.plenaryJustified ?? 0) +
          (deputyExtraDataDictionary[politician.id].presences?.plenaryMiss ?? 0))
        ) * 100)
        : 0
      : 0)
    )/2
    )
    *10)/10)
    return attendance
  }

  function OffCanvasExample({ ...props }) {
  
    const handleClose = () => setShow1(false);
    const handleShow = () => setShow1(true);

    const onAscendent = () => {
      ascendent = false;
    }

    /*constructor(
      state1: any
    ) => {
      super();
      this.state1 = {
        name: "React"
      };
      this.onValueChange = this.onValueChange.bind(this);
      this.formSubmit = this.formSubmit.bind(this);
    }
  
    onValueChange(event: any): any {
      stateValue = this.state1.selectedOption;
      this.setState({
        selectedOption: event.target.value
      });
    }
  
    formSubmit(event: any): any {
      event.preventDefault();
    }*/

    /*const [partyState, setPartyState] = useState<string[]>();
    setPartyState([]);

    const setValueDynamically = () => {
      if (reason === 'clickaway') {
        return;
      }
      setPartyState(party1)
    };*/

    return (
      <>
        <Offcanvas show={show1} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Pesquisar por Parlamentar</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <Container>
            {onAscendent}
          
          <Form id="searchForm"> {/*onSubmit={handleSubmit}*/}
            <Row className="middle">
              <Col xs={12} md={12}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="Nome do parlamentar"
                        onChange={ e => { name = e.target.value.toString() } }
                        value={name}
                      />
                      <label htmlFor="floatingInputCustom">Nome</label>
                    </Form.Floating>
                  </Form.Group>

                  {/*<Form.Group as={Col} controlId="formGridPassword">
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Partido"
                    >
                      <Form.Select id="party" aria-label="Floating label select example"
                        onChange={ e => { party = e.currentTarget.value.toString() } }
                        value={party}
                      >
                        <option value="null">TODOS</option>
                        { Object.keys(partyLogoDictionary).sort().map((elements: string) => (
                          (elements != "PATRI") ?
                            <option value={ elements }>{ elements }</option> : null                         
                        )) }
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>*/}
                  <Form.Group as={Col} controlId="formGridPassword">
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Legislaturas"
                    >
                      <Form.Select id="party" aria-label="Floating label select example"
                        onChange={ e => { legislature = parseInt(e.currentTarget.value) } }
                        value={legislature}
                      >
                        <option value="0">Todas</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>
                </Row>

                <Demo party={party1} onClick={ (value: any) => { /* alert(value); */ party1 = value; /* alert(party1) */ } } />
                {/* <Row style={{ textAlign: "center" }}>
                  { Object.keys(partyLogoDictionary).sort().map((elements: string) => (
                    (elements != "PATRI") ?
                    <Col xs={6} md={4}>
                      <Button value={ elements } size="sm" style={{ marginBottom: "3px", fontSize: ".7rem" }} onClick={ e => { party1.push(e.currentTarget.value.toString()); console.log("value12: " + party1 + " (" + party + ") " + party1.includes(e.currentTarget.value.toString())) } }>{ elements }</Button>
                    </Col>
                    : null  
                  )) }
                </Row> */}

                <Row className="middle">
                  <Col xs={12} md={12}>
                    
                    {/* <svg width={ 350 } height={ 350 } viewBox="200 100 350 300" style={{ marginTop: "0px" }}>
                      <g className="codarea">

                        {
                          geographies.map((d,i) => (
                            <a className="mylink">
                              <path
                                key={ `path-${ i }` }
                                d={ geoPath().projection(projection)(d) ?? undefined }
                                className="country"
                                fill={ `rgba(38,50,56,${ 1 / geographies.length * 10})` } //`rgba(38,50,56,${ 1 / geographies.length * i})`
                                stroke="#FFFFFF"
                                strokeWidth={ 0.5 }
                                onClick={ (e) => { state1.push(statesDictionary[i].name); e.currentTarget.classList.toggle("target") } } //stateGeo = statesDictionary[i].name
                                tabIndex={i}
                              />
                            </a>
                          ))
                        }

                        {/*
                          geographies.forEach((d, i) => {
                            a.setAttribute('tabindex', i);
                          })
                        /}
                        
                      </g>
                      {/*<g className="markers">
                        {
                        cities.map((city, i) => (
                        <circle
                          cx={ projection(city.coordinates)[0] }
                          cy={ projection(city.coordinates)[1] }
                          r={ city.population / 3000000 }
                          fill="#E91E63"
                          stroke="#FFFFFF"
                          className="marker"
                          onClick={ () => handleMarkerClick(i) }
                        />
                        ))
                        }
                      </g>/}
                    </svg> */}
                    <Map geographies={geographies} state1={state1} onClick={(value: any) => {state1 = value; /* alert(state1) */} } />
                  </Col>
                </Row>
                
                {/*<Row> className="mb-3"*/}
                <Form.Label><h6>Gênero</h6></Form.Label><br/>
                  <Form style={{ textAlign: "center" }}>
                    {/*<Col sm={10}>*/}
                      {/*<Form.Check
                        type="radio"
                        label="Todos"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />*/}
                        <Form.Check
                          inline
                          type="radio"
                          label="Todos"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios1"
                          onChange={ e => { (e.target.value == "on") ? gender = null : gender = null; /* alert(gender) */ } }
                          checked
                        />
                        <Form.Check
                          inline
                          type="radio"
                          label="Masculino"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios2"
                          onChange={ e => { (e.target.value == "on") ? gender = false : gender = null; /*console.log(gender)*/ } }
                          //value={gender}
                        />
                        <Form.Check
                          type="radio"
                          label="Feminino"
                          name="formHorizontalRadios"
                          id="formHorizontalRadios3"
                          inline
                          onChange={ e => { (e.target.value == "on") ? gender = true : gender = null; /*console.log(gender)*/ } }
                        />
                    {/*</Col>*/}
                  </Form>
                  <br/>
                  <Form.Group
                    as={Col}
                    controlId="formGridPassword"
                    className=""
                  >
                  <Form.Label><h6>Discursos</h6></Form.Label><br/>
                  <Row style={{ display: "flex" }}>
                    <Col xs={12} md={6}>
                      
                      min {/* <span id="minDis"></span><Form.Range min="0" max="100" step="5" defaultValue={speechMin} onChange={ e => { speechMin = Number(e.target.value) != null || Number(e.target.value) != undefined ? Number(e.target.value) : 0;
                      //sendPositionValue('minDis', e.target.value)
                       /*!= null ? votingMin = 4Number(e.target.value) : null/ } } /> */}
                       <Range value={speechMin} onChange={ (value: any) => { speechMin = value; console.log(speechMin) } } />
                       
                    </Col>
                    <Col xs={12} md={6}>
                      max{/* <Form.Range min="0" max="100" step="5" defaultValue={speechMax} onChange={ e => { speechMax = Number(e.target.value) != null || Number(e.target.value) != undefined ? Number(e.target.value) : 100 /*!= null ? votingMin = 4Number(e.target.value) : null/ } } /> */}
                      <Range value={speechMax} onChange={ (value: any) => { speechMax = value; console.log(speechMax) } } />
                    </Col>
                  </Row>
                    {/*<Form.Label>Número de Legislaturas</Form.Label><br/>
                    <Form.Range min="0" max="5" step="1" onChange={ e => { legislature = Number(e.target.value) != null || Number(e.target.value) != undefined ? Number(e.target.value) : 1 /*!= null ? votingMin = 4Number(e.target.value) : null* } } />*/}
                  </Form.Group>
                  <br/>
                  <Form.Group
                    as={Col}
                    controlId="formGridPassword"
                    className=""
                  >
                  <Form.Label><h6>Presença</h6></Form.Label><br/>
                  <Row style={{ display: "flex" }}>
                    <Col xs={12} md={6}>
                      min{/* <Form.Range min="0" max="100" step="5" defaultValue={attendanceMin} onChange={ e => { attendanceMin = Number(e.target.value) != null || Number(e.target.value) != undefined ? Number(e.target.value) : 0 /*!= null ? votingMin = 4Number(e.target.value) : null/ } } /> */}
                      <Range value={attendanceMin} onChange={ (value: any) => { attendanceMin = value; console.log(attendanceMin) } } />
                    </Col>
                    <Col xs={12} md={6}>
                      max{/* <Form.Range min="0" max="100" step="5" defaultValue={attendanceMax} onChange={ e => { attendanceMax = Number(e.target.value) != null || Number(e.target.value) != undefined ? Number(e.target.value) : 100 /*!= null ? votingMin = 4Number(e.target.value) : null/ } } /> */}
                      <Range value={attendanceMax} onChange={ (value: any) => { attendanceMax = value; console.log(attendanceMax) } } />
                    </Col>
                  </Row>
                    {/*<Form.Label>Número de Legislaturas</Form.Label><br/>
                    <Form.Range min="0" max="5" step="1" onChange={ e => { legislature = Number(e.target.value) != null || Number(e.target.value) != undefined ? Number(e.target.value) : 1 /*!= null ? votingMin = 4Number(e.target.value) : null* } } />*/}
                  </Form.Group>
                  <br/>
                  <Form.Group
                    as={Col}
                    controlId="formGridPassword"
                    className=""
                  >
                  <Form.Label><h6>Governismo</h6></Form.Label><br/>
                  <Row style={{ display: "flex" }}>
                    <Col xs={12} md={6}>
                      min{/* <Form.Range min="0" max="100" step="5" defaultValue={votingMin} onChange={ e => { votingMin = Number(e.target.value) != null || Number(e.target.value) != undefined ? Number(e.target.value) : 0 /*!= null ? votingMin = 4Number(e.target.value) : null/ } } /> */}
                      {/* <RangeSlider value={votingMin} step={5} onChange={ e => { votingMin = Number(e.target.value) != null || Number(e.target.value) != undefined ? Number(e.target.value) : 0 } } min={0} max={100} tooltipLabel={currentValue => `${currentValue}%`} tooltip="on" /> */}
                      <Range value={votingMin} onChange={ (value: any) => { votingMin = value; console.log(votingMin) } } />
                      {/* <RangeSlider value={sttVotingMin} step={5} onChange={ e => { setSttVotingMin(Number(e.target.value) != null || Number(e.target.value) != undefined ? Number(e.target.value) : 0) } } min={0} max={100} tooltipLabel={currentValue => `${currentValue}%`} tooltip="on" /> */}
                    </Col>
                    <Col xs={12} md={6}>
                      max{/* <Form.Range min="0" max="100" step="5" defaultValue={votingMax} onChange={ e => { votingMax = Number(e.target.value) != null || Number(e.target.value) != undefined ? Number(e.target.value) : 100 /*!= null ? votingMin = 4Number(e.target.value) : null/ } } /> */}
                      <Range value={votingMax} onChange={ (value: any) => { votingMax = value; console.log(votingMax) } } />
                    </Col>
                  </Row>
                    {/*<Form.Label>Número de Legislaturas</Form.Label><br/>
                    <Form.Range min="0" max="5" step="1" onChange={ e => { legislature = Number(e.target.value) != null || Number(e.target.value) != undefined ? Number(e.target.value) : 1 /*!= null ? votingMin = 4Number(e.target.value) : null* } } />*/}
                  </Form.Group>
                {/*</Row>*/}
                <br/>
                  <Form.Group
                    as={Col}
                    controlId="formGridPassword"
                    className=""
                  >
                  <Form.Label><h6>Econômia</h6></Form.Label><br/>
                  <Row style={{ display: "flex" }}>
                    <Col xs={12} md={6}>
                      min{/* <Form.Range min="0" max="100" step="5" defaultValue={expenseMin} onChange={ e => { expenseMin = Number(e.target.value) != null || Number(e.target.value) != undefined ? Number(e.target.value) : 0/* ; alert(e.target.value) */ /*!= null ? votingMin = 4Number(e.target.value) : null/ } } /> */}
                      <Range value={expenseMin} onChange={ (value: any) => { expenseMin = value /* Number(value) != null || Number(value) != undefined ? Number(value) : 0; alert(value) */ /* expenseMin = value */ } } />
                    </Col>
                    <Col xs={12} md={6}>
                      max{/* <Form.Range min="0" max="100" step="5" defaultValue={expenseMax} onChange={ e => { expenseMax = Number(e.target.value) != null || Number(e.target.value) != undefined ? Number(e.target.value) : 100/* ; alert(e.target.value) */ /*!= null ? votingMin = 4Number(e.target.value) : null/ } } /> */}
                      <Range value={expenseMax} onChange={ (value: any) => { expenseMax = value /* Number(value) != null || Number(value) != undefined ? Number(value) : 100; alert(value) */ /* expenseMax = value */ } } />
                    </Col>
                  </Row>
                    {/*<Form.Label>Número de Legislaturas</Form.Label><br/>
                    <Form.Range min="0" max="5" step="1" onChange={ e => { legislature = Number(e.target.value) != null || Number(e.target.value) != undefined ? Number(e.target.value) : 1 /*!= null ? votingMin = 4Number(e.target.value) : null* } } />*/}
                  </Form.Group>
              </Col>
            </Row>
            <br/>
            <h6>Ordem</h6>
            <Row>
              <Col>
                <Form.Select className="me-sm-2" id="inlineFormCustomSelect"
                  onChange={ e => { order = e.currentTarget.value } }
                  value={order}
                >
                  <option value="name">Nome</option>
                  <option value="gender">Sexo</option>
                  <option value="party">Partido</option>
                  <option value="state">Estado (UF)</option>
                  <option value="legislature">Legislatura</option>
                  <option value="speech">Discurso</option>
                  <option value="attendance">Presença</option>
                  <option value="voting">Votação</option>
                  <option value="expense">Despesa</option>
                </Form.Select>
              </Col>
              <br/>
              <Col>
                <Form>
                  <Form.Check 
                    type="switch"
                    id="custom-switch"
                    /* onChange={ e => { (e.target.value == "on") ? ascendent = true : ascendent = false }} */
                    label="Descente / Ascedente"
                  />
                </Form>
              </Col>
            </Row>
            <br/>
            
              <Form.Group>
                <Button variant="primary" onClick={ () => { ($("#custom-switch")[0].checked) ? setDeputiesDataFilter(deputiesData.sort((a: Deputy, b: Deputy) =>/*(deputyExtraDataDictionary[a.id]?.voting != undefined && deputyExtraDataDictionary[a.id]?.voting != null && deputyExtraDataDictionary[b.id]?.voting != undefined && deputyExtraDataDictionary[b.id]?.voting != null) ?*/
                                                                                              (order == "voting")
                                                                                              ? ((deputyExtraDataDictionary[a.id]?.voting ?? 0) > (deputyExtraDataDictionary[b.id]?.voting ?? 0)) ? 1 : (((deputyExtraDataDictionary[b.id]?.voting ?? 0) > (deputyExtraDataDictionary[a.id]?.voting ?? 0)) ? -1 : 0)
                                                                                              : (order == "speech")
                                                                                              ? ((deputyExtraDataDictionary[a.id]?.speech ?? 0) > (deputyExtraDataDictionary[b.id]?.speech ?? 0)) ? 1 : (((deputyExtraDataDictionary[b.id]?.speech ?? 0) > (deputyExtraDataDictionary[a.id]?.speech ?? 0)) ? -1 : 0)
                                                                                              : (order == "gender")
                                                                                              ? ((deputyExtraDataDictionary[a.id]?.gender ?? 0) > (deputyExtraDataDictionary[b.id]?.gender ?? 0)) ? 1 : (((deputyExtraDataDictionary[b.id]?.gender ?? 0) > (deputyExtraDataDictionary[a.id]?.gender ?? 0)) ? -1 : 0)
                                                                                              : (order == "legislature")
                                                                                              ? ((deputyExtraDataDictionary[a.id]?.legislature?.legislatures ?? 0) > (deputyExtraDataDictionary[b.id]?.legislature?.legislatures ?? 0)) ? 1 : (((deputyExtraDataDictionary[b.id]?.legislature?.legislatures ?? 0) > (deputyExtraDataDictionary[a.id]?.legislature?.legislatures ?? 0)) ? -1 : 0)
                                                                                              : (order == "state")
                                                                                              ? (a.siglaUf > b.siglaUf) ? 1 : ((b.siglaUf > a.siglaUf) ? -1 : 0)
                                                                                              : (order == "party")
                                                                                              ? (a.siglaPartido > b.siglaPartido) ? 1 : ((b.siglaPartido > a.siglaPartido) ? -1 : 0)
                                                                                              : (order == "name")
                                                                                              ? (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0)
                                                                                              : (order == "expense")
                                                                                              ? ((calcExpense(a) ?? 0) > (calcExpense(b) ?? 0)) ? 1 : (((calcExpense(b) ?? 0) > (calcExpense(a) ?? 0)) ? -1 : 0)
                                                                                              : (order == "attendance")
                                                                                              ? (calcAttendance(a) > calcAttendance(b)) ? 1 : ((calcAttendance(b) > calcAttendance(a)) ? -1 : 0)
                                                                                              : a.nome.localeCompare(b.nome) /* (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0) */ /*: null*/)/* .reverse() */
                                                                                              
                                                                                              .filter(politician => (name) ? (politician.nome.includes(name)) : politician)
                                                                                              .filter(politician => (party1 != undefined && party1 != null && party1.length != 0) ? (party1.includes(politician.siglaPartido)) : politician)
                                                                                              .filter(politician => (state1 != undefined && state1 != null && state1.length != 0) ? (state1.includes(politician.siglaUf)) : politician) //(stateGeo != undefined && stateGeo != null) ? (politician.siglaUf == stateGeo)
                                                                                              .filter(politician => (legislature != undefined && legislature != null && legislature != 0 && deputyExtraDataDictionary[politician.id] != undefined && deputyExtraDataDictionary[politician.id] != null) ? ((deputyExtraDataDictionary[politician.id].legislature?.length ?? 0) == legislature) : politician)
                                                                                              //.filter(politician => (deputyExtraDataDictionary[politician.id] == undefined || deputyExtraDataDictionary[politician.id] == null || deputyExtraDataDictionary[politician.id].legislature == undefined) ? null : politician)
                                                                                              /*.filter(politician => (deputyExtraDataDictionary[politician.id] != undefined && deputyExtraDataDictionary[politician.id] != null) ? (
                                                                                                (
                                                                                                  ((deputyExtraDataDictionary[politician.id ?? ""]
                                                                                                  ? deputyExtraDataDictionary[politician.id ?? ""].expenses?.cabinetPeriod
                                                                                                  ? (100 - ((((deputyExtraDataDictionary[politician.id ?? ""].expenses?.cabinetExpense ?? 0) / (deputyExtraDataDictionary[politician.id ?? ""].expenses?.cabinetPeriod ?? 0)) ?? 0) / 111675.59) * 100 ?? 0)
                                                                                                  : 0
                                                                                                  : 0) +
                                                                                                  (deputyExtraDataDictionary[politician.id ?? ""]
                                                                                                  ? deputyExtraDataDictionary[politician.id ?? ""].expenses?.parliamentaryQuotaPeriod
                                                                                                  ? (100 - ((((deputyExtraDataDictionary[politician.id ?? ""].expenses?.parliamentaryQuotaExpense ?? 0) / (deputyExtraDataDictionary[politician.id ?? ""].expenses?.parliamentaryQuotaPeriod ?? 0)) ?? 0) / parliamentaryQuotaBudgetDictionary[politician.siglaUf].value) * 100 ?? 0)
                                                                                                  : 0
                                                                                                  : 0)) / 2
                                                                                                ) > 70
                                                                                              ) : politician)*/
                                                                                              //.filter(politician => (deputyExtraDataDictionary[politician.id] != undefined && deputyExtraDataDictionary[politician.id] != null) ? ((deputyExtraDataDictionary[politician.id].speech ?? 0) > 100) : politician)
                                                                                              /*.filter(politician => (deputyExtraDataDictionary[politician.id] != undefined && deputyExtraDataDictionary[politician.id] != null) ? ((
                                                                                                (
                                                                                                  (deputyExtraDataDictionary[politician.id ?? ""]
                                                                                                  ? ((deputyExtraDataDictionary[politician.id ?? ""].presences?.commissionPresence ?? 0) +
                                                                                                  (deputyExtraDataDictionary[politician.id ?? ""].presences?.commissionJustified ?? 0)) != 0 &&
                                                                                                  ((deputyExtraDataDictionary[politician.id ?? ""].presences?.commissionPresence ?? 0) +
                                                                                                  (deputyExtraDataDictionary[politician.id ?? ""].presences?.commissionJustified ?? 0) +
                                                                                                  (deputyExtraDataDictionary[politician.id ?? ""].presences?.commissionMiss ?? 0)) != 0
                                                                                                    ? Math.round((
                                                                                                      ((deputyExtraDataDictionary[politician.id ?? ""].presences?.commissionPresence ?? 0) +
                                                                                                      (deputyExtraDataDictionary[politician.id ?? ""].presences?.commissionJustified ?? 0))/
                                                                                                      ((deputyExtraDataDictionary[politician.id ?? ""].presences?.commissionPresence ?? 0) +
                                                                                                      (deputyExtraDataDictionary[politician.id ?? ""].presences?.commissionJustified ?? 0) +
                                                                                                      (deputyExtraDataDictionary[politician.id ?? ""].presences?.commissionMiss ?? 0))
                                                                                                    ) * 100)
                                                                                                    : 0
                                                                                                  : 0)
                                                                                                  +
                                                                                                  (deputyExtraDataDictionary[politician.id ?? ""]
                                                                                                  ? ((deputyExtraDataDictionary[politician.id ?? ""].presences?.plenaryPresence ?? 0) +
                                                                                                  (deputyExtraDataDictionary[politician.id ?? ""].presences?.plenaryJustified ?? 0)) != 0 &&
                                                                                                  ((deputyExtraDataDictionary[politician.id ?? ""].presences?.plenaryPresence ?? 0) +
                                                                                                  (deputyExtraDataDictionary[politician.id ?? ""].presences?.plenaryJustified ?? 0) +
                                                                                                  (deputyExtraDataDictionary[politician.id ?? ""].presences?.plenaryMiss ?? 0)) != 0
                                                                                                    ? Math.round((
                                                                                                      ((deputyExtraDataDictionary[politician.id ?? ""].presences?.plenaryPresence ?? 0) +
                                                                                                      (deputyExtraDataDictionary[politician.id ?? ""].presences?.plenaryJustified ?? 0))/
                                                                                                      ((deputyExtraDataDictionary[politician.id ?? ""].presences?.plenaryPresence ?? 0) +
                                                                                                      (deputyExtraDataDictionary[politician.id ?? ""].presences?.plenaryJustified ?? 0) +
                                                                                                      (deputyExtraDataDictionary[politician.id ?? ""].presences?.plenaryMiss ?? 0))
                                                                                                    ) * 100)
                                                                                                    : 0
                                                                                                  : 0)
                                                                                                )/2
                                                                                              ) < 40) : politician)*/
                                                                                              .filter(politician => (gender != undefined && gender != null) ? (deputyExtraDataDictionary[politician.id]?.gender != undefined && deputyExtraDataDictionary[politician.id]?.gender != null ? deputyExtraDataDictionary[politician.id].gender == gender : null) : politician)
                                                                                              .filter(politician => (speechMin || speechMax) ? (deputyExtraDataDictionary[politician.id]?.speech != undefined && deputyExtraDataDictionary[politician.id]?.speech != null ? (speechMax >= ((deputyExtraDataDictionary[politician.id].speech ?? 0)/790)*100 && ((deputyExtraDataDictionary[politician.id].speech ?? 0)/790)*100 >= speechMin) : null) : politician)
                                                                                              //.filter(politician => (attendanceMin || attendanceMax) ? (deputyExtraDataDictionary[politician.id]?.presences != undefined && deputyExtraDataDictionary[politician.id]?.presences != null ? (votingMax >= deputyExtraDataDictionary[politician.id].presences && deputyExtraDataDictionary[politician.id].presences >= attendanceMin) : null) : politician)
                                                                                              .filter(politician => (expenseMin || expenseMax) ? ( //deputyExtraDataDictionary[politician.id]?.speech != undefined && deputyExtraDataDictionary[politician.id]?.speech != null ? (speechMax >= ((deputyExtraDataDictionary[politician.id].speech ?? 0)/790)*100 && ((deputyExtraDataDictionary[politician.id].speech ?? 0)/790)*100 >= speechMin) : null
                                                                                                expenseMax >= (calcExpense(politician) ?? 0) &&
                                                                                                (calcExpense(politician) ?? 0) >= expenseMin) : politician)
                                                                                              .filter(politician => (attendanceMin || attendanceMax) ? ( //deputyExtraDataDictionary[politician.id]?.speech != undefined && deputyExtraDataDictionary[politician.id]?.speech != null ? (speechMax >= ((deputyExtraDataDictionary[politician.id].speech ?? 0)/790)*100 && ((deputyExtraDataDictionary[politician.id].speech ?? 0)/790)*100 >= speechMin) : null
                                                                                              attendanceMax >= calcAttendance(politician) &&
                                                                                              calcAttendance(politician) >= attendanceMin) : politician)

                                                                                              .filter(politician => (votingMin || votingMax) ? (deputyExtraDataDictionary[politician.id]?.voting != undefined && deputyExtraDataDictionary[politician.id]?.voting != null ? (votingMax >= deputyExtraDataDictionary[politician.id].voting && deputyExtraDataDictionary[politician.id].voting >= votingMin) : null) : politician).reverse()) 
                                                                                              : setDeputiesDataFilter(deputiesData.sort((a: Deputy, b: Deputy) => /*(deputyExtraDataDictionary[a.id]?.voting != undefined && deputyExtraDataDictionary[a.id]?.voting != null && deputyExtraDataDictionary[b.id]?.voting != undefined && deputyExtraDataDictionary[b.id]?.voting != null) ?*/
                                                                                              (order == "voting")
                                                                                              ? ((deputyExtraDataDictionary[a.id]?.voting ?? 0) > (deputyExtraDataDictionary[b.id]?.voting ?? 0)) ? 1 : (((deputyExtraDataDictionary[b.id]?.voting ?? 0) > (deputyExtraDataDictionary[a.id]?.voting ?? 0)) ? -1 : 0)
                                                                                              : (order == "speech")
                                                                                              ? ((deputyExtraDataDictionary[a.id]?.speech ?? 0) > (deputyExtraDataDictionary[b.id]?.speech ?? 0)) ? 1 : (((deputyExtraDataDictionary[b.id]?.speech ?? 0) > (deputyExtraDataDictionary[a.id]?.speech ?? 0)) ? -1 : 0)
                                                                                              : (order == "gender")
                                                                                              ? ((deputyExtraDataDictionary[a.id]?.gender ?? 0) > (deputyExtraDataDictionary[b.id]?.gender ?? 0)) ? 1 : (((deputyExtraDataDictionary[b.id]?.gender ?? 0) > (deputyExtraDataDictionary[a.id]?.gender ?? 0)) ? -1 : 0)
                                                                                              : (order == "legislature")
                                                                                              ? ((deputyExtraDataDictionary[a.id]?.legislature?.legislatures ?? 0) > (deputyExtraDataDictionary[b.id]?.legislature?.legislatures ?? 0)) ? 1 : (((deputyExtraDataDictionary[b.id]?.legislature?.legislatures ?? 0) > (deputyExtraDataDictionary[a.id]?.legislature?.legislatures ?? 0)) ? -1 : 0)
                                                                                              : (order == "state")
                                                                                              ? (a.siglaUf > b.siglaUf) ? 1 : ((b.siglaUf > a.siglaUf) ? -1 : 0)
                                                                                              : (order == "party")
                                                                                              ? (a.siglaPartido > b.siglaPartido) ? 1 : ((b.siglaPartido > a.siglaPartido) ? -1 : 0)
                                                                                              : (order == "name")
                                                                                              ? (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0)
                                                                                              : (order == "expense")
                                                                                              ? ((calcExpense(a) ?? 0) > (calcExpense(b) ?? 0)) ? 1 : (((calcExpense(b) ?? 0) > (calcExpense(a) ?? 0)) ? -1 : 0)
                                                                                              : (order == "attendance")
                                                                                              ? (calcAttendance(a) > calcAttendance(b)) ? 1 : ((calcAttendance(b) > calcAttendance(a)) ? -1 : 0)
                                                                                              : a.nome.localeCompare(b.nome) /* (a.nome > b.nome) ? 1 : ((b.nome > a.nome) ? -1 : 0) */ /*: null*/)
                                                                                              .filter(politician => (name) ? (politician.nome.includes(name)) : politician)
                                                                                              .filter(politician => (party1 != undefined && party1 != null && party1.length != 0) ? (party1.includes(politician.siglaPartido)) : politician)
                                                                                              .filter(politician => (state1 != undefined && state1 != null && state1.length != 0) ? (state1.includes(politician.siglaUf)) : politician) //(stateGeo != undefined && stateGeo != null) ? (politician.siglaUf == stateGeo)
                                                                                              .filter(politician => (legislature != undefined && legislature != null && legislature != 0 && deputyExtraDataDictionary[politician.id] != undefined && deputyExtraDataDictionary[politician.id] != null) ? ((deputyExtraDataDictionary[politician.id].legislature?.length ?? 0) == legislature) : politician)
                                                                                              .filter(politician => (gender != undefined && gender != null) ? (deputyExtraDataDictionary[politician.id]?.gender != undefined && deputyExtraDataDictionary[politician.id]?.gender != null ? deputyExtraDataDictionary[politician.id].gender == gender : null) : politician)
                                                                                              .filter(politician => (speechMin || speechMax) ? (deputyExtraDataDictionary[politician.id]?.speech != undefined && deputyExtraDataDictionary[politician.id]?.speech != null ? (speechMax >= ((deputyExtraDataDictionary[politician.id].speech ?? 0)/790)*100 && ((deputyExtraDataDictionary[politician.id].speech ?? 0)/790)*100 >= speechMin) : null) : politician)
                                                                                              //.filter(politician => (attendanceMin || attendanceMax) ? (deputyExtraDataDictionary[politician.id]?.presences != undefined && deputyExtraDataDictionary[politician.id]?.presences != null ? (votingMax >= deputyExtraDataDictionary[politician.id].presences && deputyExtraDataDictionary[politician.id].presences >= attendanceMin) : null) : politician)
                                                                                              .filter(politician => (expenseMin || expenseMax) ? ( //deputyExtraDataDictionary[politician.id]?.speech != undefined && deputyExtraDataDictionary[politician.id]?.speech != null ? (speechMax >= ((deputyExtraDataDictionary[politician.id].speech ?? 0)/790)*100 && ((deputyExtraDataDictionary[politician.id].speech ?? 0)/790)*100 >= speechMin) : null
                                                                                                expenseMax >= (calcExpense(politician) ?? 0) &&
                                                                                                (calcExpense(politician) ?? 0) >= expenseMin) : politician)
                                                                                              .filter(politician => (attendanceMin || attendanceMax) ? ( //deputyExtraDataDictionary[politician.id]?.speech != undefined && deputyExtraDataDictionary[politician.id]?.speech != null ? (speechMax >= ((deputyExtraDataDictionary[politician.id].speech ?? 0)/790)*100 && ((deputyExtraDataDictionary[politician.id].speech ?? 0)/790)*100 >= speechMin) : null
                                                                                              attendanceMax >= calcAttendance(politician) &&
                                                                                              calcAttendance(politician) >= attendanceMin) : politician)

                                                                                              .filter(politician => (votingMin || votingMax) ? (deputyExtraDataDictionary[politician.id]?.voting != undefined && deputyExtraDataDictionary[politician.id]?.voting != null ? (votingMax >= deputyExtraDataDictionary[politician.id].voting && deputyExtraDataDictionary[politician.id].voting >= votingMin) : null) : politician)) 

                                                                                              //.sort((a: Deputy, b: Deputy) => (deputyExtraDataDictionary[a.id]?.voting != undefined && deputyExtraDataDictionary[a.id]?.voting != null && deputyExtraDataDictionary[b.id]?.voting != undefined && deputyExtraDataDictionary[b.id]?.voting != null) ? (deputyExtraDataDictionary[a.id].voting > deputyExtraDataDictionary[b.id].voting) ? 1 : ((deputyExtraDataDictionary[b.id].voting > deputyExtraDataDictionary[a.id].voting) ? -1 : 0) : 1); //; console.log("speech " + speechMin + " " + speechMax) 
                                                                                              ; setShow1(false); setStateShow(state1); setPartyShow(party1)
                                                                                            } }
                >Procurar</Button> {/*; console.log("AQUI Ô" + " " + party) onClick={setSearch({name: formGridPassword})} ; props.onHide*/}
                <Button variant="warning" onClick={ () => { setDeputiesDataFilter(deputiesData.filter(politician => (deputyExtraDataDictionary[politician.id] == undefined || deputyExtraDataDictionary[politician.id] == null) ? politician : null))} }
                >Erro</Button>
                <Button variant="warning" onClick={ () => { setDeputiesDataFilter(deputiesData.filter(politician => (deputyExtraDataDictionary[politician.id]?.speech == undefined || deputyExtraDataDictionary[politician.id]?.speech == null ? politician : null))) } }
                >Erro2</Button>
                <Button variant="warning" onClick={ () => { setDeputiesDataFilter(deputiesData
                .filter(politician => (deputyExtraDataDictionary[politician.id]?.expenses != undefined && deputyExtraDataDictionary[politician.id]?.expenses != null ? 
                (Math.round(
                  ((
                  ((deputyExtraDataDictionary[politician.id]
                  ? deputyExtraDataDictionary[politician.id].expenses
                  ? deputyExtraDataDictionary[politician.id].expenses?.cabinetPeriod
                  ? (100 - ((((deputyExtraDataDictionary[politician.id].expenses?.cabinetExpense ?? 0) / (deputyExtraDataDictionary[politician.id].expenses?.cabinetPeriod ?? 0)) ?? 0) / 111675.59) * 100 ?? 0)
                  : 0
                  : 0
                  : 0) +
                  (deputyExtraDataDictionary[politician.id]
                  ? deputyExtraDataDictionary[politician.id].expenses
                  ? deputyExtraDataDictionary[politician.id].expenses?.parliamentaryQuotaPeriod
                  ? (100 - ((((deputyExtraDataDictionary[politician.id].expenses?.parliamentaryQuotaExpense ?? 0) / (deputyExtraDataDictionary[politician.id].expenses?.parliamentaryQuotaPeriod ?? 0)) ?? 0) / (parliamentaryQuotaBudgetDictionary[politician.siglaUf].value)) * 100 ?? 0)
                  : 0
                  : 0
                  : 0)) / 2
                  ) ?? 0)
                  *10)/10) < 0
                : null))) } }
                >Erro3</Button> 
              </Form.Group>
            
            </Form>
          </Container>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }

  function SearchModal(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Body className="show-grid bg-dark">
          
          <Container>
          <Form id="searchForm"> {/*onSubmit={handleSubmit}*/}
            <Row className="middle">
              <Col xs={12} md={12}>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Floating className="mb-3">
                      <Form.Control
                        id="floatingInputCustom"
                        type="text"
                        placeholder="Nome do parlamentar"
                        onChange={ e => { name = e.target.value.toString() } }
                        value={name}
                      />
                      <label htmlFor="floatingInputCustom">Nome</label>
                    </Form.Floating>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Partido"
                    >
                      <Form.Select id="party" aria-label="Floating label select example"
                        onChange={ e => { party = e.currentTarget.value.toString() } }
                        value={party}
                      >
                        <option value="null">TODOS</option>
                        { Object.keys(partyLogoDictionary).sort().map((elements: string) => (
                          (elements != "PATRI") ?
                            <option value={ elements }>{ elements }</option> : null                         
                        )) }
                        {/*<option value="DEM">DEM</option>
                        <option value="PT">PT</option>
                        <option value="PV">PV</option>*/}
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>
                </Row>

                <Row className="middle">
                  <Col xs={12} md={12}>
                    
                    <svg width={ 800 } height={ 450 } viewBox="0 0 800 450" style={{ marginTop: "-90px" }}>
                      <g className="codarea">

                        {
                          geographies.map((d,i) => (
                            <a className="mylink">
                              <path
                                key={ `path-${ i }` }
                                d={ geoPath().projection(projection)(d) ?? undefined }
                                className="country"
                                fill={ `rgba(38,50,56,${ 1 / geographies.length * i})` }
                                stroke="#FFFFFF"
                                strokeWidth={ 0.5 }
                                onClick={ (e) => { setState(statesDictionary[i].name) } }
                                tabIndex={i}
                              />
                            </a>
                          ))
                        }

                        {/*
                          geographies.forEach((d, i) => {
                            a.setAttribute('tabindex', i);
                          })
                        */}
                        
                      </g>
                      {/*<g className="markers">
                        {
                        cities.map((city, i) => (
                        <circle
                          cx={ projection(city.coordinates)[0] }
                          cy={ projection(city.coordinates)[1] }
                          r={ city.population / 3000000 }
                          fill="#E91E63"
                          stroke="#FFFFFF"
                          className="marker"
                          onClick={ () => handleMarkerClick(i) }
                        />
                        ))
                        }
                      </g>*/}
                    </svg>
                    
                  </Col>
                </Row>

                <Row className="mb-3 wc">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Col sm={10}>
                      {/*<Form.Check
                        type="radio"
                        label="Todos"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />*/}
                      <Form.Check
                        type="radio"
                        label="Maculino"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        onChange={ e => { (e.target.value == "on") ? gender = false : gender = null; /*console.log(gender)*/ } }
                        //value={gender}
                      />
                      <Form.Check
                        type="radio"
                        label="Feminino"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        onChange={ e => { (e.target.value == "on") ? gender = true : gender = null; /*console.log(gender)*/ } }
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId="formGridPassword"
                    className="wc"
                  >
                    <Form.Label>Governismo</Form.Label>
                    <Form.Range min="0" max="100" step="5" onChange={ e => { votingMin = Number(e.target.value) != null || Number(e.target.value) != undefined ? Number(e.target.value) : 0 /*!= null ? votingMin = 4Number(e.target.value) : null*/ } } />
                    <Form.Range min="0" max="100" step="5" onChange={ e => { votingMax = Number(e.target.value) != null || Number(e.target.value) != undefined ? Number(e.target.value) : 100 /*!= null ? votingMin = 4Number(e.target.value) : null*/ } } />
                  </Form.Group>
                </Row>
              </Col>
            </Row>
            <Modal.Footer className="bg-dark">
              <Form.Group>
                <Button variant="primary" onClick={ () => { setDeputiesDataFilter(deputiesData.filter(politician => (name) ? (politician.nome.includes(name)) : politician)
                                                                                              .filter(politician => (party != undefined && party != null) ? (politician.siglaPartido == party) : politician)
                                                                                              .filter(politician => (state != undefined && state != null) ? (politician.siglaUf == state) : politician)
                                                                                              .filter(politician => (gender != undefined && gender != null) ? (deputyExtraDataDictionary[politician.id]?.gender != undefined && deputyExtraDataDictionary[politician.id]?.gender != null ? deputyExtraDataDictionary[politician.id].gender == gender : null) : politician)
                                                                                              .filter(politician => (votingMin || votingMax) ? (deputyExtraDataDictionary[politician.id]?.voting != undefined && deputyExtraDataDictionary[politician.id]?.voting != null ? (votingMax >= deputyExtraDataDictionary[politician.id].voting && deputyExtraDataDictionary[politician.id].voting >= votingMin) : null) : politician)) } }
                >Procurar</Button> {/*; console.log("AQUI Ô" + " " + party) onClick={setSearch({name: formGridPassword})} ; props.onHide*/}
              </Form.Group>
            </Modal.Footer>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }

  function ExpenseModal(props: any) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="bg-dark wc">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="cardTextLeft"
          >
            Maiores provedores de serviços
          </Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{
            //backgroundImage: `linear-gradient(rgba(141, 153, 174, 0.1), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1598882281180-da3d409fea7a?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzU3NDQzODU&ixlib=rb-1.2.1")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            //height: "80vh",
          }}
          className="show-grid"
        >
          <Container className="txtCenter">
            
          <Table responsive hover size="sm">
            <thead>
              <tr>
                <th
                  style={{
                    textAlign: "right",
                    paddingRight: "1vw",
                  }}
                >
                  Nome
                </th>
                <th
                  style={{ textAlign: "left", paddingLeft: "1vw" }}
                >
                  Valor
                </th>
                <th
                  style={{ textAlign: "left", paddingLeft: "1vw" }}
                >
                  Fornecedor
                </th>
              </tr>
            </thead>
            <tbody>
              {topProviders(
                expenses?.parliamentaryExpenseListDescription
                  ? expenses.parliamentaryExpenseListDescription
                  : [
                      {
                        type: "",
                        providerName: "",
                        documentValue: 0,
                      },
                    ]
              )}
              {/*<tr>
                <td style={{ textAlign: "right", paddingRight: "1vw" }}>{ expenses?.parliamentaryExpenseListDescription[0].documentNumber }</td>
                <td style={{ textAlign: "left", paddingLeft: "1vw" }}>
                  {(attendances?.committee.attendance == null &&
                    attendances?.committee.miss == null &&
                    attendances?.range == null) ||
                  attendances?.range == 0
                    ? ""
                    : Math.round(
                        ((attendances.committee.attendance +
                          attendances.committee.justified) /
                          (attendances.committee.attendance +
                            attendances.committee.justified +
                            attendances.committee.miss) ) *
                          100
                      ) + "%"}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right", paddingRight: "1vw" }}>Presença</td>
                <td style={{ width: "10vw", textAlign: "left", paddingLeft: "1vw" }}>
                  {attendances?.committee.attendance == null
                    ? ""
                    : attendances.committee.attendance}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right", paddingRight: "1vw" }}>Ausências justificadas</td>
                <td style={{ width: "10vw", textAlign: "left", paddingLeft: "1vw" }}>
                  {attendances?.committee.justified == null
                    ? ""
                    : attendances.committee.justified}
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "right", paddingRight: "1vw" }}>Ausências não justificadas</td>
                <td style={{ width: "10vw", textAlign: "left", paddingLeft: "1vw" }}>
                  {attendances?.committee.miss == null
                    ? ""
                    : attendances.committee.miss}
                </td>
              </tr>*/}
            </tbody>
          </Table>

          </Container>
        </Modal.Body>

        <Modal.Footer
          style={{ backgroundColor: "#212529", justifyContent: "center" }}
        >
        </Modal.Footer>
      </Modal>
    );
  }

  function SpeechModal(props: any) {
    return (
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="bg-dark wc">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="cardTextLeft"
          >
            Tipos de Discursos
          </Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{
            //backgroundImage: `linear-gradient(rgba(141, 153, 174, 0.1), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1598882281180-da3d409fea7a?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzU3NDQzODU&ixlib=rb-1.2.1")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            //height: "80vh",
          }}
          className="show-grid"
        >
          <Container className="txtCenter">
            
            <Table responsive hover size="sm">
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: "right",
                      paddingRight: "1vw",
                    }}
                  >
                    Descrição
                  </th>
                  <th
                    style={{
                      width: "10vw",
                      textAlign: "left",
                      paddingLeft: "1vw",
                    }}
                  >
                    Valor
                  </th>
                </tr>
              </thead>
              <tbody>
                
                {
                  //waitSpeech(deputyCompleteData?.dados.id ?? 0, 1)
                }
                {
                  showSpeech(speechs != undefined ? speechs : {})
                }
                {
                  console.log("BRASIL")
                }
                {
                  console.log(speechs)
                }
                {
                  /*speechs !== undefined
                  ? speechs.map((el, ix) => (
                    <tr>
                      <td style={{ textAlign: "right", paddingRight: "1vw" }}>el.types</td>
                      <td style={{ width: "10vw", textAlign: "left", paddingLeft: "1vw" }}>
                      </td>
                    </tr>
                  ))
                  : ""*/
                }
              </tbody>
            </Table>

          </Container>
        </Modal.Body>

        <Modal.Footer
          style={{ backgroundColor: "#212529", justifyContent: "center" }}
        >
        </Modal.Footer>
      </Modal>
    );
  }

  function buildTable(name: string) {
    if(name == 'commission') {
      return (
        <div>
        <h5 style={{ textAlign: "left" }}>
          Presença em Comissão
        </h5>
        <Table responsive hover size="sm">
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "right",
                  paddingRight: "1vw",
                }}
              >
                Descrição
              </th>
              <th
                style={{
                  width: "10vw",
                  textAlign: "left",
                  paddingLeft: "1vw",
                }}
              >
                Valor
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  textAlign: "right",
                  paddingRight: "1vw",
                }}
              >
                Resultado Percentual
              </td>
              <td
                style={{
                  width: "10vw",
                  textAlign: "left",
                  paddingLeft: "1vw",
                }}
              >
                {
                  deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                  ? Math.round((
                      ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                      (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0))/
                      ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                      (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0) +
                      (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionMiss ?? 0))
                    ) * 100) + "%"
                    
                  : ""
                }
                {/*
                (attendances?.committee.attendance == null &&
                  attendances?.committee.miss == null &&
                  attendances?.range == null) ||
                attendances?.range == 0
                  ? ""
                  : Math.round(
                      ((attendances.committee.attendance +
                        attendances.committee.justified) /
                        (attendances.committee.attendance +
                          attendances.committee.justified +
                          attendances.committee.miss)) *
                        100
                    ) + "%"
                    */}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: "right",
                  paddingRight: "1vw",
                }}
              >
                Presença
              </td>
              <td
                style={{
                  width: "10vw",
                  textAlign: "left",
                  paddingLeft: "1vw",
                }}
              >
                {
                  deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                  ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0
                  : ""
                }
                {/*attendances?.committee.attendance == null
                  ? ""
                  : attendances.committee.attendance*/}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: "right",
                  paddingRight: "1vw",
                }}
              >
                Ausências justificadas
              </td>
              <td
                style={{
                  width: "10vw",
                  textAlign: "left",
                  paddingLeft: "1vw",
                }}
              >
                {
                  deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                  ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0
                  : ""
                }
                {/*attendances?.committee.justified == null
                  ? ""
                  : attendances.committee.justified*/}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: "right",
                  paddingRight: "1vw",
                }}
              >
                Ausências não justificadas
              </td>
              <td
                style={{
                  width: "10vw",
                  textAlign: "left",
                  paddingLeft: "1vw",
                }}
              >
                {
                  deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                  ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionMiss ?? 0
                  : ""
                }
                {/*attendances?.committee.miss == null
                  ? ""
                  : attendances.committee.miss*/}
              </td>
            </tr>
          </tbody>
        </Table>
        </div>
      )
    }
    if(name == 'plenary') {
      return (
      <div>
        <h5 style={{ textAlign: "left" }}>
          Presença em Plenário
        </h5>
        <Table responsive hover size="sm">
          <thead>
            <tr>
              <th
                style={{
                  textAlign: "right",
                  paddingRight: "1vw",
                }}
              >
                Descrição
              </th>
              <th
                style={{
                  width: "10vw",
                  textAlign: "left",
                  paddingLeft: "1vw",
                }}
              >
                Valor
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                style={{
                  textAlign: "right",
                  paddingRight: "1vw",
                }}
              >
                Resultado Percentual
              </td>
              <td
                style={{
                  width: "10vw",
                  textAlign: "left",
                  paddingLeft: "1vw",
                }}
              >
                {
                  deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                    ? Math.round((
                        ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0))/
                        ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryMiss ?? 0))
                      ) * 100) + "%"
                  : ""
                }
                {/*
                (attendances?.plenary.dSAttendance == null &&
                  attendances?.plenary.dSJustified == null &&
                  attendances?.plenary.dSMiss == null &&
                  attendances?.plenary.deliberativedSessions ==
                    null &&
                  attendances?.range == null) ||
                attendances?.range == 0
                  ? ""
                  : Math.round(
                      ((attendances.plenary.dSAttendance +
                        attendances.plenary.dSJustified) /
                        attendances.plenary
                          .deliberativedSessions) *
                        100
                    ) + "%"
                    */}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: "right",
                  paddingRight: "1vw",
                }}
              >
                Sessões deliberativas, realizadas em dias
              </td>
              <td
                style={{
                  width: "10vw",
                  textAlign: "left",
                  paddingLeft: "1vw",
                }}
              >
                {
                  deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                  ? (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                  (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0) +
                  (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryMiss ?? 0)
                  : ""
                }
                {/*attendances?.plenary.deliberativedSessions ==
                null
                  ? ""
                  : attendances.plenary.deliberativedSessions*/}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: "right",
                  paddingRight: "1vw",
                }}
              >
                Sessões deliberativas, dias com presença
              </td>
              <td
                style={{
                  width: "10vw",
                  textAlign: "left",
                  paddingLeft: "1vw",
                }}
              >
                {
                  deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                  ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0
                  : ""
                }
                {/*attendances?.plenary.dSAttendance == null
                  ? ""
                : attendances.plenary.dSAttendance*/}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: "right",
                  paddingRight: "1vw",
                }}
              >
                Sessões deliberativas, ausências justificadas
              </td>
              <td
                style={{
                  width: "10vw",
                  textAlign: "left",
                  paddingLeft: "1vw",
                }}
              >
                {
                  deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                  ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0
                  : ""
                }
                {/*attendances?.plenary.dSJustified == null
                  ? ""
                  : attendances.plenary.dSJustified*/}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: "right",
                  paddingRight: "1vw",
                }}
              >
                Sessões deliberativas, ausências não justificadas
              </td>
              <td
                style={{
                  width: "10vw",
                  textAlign: "left",
                  paddingLeft: "1vw",
                }}
              >
                {
                  deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                  ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryMiss ?? 0
                  : ""
                }
                {/*attendances?.plenary.dSMiss == null
                  ? ""
                  : attendances.plenary.dSMiss*/}
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: "right",
                  paddingRight: "1vw",
                }}
              >
                Sessões deliberativas com Ordem do Dia na Sessão
                Legislativa
              </td>
              <td
                style={{
                  width: "10vw",
                  textAlign: "left",
                  paddingLeft: "1vw",
                }}
              >
                {
                  deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                  ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.ordemOfDayPresence ?? 0
                  : ""
                }
                {/*attendances?.plenary.attendance == null
                  ? ""
                  : attendances.plenary.attendance*/}
              </td>
            </tr>
            <tr>
              <td
                style={{
                  textAlign: "right",
                  paddingRight: "1vw",
                }}
              >
                Sessões deliberativas com Ordem do Dia, ausências
                não justificadas
              </td>
              <td
                style={{
                  width: "10vw",
                  textAlign: "left",
                  paddingLeft: "1vw",
                }}
              >
                {
                  deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                  ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.ordemOfDayMiss ?? 0
                  : ""
                }
                {/*attendances?.plenary.miss == null
                  ? ""
                  : attendances.plenary.miss*/}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      )
    }
  }

  const backgroundLoader = [
    "https://images.unsplash.com/photo-1598882281180-da3d409fea7a?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzU3NDQzODU&ixlib=rb-1.2.1",
    "https://images.unsplash.com/photo-1601782000994-aa2099bd26c6?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzgzMjg3NjU&ixlib=rb-1.2.1",
    "https://images.unsplash.com/photo-1594640708322-826272d4c672?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2Mzg1ODU1MDA&ixlib=rb-1.2.1",
    "https://images.unsplash.com/photo-1625426078245-6911839409dd?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2Mzg1ODU2MzQ&ixlib=rb-1.2.1",
    "https://images.unsplash.com/photo-1594056891098-b098f52664d6?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2Mzg1ODU2OTE&ixlib=rb-1.2.1",
    "https://images.unsplash.com/photo-1598383851503-1b815038b048?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2Mzg1ODU3MzE&ixlib=rb-1.2.1",
    "https://images.unsplash.com/photo-1598882949753-4d2a8b61ebbe?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2Mzg1ODU3ODI&ixlib=rb-1.2.1",
    "https://images.unsplash.com/photo-1601782007806-42de5253b04d?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2Mzg1ODU4MTc&ixlib=rb-1.2.1",
    "https://images.unsplash.com/photo-1591297545337-212cc106ee6f?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2Mzg1ODU4NTQ&ixlib=rb-1.2.1",
    "https://images.unsplash.com/photo-1561552674-8a3a5e965295?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2Mzg1ODU5MDA&ixlib=rb-1.2.1",
    "https://images.unsplash.com/photo-1594057062656-72a8b5e20e6e?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2Mzg1ODU5NDk&ixlib=rb-1.2.1",
    "https://images.unsplash.com/photo-1596213209790-e839dcd46c25?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2Mzg1ODYwMTc&ixlib=rb-1.2.1"
  ]

  function LoaderModal(props: any) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="bg-dark wc">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="cardTextLeft"
          >
            <Spinner animation="grow" size="sm" /> &nbsp;O deputado está
            recolhendo os documentos{} {/*&nbsp;{" "}*/}
            <span style={{ color: "gray" }}>
              {} · {}
            </span>
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body
          style={{
            backgroundImage: `linear-gradient(rgba(141, 153, 174, 0.1), rgba(0, 0, 0, 0.8)), url("` + backgroundLoader[Math.floor(Math.random() * 11)] + `")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
            height: "80vh",
          }}
          className="show-grid"
        >
          <Container className="txtCenter">
            {/*<ProgressBar variant="dark" now={loading} />*/}
            <Row className="middle">
              <Col
                className="message"
                style={{ position: "absolute", bottom: "0", right: "0" }}
              >
                <Lottie 
                  options={defaultOptions}
                  height={100}
                  width={100}
                />
                O presidente da Câmara dos Deputados, Rodrigo Maia (DEM-RJ), foi
                surpreendido em junho ao receber em seu gabinete uma carta cujo
                conteúdo era: cocô. Isso mesmo. O envelope estava preenchido com
                folhas de papel higiênico usadas. Maia cobrou uma investigação
                da Polícia Legislativa sobre o caso.
                <div style={{ height: "3vh" }}></div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer
          style={{ backgroundColor: "#212529", justifyContent: "center" }}
        >
          {/*<Image onClick={props.onHide} style={{ width: "48px" }} src={""} />{' '}
            <Image onClick={props.onHide} style={{ width: "48px" }} src={""} />*/}
          <Spinner animation="grow" size="sm" />
        </Modal.Footer>
      </Modal>
    );
  }

  const popover = (
    <Popover id="popover-basic">
      <h5 style={{ paddingTop: "15px", paddingLeft: "15px" }}>Representação dos dados</h5>
      <Popover.Body>
        Os valores vão de 0 a 100, com exceção de LEI (Leis Aprovadas) que pode ir de 0 até o
        valor total de leis aprovadas dividido pelo número de legislaturas, que provavelmente não passam de 100.
      </Popover.Body>
    </Popover>
  );

  const popover1 = (
    <Popover id="popover-basic">
      <h5 style={{ paddingTop: "15px", paddingLeft: "15px" }}>Legislaturas</h5>
      <Popover.Body>
        {
          deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
          ? (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].legislature?.length ?? 0) > 1
          ? "Os valores "
          : "O valor "
          : ""
        }
        {
        deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
        ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].legislature?.legislatures.join(", ") ?? ""
        : ""
        }
        {
          deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
          ? (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].legislature?.length ?? 0) > 1
          ? " representam as legislaturas "
          : " representa a legislatura "
          : ""
        }
        {deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
        ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].legislature?.legislatures.join("ª, ") ?? ""
        : ""}ª, compreendendo períodos de 4 anos.
        Exemplo a atual legislatura é a 56ª que vai de 2019 a 2022.
        O valor final é número de legislaturas exercidas pelo parlamentar multiplicado por 20. 
      </Popover.Body>
    </Popover>
  );

  const popover2 = (
    <Popover id="popover-basic">
      <h5 style={{ paddingTop: "15px", paddingLeft: "15px" }}>Econômia no gabinete</h5>
      <Popover.Body>
        Os números representam, Cota Parlamentar e a Verba de Gabinete respectivamente, a econômia em percentagem dos anos de 2019 a 2020.
        O valor final é a média das econômias.
        Os valores da Cota Parlamentar variam de estado para estado. Vá a informações para saber mais.
        Já a Verba de Gabinete é fixa, com valor mensal de R$111.675,59. Vá a informações para saber mais.
        Nota: é possível que alguns valores estejam negativos, atualmente não sabemos o porque, mas é provável que seja por
        reajuste nas tabelas de Cota Parlamentar. Caso saiba do motivo que cause essas distorções entre em contato conosco.
      </Popover.Body>
    </Popover>
  );

  const popover3 = (
    <Popover id="popover-basic">
      <h5 style={{ paddingTop: "15px", paddingLeft: "15px" }}>Discursos normalizados</h5>
      <Popover.Body>
        O valor final é a normalização do valor mínimo de discursos de 0 até o máximo de 790 em relação a 100.
        Valores são referentes a 2019 e 2020.
      </Popover.Body>
    </Popover>
  );

  const popover4 = (
    <Popover id="popover-basic">
      <h5 style={{ paddingTop: "15px", paddingLeft: "15px" }}>Governismo</h5>
      <Popover.Body>
        O valor final é a porcentagem de vezes nos anos de 2019 a 2020 em que nas votações o parlamentar e o governo votaram igualmente.
        O governo define o voto fazendo orientações.
      </Popover.Body>
    </Popover>
  );

  const popover5 = (
    <Popover id="popover-basic">
      <h5 style={{ paddingTop: "15px", paddingLeft: "15px" }}>Presença para discussões</h5>
      <Popover.Body>
        Os números são as presenças do parlamentar, em Comissões e Plenário respectivamente, nos anos de 2019 e 2020.
        O valor final é a média das presenças.
      </Popover.Body>
    </Popover>
  );

  const popover6 = (
    <Popover id="popover-basic">
      <h5 style={{ paddingTop: "15px", paddingLeft: "15px" }}>Leis Aprovadas</h5>
      <Popover.Body>
        O resultado dessa categoria é a soma de leis de autoria do parlamentar somadas as relatadas pelo mesmo dividas pelo número de legislturas.
      </Popover.Body>
    </Popover>
  );

  function PoliticianModal(props: any) {
    console.log("dados");
    console.log(deputyCompleteData);
    console.log(deputyPartyData);
    console.log(deputyProfessionData);
    console.log(deputyOccupationData);
    console.log(reports);
    console.log(authorships);
    //console.log(legislatures);
    //console.log(speechs);
    //console.log(attendances);
    console.log(expenses);

    //var state = politician?.siglaUf == null ? "" : politician.siglaUf;
    var parliamentaryQuotaBudget =
      parliamentaryQuotaBudgetDictionary[state ?? ""].value
    var cabinetBudget = 111675.59

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton closeVariant="white" className="bg-dark wc">
          <Modal.Title
            id="contained-modal-title-vcenter"
            className="cardTextLeft"
          >
            {toCapitalizeName(getDeputyInformation("name").toLowerCase())}{" "}
            &nbsp;{" "}
            <span style={{ color: "gray" }}>
              {getDeputyInformation("eleitoralStatus").toLowerCase()} ·{" "}
              {getDeputyInformation("status").toLowerCase()}
            </span>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(141, 153, 174, 0.1)), url(https://www.camara.leg.br/internet/deputado/bandep/pagina_do_deputado/${idPolitician}.jpg)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "50% 50%",
            backgroundSize: "cover",
          }}
          className="show-grid"
        >
          <Container className="txtCenter">
            <Row className="middle">
              <Col xs={12} md={6}>
                <h4 className="wc">Dados Pessoais</h4>
                <br />
                <h6 className="cardTextLeft wc">
                  Nascimento
                  <span className="cardTextRight">
                    {nomarlizeDate(getDeputyInformation("birthDate"), "ignore")}
                  </span>
                </h6>
                <h6 className="cardTextLeft wc">
                  Local
                  <span className="cardTextRight">
                    {getDeputyInformation("birthPlace")} -{" "}
                    {getDeputyInformation("birthPlaceState")}
                  </span>
                </h6>
                <h6 className="cardTextLeft wc">
                  Escolaridade
                  <span className="cardTextRight">
                    {getDeputyInformation("schooling")}
                  </span>
                </h6>
                <Accordion>
                  <Accordion.Item eventKey="0" className="bgTrans wc">
                    <Accordion.Header>Contatos</Accordion.Header>
                    <Accordion.Body>{getDeputyList("contacts")}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <br />
                <h4 className="wc">Profissão</h4>
                <br />
                <div>{getDeputyList("profession")}</div>
                <br />
                <Accordion>
                  <Accordion.Item eventKey="0" className="bgTrans wc">
                    <Accordion.Header>Cargos ocupados</Accordion.Header>
                    <Accordion.Body>
                      {getDeputyList("occupation")}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
              <Col xs={12} md={6}>
                <h4 className="wc">Estrutura do Partido Filiado</h4>
                <br />
                <Image
                  width="150px"
                  style={{
                    backgroundColor: partyLogo(getDeputyInformation("party"))
                      .border
                      ? "white"
                      : "transparent",
                    borderRadius: "0.5em",
                    padding: "10px",
                  }}
                  src={getDeputyInformation("partyLogo")}
                />
                <br />
                <br />
                <h6 className="cardTextLeft wc">
                  Partido
                  <span className="cardTextRight">
                    {getDeputyInformation("partyName")}
                  </span>
                </h6>
                <h6 className="cardTextLeft wc">
                  Estado (UF)
                  <span className="cardTextRight">
                    {deputiesDataFilter.find(politician => (politician.id == (deputyCompleteData?.dados.id ?? 0)))?.siglaUf}
                  </span>
                </h6>
                <br />
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col xs={12} md={8}>
                    <h6 className="cardTextLeft wc">
                      Líder
                      <span className="cardTextRight">
                        {getDeputyInformation("leader")}
                      </span>
                    </h6>
                  </Col>
                  <Col xs={12} md={4}>
                    <Image
                      width="90px"
                      src={getDeputyInformation("leaderPhoto")}
                      thumbnail
                      style={{ borderTopLeftRadius: "2rem", borderTopRightRadius: "0.25rem", borderBottomLeftRadius: "0.25rem", borderBottomRightRadius: "1rem" }}
                    />
                  </Col>
                </Row>
                <br/>
                <Accordion>
                  <Accordion.Item eventKey="0" className="bgTrans wc">
                    <Accordion.Header>Dados Estruturais</Accordion.Header>
                    <Accordion.Body>{getDeputyList("party")}</Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12} md={12}>
                <h4 className="wc">Gráfico{' '}
                <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={popover}>
                <Image
                  style={{
                    width: "48px",
                    position: "sticky",
                    left: "calc(50vw - 48px)",
                    top: "calc(20vh - 48px)",
                    zIndex: 1020,
                  }}
                  
                  src={
                    icon?.urlSearch ? icon.urlQuestion : ''
                    //"https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/459980.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTgxMTIwMCwicSI6bnVsbCwiaWF0IjoxNjM1NjEyODA3fQ__.d52f7b901cc75074197d5fc1f564b79a3202d3bcdfe26f9d463834b6983225ae"
                  }
                />
                </OverlayTrigger>
                </h4>
                <br />
                <PoliticianRadar
                  data={getCoordinateData(
                    //deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].legislature?.legislatures.map(String).join(" ")
                    //{ list: [deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].legislature?.legislatures.map(String).join(" ") ?? ""], count: deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].legislature?.length ?? 1 },
                    { 
                      list: [
                        deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                        ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].legislature?.legislatures.map(String).join(" ") ?? ""
                        : ""
                      ],
                      count:
                        deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                        ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].legislature?.length ?? 0
                        : 0
                    },
                    ((
                      ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                      ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.cabinetPeriod
                      ? (100 - ((((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.cabinetExpense ?? 0) / (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.cabinetPeriod ?? 0)) ?? 0) / cabinetBudget) * 100 ?? 0)
                      : 0
                      : 0) +
                      (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                      ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.parliamentaryQuotaPeriod
                      ? (100 - ((((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.parliamentaryQuotaExpense ?? 0) / (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.parliamentaryQuotaPeriod ?? 0)) ?? 0) / parliamentaryQuotaBudget) * 100 ?? 0)
                      : 0
                      : 0)) / 2
                      ) ?? 0), // expenses, 
                    {
                      types: null,
                      count:
                      deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                        ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].speech ?? 0
                        : 0
                    },
                    (
                      (
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                        ? ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0)) != 0 &&
                        ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionMiss ?? 0)) != 0
                          ? Math.round((
                            ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                            (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0))/
                            ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                            (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0) +
                            (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionMiss ?? 0))
                          ) * 100)
                          : 0
                        : 0)
                        +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                        ? ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0)) != 0 &&
                        ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryMiss ?? 0)) != 0
                          ? Math.round((
                            ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                            (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0))/
                            ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                            (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0) +
                            (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryMiss ?? 0))
                          ) * 100)
                          : 0
                        : 0)
                      )/2 ?? 0
                      ),
                    authorships,
                    reports,
                    deputyCompleteData
                  )}
                />
              </Col>
            </Row>
            <br />
            <Row>
              <h4 className="wc">Dados</h4>
              <Col xs={12} md={12}>
                <ListGroup variant="flush" className="cardTextLeft">
                  <ListGroup.Item className="bgTrans wc">
                    {/*Legislaturas (
                    {legislatures?.list == null
                      ? ""
                      : legislatures.list.join(" ")}
                    )
                    <span className="cardTextRight">
                      {legislatures?.count == null ? 0 : legislatures.count}
                    </span>*/}
                    
                    LEG · Legislaturas (
                      {
                        deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                        ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].legislature?.legislatures.join(" ") ?? ""
                        : ""
                      }
                      {/*{ deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].legislature?.legislatures == undefined ? "" : deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].legislature?.legislatures.join(" ") }*/}
                    ){' '}
                    <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={popover1}>
                    <Image
                      style={{
                        width: "24px",
                        //position: "sticky",
                        left: "calc(50vw - 48px)",
                        top: "calc(20vh - 48px)",
                        zIndex: 1020,
                      }}
                      
                      src={
                        icon?.urlSearch ? icon.urlQuestion : ''
                        //"https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/459980.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTgxMTIwMCwicSI6bnVsbCwiaWF0IjoxNjM1NjEyODA3fQ__.d52f7b901cc75074197d5fc1f564b79a3202d3bcdfe26f9d463834b6983225ae"
                      }
                    />
                    </OverlayTrigger>
                    <span className="cardTextRight">
                      { 
                        deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                        ? (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].legislature?.length ?? 0) * 20
                        : 0
                      }
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="bgTrans wc">
                    DES · Despesas (
                    {
                      deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                      ? (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.cabinetExpense ?? 0 != 0) || (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.cabinetPeriod ?? 0 != 0)
                      ? (Math.round(
                        (
                          100 - (((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.cabinetExpense ?? 0) / (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.cabinetPeriod ?? 0)) / cabinetBudget) * 100
                        )
                        *10)/10).toString().replace('.',',') + "%"
                      : ""
                      : "nenhum dado"
                    }
                    {
                      deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                      ? (
                        100 - (((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.cabinetExpense ?? 0) / (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.cabinetPeriod ?? 0)) / cabinetBudget) * 100
                      ) && (
                        100 - (((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.parliamentaryQuotaExpense ?? 0) / (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.parliamentaryQuotaPeriod ?? 0)) / parliamentaryQuotaBudget) * 100
                      )
                        ? " | "
                        : (
                          100 - (((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.cabinetExpense ?? 0) / (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.cabinetPeriod ?? 0)) / cabinetBudget) * 100
                        ) || (
                          100 - (((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.parliamentaryQuotaExpense ?? 0) / (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.parliamentaryQuotaPeriod ?? 0)) / parliamentaryQuotaBudget) * 100
                        )
                        ? ""
                        : "dados não encontrados"
                      : "dados não encontrados"
                    }
                    {
                      deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                      ? (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.parliamentaryQuotaExpense ?? 0 != 0) || (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.parliamentaryQuotaPeriod ?? 0 != 0)
                      ? (Math.round(
                        (
                          100 - (((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.parliamentaryQuotaExpense ?? 0) / (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.parliamentaryQuotaPeriod ?? 0)) / parliamentaryQuotaBudget) * 100
                        )
                        *10)/10).toString().replace('.',',') + "%"
                      : ""
                      : "nenhum dado"
                    }
                    {/*
                      (expenses?.parliamentaryQuotaExpense != null && expenses?.parliamentaryQuotaExpense != undefined &&
                        expenses?.parliamentaryQuotaBudget != null && expenses?.parliamentaryQuotaBudget != undefined) &&
                      (expenses?.parliamentaryQuotaExpense != 0 || expenses?.parliamentaryQuotaBudget != 0) ||
                      (expenses?.cabinetExpense != null && expenses?.cabinetExpense != undefined &&
                        expenses?.cabinetBudget != null && expenses?.cabinetBudget != undefined) &&
                      (expenses?.cabinetExpense != 0 || expenses?.cabinetBudget != 0)
                      ? "(" +
                        (expenses?.parliamentaryQuotaExpense != null && expenses?.parliamentaryQuotaExpense != undefined &&
                          expenses?.parliamentaryQuotaBudget != null && expenses?.parliamentaryQuotaBudget != undefined) &&
                        (expenses?.parliamentaryQuotaExpense != 0 || expenses?.parliamentaryQuotaBudget != 0)
                        ? (
                            100 -
                            (expenses.parliamentaryQuotaExpense /
                              expenses.parliamentaryQuotaBudget == 0 ? 1 : expenses.parliamentaryQuotaBudget) *
                              100
                          ) + "%" //.toFixed(2)
                        : "(" +
                        (expenses?.cabinetExpense != null && expenses?.cabinetExpense != undefined &&
                          expenses?.cabinetBudget != null && expenses?.cabinetBudget != undefined) &&
                        (expenses?.cabinetExpense != 0 || expenses?.cabinetBudget != 0)
                        ? (
                          100 -
                          (expenses.cabinetExpense /
                            expenses.cabinetBudget == 0 ? 1 : expenses.cabinetBudget) *
                            100
                        ) + "%)" //.toFixed(2)
                        : ")"
                      : ""
                    */}

                    {/*{ (expenses?.parliamentaryQuotaExpense == null &&
                    expenses?.parliamentaryQuotaBudget == null) || (expenses?.parliamentaryQuotaExpense == 0 &&
                      expenses?.parliamentaryQuotaBudget == 0)
                      ? ""
                      : (
                          100 -
                          (expenses.parliamentaryQuotaExpense /
                            expenses.parliamentaryQuotaBudget) *
                            100
                        ).toFixed(2) + "%"}{" "}
                    |{" "}
                    { (expenses?.cabinetExpense == null &&
                    expenses?.cabinetBudget == null) || (expenses?.cabinetExpense == 0 &&
                      expenses?.cabinetBudget == 0)
                      ? ""
                      : (
                          100 -
                          (expenses.cabinetExpense / expenses.cabinetBudget) *
                            100.0
                        ).toFixed(2) + "%"}*/}
                      ){' '}
                    <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={popover2}>
                    <Image
                      style={{
                        width: "24px",
                        //position: "sticky",
                        left: "calc(50vw - 48px)",
                        top: "calc(20vh - 48px)",
                        zIndex: 1020,
                      }}
                      
                      src={
                        icon?.urlSearch ? icon.urlQuestion : ''
                        //"https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/459980.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTgxMTIwMCwicSI6bnVsbCwiaWF0IjoxNjM1NjEyODA3fQ__.d52f7b901cc75074197d5fc1f564b79a3202d3bcdfe26f9d463834b6983225ae"
                      }
                    />
                    </OverlayTrigger>
                    <span className="cardTextRight">
                    {
                      console.log("OLHA AQUI")
                    }
                    {
                      console.log(
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? 0].expenses?.cabinetExpense ?? 0) + " " +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? 0].expenses?.cabinetPeriod ?? 0)
                      )
                    }
                    {
                      (Math.round(
                      ((
                      ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                      ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.cabinetPeriod
                      ? (100 - ((((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.cabinetExpense ?? 0) / (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.cabinetPeriod ?? 0)) ?? 0) / cabinetBudget) * 100 ?? 0)
                      : 0
                      : 0) +
                      (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                      ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.parliamentaryQuotaPeriod
                      ? (100 - ((((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.parliamentaryQuotaExpense ?? 0) / (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.parliamentaryQuotaPeriod ?? 0)) ?? 0) / parliamentaryQuotaBudget) * 100 ?? 0)
                      : 0
                      : 0)) / 2
                      ) ?? 0)
                      *10)/10).toString().replace('.',',')
                    }
                      {/*(expenses?.parliamentaryQuotaExpense == null &&
                      expenses?.parliamentaryQuotaBudget == null
                        ? 0
                        : (expenses?.parliamentaryQuotaExpense == 0 &&
                          expenses?.parliamentaryQuotaBudget == 0) 
                          ? 100
                          : parseInt(
                            (
                              100 -
                              (expenses.parliamentaryQuotaExpense /
                                expenses.parliamentaryQuotaBudget) *
                                100
                            ).toFixed(2)
                          ) +
                          (expenses?.cabinetExpense == null &&
                          expenses?.cabinetBudget == null
                            ? 0
                            : (expenses?.cabinetExpense == 0 &&
                              expenses?.cabinetBudget == 0) 
                              ? 100
                              : parseInt(
                                (
                                  100 -
                                  (expenses.cabinetExpense /
                                    expenses.cabinetBudget) *
                                    100
                                ).toFixed(2)
                                  ))) / 2*/}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="bgTrans wc">
                    DIS · Discursos{' '}
                    <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={popover3}>
                    <Image
                      style={{
                        width: "24px",
                        //position: "sticky",
                        left: "calc(50vw - 48px)",
                        top: "calc(20vh - 48px)",
                        zIndex: 1020,
                      }}
                      
                      src={
                        icon?.urlSearch ? icon.urlQuestion : ''
                        //"https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/459980.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTgxMTIwMCwicSI6bnVsbCwiaWF0IjoxNjM1NjEyODA3fQ__.d52f7b901cc75074197d5fc1f564b79a3202d3bcdfe26f9d463834b6983225ae"
                      }
                    />
                    </OverlayTrigger>
                    <span className="cardTextRight">
                      {
                        (Math.round(
                        (
                          deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                          ? (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].speech ?? 0) * 100/790
                          : 0
                        )
                        *10)/10)
                        .toString().replace('.',',')
                        //speechs?.count == null ? 0 : (speechs.count * 100) / 790
                      }
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="bgTrans wc">
                    VOT · Votações (
                    {deputyCompleteData?.dados.id
                      ? deputyExtraDataDictionary[deputyCompleteData.dados.id]
                          ?.voting != undefined
                        ? deputyExtraDataDictionary[deputyCompleteData.dados.id]
                            .voting
                        : 0
                      : 0}
                    %){' '}
                    <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={popover4}>
                    <Image
                      style={{
                        width: "24px",
                        //position: "sticky",
                        left: "calc(50vw - 48px)",
                        top: "calc(20vh - 48px)",
                        zIndex: 1020,
                      }}
                      
                      src={
                        icon?.urlSearch ? icon.urlQuestion : ''
                        //"https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/459980.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTgxMTIwMCwicSI6bnVsbCwiaWF0IjoxNjM1NjEyODA3fQ__.d52f7b901cc75074197d5fc1f564b79a3202d3bcdfe26f9d463834b6983225ae"
                      }
                    />
                    </OverlayTrigger>
                    <span className="cardTextRight">
                      {deputyCompleteData?.dados.id
                        ? deputyExtraDataDictionary[deputyCompleteData.dados.id]
                            ?.voting != undefined
                          ? deputyExtraDataDictionary[
                              deputyCompleteData.dados.id
                            ].voting
                          : 0
                        : 0}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="bgTrans wc">
                    PRE · Presenças (
                    {/*
                    attendances?.committee.attendance == null &&
                    attendances?.committee.miss == null &&
                    (attendances?.range == null || attendances?.range == 0) &&
                    attendances?.plenary.dSAttendance == null &&
                    attendances?.plenary.dSJustified == null &&
                    attendances?.plenary.dSMiss == null &&
                    attendances?.plenary.deliberativedSessions == null &&
                    (attendances?.range == null || attendances?.range == 0)
                      ? 0
                      : Math.round(
                          ((attendances.committee.attendance +
                            attendances.committee.justified) /
                            (attendances.committee.attendance +
                              attendances.committee.justified +
                              attendances.committee.miss)) *
                            100
                        ) +
                        "%" +
                        " | " +
                        (attendances.plenary.dSAttendance == null
                          || attendances.plenary.dSJustified == null
                          || attendances.plenary.deliberativedSessions == null) ||
                          (attendances.plenary.dSAttendance == 0
                            && attendances.plenary.dSJustified == 0
                            && attendances.plenary.deliberativedSessions == 0)
                          ? ""
                          : Math.round(
                          ((attendances.plenary.dSAttendance +
                            attendances.plenary.dSJustified) /
                            attendances.plenary.deliberativedSessions) *
                            100
                        ) +
                        "%"
                        */}
                      {
                        deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                        ? ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0)) != 0 ||
                        ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionMiss ?? 0)) != 0
                          ? Math.round((
                            ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                            (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0))/
                            ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                            (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0) +
                            (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionMiss ?? 0))
                          ) * 100) + "%"
                          : null
                        : null
                      }
                      {
                        deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                        ? ((((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0)) != 0 ||
                        ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionMiss ?? 0)) != 0) &&
                        (((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0)) != 0 ||
                        ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryMiss ?? 0)) != 0))
                        ? " | "
                        : ((((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0)) != 0 ||
                        ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionMiss ?? 0)) != 0) ||
                        (((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0)) != 0 ||
                        ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryMiss ?? 0)) != 0))
                        ? null
                        : "dados não encontrados"
                        : "sem dados"
                      }
                      {
                        deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                        ? ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0)) != 0 ||
                        ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryMiss ?? 0)) != 0
                          ? Math.round((
                              ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                              (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0))/
                              ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                              (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0) +
                              (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryMiss ?? 0))
                            ) * 100) + "%"
                            : null
                        : null
                      }
                    ){' '}
                    <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={popover5}>
                    <Image
                      style={{
                        width: "24px",
                        //position: "sticky",
                        left: "calc(50vw - 48px)",
                        top: "calc(20vh - 48px)",
                        zIndex: 1020,
                      }}
                      
                      src={
                        icon?.urlSearch ? icon.urlQuestion : ''
                        //"https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/459980.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTgxMTIwMCwicSI6bnVsbCwiaWF0IjoxNjM1NjEyODA3fQ__.d52f7b901cc75074197d5fc1f564b79a3202d3bcdfe26f9d463834b6983225ae"
                      }
                    />
                    </OverlayTrigger>
                    <span className="cardTextRight">
                      {/*
                      attendances?.committee.attendance == null &&
                      attendances?.committee.miss == null &&
                      (attendances?.range == null || attendances?.range == 0) &&
                      attendances?.plenary.dSAttendance == null &&
                      attendances?.plenary.dSJustified == null &&
                      attendances?.plenary.dSMiss == null &&
                      attendances?.plenary.deliberativedSessions == null &&
                      (attendances?.range == null || attendances?.range == 0)
                        ? 0
                        : (Math.round(
                            ((attendances.committee.attendance +
                              attendances.committee.justified) /
                              (attendances.committee.attendance +
                                attendances.committee.justified +
                                attendances.committee.miss)) *
                              100
                          ) + 
                          ((attendances.plenary.dSAttendance == null
                            || attendances.plenary.dSJustified == null
                            || attendances.plenary.deliberativedSessions == null) ||
                            (attendances.plenary.dSAttendance == 0
                              && attendances.plenary.dSJustified == 0
                              && attendances.plenary.deliberativedSessions == 0)
                            ? 0
                            : Math.round(
                              ((attendances.plenary.dSAttendance +
                                attendances.plenary.dSJustified) /
                                attendances.plenary.deliberativedSessions) *
                                100
                            ))) /
                          2
                      */}
                      {
                        (Math.round(
                          (
                        (
                          (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                          ? ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                          (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0)) != 0 &&
                          ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                          (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0) +
                          (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionMiss ?? 0)) != 0
                            ? Math.round((
                              ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                              (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0))/
                              ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                              (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0) +
                              (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionMiss ?? 0))
                            ) * 100)
                            : 0
                          : 0)
                          +
                          (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                          ? ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                          (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0)) != 0 &&
                          ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                          (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0) +
                          (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryMiss ?? 0)) != 0
                            ? Math.round((
                              ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                              (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0))/
                              ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                              (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0) +
                              (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryMiss ?? 0))
                            ) * 100)
                            : 0
                          : 0)
                        )/2
                        )
                        *10)/10)
                        .toString().replace('.',',')
                      }
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="bgTrans wc">
                    LEI · Leis Aprovadas (
                    {authorships?.total == null ? 0 : authorships.total} +{" "}
                    {reports?.total == null ? 0 : reports.total} em{" "}
                    {/*
                    {legislatures?.count == null
                      ? 0
                      : legislatures.count == 1
                      ? legislatures.count + " legislatura"
                      : legislatures.count + " legislaturas"}
                    )
                    <span className="cardTextRight">
                      {(
                        (+(authorships?.total == null ? 0 : authorships.total) +
                          +(reports?.total == null ? 0 : reports.total)) /
                        (legislatures?.count == null ? 0 : legislatures.count)
                      ).toFixed(2)}
                    </span>
                    */}
                    
                      {
                        deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                        ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].legislature?.length == 1
                        ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].legislature?.length + " legislatura"
                        : deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].legislature?.length + " legislaturas"
                        : ""
                      }
                    ){' '}
                    <OverlayTrigger placement="top" delay={{ show: 250, hide: 400 }} overlay={popover6}>
                    <Image
                      style={{
                        width: "24px",
                        //position: "sticky",
                        left: "calc(50vw - 48px)",
                        top: "calc(20vh - 48px)",
                        zIndex: 1020,
                      }}
                      
                      src={
                        icon?.urlSearch ? icon.urlQuestion : ''
                        //"https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/459980.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTgxMTIwMCwicSI6bnVsbCwiaWF0IjoxNjM1NjEyODA3fQ__.d52f7b901cc75074197d5fc1f564b79a3202d3bcdfe26f9d463834b6983225ae"
                      }
                    />
                    </OverlayTrigger>
                    <span className="cardTextRight">
                      {
                        (Math.round(
                          (
                        (+(authorships?.total == null ? 0 : authorships.total) +
                          +(reports?.total == null ? 0 : reports.total)) /
                        (
                          deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                          ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].legislature?.length ?? 1
                          : 1
                        )
                        )
                        *10)/10)
                        .toString().replace('.',',')
                       }
                    </span>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={12} md={12}>
                <h4 className="wc">Informações Adicionais e Detalhadas</h4>
                <br />
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      Despesas de Cota Parlamentar e Verba de Gabinete, respectivamente <br />
                      (R$
                      {
                        commaNotation(
                          String(
                            (
                              (
                                deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                                ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.cabinetExpense ?? 0
                                : 0
                              )
                            ).toFixed(2)
                          )
                        )
                      }
                      {/*expenses?.parliamentaryQuotaExpense == null
                        ? ""
                        : commaNotation(
                            String(
                              expenses.parliamentaryQuotaExpense.toFixed(2)
                            )
                          )*/}{" "}
                      + R$
                      {
                        commaNotation(
                          String(
                            (
                              (
                                deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                                ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.parliamentaryQuotaExpense ?? 0
                                : 0
                              )
                            ).toFixed(2)
                          )
                        )
                      }
                      {/*expenses?.cabinetExpense == null
                        ? ""
                        : commaNotation(
                            String(expenses.cabinetExpense.toFixed(2))
                          )*/}{" "}
                      = R$
                      {
                        commaNotation(
                          String(
                            (
                              (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                              ? (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.cabinetExpense ?? 0) +
                              (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].expenses?.parliamentaryQuotaExpense ?? 0)
                              : 0)
                            ).toFixed(2)
                          )
                        )
                      }
                      {/*commaNotation(
                        String(
                          (
                            +(expenses?.parliamentaryQuotaExpense == null
                              ? 0
                              : expenses.parliamentaryQuotaExpense) +
                            +(expenses?.cabinetExpense == null
                              ? 0
                              : expenses.cabinetExpense)
                          ).toFixed(2)
                        )
                      )*/}
                      )
                    </Accordion.Header>
                    <Accordion.Body>
                      <Button variant="primary" onClick={ () => { waitExpense(deputyCompleteData?.dados.id ?? 0, 1, deputiesDataFilter.find(politician => (politician.id == (deputyCompleteData?.dados.id ?? 0))) ?? { id: 0, uri: "", nome: "", siglaPartido: "", uriPartido: "", siglaUf: "", idLegislatura: 0, urlFoto: "", email: "" }) } }>Carregar dados</Button>
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Discursos (Total: {" "}
                        {
                          deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                          ? deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].speech ?? 0
                          : 0
                        }
                      )
                    </Accordion.Header>
                    <Accordion.Body>
                      {/*{
                        speechs?.types == null
                        ? ""
                        : speechs.types.length == 0
                        ? ""
                        : "| " +
                          respondJson(speechs.types).join(" ").toLowerCase()
                      }*/}
                      <Button variant="primary" onClick={ () => { waitSpeech(deputyCompleteData?.dados.id ?? 0, 1) } }>Carregar dados</Button>
                      {/*<h5 style={{ textAlign: "left" }}>Tipos de Discursos</h5>
                      <Table responsive hover size="sm">
                        <thead>
                          <tr>
                            <th
                              style={{
                                textAlign: "right",
                                paddingRight: "1vw",
                              }}
                            >
                              Descrição
                            </th>
                            <th
                              style={{
                                width: "10vw",
                                textAlign: "left",
                                paddingLeft: "1vw",
                              }}
                            >
                              Valor
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {/*{
                            setSpeechData(deputyCompleteData?.dados.id ?? 0, 1)
                          }*/}
                          {
                            //showSpeech(speechs != undefined ? speechs : {})
                            /*speechs.map((el, ix) => (
                              <tr>
                                <td style={{ textAlign: "right", paddingRight: "1vw" }}>el.types</td>
                                <td style={{ width: "10vw", textAlign: "left", paddingLeft: "1vw" }}>
                                </td>
                              </tr>
                            ));*/
                          }
                        {/*</tbody>
                      </Table>*/}
                      {/*<h5 style={{ textAlign: "left" }}>Presença em Comissão</h5>
                      <Table responsive hover size="sm">
                        <thead>
                          <tr>
                            <th style={{ textAlign: "right", paddingRight: "1vw" }}>Descrição</th>
                            <th style={{ width: "10vw", textAlign: "left", paddingLeft: "1vw" }}>Valor</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td style={{ textAlign: "right", paddingRight: "1vw" }}>Resultado Percentual</td>
                            <td style={{ width: "10vw", textAlign: "left", paddingLeft: "1vw" }}>
                              {(attendances?.committee.attendance == null &&
                                attendances?.committee.miss == null &&
                                attendances?.range == null) ||
                              attendances?.range == 0
                                ? ""
                                : Math.round(
                                    ((attendances.committee.attendance +
                                      attendances.committee.justified) /
                                      (attendances.committee.attendance +
                                        attendances.committee.justified +
                                        attendances.committee.miss) ) *
                                      100
                                  ) + "%"}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "right", paddingRight: "1vw" }}>Presença</td>
                            <td style={{ width: "10vw", textAlign: "left", paddingLeft: "1vw" }}>
                              {attendances?.committee.attendance == null
                                ? ""
                                : attendances.committee.attendance}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "right", paddingRight: "1vw" }}>Ausências justificadas</td>
                            <td style={{ width: "10vw", textAlign: "left", paddingLeft: "1vw" }}>
                              {attendances?.committee.justified == null
                                ? ""
                                : attendances.committee.justified}
                            </td>
                          </tr>
                          <tr>
                            <td style={{ textAlign: "right", paddingRight: "1vw" }}>Ausências não justificadas</td>
                            <td style={{ width: "10vw", textAlign: "left", paddingLeft: "1vw" }}>
                              {attendances?.committee.miss == null
                                ? ""
                                : attendances.committee.miss}
                            </td>
                          </tr>
                        </tbody>
                      </Table>*/}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Presença em Comissões e Plenário, respectivamente (
                      {
                        deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                        ? ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0)) != 0 ||
                        ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionMiss ?? 0)) != 0
                        ? Math.round((
                            ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                            (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0))/
                            ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                            (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0) +
                            (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionMiss ?? 0))
                          ) * 100) + "%"
                          : null
                        : null
                      }
                      {/*
                      (attendances?.committee.attendance == null &&
                        attendances?.committee.miss == null &&
                        attendances?.range == null) ||
                      attendances?.range == 0
                        ? ""
                        : Math.round(
                            ((attendances.committee.attendance +
                              attendances.committee.justified) /
                              (attendances.committee.attendance +
                                attendances.committee.justified +
                                attendances.committee.miss)) *
                              100
                          ) + "%"
                          */}
                      {
                        deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                        ? ((((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0)) != 0 ||
                        ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionMiss ?? 0)) != 0) &&
                        (((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0)) != 0 ||
                        ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryMiss ?? 0)) != 0))
                        ? " | "
                        : ((((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0)) != 0 ||
                        ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionMiss ?? 0)) != 0) ||
                        (((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0)) != 0 ||
                        ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryMiss ?? 0)) != 0))
                        ? null
                        : "dados não encontrados"
                        : "sem dados"
                      }
                      {
                        deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                        ? ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0)) != 0 ||
                        ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0) +
                        (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryMiss ?? 0)) != 0
                          ? Math.round((
                              ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                              (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0))/
                              ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                              (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0) +
                              (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryMiss ?? 0))
                            ) * 100) + "%"
                            : null
                        : null
                      }
                      {/*
                      (attendances?.plenary.dSAttendance == null &&
                        attendances?.plenary.dSJustified == null &&
                        attendances?.plenary.dSMiss == null &&
                        attendances?.plenary.deliberativedSessions == null &&
                        attendances?.range == null) ||
                      attendances?.range == 0
                        ? ""
                        : Math.round(
                            ((attendances.plenary.dSAttendance +
                              attendances.plenary.dSJustified) /
                              attendances.plenary.deliberativedSessions) *
                              100
                          ) + "%"
                          */}
                      )
                    </Accordion.Header>
                    <Accordion.Body>
                      {
                        deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                        ? ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                          (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0)) != 0 &&
                          ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionPresence ?? 0) +
                          (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionJustified ?? 0) +
                          (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.commissionMiss ?? 0)) != 0
                          ? buildTable('commission')
                          : null
                        : null
                      }

                      <br />
                      {
                        deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""]
                          ? ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                            (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0)) != 0 &&
                            ((deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryPresence ?? 0) +
                            (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryJustified ?? 0) +
                            (deputyExtraDataDictionary[deputyCompleteData?.dados.id ?? ""].presences?.plenaryMiss ?? 0)) != 0
                            ? buildTable('plenary')
                            : null
                        : null
                      }
                      
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      Proposições Autorais (
                      {authorships?.total == null ? 0 : authorships.total} |{" "}
                      {authorships?.propositions.length}{" "}
                      {authorships?.propositions.length == 1
                        ? "encontrada"
                        : "encontradas"}
                      )
                    </Accordion.Header>
                    <Accordion.Body>
                      {getDeputyList("authorship")}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      Proposições Relatadas (
                      {reports?.total == null ? 0 : reports.total} |{" "}
                      {reports?.propositions.length}{" "}
                      {reports?.propositions.length == 1
                        ? "encontrada"
                        : "encontradas"}
                      )
                    </Accordion.Header>
                    <Accordion.Body>
                      {getDeputyList("proposition")}
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Col>
            </Row>
          </Container>
        </Modal.Body>

        <Modal.Footer
          style={{ backgroundColor: "#212529", justifyContent: "center" }}
        >
          {/*<Button onClick={props.onHide}>*/}
          <Image
            onClick={props.onHide}
            style={{ width: "48px" }}
            src={
              "https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/15939.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTgxMTIwMCwicSI6bnVsbCwiaWF0IjoxNjM1NjAzNTAxfQ__.77e413861aa572d9d352d8073e6b58f9d7a4374cbe2034ce6aa693eaaaf7dba4"
            }
          />{" "}
          <Image
            onClick={props.onHide}
            style={{ width: "48px" }}
            src={
              "https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/16789.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTgxMTIwMCwicSI6bnVsbCwiaWF0IjoxNjM1NjA1NDkzfQ__.9e4c55e2bd940ca9bfc2f0b06bef99da774d1809aa036c65b6dc5493eb8cc686"
            }
          />
          {/*</Button>*/}
          <ProgressBar variant="info" now={20} />
        </Modal.Footer>
      </Modal>
    );
  }

  function exists (value: any): boolean {
    if (value != null && value != undefined)
      return true
    else
      return false
  }

  function notZero (value: any): boolean {
    if (value != 0)
      return true
    else
      return false
  }

  function partyLogo(party: string) {
    if (party === "") {
      return { logo: "", border: false };
    }

    const partyLogo = partyLogoDictionary[party];
    return { logo: partyLogo.url, border: partyLogo.border };
  }

  function getDeputyInformation(type: string): string {
    let text: string = "";
    switch (type) {
      case "name":
        text =
          deputyCompleteData?.dados.nomeCivil == undefined
            ? ""
            : deputyCompleteData.dados.nomeCivil;
        break;
      case "birthDate":
        text =
          deputyCompleteData?.dados.dataNascimento == undefined
            ? ""
            : deputyCompleteData.dados.dataNascimento;
        break;
      case "birthPlace":
        text =
          deputyCompleteData?.dados.municipioNascimento == undefined
            ? ""
            : deputyCompleteData.dados.municipioNascimento;
        break;
      case "birthPlaceState":
        text =
          deputyCompleteData?.dados.ufNascimento == undefined
            ? ""
            : deputyCompleteData.dados.ufNascimento;
        break;
      case "schooling":
        text =
          deputyCompleteData?.dados.escolaridade == undefined
            ? ""
            : deputyCompleteData.dados.escolaridade;
        break;
      case "party":
        text =
          deputyPartyData?.dados.sigla == undefined
            ? ""
            : deputyPartyData.dados.sigla;
        break;
      case "partyLogo":
        text =
          deputyPartyData?.dados.sigla == undefined
            ? partyLogo("").logo
            : partyLogo(deputyPartyData.dados.sigla).logo;
        break;
      case "partyName":
        text =
          deputyPartyData?.dados.nome == undefined
            ? ""
            : deputyPartyData?.dados.nome;
        break;
      case "leader":
        text =
          deputyPartyData?.dados == undefined
            ? ""
            : deputyPartyData.dados.status?.lider == null
            ? ""
            : deputyPartyData.dados.status.lider.nome;
        break;
      case "leaderPhoto":
        text =
          deputyPartyData?.dados == undefined
            ? ""
            : deputyPartyData.dados.status?.lider == null
            ? ""
            : deputyPartyData.dados.status.lider.urlFoto + "maior.jpg";
        break;
      case "status":
        text =
          deputyCompleteData?.dados.ultimoStatus.situacao == undefined
            ? ""
            : deputyCompleteData?.dados.ultimoStatus.situacao;
        break;
      case "eleitoralStatus":
        text =
          deputyCompleteData?.dados.ultimoStatus.condicaoEleitoral == undefined
            ? ""
            : deputyCompleteData?.dados.ultimoStatus.condicaoEleitoral;
        break;

      default:
        break;
    }
    return text;
  }

  function getDeputyList(type: string): any {
    if (type == "profession")
      return deputyProfessionData?.dados.map((profession, idx) => (
        <ListGroup variant="flush" className="cardTextLeft">
          <ListGroup.Item
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
            className="bgTrans wc"
          >
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                width: "48px",
                height: "48px",
              }}
            >
              <Image
                src={"" /*professionIconDictionary[profession.titulo].url*/}
              />
              <h6>&nbsp;{profession.titulo}</h6>
            </div>
            <h6 className="">{nomarlizeDate(profession.dataHora, "ignore")}</h6>
          </ListGroup.Item>
        </ListGroup>
      ));
    if (type == "occupation")
      return deputyOccupationData?.dados.map((occupation, idx) => (
        <ListGroup variant="flush" className="cardTextLeft">
          {occupation.titulo != null ? (
            <ListGroup.Item className="bgTrans wc txtCenter">
              <h6>{occupation.titulo}</h6>
            </ListGroup.Item>
          ) : null}
          {occupation.entidade != null ? (
            <ListGroup.Item className="bgTrans wc">
              Empregador
              <span className="cardTextRight">{occupation.entidade}</span>
            </ListGroup.Item>
          ) : null}
          {occupation.entidadeUF != null || occupation.entidadePais != null ? (
            <ListGroup.Item className="bgTrans wc">
              Localidade
              <span className="cardTextRight">
                {occupation.entidadeUF}{" "}
                {occupation.entidadeUF != null &&
                occupation.entidadePais != null
                  ? " - "
                  : null}{" "}
                {toCapitalize(occupation.entidadePais.toLowerCase())}
              </span>
            </ListGroup.Item>
          ) : null}
          {occupation.anoInicio != null || occupation.anoFim != null ? (
            <ListGroup.Item className="bgTrans wc">
              Período
              <span className="cardTextRight">
                {occupation.anoInicio}{" "}
                {occupation.anoInicio != null && occupation.anoFim != null
                  ? " - "
                  : null}{" "}
                {occupation.anoFim}
              </span>
            </ListGroup.Item>
          ) : null}
          <br />
        </ListGroup>
      ));
    if (type == "proposition")
      return reports?.propositions.map((report, idx) => (
        <ListGroup variant="flush" className="cardTextLeft">
          <ListGroup.Item className="">
            <h6>
              {report.name}
              <span className="cardTextRight">
                <a
                  href={
                    "https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=" +
                    report.link.substring(20, report.link.length)
                  }
                >
                  Acompanhe
                </a>
              </span>
            </h6>
          </ListGroup.Item>
        </ListGroup>
      ));

    if (type == "authorship")
      return authorships?.propositions.map((authorship, idx) => (
        <ListGroup variant="flush" className="cardTextLeft">
          <ListGroup.Item className="">
            <h6>
              {authorship.name}
              <span className="cardTextRight">
                <a
                  href={
                    "https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=" +
                    authorship.link.substring(20, authorship.link.length)
                  }
                >
                  Acompanhe
                </a>
              </span>
            </h6>
          </ListGroup.Item>
        </ListGroup>
      ));
    if (type == "contacts")
      return (
        <ListGroup variant="flush" className="cardTextLeft">
          {deputyCompleteData?.dados.urlWebsite != null ? (
            <ListGroup.Item className="bgTrans wc">
              Web-site
              <span className="cardTextRight">
                <a href={deputyCompleteData?.dados.urlWebsite}>
                  {deputyCompleteData?.dados.urlWebsite}
                </a>
              </span>
            </ListGroup.Item>
          ) : null}
          {deputyCompleteData?.dados.ultimoStatus.email != null ? (
            <ListGroup.Item className="bgTrans wc">
              E-mail
              <span className="cardTextRight">
                {deputyCompleteData.dados.ultimoStatus.email}
              </span>
            </ListGroup.Item>
          ) : null}
          {deputyCompleteData?.dados.ultimoStatus.gabinete.predio != null ||
          deputyCompleteData?.dados.ultimoStatus.gabinete.andar != null ||
          deputyCompleteData?.dados.ultimoStatus.gabinete.sala != null ||
          deputyCompleteData?.dados.ultimoStatus.gabinete.email != null ||
          deputyCompleteData?.dados.ultimoStatus.gabinete.telefone != null ? (
            <h6>
              <br />
              Gabinete
            </h6>
          ) : null}
          {deputyCompleteData?.dados.ultimoStatus.gabinete.predio != null ||
          deputyCompleteData?.dados.ultimoStatus.gabinete.andar != null ||
          deputyCompleteData?.dados.ultimoStatus.gabinete.sala != null ? (
            <ListGroup.Item className="bgTrans wc">
              Endereço do gabinete
              <span className="cardTextRight">
                {deputyCompleteData?.dados.ultimoStatus.gabinete.predio
                  ? "prédio " +
                    deputyCompleteData.dados.ultimoStatus.gabinete.predio +
                    ", "
                  : ""}
                {deputyCompleteData?.dados.ultimoStatus.gabinete.andar
                  ? deputyCompleteData.dados.ultimoStatus.gabinete.andar +
                    "º andar, "
                  : ""}
                {deputyCompleteData?.dados.ultimoStatus.gabinete.sala
                  ? "sala " +
                    deputyCompleteData.dados.ultimoStatus.gabinete.sala
                  : ""}
              </span>
            </ListGroup.Item>
          ) : null}
          {deputyCompleteData?.dados.ultimoStatus.gabinete.email ? (
            <ListGroup.Item className="bgTrans wc">
              E-mail
              <span className="cardTextRight">
                {deputyCompleteData.dados.ultimoStatus.gabinete.email}
              </span>
            </ListGroup.Item>
          ) : null}
          {deputyCompleteData?.dados.ultimoStatus.gabinete.telefone ? (
            <ListGroup.Item className="bgTrans wc">
              Telefône
              <span className="cardTextRight">
                {deputyCompleteData.dados.ultimoStatus.gabinete.telefone}
              </span>
            </ListGroup.Item>
          ) : null}
          {deputyCompleteData?.dados.redeSocial != null ? (
            deputyCompleteData?.dados.redeSocial.length > 0 ? (
              <h6>
                <br />
                Redes Sociais
              </h6>
            ) : null
          ) : null}
          {deputyCompleteData?.dados.redeSocial.map((network, idx: number) => (
            <ListGroup.Item className="bgTrans wc">
              <span className="cardTextRight">{network}</span>
            </ListGroup.Item>
          ))}
          <br />
        </ListGroup>
      );
    if (type == "party")
      return (
        <ListGroup variant="flush" className="cardTextLeft">
          {deputyPartyData?.dados.status.situacao != null ? (
            <ListGroup.Item className="bgTrans wc">
              Situação
              <span className="cardTextRight">
                {deputyPartyData.dados.status.situacao}
              </span>
            </ListGroup.Item>
          ) : null}
          {deputyPartyData?.dados.status.totalMembros != null ? (
            <ListGroup.Item className="bgTrans wc">
              Membros
              <span className="cardTextRight">
                {deputyPartyData.dados.status.totalMembros}
              </span>
            </ListGroup.Item>
          ) : null}
          {deputyPartyData?.dados.status.totalPosse != null ? (
            <ListGroup.Item className="bgTrans wc">
              Empossados
              <span className="cardTextRight">
                {deputyPartyData.dados.status.totalPosse}
              </span>
            </ListGroup.Item>
          ) : null}
          <br />
        </ListGroup>
      );
  }

  let globalDeputyComplete: any
  let globalParty: any
  let globalProfession: any
  let globalOccupation: any
  //let globalLegislature: any
  let globalExpense: any
  let globalSpeech: any
  let globalAttendance: any
  let globalReports: any
  let globalAuthorship: any

  async function setCurrentPolitician(urlPolitician: string, urlParty: string) {
    const getPolitician = async () => {
      const response = await axios.get<DeputyComplete>(urlPolitician);
      //setDeputyCompleteData(response.data);
      globalDeputyComplete = response.data
    };

    const getParty = async () => {
      const response = await axios.get<DeputyParty>(urlParty);
      //setDeputyPartyData(response.data);
      globalParty = response.data
    };

    await getPolitician();
    await getParty();
  }

  function nomarlizeDate(text: string, order: string): string {
    var words = text ? text.split("-") : ["", "", ""];

    //console.log("words");
    //console.log(words);

    if (order != null) {
      var division = words[2] ? words[2].split("T") : ["", ""];
      words[2] = division[0];
      if (order == "ignore")
        return (
          words[2] +
          (words[2] == "" ? "" : "/") +
          words[1] +
          (words[1] == "" ? "" : "/") +
          words[0]
        );
      if (order == "withTime")
        return (
          words[2] +
          (words[2] == "" ? "" : "/") +
          words[1] +
          (words[1] == "" ? "" : "/") +
          words[0] +
          (division[1] == "" || division[1] == undefined
            ? ""
            : " (" + division[1] + ")")
        );
      return (
        words[2] +
        (words[2] == "" ? "" : "/") +
        words[1] +
        (words[1] == "" ? "" : "/") +
        words[0]
      );
    } else
      return (
        words[2] +
        (words[2] == "" ? "" : "/") +
        words[1] +
        (words[1] == "" ? "" : "/") +
        words[0]
      );
  }

  function toCapitalizeName(text: string): string {
    /*const matches = str.matchAll(/\w{3,}/g);

    for(let match of matches) {
      let ind = (match.index ? match.index : 0)
      str = str.substring(0, ind) + match[0].charAt(0).toUpperCase() + match[0].slice(1) + str.substring(ind + match[0].length);
    }
    return str;*/

    var words = text
      .replace(/(?:^|\s)\S/g, function (first: string): string {
        return first.toUpperCase();
      })
      .split(" ");
    for (let ind = 0; ind < words.length; ind++) {
      if (
        words[ind] === "Da" ||
        words[ind] === "Do" ||
        words[ind] === "De" ||
        words[ind] === "Di" ||
        words[ind] === "Das" ||
        words[ind] === "Dos" ||
        words[ind] === "Van" ||
        words[ind] === "Von" ||
        words[ind] === "Del" ||
        words[ind] === "E"
      )
        words[ind] = words[ind].toLowerCase();
    }
    return words.join(" ");
  }

  function toCapitalize(text: string): string {
    return text.replace(/(?:^|\s)\S/g, function (first: string): string {
      return first.toUpperCase();
    });
  }

  /*function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }*/

  // function ContextAwareToggle({ children, eventKey, callback }) {
  //   const { activeEventKey } = useContext(AccordionContext);
  
  //   const decoratedOnClick = useAccordionButton(
  //     eventKey,
  //     () => callback && callback(eventKey),
  //   );
  
  //   const isCurrentEventKey = activeEventKey === eventKey;
  
  //   return (
  //     <button
  //       type="button"
  //       style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
  //       onClick={decoratedOnClick}
  //     >
  //       {children}
  //     </button>
  //   );
  // }

  function showSpeech(speechsList: any): any {
    return respondJson2(speechsList.types)
      .sort(function (a, b) {
        return b.value - a.value;
      })
      .map((el, ix) => (
        <tr>
          <td style={{ textAlign: "right", paddingRight: "1vw" }}>
            {
              el.type.toLowerCase() == "null"
              ? "não identificatido"
              : el.type.toLowerCase()
            }
          </td>
          <td style={{ width: "10vw", textAlign: "left", paddingLeft: "1vw" }}>
            {el.value}
          </td>
        </tr>
      ));
  }

  function topProviders(list: any): any {
    var result = [
      {
        document: 0,
        name: [""],
        value: 0,
      },
    ];
    result.pop();
    //console.log("document");
    let i;
    let finded = false;
    for (i = 0; i < list.length; i++) {
      finded = false;
      for (let j = 0; j < result.length; j++) {
        if (result[j].document == list[i].type) {
          finded = true;
          //console.log(list[i].type);
          result[j].name.push(
            list[i]?.providerName != null ? String(list[i].providerName) : ""
          );
          result[j].value += list[i].documentValue;
        }
      }
      if (!finded) {
        result.push({
          document: list[i]?.type != null ? list[i].type : "",
          name: [
            list[i]?.providerName != null ? String(list[i].providerName) : "",
          ],
          value: list[i]?.documentValue != null ? list[i].documentValue : 0,
        });
      }
    }
    //console.log("result");
    //console.log(list);
    //console.log(result);
    return result
      .sort(function (a, b) {
        return b.value - a.value;
      })
      .map((el, ix) => (
        <tr>
          <td style={{ textAlign: "right", paddingRight: "1vw" }}>
            {el.document.toString().toLowerCase()}
          </td>
          <td style={{ textAlign: "left", paddingLeft: "1vw" }}>
            R${commaNotation(el.value.toFixed(2))}
          </td>
          <td style={{ textAlign: "left", paddingLeft: "1vw" }}>
            {/* <ContextAwareToggle eventKey="0">lista</ContextAwareToggle> */}
            <Accordion>
              <Accordion.Item eventKey="0" >
                <Accordion.Header className="accordionHeader">Ver lista</Accordion.Header>
                <Accordion.Body>
                  { [... new Set(el.name)].map(e => (<p>{ e }</p>)) }
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </td>
        </tr>
      ));
  }

  function respondJson2(json: any): any[] {
    var result = [];
    var keys = [];

    for (var k in json) {
      keys.push(k);
    }

    for (let i = 0; i < keys.length; i++) {
      result.push({ type: keys[i], value: json[keys[i]] });
    }

    return result;
  }

  function respondJson(json: any): string[] {
    var keys = [];
    var data = [];

    for (var k in json) {
      keys.push(k);
    }

    for (let i = 0; i < keys.length; i++) {
      data.push(keys[i]);
      data.push(json[keys[i]] + " |");
    }

    return data;
  }

  function commaNotation(money: string): string {
    return money
      .toString()
      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
      .replace(/,/g, "_")
      .replace(".", ",")
      .replace(/_/g, ".");
  }

  async function setCurrentPoliticianCareer(id: number) {
    const getProfession = async () => {
      const responseProfession = await axios.get<DeputyProfession>(
        "https://dadosabertos.camara.leg.br/api/v2/deputados/" +
          id +
          "/profissoes"
      );
      //setDeputyProfessionData(responseProfession.data);
      globalProfession = responseProfession.data
    };

    const getOccupation = async () => {
      const responseOccupation = await axios.get<DeputyOccupation>(
        "https://dadosabertos.camara.leg.br/api/v2/deputados/" +
          id +
          "/ocupacoes"
      );

      //setDeputyOccupationData(responseOccupation.data);
      globalOccupation = responseOccupation.data
    };

    await getProfession();
    await getOccupation();
  }

  async function setLegislaturesData(id: number) {
    let legislatureList: Legislature = {} as Legislature;
    legislatureList.list = [""];
    legislatureList.count = 0;

    legislatureList.list.pop();

    const response = await axios.get(
      "https://totalcors.herokuapp.com/https://www.camara.leg.br/deputados/" +
        id +
        "/biografia"
    );

    const $ = cheerio.load(response.data);

    const urlElems = $("section > p > a");

    //console.log("legisture");
    //console.log(urlElems);

    urlElems.each((ind: number, val: any) => {
      if (urlElems.length / 2 > ind)
        legislatureList.list.push(String($(val).text()).trim());
    });

    legislatureList.count = legislatureList.list.length;

    //setLegislatures(legislatureList);
    //globalLegislature = legislatureList
    //setLoading(loading ? loading : 0 + 20);
  }

  async function setExpensesData(id: number, page: number, politician: Deputy) {
    const years = ["2019", "2020"];

    var listMonths: number[];
    const state = politician?.siglaUf == null ? "" : politician.siglaUf;
    var parliamentaryQuotaBudget =
      parliamentaryQuotaBudgetDictionary[state].value
    //const cabinetBudget = 111675.59 * 12 * years.length;

    /*const state = politician?.siglaUf == null ? "" : politician.siglaUf;
    var parliamentaryQuotaBudget =
      parliamentaryQuotaBudgetDictionary[state].value //* 12 * years.length;*/

    let expensesData: Expense = {} as Expense;
    expensesData.cabinetExpense = 0;
    expensesData.cabinetBudget = 0;
    expensesData.parliamentaryQuotaExpense = 0;
    expensesData.parliamentaryQuotaBudget = 0
      //parliamentaryQuotaBudget == null ? 0 : parliamentaryQuotaBudget;
    expensesData.parliamentaryExpenseListDescription = [];
    expensesData.range = 0//years.length;

    async function paginationExpense(id: number, page: number, y: number) {
      const response = await axios.get(
        "https://dadosabertos.camara.leg.br/api/v2/deputados/" +
          id +
          "/despesas?ano=" +
          years[y] +
          "&pagina=" +
          page +
          "&itens=1000&ordem=ASC&ordenarPor=mes"
      );

      const parliamentaryExpenseRegisters = response.data.dados;

      //console.log("GABINETE");
      //console.log(parliamentaryExpenseRegisters);

      for (let a = 0; a < parliamentaryExpenseRegisters.length; a++) {
        expensesData.parliamentaryExpenseListDescription.push({
          year: parliamentaryExpenseRegisters[a].ano,
          month: parliamentaryExpenseRegisters[a].mes,
          type: parliamentaryExpenseRegisters[a].tipoDespesa,
          documentCode: parliamentaryExpenseRegisters[a].codDocumento,
          documentType: parliamentaryExpenseRegisters[a].tipoDocumento,
          documentCodeType: parliamentaryExpenseRegisters[a].codTipoDocumento,
          date: parliamentaryExpenseRegisters[a].dataDocumento,
          documentNumber: parliamentaryExpenseRegisters[a].numDocumento,
          documentValue: parliamentaryExpenseRegisters[a].valorDocumento,
          documentUrl: parliamentaryExpenseRegisters[a].urlDocumento,
          providerName: parliamentaryExpenseRegisters[a].nomeFornecedor,
          providerRegister: parliamentaryExpenseRegisters[a].cnpjCpfFornecedor,
          netValue: parliamentaryExpenseRegisters[a].valorLiquido,
          value: parliamentaryExpenseRegisters[a].valorGlosa,
          refund: parliamentaryExpenseRegisters[a].numRessarcimento,
          partCode: parliamentaryExpenseRegisters[a].codLote,
          quota: parliamentaryExpenseRegisters[a].parcela,
        });
        expensesData.parliamentaryQuotaExpense +=
          parliamentaryExpenseRegisters[a].valorDocumento;
        if (!listMonths.includes(parliamentaryExpenseRegisters[a].mes))
          listMonths.push(
            parliamentaryExpenseRegisters[a].mes
          );
        
      }

      if (parliamentaryExpenseRegisters.length === 100) {
        page++;
        await paginationExpense(id, page, y);
      }
    }

    for (let y = 0; y < years.length; y++) {
      listMonths = [];
      await paginationExpense(id, page, y);
      expensesData.parliamentaryQuotaBudget += parliamentaryQuotaBudget * listMonths.length
      expensesData.range += listMonths.length
      

      const response = await axios.get(
        "https://totalcors.herokuapp.com/https://www.camara.leg.br/deputados/" +
          id +
          "/verba-gabinete?ano=" +
          years[y]
      );
      const $ = cheerio.load(response.data);

      const urlElems = $("table > tbody > tr");

      var expensesList: string[] = [];

      urlElems.each((ind: number, val: string) => {
        expensesList = expensesList.concat($(val).find("td").last().text());
      });

      var expensesLast: number[] = [];

      for (let i = 0; i < expensesList.length; i++) {
        if (expensesList[i] != "")
          expensesLast.push(
            parseFloat(expensesList[i].replace(".", "").replace(",", "."))
          );
      }

      expensesData.cabinetExpense += expensesLast.reduce((a, b) => a + b, 0);
      expensesData.cabinetBudget += 111675.59 * expensesList.length
      expensesData.range += expensesList.length
    }

    //setExpenses(expensesData);
    globalExpense = expensesData
    //setLoading(40);
  }

  async function setSpeechData(id: number, page: number) {
    let speechsList: Speech = {} as Speech;
    speechsList.types = {};
    speechsList.count = 0;

    async function counting(id: number, page: number) {
      const response = await axios.get(
        "https://dadosabertos.camara.leg.br/api/v2/deputados/" +
          id +
          "/discursos?idLegislatura=56&dataInicio=2019-01-01&dataFim=2020-12-31&ordenarPor=dataHoraInicio&ordem=ASC&itens=100&pagina=" +
          page
      );
      const speechs = response.data.dados;

      for (var k = speechs.length - 1; k >= 0; k--)
        if (!speechsList.types.hasOwnProperty(speechs[k].tipoDiscurso))
          speechsList.types[speechs[k].tipoDiscurso] = 1;
        else speechsList.types[speechs[k].tipoDiscurso]++;

      speechsList.count += speechs.length;

      if (speechs.length === 100) {
        page++;
        await counting(id, page);
      }
    }

    await counting(id, page);

    //setSpeechs(speechsList);
    globalSpeech = speechsList
    //setLoading(60);
  }

  async function setAttendanceData(id: number) {
    console.log("ATTENDANCE")
    const years = ["2019", "2020"];

    let attendanceData: Attendance = {} as Attendance;
    attendanceData.committee = { attendance: 0, justified: 0, miss: 0 };
    attendanceData.plenary = {
      attendance: 0,
      miss: 0,
      deliberativedSessions: 0,
      dSAttendance: 0,
      dSJustified: 0,
      dSMiss: 0,
    };

    //attendanceData.plenary.pop()

    for (let j = 0; j < years.length; j++) {
      var committeeAttendanceList: string[] = [];
      var plenaryAttendanceList: string[] = [];
      var plenaryAttendanceCalc: number[] = [];

      const responseDeputy = await axios.get(
        "https://totalcors.herokuapp.com/https://www.camara.leg.br/deputados/" +
          id +
          "/presenca-comissoes/" +
          years[j]
      );
      const $ = cheerio.load(responseDeputy.data);

      const urlElemsDeputy = $("table > tbody > tr");

      urlElemsDeputy.each((ind: number, val: string) => {
        committeeAttendanceList = committeeAttendanceList.concat(
          $(val)
            .find("td")
            .last()
            .text()
            .replace(/\s\s+/g, "")
            .split(/(?=[A-Z])/)
        );
      });

      var cAttendance = 0;
      var cJustified = 0;
      var cMiss = 0;

      for (let i = 0; i < committeeAttendanceList.length; i++) {
        if (committeeAttendanceList[i] == "Presença") cAttendance++;
        if (committeeAttendanceList[i] == "Ausência justificada") cJustified++;
        if (committeeAttendanceList[i] == "Ausência não justificada") cMiss++;
      }

      attendanceData.committee.attendance += cAttendance;
      attendanceData.committee.justified += cJustified;
      attendanceData.committee.miss += cMiss;

      console.log(years[j])
      console.log(cAttendance + " " + cJustified + " " + cMiss)
    
      const responsePresenca = await axios.get(
        "https://totalcors.herokuapp.com/https://www.camara.leg.br/deputados/" +
          id +
          "/presenca-plenario/" +
          years[j]
      );
      const $2 = cheerio.load(responsePresenca.data);

      const urlElemsPresenca = $2("table:nth-of-type(2) > tbody > tr");

      console.log("$2");
      console.log(urlElemsPresenca);

      urlElemsPresenca.each((ind: number, val: string) => {
        plenaryAttendanceList = plenaryAttendanceList.concat(
          $2(val).find("td").last().prev().text().replace(/\s\s+/g, "").trim()
        );
      });

      for (let i = 0; i < plenaryAttendanceList.length; i++) {
        if (plenaryAttendanceList[i] != "")
          plenaryAttendanceCalc.push(parseInt(plenaryAttendanceList[i]));
      }

      attendanceData.plenary.attendance += plenaryAttendanceCalc[0];
      attendanceData.plenary.miss += plenaryAttendanceCalc[1];
      attendanceData.plenary.deliberativedSessions += plenaryAttendanceCalc[2];
      attendanceData.plenary.dSAttendance += plenaryAttendanceCalc[3];
      attendanceData.plenary.dSJustified += plenaryAttendanceCalc[4];
      attendanceData.plenary.dSMiss += plenaryAttendanceCalc[5];

      console.log(years[j])
      console.log(plenaryAttendanceCalc)
    }

    attendanceData.range = years.length;

    //setAttendance(attendanceData);
    globalAttendance = attendanceData
    //setLoading(80);
  }

  async function setAuthorshipPropositions(id: number) {
    let propositionList: Proposition = {} as Proposition;

    propositionList.propositions = [
      {
        name: "string",
        link: "string",
      },
    ];

    propositionList.propositions.pop();

    const getPropositionsApproved = async () => {
      const response = await axios.get(
        "https://totalcors.herokuapp.com/https://www.camara.leg.br/internet/sileg/Prop_lista.asp?Autor=0&ideCadastro=" +
          id +
          "&Limite=N&tipoProp=2"
      );
      const $ = cheerio.load(response.data);

      if (response.headers["x-final-url"].includes("Prop_lista")) {
        const urlElemsNumber = $("b");

        const arrayNumber = urlElemsNumber.text().trim().split("\n");

        var number;

        for (let i = 0; i < arrayNumber.length; i++)
          if (arrayNumber[i].includes("Foram encontrados"))
            number = arrayNumber[i].match(/\b(\w+)\b/g)[2];

        propositionList.total = number;

        //console.log(propositionList);

        for (let index = 2; index < Math.ceil(number / 30) + 1; index++) {
          const response = await axios.get(
            "https://totalcors.herokuapp.com/https://www.camara.leg.br/internet/sileg/Prop_lista.asp?Pagina=" +
              index +
              "&Autor=0&ideCadastro=" +
              id +
              "&Limite=N&tipoProp=2"
          );
          const $ = cheerio.load(response.data);

          const urlElems2 = $("table > tbody > tr > td > a");

          urlElems2.each((idx: number, val: any) => {
            var obj = {
              name: $(val).text(),
              link: $(val).attr("href"),
            };
            //console.log(obj);
            propositionList.propositions.push(obj);
          });
        }

        const urlElems = $("table > tbody > tr > td > a");

        urlElems.each((idx: number, val: any) => {
          var obj = {
            name: $(val).text(),
            link: $(val).attr("href"),
          };
          //console.log(obj);
          propositionList.propositions.push(obj);
        });

        //setAuthorships(propositionList);
        globalAuthorship = propositionList
        //setLoading(90);
      } else {
        //revisar
        propositionList.total = 1;

        const urlElems = $("h3");

        const array: string[] = urlElems.text().split("\n");

        array.forEach((element) => {
          element.replace("Inteiro teor", "");
          element.trim();
        });

        for (let i = 0; i < array.length; i++) {
          if (i === 1) {
            array[i] = array[i].replace("Inteiro teor", "");
            var obj = {
              name: array[i].trim(),
              link: response.headers["x-final-url"],
            };
            propositionList.propositions.push(obj);
          }
        }

        //setAuthorships(propositionList);
        globalAuthorship = propositionList
        //setLoading(90);
      }
    };

    await getPropositionsApproved();
  }

  async function setPropositionsReport(id: number) {
    let propositionList: Proposition = {} as Proposition;

    propositionList.propositions = [
      {
        name: "string",
        link: "string",
      },
    ];
    
    propositionList.propositions.pop();

    const getPropositions = async () => {
      const response = await axios.get(
        "https://totalcors.herokuapp.com/https://www.camara.leg.br/internet/sileg/Prop_lista.asp?Relator=0&ideCadastroProp=" +
          id +
          "&Limite=N&tipoProp=3"
      );
      const $ = cheerio.load(response.data);

      if (response.headers["x-final-url"].includes("Prop_lista")) {
        const urlElemsNumber = $("b");

        const arrayNumber = urlElemsNumber.text().trim().split("\n");

        var number;

        for (let i = 0; i < arrayNumber.length; i++)
          if (arrayNumber[i].includes("Foram encontrados"))
            number = arrayNumber[i].match(/\b(\w+)\b/g)[2];

        propositionList.total = number;
        

        //console.log(propositionList);

        for (let index = 2; index < Math.ceil(number / 30) + 1; index++) {
          const response2 = await axios.get(
            "https://totalcors.herokuapp.com/https://www.camara.leg.br/internet/sileg/Prop_lista.asp?Pagina=" +
              index +
              "&Relator=0&ideCadastroProp=" +
              id +
              "&Limite=N&tipoProp=3"
          );
          const $ = cheerio.load(response2.data);

          const urlElems2 = $("table > tbody > tr > td > a");

          urlElems2.each((idx: number, val: any) => {
            var obj = {
              name: $(val).text(),
              link: $(val).attr("href"),
            };
            //console.log(obj);
            propositionList.propositions.push(obj);
          });
        }

        const urlElems = $("table > tbody > tr > td > a");

        urlElems.each((idx: number, val: any) => {
          var obj = {
            name: $(val).text(),
            link: $(val).attr("href"),
          };
          //console.log(obj);
          propositionList.propositions.push(obj);
        });

        //setReports(propositionList);
        globalReports = propositionList
        //setLoading(100);
      } else {
        //revisar
        propositionList.total = 1;

        const urlElems = $("h3");

        const array: string[] = urlElems.text().split("\n");

        array.forEach((element) => {
          element.replace("Inteiro teor", "");
          element.trim();
        });
        
        for (let i = 0; i < array.length; i++) {
          if (i === 1) {
            array[i] = array[i].replace("Inteiro teor", "");
            var obj = {
              name: array[i].trim(),
              link: response.headers["x-final-url"],
            };
            propositionList.propositions.push(obj);
          }
        }

        //setReports(propositionList);
        globalReports = propositionList
        //setLoading(100);
      }
    };

    await getPropositions();
  }

  async function setAllStates() {
    setDeputyCompleteData(globalDeputyComplete);
    setDeputyPartyData(globalParty);
    setDeputyProfessionData(globalProfession);
    setDeputyOccupationData(globalOccupation);
    //setLegislatures(globalLegislature);
    setExpenses(globalExpense);
    //setSpeechs(globalSpeech);
    //setAttendance(globalAttendance);
    setAuthorships(globalAuthorship);
    setReports(globalReports);
  }

  async function setSpeechStates() {
    setSpeechs(globalSpeech);
  }

  async function setExpenseStates() {
    setExpenses(globalExpense);
  }

  async function requestSpeech(id: number, page: number, _callback2: Function) {
    await setSpeechData(id, page);
    await setSpeechStates();
    _callback2();
  }

  async function requestExpense(id: number, page: number, politician: Deputy, _callback2: Function) {
    await setExpensesData(id, page, politician);
    await setExpenseStates();
    _callback2();
  }

  async function waitSpeech(id: number, page: number) {
    requestSpeech(id, page, () => {
      setSpeechShow(true);
    });
  }

  async function waitExpense(id: number, page: number, politician: Deputy) {
    requestExpense(id, page, politician, () => {
      setExpenseShow(true);
    });
  }

  async function allRequests(politician: Deputy, _callback: Function) {
    /*const response = await axios.get(
      "https://dadosabertos.camara.leg.br/api/v2/votacoes?dataInicio=2020-06-01&dataFim=2020-07-01&itens=1000&ordem=DESC&ordenarPor=dataHoraRegistro"
    );*/

    /*setIdPolitician(politician.id);
    setUrlPolitician(politician.uri);
    setCurrentPolitician(politician.uri, politician.uriPartido);
    setCurrentPoliticianCareer();
    setAuthorshipPropositions(politician.id);
    setPropositionsReport(politician.id);
    setLegislaturesData(politician.id);
    setSpeechData(politician.id, 1);
    setAttendanceData(politician.id);
    setExpensesData(politician.id, 1);*/

    //setIdPolitician(160575);
    //setUrlPolitician("https://dadosabertos.camara.leg.br/api/v2/deputados/160575");
    //await setCurrentPolitician(urlPoliticianState ? urlPoliticianState : "", urlParty ? urlParty : "");
    //await setCurrentPoliticianCareer();
    /*await setAuthorshipPropositions(160575);
    await setPropositionsReport(160575);
    await setLegislaturesData(160575);
    await setSpeechData(160575, 1);
    await setAttendanceData(160575);
    await setExpensesData(160575, 1);*/

    setState(politician.siglaUf);
    setIdPolitician(politician.id);
    setUrlPolitician(politician.uri);
    await setCurrentPolitician(politician.uri, politician.uriPartido);
    await setCurrentPoliticianCareer(politician.id);
    await setAuthorshipPropositions(politician.id);
    await setPropositionsReport(politician.id);
    
    //await setLegislaturesData(politician.id);
    //await setSpeechData(politician.id, 1);
    //await setAttendanceData(politician.id);
    //await setExpensesData(politician.id, 1, politician);
    await setAllStates();

    // --

    const id = "160575";

    /*for (let y = 0; y < 2; y++) {
      //await paginationExpense(id, page, y);

      const response = await axios.get(
        "https://totalcors.herokuapp.com/https://www.camara.leg.br/deputados/" +
          id +
          "/verba-gabinete?ano=" +
          ['2019', '2020']
      );
      const $ = cheerio.load(response.data);

      const urlElems = $("table > tbody > tr");

      var expensesList: string[] = [];

      urlElems.each((ind: number, val: string) => {
        expensesList = expensesList.concat($(val).find("td").last().text());
      });

      var expensesLast: number[] = [];

      for (let i = 0; i < expensesList.length; i++) {
        if (expensesList[i] != "")
          expensesLast.push(
            parseFloat(expensesList[i].replace(".", "").replace(",", "."))
          );
      }

      //expensesData.cabinetExpense += expensesLast.reduce((a, b) => a + b, 0);
    }*/

    // --

    //console.log(response);
    _callback();
  }

  async function waitForUs(politician: Deputy) {
    console.log("inicio");
    //setIdPolitician(politician.id);
    //setUrlPolitician(politician.uri);
    //setUrlParty(politician.uriPartido);
    
    setLoaderShow(true);
    allRequests(politician, () => {
      setLoaderShow(false);
      setModalShow(true);
    }); //(politician, () => {})
    //allRequests(politician, () => {});
    //setModalShow(true);
    //allRequests(function (politician) { function () { setModalShow(true); } });
  }

    /*const response = axios.get(
      "https://api.iconscout.com/v3/search?query=science&product_type=item&asset=icon&price=free&per_page=10&page=1&sort=relevant",
      headers: {
        'accept': 'application/json',
        'Client-ID': '188982600146859'
      }
    )*/
    /*axios({
        url: 'https://api.iconscout.com/v3/search?query=lens&product_type=item&asset=icon&price=free&per_page=1&page=61&sort=relevant',
        method: 'get',
        headers: {
            'accept': 'application/json',
            'Client-ID': '188982600146859'
        }
    })
    .then(response => {
      JSON.stringify(response.data.response.items.data[0].urls.original)
    });*/

  return (
    <div style={{ backgroundColor: "black" }}>
      {/* console.log("RESPONSE2") }
      { getIcon('') */}
      {/*<Navbar bg="dark" variant="dark">
      <Container>
      <Navbar.Brand href="#home">Super-Trunfo · os Políticos</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link href="#home">Início</Nav.Link>
        <Nav.Link href="#features">Cartas</Nav.Link>
        <Nav.Link href="#features">Análises e Dados</Nav.Link>
        <Nav.Link href="#features">Explicações</Nav.Link>
        <Nav.Link href="#features">Outros Projetos</Nav.Link>
        <Nav.Link href="#pricing">Desenvolvedores</Nav.Link>
      </Nav>
      </Container>
    </Navbar>*/}

      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        className="navTableSpace"
        style={{ paddingLeft: "3vw" }}
      >
        <Navbar.Brand href="#">
          <TitleSuperTrunfo/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto"
            style={{ maxHeight: "100px", paddingLeft: "3vw" }}
            navbarScroll
          >
            <Nav.Link href="#">Cartas</Nav.Link>
            <Nav.Link href="#">Informações</Nav.Link>
            <Nav.Link href="#">Desenvolvedores</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="mainBg">
        <Image
          style={{
            width: "96px",
            position: "sticky",
            left: "calc(50vw - 48px)",
            top: "calc(20vh - 48px)",
            zIndex: 1020,
          }}
          onClick={() => {
            setShow1(true);//setModalShow2(true);
          }}
          src={
            icon?.urlSearch ? icon.urlSearch : ''
            //"https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/459980.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTgxMTIwMCwicSI6bnVsbCwiaWF0IjoxNjM1NjEyODA3fQ__.d52f7b901cc75074197d5fc1f564b79a3202d3bcdfe26f9d463834b6983225ae"
          }
        />
        <br/>
        <h4 style={{ textAlign: "center" }}>
          <Badge pill bg="light" text="dark">
            Parlamentares: { deputiesDataFilter.length }
            {/* {
              state1.length > 0
              ? state1.sort().map(s => (
                <>
                  <p>{s}: {deputiesDataFilter.filter(politician => (s.includes(politician.siglaUf))).length}</p><br/>
                  {
                    party1 
                    ? party1.sort().map(p => (
                      <p>{"    "}{p}: {deputiesDataFilter.filter(politician => (p.includes(politician.siglaPartido))).length}</p>
                    ))
                    : null
                  }
                </>
              ))
              : null
            } */}
          </Badge>
          <br/>
          <br/>
          {/* <Badge bg="warning" text="dark">
            { stateShow.sort().map(s => (
              <>
                <h4>{s} <span><h5>Membros da camara no estado: {deputiesData.filter(politician => (s.includes(politician.siglaUf))).length}</h5></span></h4><p>Parlamentares encontrados na consulta {deputiesDataFilter.filter(politician => (s.includes(politician.siglaUf))).length} · em porcentagem {(deputiesDataFilter.filter(politician => (s.includes(politician.siglaUf))).length / deputiesData.filter(politician => (s.includes(politician.siglaUf))).length)*100}%</p>
                {
                  partyShow.sort().map(p => (deputiesDataFilter.filter(politician => (p.includes(politician.siglaPartido) && s.includes(politician.siglaUf))).length != 0 ?
                    <p>{"    "}{p} {deputiesDataFilter.filter(politician => (p.includes(politician.siglaPartido) && s.includes(politician.siglaUf))).length}</p>
                    : null
                  ))
                }
              </>
            )) }
          </Badge> */}
          {/* <Badge bg="warning" text="dark"> */}
            { stateShow.sort().map(s => (
              <>
                <ButtonGroup aria-label="Basic example">
                  <Button variant="primary" disabled>{s}</Button>
                  <Button variant="light" disabled>{deputiesData.filter(politician => (s.includes(politician.siglaUf))).length}</Button>
                  <Button variant="outline-light" disabled>{deputiesDataFilter.filter(politician => (s.includes(politician.siglaUf))).length}</Button>
                  <Button variant="outline-light" disabled>{(deputiesDataFilter.filter(politician => (s.includes(politician.siglaUf))).length / deputiesData.filter(politician => (s.includes(politician.siglaUf))).length)*100}%</Button>
                </ButtonGroup>
                <br/>
                {
                  partyShow.sort().map(p => (deputiesDataFilter.filter(politician => (p.includes(politician.siglaPartido) && s.includes(politician.siglaUf))).length != 0 ?
                    <ButtonGroup style={{ margin: "10px" }}aria-label="Basic example">
                      <Button variant="outline-light" disabled>{p}</Button>
                      <Button variant="light" disabled>{deputiesDataFilter.filter(politician => (p.includes(politician.siglaPartido) && s.includes(politician.siglaUf))).length}</Button>
                    </ButtonGroup>
                    : null
                  ))
                }
                <br/>
              </>
            )) }
          {/* </Badge> */}
          
        </h4>
        <br/>
        <div className="cards-container">
          {/*<PoliticianGallery />*/}
          

          {deputiesDataFilter
            /*.filter(politician => (inputName) ? (politician.nome == inputName) : politician)*/
            /*.filter(politician => ((deputyExtraDataDictionary[politician.id]?.gender != undefined) ? deputyExtraDataDictionary[politician.id].gender : false))*/
            /*.filter(politician => (politician.siglaPartido == "PODE"))*/
            /*.filter(politician => (politician.siglaUf == "MG"))*/
            /*.filter((politician) =>
              deputyExtraDataDictionary[politician.id]?.voting != undefined
                ? deputyExtraDataDictionary[politician.id].voting <= 40 &&
                  deputyExtraDataDictionary[politician.id].voting >= 1
                : false
            )*/
            .map((politician, idx) => (
              <div
                className="cardContainerCenter jello-horizontal"
                onClick={async () => {
                  /*setModalShow(true);

              setIdPolitician(politician.id);
              setUrlPolitician(politician.uri);
              setCurrentPolitician(politician.uri, politician.uriPartido);
              setCurrentPoliticianCareer();
              setAuthorshipPropositions(politician.id);
              setPropositionsReport(politician.id);
              setLegislaturesData(politician.id);
              setSpeechData(politician.id, 1);
              setAttendanceData(politician.id);
              setExpensesData(politician.id, 1);*/
                  waitForUs(politician);
                  //setLoading(0);
                }}
              >
                {/* console.log("DEPUTIES") */}
                {/* console.log(politician) */}
                <Image
                  className="cardImage"
                  src={politician.urlFoto + "maior.jpg"}
                  rounded
                />

                <Card bg="dark" text="white" style={{ width: "18rem" }}>
                  <Card.Body className="cardPadding txtCenter">
                    <Card.Subtitle>
                      Deputad
                      {deputyExtraDataDictionary[politician.id]?.gender !=
                      undefined
                        ? deputyExtraDataDictionary[politician.id].gender
                          ? "a"
                          : "o"
                        : "o"}{" "}
                      Federal
                    </Card.Subtitle>
                    <Card.Title>{politician.nome}</Card.Title>

                    <Card.Text className="cardTextLeft">
                      Partido:{" "}
                      <span className="cardTextRight">
                        {politician.siglaPartido}
                      </span>
                      <br />
                      UF (estado):{" "}
                      <span className="cardTextRight">
                        {politician.siglaUf}
                      </span>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}

          <PoliticianModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
          <SearchModal show={modalShow2} onHide={() => setModalShow2(false)} />
          <LoaderModal className="slide-in-elliptic-right-bck" show={loaderShow} onHide={() => setLoaderShow(false)} />
          <SpeechModal show={speechShow} onHide={() => setSpeechShow(false)} />
          <ExpenseModal show={expenseShow} onHide={() => setExpenseShow(false)} />
          <OffCanvasExample placement='end' name='end' />
        </div>
      </div>
    </div>
  );
}

export default App;