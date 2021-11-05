import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

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

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Spinner from "react-bootstrap/Spinner";
import ProgressBar from "react-bootstrap/ProgressBar";

import { useAccordionButton } from "react-bootstrap/AccordionButton";
//import { ContextAwareToggle } from 'react-bootstrap/AccordionButton';
//const decoratedOnClick = useAccordionButton(eventKey: any, onClick: KeyboardEvent);

//import deputyExtraData from '../src/data/deputyExtraData.json';

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
import { deputyExtraDataDictionary } from "./data/deputyExtraDataDictionary";
import { Legislature } from "./interfaces/Legislature";
import { Expense } from "./interfaces/Expense";
import { Speech } from "./interfaces/Speech";
import { Attendance } from "./interfaces/Attendance";
import { Proposition } from "./interfaces/Proposition";
import { getCoordinateData } from "./services/CoordinateService";

const cheerio = require("cheerio");

export function setLegislature(id: number) {
  const url =
    "https://totalcors.herokuapp.com/https://www.camara.leg.br/deputados/" +
    id +
    "/biografia";
}

interface Search {
  name: string,
  /*party: string,
  state: string,
  votingMin: number,
  votingMax: number,
  gender: boolea*/
}

function App() {
  const [modalShow, setModalShow] = useState(false);
  const [modalShow2, setModalShow2] = useState(false);
  const [loaderShow, setLoaderShow] = useState(false);

  const [deputiesData, setDeputiesData] = useState<Deputy[]>([]);
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

  const [legislatures, setLegislatures] = useState<Legislature>();
  const [expenses, setExpenses] = useState<Expense>();
  const [speechs, setSpeechs] = useState<Speech>();
  const [attendances, setAttendance] = useState<Attendance>();

  const [authorships, setAuthorships] = useState<Proposition>();
  const [reports, setReports] = useState<Proposition>();

  //const [loading, setLoading] = useState<number>();
  const [search, setSearch] = useState<Search>();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get<DeputyResponse>(
        "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome"
      );
      setDeputiesData(response.data.dados);
    };

    getData();
  }, []);

  /*const handleSubmit = (event) => {
    const form = event.currentTarget;
    setSearch({name: event})
  }*/

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
                        /*onChange={e=>{ setSearch({name: e.target.value.toString()})}}*/
                      />
                      <label htmlFor="floatingInputCustom">Nome</label>
                    </Form.Floating>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridPassword">
                    <FloatingLabel
                      controlId="floatingSelectGrid"
                      label="Partido"
                    >
                      <Form.Select id="party" aria-label="Floating label select example">
                        <option>todos</option>
                        <option value="DEM">DEM</option>
                        <option value="PT">PT</option>
                        <option value="PV">PV</option>
                      </Form.Select>
                    </FloatingLabel>
                  </Form.Group>
                </Row>

                <Row className="mb-3 wc">
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Col sm={10}>
                      <Form.Check
                        type="radio"
                        label="Todos"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                      />
                      <Form.Check
                        type="radio"
                        label="Maculino"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                      />
                      <Form.Check
                        type="radio"
                        label="Feminino"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    controlId="formGridPassword"
                    className="wc"
                  >
                    <Form.Label>Governismo</Form.Label>
                    <Form.Range min="0" max="100" value="0" step="5" />
                    <Form.Range />
                  </Form.Group>
                </Row>
              </Col>
            </Row>
            <Modal.Footer className="bg-dark">
              <Form.Group>
                <Button variant="primary" type="submit">Procurar</Button> {/*onClick={setSearch({name: formGridPassword})}*/}
              </Form.Group>
            </Modal.Footer>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    );
  }

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
            backgroundImage: `linear-gradient(rgba(141, 153, 174, 0.1), rgba(0, 0, 0, 0.8)), url("https://images.unsplash.com/photo-1598882281180-da3d409fea7a?ixid=MnwyNjMxNDV8MHwxfGFsbHx8fHx8fHx8fDE2MzU3NDQzODU&ixlib=rb-1.2.1")`,
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

  function PoliticianModal(props: any) {
    console.log("dados");
    console.log(deputyCompleteData);
    console.log(deputyPartyData);
    console.log(deputyProfessionData);
    console.log(deputyOccupationData);
    console.log(reports);
    console.log(authorships);
    console.log(legislatures);
    console.log(speechs);
    console.log(attendances);
    console.log(expenses);

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
              <Col xs={6} md={6}>
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
              <Col xs={6} md={6}>
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
                <br />
                <Image
                  width="150px"
                  src={getDeputyInformation("leaderPhoto")}
                  thumbnail
                />
                <br />
                <br />
                <h6 className="cardTextLeft wc">
                  Líder
                  <span className="cardTextRight">
                    {getDeputyInformation("leader")}
                  </span>
                </h6>
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
                <h4 className="wc">Gráfico</h4>
                <br />
                <PoliticianRadar
                  data={getCoordinateData(
                    legislatures,
                    expenses,
                    speechs,
                    attendances,
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
                    Legislaturas (
                    {legislatures?.list == null
                      ? ""
                      : legislatures.list.join(" ")}
                    )
                    <span className="cardTextRight">
                      {legislatures?.count == null ? 0 : legislatures.count}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="bgTrans wc">
                    Despesas (
                    {
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
                    }

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
                      )
                    <span className="cardTextRight">
                      {(expenses?.parliamentaryQuotaExpense == null &&
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
                              ))) / 2}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="bgTrans wc">
                    Discursos
                    <span className="cardTextRight">
                      {speechs?.count == null ? 0 : (speechs.count * 100) / 800}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="bgTrans wc">
                    Votações (
                    {deputyCompleteData?.dados.id
                      ? deputyExtraDataDictionary[deputyCompleteData.dados.id]
                          ?.voting != undefined
                        ? deputyExtraDataDictionary[deputyCompleteData.dados.id]
                            .voting
                        : 0
                      : 0}
                    %)
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
                    Presenças (
                    {attendances?.committee.attendance == null &&
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
                        "%"}
                    )
                    <span className="cardTextRight">
                      {attendances?.committee.attendance == null &&
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
                          2}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="bgTrans wc">
                    Leis Aprovadas (
                    {authorships?.total == null ? 0 : authorships.total} +{" "}
                    {reports?.total == null ? 0 : reports.total} em{" "}
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
                      Despesas de Cota Parlamentar e Verba de Gabinete. respectivamente (R$
                      {expenses?.parliamentaryQuotaExpense == null
                        ? ""
                        : commaNotation(
                            String(
                              expenses.parliamentaryQuotaExpense.toFixed(2)
                            )
                          )}{" "}
                      + R$
                      {expenses?.cabinetExpense == null
                        ? ""
                        : commaNotation(
                            String(expenses.cabinetExpense.toFixed(2))
                          )}{" "}
                      = R$
                      {commaNotation(
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
                      )}
                      )
                    </Accordion.Header>
                    <Accordion.Body>
                      <h5 style={{ textAlign: "left" }}>
                        Maiores provedores de serviços
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
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Discursos (Total: {speechs?.count == null ? 0 : speechs.count})
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
                      <h5 style={{ textAlign: "left" }}>Tipos de Discussões</h5>
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
                            showSpeech(speechs != undefined ? speechs : {})
                            /*speechs.map((el, ix) => (
                              <tr>
                                <td style={{ textAlign: "right", paddingRight: "1vw" }}>el.types</td>
                                <td style={{ width: "10vw", textAlign: "left", paddingLeft: "1vw" }}>
                                </td>
                              </tr>
                            ));*/
                          }
                        </tbody>
                      </Table>
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
                                attendances.committee.miss)) *
                              100
                          ) + "%"}{" "}
                      |{" "}
                      {(attendances?.plenary.dSAttendance == null &&
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
                          ) + "%"}
                      )
                    </Accordion.Header>
                    <Accordion.Body>
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
                                        attendances.committee.miss)) *
                                      100
                                  ) + "%"}
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
                              {attendances?.committee.attendance == null
                                ? ""
                                : attendances.committee.attendance}
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
                              {attendances?.committee.justified == null
                                ? ""
                                : attendances.committee.justified}
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
                              {attendances?.committee.miss == null
                                ? ""
                                : attendances.committee.miss}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      <br />
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
                              {(attendances?.plenary.dSAttendance == null &&
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
                                  ) + "%"}
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
                              {attendances?.plenary.deliberativedSessions ==
                              null
                                ? ""
                                : attendances.plenary.deliberativedSessions}
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
                              {attendances?.plenary.dSAttendance == null
                                ? ""
                                : attendances.plenary.dSAttendance}
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
                              {attendances?.plenary.dSJustified == null
                                ? ""
                                : attendances.plenary.dSJustified}
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
                              {attendances?.plenary.dSMiss == null
                                ? ""
                                : attendances.plenary.dSMiss}
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
                              {attendances?.plenary.attendance == null
                                ? ""
                                : attendances.plenary.attendance}
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
                              {attendances?.plenary.miss == null
                                ? ""
                                : attendances.plenary.miss}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
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
  let globalLegislature: any
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

    console.log("words");
    console.log(words);

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

  /*function ContextAwareToggle({ children, eventKey, callback }) {
    const { activeEventKey } = useContext(AccordionContext);
  
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => callback && callback(eventKey),
    );
  
    const isCurrentEventKey = activeEventKey === eventKey;
  
    return (
      <button
        type="button"
        style={{ backgroundColor: isCurrentEventKey ? 'pink' : 'lavender' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }*/

  function showSpeech(speechsList: any): any {
    return respondJson2(speechsList.types)
      .sort(function (a, b) {
        return b.value - a.value;
      })
      .map((el, ix) => (
        <tr>
          <td style={{ textAlign: "right", paddingRight: "1vw" }}>
            {el.type.toLowerCase() == "null"
              ? "não identificatido"
              : el.type.toLowerCase()}
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
    console.log("document");
    let i;
    let finded = false;
    for (i = 0; i < list.length; i++) {
      finded = false;
      for (let j = 0; j < result.length; j++) {
        if (result[j].document == list[i].type) {
          finded = true;
          console.log(list[i].type);
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
    console.log("result");
    console.log(list);
    console.log(result);
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
            {/*<ContextAwareToggle eventKey="0">lista</ContextAwareToggle>*/}
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

    console.log("legisture");
    console.log(urlElems);

    urlElems.each((ind: number, val: any) => {
      if (urlElems.length / 2 > ind)
        legislatureList.list.push(String($(val).text()).trim());
    });

    legislatureList.count = legislatureList.list.length;

    //setLegislatures(legislatureList);
    globalLegislature = legislatureList
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

      console.log("GABINETE");
      console.log(parliamentaryExpenseRegisters);

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

    var committeeAttendanceList: string[] = [];
    var plenaryAttendanceList: string[] = [];
    var plenaryAttendanceCalc: number[] = [];

    for (let j = 0; j < years.length; j++) {
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
    }

    for (let j = 0; j < years.length; j++) {
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

        console.log(propositionList);

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
            console.log(obj);
            propositionList.propositions.push(obj);
          });
        }

        const urlElems = $("table > tbody > tr > td > a");

        urlElems.each((idx: number, val: any) => {
          var obj = {
            name: $(val).text(),
            link: $(val).attr("href"),
          };
          console.log(obj);
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
        

        console.log(propositionList);

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
            console.log(obj);
            propositionList.propositions.push(obj);
          });
        }

        const urlElems = $("table > tbody > tr > td > a");

        urlElems.each((idx: number, val: any) => {
          var obj = {
            name: $(val).text(),
            link: $(val).attr("href"),
          };
          console.log(obj);
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
    setLegislatures(globalLegislature);
    setExpenses(globalExpense);
    setSpeechs(globalSpeech);
    setAttendance(globalAttendance);
    setAuthorships(globalAuthorship);
    setReports(globalReports);
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

    setIdPolitician(politician.id);
    setUrlPolitician(politician.uri);
    await setCurrentPolitician(politician.uri, politician.uriPartido);
    await setCurrentPoliticianCareer(politician.id);
    await setAuthorshipPropositions(politician.id);
    await setPropositionsReport(politician.id);
    await setLegislaturesData(politician.id);
    await setSpeechData(politician.id, 1);
    await setAttendanceData(politician.id);
    await setExpensesData(politician.id, 1, politician);
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

  return (
    <div style={{ backgroundColor: "black" }}>
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
          <div style={{ marginBottom: "-15px" }}>
            <p
              className="superTrunfo half-color"
              style={{ color: "white", fontSize: "40px" }}
            >
              {" "}
              SUPER{" "}
            </p>{" "}
            <span
              className="superTrunfo"
              style={{ color: "white", fontSize: "40px" }}
            >
              TR
            </span>
            <span className="superTrunfo half-color" data-attribute="U">
              U
            </span>
            <span className="superTrunfo half-color3" data-attribute="N">
              N
            </span>
            <span
              className="superTrunfo half-color4"
              data-attribute="F"
              style={{ color: "#d9d9d9", fontSize: "40px" }}
            >
              F
            </span>
            <span className="superTrunfo half-color2" data-attribute="O">
              O
            </span>
          </div>
          <h5
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
            }}
            className="osPoliticos"
          >
            os Políticos
          </h5>
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
            setModalShow2(true);
          }}
          src={
            "https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/459980.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTgxMTIwMCwicSI6bnVsbCwiaWF0IjoxNjM1NjEyODA3fQ__.d52f7b901cc75074197d5fc1f564b79a3202d3bcdfe26f9d463834b6983225ae"
          }
        />
        <div className="cards-container">
          {/*<PoliticianGallery />*/}

          {deputiesData
            /*.filter(politician => (search?.name) ? (politician.nome == search.name) : politician)*/
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
                className="cardContainerCenter"
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
          <LoaderModal show={loaderShow} onHide={() => setLoaderShow(false)} />
        </div>
      </div>
    </div>
  );
}

export default App;
