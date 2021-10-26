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

import { Deputy, DeputyResponse } from "./interfaces/Deputy";
import DeputyComplete from "./interfaces/DeputyComplete";
import DeputyParty from "./interfaces/DeputyParty";
import DeputyProfession from "./interfaces/DeputyProfession";
import DeputyOccupation from "./interfaces/DeputyOccupation";
import { PoliticianRadar } from "./components/PoliticianRadar";

import axios from "axios";
import { Coordinate } from "./interfaces/Coordinate";
import { partyLogoDictionary } from "./data/partyLogoDictionary";
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

function App() {
  const [modalShow, setModalShow] = useState(false);

  const [deputiesData, setDeputiesData] = useState<Deputy[]>([]);
  const [deputyCompleteData, setDeputyCompleteData] =
    useState<DeputyComplete>();
  const [deputyPartyData, setDeputyPartyData] = useState<DeputyParty>();
  const [deputyProfessionData, setDeputyProfessionData] =
    useState<DeputyProfession>();
  const [deputyOccupationData, setDeputyOccupationData] =
    useState<DeputyOccupation>();

  const [urlPolitician, setUrlPolitician] = useState<String>();
  const [idPolitician, setIdPolitician] = useState<number>();

  const [legislatures, setLegislatures] = useState<Legislature>();
  const [expenses, setExpenses] = useState<Expense>();
  const [speechs, setSpeechs] = useState<Speech>();
  const [attendances, setAttendance] = useState<Attendance>();

  const [authorships, setAuthorships] = useState<Proposition>();
  const [reports, setReports] = useState<Proposition>();

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get<DeputyResponse>(
        "https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome"
      );
      setDeputiesData(response.data.dados);
    };

    getData();
  }, []);

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
                    reports
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
                    Despesas (R$
                    {expenses?.parliamentaryQuotaExpense == null
                      ? ""
                      : expenses.parliamentaryQuotaExpense.toFixed(2)}{" "}
                    | R$
                    {expenses?.cabinetExpense == null
                      ? ""
                      : expenses.cabinetExpense.toFixed(2)}
                    )
                    <span className="cardTextRight">
                      {(expenses?.parliamentaryQuotaExpense == null &&
                      expenses?.parliamentaryQuotaBudget == null
                        ? 0
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
                      {speechs?.count == null ? 0 : speechs.count}
                    </span>
                  </ListGroup.Item>
                  <ListGroup.Item className="bgTrans wc">
                    Votações (609)<span className="cardTextRight">80,7%</span>
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
                            attendances.committee.justified -
                            attendances.committee.miss) /
                            (attendances.committee.attendance +
                              attendances.committee.justified +
                              attendances.committee.miss) /
                            attendances.range) *
                            100
                        ) +
                        "%" +
                        " | " +
                        Math.round(
                          ((attendances.plenary.dSAttendance +
                            attendances.plenary.dSJustified -
                            attendances.plenary.dSMiss) /
                            attendances.plenary.deliberativedSessions /
                            attendances.range) *
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
                              attendances.committee.justified -
                              attendances.committee.miss) /
                              (attendances.committee.attendance +
                                attendances.committee.justified +
                                attendances.committee.miss) /
                              attendances.range) *
                              100
                          ) +
                            Math.round(
                              ((attendances.plenary.dSAttendance +
                                attendances.plenary.dSJustified -
                                attendances.plenary.dSMiss) /
                                attendances.plenary.deliberativedSessions /
                                attendances.range) *
                                100
                            )) /
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
                      Despesas (
                      {expenses?.parliamentaryQuotaExpense == null &&
                      expenses?.parliamentaryQuotaBudget == null
                        ? ""
                        : (
                            100 -
                            (expenses.parliamentaryQuotaExpense /
                              expenses.parliamentaryQuotaBudget) *
                              100
                          ).toFixed(2) + "%"}{" "}
                      |{" "}
                      {expenses?.cabinetExpense == null &&
                      expenses?.cabinetBudget == null
                        ? ""
                        : (
                            100 -
                            (expenses.cabinetExpense / expenses.cabinetBudget) *
                              100
                          ).toFixed(2) + "%"}
                      )
                    </Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      Discursos ({speechs?.count == null ? 0 : speechs.count})
                    </Accordion.Header>
                    <Accordion.Body>
                      {speechs?.types == null
                        ? ""
                        : speechs.types.length == 0
                        ? ""
                        : "| " +
                          respondJson(speechs.types).join(" ").toLowerCase()}
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      Presença (
                      {(attendances?.committee.attendance == null &&
                        attendances?.committee.miss == null &&
                        attendances?.range == null) ||
                      attendances?.range == 0
                        ? ""
                        : Math.round(
                            ((attendances.committee.attendance +
                              attendances.committee.justified -
                              attendances.committee.miss) /
                              (attendances.committee.attendance +
                                attendances.committee.justified +
                                attendances.committee.miss) /
                              attendances.range) *
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
                              attendances.plenary.dSJustified -
                              attendances.plenary.dSMiss) /
                              attendances.plenary.deliberativedSessions /
                              attendances.range) *
                              100
                          ) + "%"}
                      )
                    </Accordion.Header>
                    <Accordion.Body>
                      <h5>Presença em Comissão</h5>
                      <Table responsive hover size="sm">
                        <thead>
                          <tr>
                            <th>Descrição</th>
                            <th style={{ width: "10vw" }}>Valor</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Resultado Percentual</td>
                            <td>
                              {(attendances?.committee.attendance == null &&
                                attendances?.committee.miss == null &&
                                attendances?.range == null) ||
                              attendances?.range == 0
                                ? ""
                                : Math.round(
                                    ((attendances.committee.attendance +
                                      attendances.committee.justified -
                                      attendances.committee.miss) /
                                      (attendances.committee.attendance +
                                        attendances.committee.justified +
                                        attendances.committee.miss) /
                                      attendances.range) *
                                      100
                                  ) + "%"}
                            </td>
                          </tr>
                          <tr>
                            <td>Presenças</td>
                            <td>
                              {attendances?.committee.attendance == null
                                ? ""
                                : attendances.committee.attendance}
                            </td>
                          </tr>
                          <tr>
                            <td>Ausências justificadas</td>
                            <td>
                              {attendances?.committee.justified == null
                                ? ""
                                : attendances.committee.justified}
                            </td>
                          </tr>
                          <tr>
                            <td>Ausências não justificadas</td>
                            <td>
                              {attendances?.committee.miss == null
                                ? ""
                                : attendances.committee.miss}
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      <h5>Presença em Plenário</h5>
                      <Table responsive hover size="sm">
                        <thead>
                          <tr>
                            <th>Descrição</th>
                            <th style={{ width: "10vw" }}>Valor</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Resultado Percentual</td>
                            <td>
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
                                      attendances.plenary.dSJustified -
                                      attendances.plenary.dSMiss) /
                                      attendances.plenary
                                        .deliberativedSessions /
                                      attendances.range) *
                                      100
                                  ) + "%"}
                            </td>
                          </tr>
                          <tr>
                            <td>Sessões deliberativas, realizadas em dias</td>
                            <td>
                              {attendances?.plenary.deliberativedSessions ==
                              null
                                ? ""
                                : attendances.plenary.deliberativedSessions}
                            </td>
                          </tr>
                          <tr>
                            <td>Sessões deliberativas, dias com presença</td>
                            <td>
                              {attendances?.plenary.dSAttendance == null
                                ? ""
                                : attendances.plenary.dSAttendance}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Sessões deliberativas, ausências justificadas
                            </td>
                            <td>
                              {attendances?.plenary.dSJustified == null
                                ? ""
                                : attendances.plenary.dSJustified}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Sessões deliberativas, ausências não justificadas
                            </td>
                            <td>
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
                            <td>
                              Sessões deliberativas com Ordem do Dia na Sessão
                              Legislativa
                            </td>
                            <td>
                              {attendances?.plenary.attendance == null
                                ? ""
                                : attendances.plenary.attendance}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              Sessões deliberativas com Ordem do Dia, ausências
                              não justificadas
                            </td>
                            <td>
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
                      Proposições Aprovadas (
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

        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  function partyLogo(party: string) {
    debugger;
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
              <Image src={getProfessionIcon(profession.titulo)} />
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

  function getProfessionIcon(profession: string): string {
    switch (profession) {
      case "Empresário":
        return "https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/1410046.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTEyMDAwMCwicSI6bnVsbCwiaWF0IjoxNjM0ODYxMjU1fQ__.d4d127c5f6849d327d36ffcf96988fdc99ede0dcb5463a886695496afe174935";

      case "Empresária":
        return "https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/1410046.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTEyMDAwMCwicSI6bnVsbCwiaWF0IjoxNjM0ODYxMjU1fQ__.d4d127c5f6849d327d36ffcf96988fdc99ede0dcb5463a886695496afe174935";

      case "Advogado":
        return "";

      case "Advogada":
        return "";

      case "Agropecuarista":
        return "";

      case "Médico":
        return "https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/1410038.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTEyMDAwMCwicSI6bnVsbCwiaWF0IjoxNjM0ODYxNjE4fQ__.0187f14b075ad7d1a3cc1d65135f32370c2141fb580c6da76f96f8ebae1366d4";

      case "Médica":
        return "https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/1410038.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTEyMDAwMCwicSI6bnVsbCwiaWF0IjoxNjM0ODYxNjE4fQ__.0187f14b075ad7d1a3cc1d65135f32370c2141fb580c6da76f96f8ebae1366d4";

      case "Professor":
        return "https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/1409981.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTEyMDAwMCwicSI6bnVsbCwiaWF0IjoxNjM0ODYxNzQxfQ__.e23f7d922283f26f01bde8b2e3b9ba4e429b611b6156a9f7fd0ce60f0e10a135";

      case "Professora":
        return "https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/1409980.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTEyMDAwMCwicSI6bnVsbCwiaWF0IjoxNjM0ODYxNzQxfQ__.ba3bc668fba8677d34af6f57294b53caef56c249037722cbe46186c894a24689";

      case "Servidor público":
        return "";

      case "Servidora pública":
        return "";

      case "Administrador":
        return "";

      case "Administradora":
        return "";

      case "Engenheiro":
        return "https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/1409975.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTEyMDAwMCwicSI6bnVsbCwiaWF0IjoxNjM0ODYxODMwfQ__.ba53390971de16cc36ae27238ee03ad686c4da93113d83ab3db4c6b9c5b95b5d";

      case "Engenheira":
        return "https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/1409975.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTEyMDAwMCwicSI6bnVsbCwiaWF0IjoxNjM0ODYxODMwfQ__.ba53390971de16cc36ae27238ee03ad686c4da93113d83ab3db4c6b9c5b95b5d";

      case "Policial":
        return "https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/1410003.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTEyMDAwMCwicSI6bnVsbCwiaWF0IjoxNjM0ODYxOTE1fQ__.1d70b1c549b3cdb5012ab8ac104fb2ae3c9244964024fdd47f50192e758fdbe6";

      case "Jornalista":
        return "";

      case "Pastor":
        return "https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/1410002.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTEyMDAwMCwicSI6bnVsbCwiaWF0IjoxNjM0ODYxOTU1fQ__.df32bb02b84767ce0365fc09041214f6738928a877fa4a8be1c8c1794d2664b8";

      case "Pastora":
        return "https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/1410002.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTEyMDAwMCwicSI6bnVsbCwiaWF0IjoxNjM0ODYxOTU1fQ__.df32bb02b84767ce0365fc09041214f6738928a877fa4a8be1c8c1794d2664b8";

      case "Economista":
        return "";

      case "Militar":
        return "https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/1410053.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTEyMDAwMCwicSI6bnVsbCwiaWF0IjoxNjM0ODYxNDI1fQ__.f3258576e39c0af77973bb2c3ead6a5c81fdfdaf07f2fe98aff7c412834cbc83";

      case "Bancário":
        return "";

      case "Bancária":
        return "";

      case "Estudante":
        return "https://d1b1fjiwh8olf2.cloudfront.net/icon/free/svg/1409986.svg?token=eyJhbGciOiJoczI1NiIsImtpZCI6ImRlZmF1bHQifQ__.eyJpc3MiOiJkMWIxZmppd2g4b2xmMi5jbG91ZGZyb250Lm5ldCIsImV4cCI6MTYzNTEyMDAwMCwicSI6bnVsbCwiaWF0IjoxNjM0ODYyMDQxfQ__.8bf4471cbb30302f2e9dde192012218215adcc574dcd0352c988870ef88d80ea";

      default:
        return "";
    }
  }

  function setCurrentPolitician(urlPolitician: string, urlParty: string) {
    const getPolitician = () => {
      axios
        .get<DeputyComplete>(urlPolitician)

        .then((responsePolitician) => {
          setDeputyCompleteData(responsePolitician.data);
        });
    };

    const getParty = () => {
      axios
        .get<DeputyParty>(urlParty)

        .then((responseParty) => {
          setDeputyPartyData(responseParty.data);
        });
    };

    getPolitician();
    getParty();
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
        words[ind] == "Da" ||
        words[ind] == "Do" ||
        words[ind] == "De" ||
        words[ind] == "Di" ||
        words[ind] == "Das" ||
        words[ind] == "Dos" ||
        words[ind] == "Van" ||
        words[ind] == "Von" ||
        words[ind] == "Del" ||
        words[ind] == "E"
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

  function setCurrentPoliticianCareer() {
    const getProfession = () => {
      axios
        .get<DeputyProfession>(
          "https://dadosabertos.camara.leg.br/api/v2/deputados/" +
            deputyCompleteData?.dados.id +
            "/profissoes"
        )

        .then((responseProfession) => {
          setDeputyProfessionData(responseProfession.data);
        });
    };

    const getOccupation = () => {
      axios
        .get<DeputyOccupation>(
          "https://dadosabertos.camara.leg.br/api/v2/deputados/" +
            deputyCompleteData?.dados.id +
            "/ocupacoes"
        )

        .then((responseOccupation) => {
          setDeputyOccupationData(responseOccupation.data);
        });
    };

    getProfession();
    getOccupation();
  }

  function setLegislaturesData(id: number) {
    let legislatureList: Legislature = {} as Legislature;
    legislatureList.list = [""];
    legislatureList.count = 0;

    legislatureList.list.pop();

    axios
      .get(
        "https://totalcors.herokuapp.com/https://www.camara.leg.br/deputados/" +
          id +
          "/biografia"
      )
      .then((response) => {
        const $ = cheerio.load(response.data);

        const urlElems = $("section > p > a");

        console.log("legisture");
        console.log(urlElems);

        urlElems.each((ind: number, val: any) => {
          if (urlElems.length / 2 > ind)
            legislatureList.list.push(String($(val).text()).trim());
        });

        legislatureList.count = legislatureList.list.length;
      });

    setLegislatures(legislatureList);
  }

  function setExpensesData(id: number, page: number) {
    const years = ["2019"];
    const cabinetBudget = 111675.59 * 12 * years.length;

    const state =
      deputyCompleteData?.dados.ultimoStatus.siglaUf == null
        ? ""
        : deputyCompleteData.dados.ultimoStatus.siglaUf;
    var parliamentaryQuotaBudget;

    switch (state) {
      case "AC":
        parliamentaryQuotaBudget = 44632.46 * 12 * years.length;
        break;
      case "AL":
        parliamentaryQuotaBudget = 40944.1 * 12 * years.length;
        break;
      case "AM":
        parliamentaryQuotaBudget = 43570.12 * 12 * years.length;
        break;
      case "AP":
        parliamentaryQuotaBudget = 43374.78 * 12 * years.length;
        break;
      case "BA":
        parliamentaryQuotaBudget = 39010.85 * 12 * years.length;
        break;
      case "CE":
        parliamentaryQuotaBudget = 42451.77 * 12 * years.length;
        break;
      case "DF":
        parliamentaryQuotaBudget = 30788.66 * 12 * years.length;
        break;
      case "ES":
        parliamentaryQuotaBudget = 37423.91 * 12 * years.length;
        break;
      case "GO":
        parliamentaryQuotaBudget = 35507.06 * 12 * years.length;
        break;
      case "MA":
        parliamentaryQuotaBudget = 42151.69 * 12 * years.length;
        break;
      case "MG":
        parliamentaryQuotaBudget = 36092.71 * 12 * years.length;
        break;
      case "MS":
        parliamentaryQuotaBudget = 40542.84 * 12 * years.length;
        break;
      case "MT":
        parliamentaryQuotaBudget = 39428.03 * 12 * years.length;
        break;
      case "PA":
        parliamentaryQuotaBudget = 42227.45 * 12 * years.length;
        break;
      case "PB":
        parliamentaryQuotaBudget = 42032.56 * 12 * years.length;
        break;
      case "PE":
        parliamentaryQuotaBudget = 41676.8 * 12 * years.length;
        break;
      case "PI":
        parliamentaryQuotaBudget = 40971.77 * 12 * years.length;
        break;
      case "PR":
        parliamentaryQuotaBudget = 38871.86 * 12 * years.length;
        break;
      case "RJ":
        parliamentaryQuotaBudget = 35759.97 * 12 * years.length;
        break;
      case "RN":
        parliamentaryQuotaBudget = 42731.99 * 12 * years.length;
        break;
      case "RO":
        parliamentaryQuotaBudget = 43672.49 * 12 * years.length;
        break;
      case "RR":
        parliamentaryQuotaBudget = 45612.53 * 12 * years.length;
        break;
      case "RS":
        parliamentaryQuotaBudget = 40875.9 * 12 * years.length;
        break;
      case "SC":
        parliamentaryQuotaBudget = 39877.78 * 12 * years.length;
        break;
      case "SE":
        parliamentaryQuotaBudget = 40139.26 * 12 * years.length;
        break;
      case "SP":
        parliamentaryQuotaBudget = 37043.53 * 12 * years.length;
        break;
      case "TO":
        parliamentaryQuotaBudget = 39503.61 * 12 * years.length;
        break;

      default:
        break;
    }

    let expensesData: Expense = {} as Expense;
    expensesData.cabinetExpense = 0;
    expensesData.cabinetBudget = cabinetBudget;
    expensesData.parliamentaryQuotaExpense = 0;
    expensesData.parliamentaryQuotaBudget =
      parliamentaryQuotaBudget == null ? 0 : parliamentaryQuotaBudget;
    expensesData.parliamentaryExpenseListDescription = [];
    expensesData.range = years.length;

    function paginationExpense(id: number, page: number, y: number) {
      axios
        .get(
          "https://dadosabertos.camara.leg.br/api/v2/deputados/" +
            id +
            "/despesas?ano=" +
            years[y] +
            "&pagina=" +
            page +
            "&itens=1000&ordem=ASC&ordenarPor=mes"
        )
        .then((response) => {
          const cabinetExpenses = response.data.dados;

          console.log("GABINETE");
          console.log(cabinetExpenses);

          for (let a = 0; a < cabinetExpenses.length; a++) {
            expensesData.parliamentaryExpenseListDescription.push({
              year: cabinetExpenses[a].ano,
              month: cabinetExpenses[a].mes,
              type: cabinetExpenses[a].tipoDespesa,
              documentCode: cabinetExpenses[a].codDocumento,
              documentType: cabinetExpenses[a].tipoDocumento,
              documentCodeType: cabinetExpenses[a].codTipoDocumento,
              date: cabinetExpenses[a].dataDocumento,
              documentNumber: cabinetExpenses[a].numDocumento,
              documentValue: cabinetExpenses[a].valorDocumento,
              documentUrl: cabinetExpenses[a].urlDocumento,
              providerName: cabinetExpenses[a].nomeFornecedor,
              providerRegister: cabinetExpenses[a].cnpjCpfFornecedor,
              netValue: cabinetExpenses[a].valorLiquido,
              value: cabinetExpenses[a].valorGlosa,
              refund: cabinetExpenses[a].numRessarcimento,
              partCode: cabinetExpenses[a].codLote,
              quota: cabinetExpenses[a].parcela,
            });
            expensesData.parliamentaryQuotaExpense +=
              cabinetExpenses[a].valorDocumento;
          }

          if (cabinetExpenses.length == 100) {
            page++;
            paginationExpense(id, page, y);
          }
        });
    }

    for (let y = 0; y < years.length; y++) {
      paginationExpense(id, page, y);

      axios
        .get(
          "https://totalcors.herokuapp.com/https://www.camara.leg.br/deputados/" +
            id +
            "/verba-gabinete?ano=" +
            years[y]
        )
        .then((response) => {
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

          expensesData.cabinetExpense += expensesLast.reduce(
            (a, b) => a + b,
            0
          );
        });
    }

    setExpenses(expensesData);
  }

  function setSpeechData(id: number, page: number) {
    let speechsList: Speech = {} as Speech;
    speechsList.types = {};
    speechsList.count = 0;

    function counting(id: number, page: number) {
      axios
        .get(
          "https://dadosabertos.camara.leg.br/api/v2/deputados/" +
            id +
            "/discursos?idLegislatura=56&dataInicio=2019-01-01&dataFim=2020-12-31&ordenarPor=dataHoraInicio&ordem=ASC&itens=100&pagina=" +
            page
        )
        .then((response) => {
          const speechs = response.data.dados;

          for (var k = speechs.length - 1; k >= 0; k--)
            if (!speechsList.types.hasOwnProperty(speechs[k].tipoDiscurso))
              speechsList.types[speechs[k].tipoDiscurso] = 1;
            else speechsList.types[speechs[k].tipoDiscurso]++;

          speechsList.count += speechs.length;

          if (speechs.length == 100) {
            page++;
            counting(id, page);
          }
        });
    }

    counting(id, page);

    setSpeechs(speechsList);
  }

  function setVoting(id: number) {}

  function setAttendanceData(id: number) {
    const years = ["2019"];

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
      axios
        .get(
          "https://totalcors.herokuapp.com/https://www.camara.leg.br/deputados/" +
            id +
            "/presenca-comissoes/" +
            years[j]
        )
        .then((response) => {
          const $ = cheerio.load(response.data);

          const urlElems = $("table > tbody > tr");

          urlElems.each((ind: number, val: string) => {
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
            if (committeeAttendanceList[i] == "Ausência justificada")
              cJustified++;
            if (committeeAttendanceList[i] == "Ausência não justificada")
              cMiss++;
          }

          attendanceData.committee.attendance += cAttendance;
          attendanceData.committee.justified += cJustified;
          attendanceData.committee.miss += cMiss;
        });

      axios
        .get(
          "https://totalcors.herokuapp.com/https://www.camara.leg.br/deputados/" +
            id +
            "/presenca-plenario/" +
            years[j]
        )
        .then((response) => {
          const $ = cheerio.load(response.data);

          const urlElems = $("table:nth-of-type(2) > tbody > tr");

          urlElems.each((ind: number, val: string) => {
            plenaryAttendanceList = plenaryAttendanceList.concat(
              $(val)
                .find("td")
                .last()
                .prev()
                .text()
                .replace(/\s\s+/g, "")
                .trim()
            );
          });

          for (let i = 0; i < plenaryAttendanceList.length; i++) {
            if (plenaryAttendanceList[i] != "")
              plenaryAttendanceCalc.push(parseInt(plenaryAttendanceList[i]));
          }

          attendanceData.plenary.attendance += plenaryAttendanceCalc[0];
          attendanceData.plenary.miss += plenaryAttendanceCalc[1];
          attendanceData.plenary.deliberativedSessions +=
            plenaryAttendanceCalc[2];
          attendanceData.plenary.dSAttendance += plenaryAttendanceCalc[3];
          attendanceData.plenary.dSJustified += plenaryAttendanceCalc[4];
          attendanceData.plenary.dSMiss += plenaryAttendanceCalc[5];
        });
    }

    attendanceData.range = years.length;

    setAttendance(attendanceData);
  }

  function setAuthorshipPropositions(id: number) {
    let propositionList: Proposition = {} as Proposition;

    propositionList.propositions = [
      {
        name: "string",
        link: "string",
      },
    ];

    propositionList.propositions.pop();

    const getPropositionsApproved = () => {
      axios
        .get(
          "https://totalcors.herokuapp.com/https://www.camara.leg.br/internet/sileg/Prop_lista.asp?Autor=0&ideCadastro=" +
            idPolitician +
            "&Limite=N&tipoProp=2"
        )
        .then((response) => {
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

            for (let index = 2; index < Math.ceil(number / 30) + 1; index++)
              axios
                .get(
                  "https://totalcors.herokuapp.com/https://www.camara.leg.br/internet/sileg/Prop_lista.asp?Pagina=" +
                    index +
                    "&Autor=0&ideCadastro=" +
                    idPolitician +
                    "&Limite=N&tipoProp=2"
                )
                .then((response) => {
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
                });

            const urlElems = $("table > tbody > tr > td > a");

            urlElems.each((idx: number, val: any) => {
              var obj = {
                name: $(val).text(),
                link: $(val).attr("href"),
              };
              console.log(obj);
              propositionList.propositions.push(obj);
            });

            setAuthorships(propositionList);
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
              if (i == 1) {
                array[i] = array[i].replace("Inteiro teor", "");
                var obj = {
                  name: array[i].trim(),
                  link: response.headers["x-final-url"],
                };
                propositionList.propositions.push(obj);
              }
            }

            setAuthorships(propositionList);
          }
        });
    };

    getPropositionsApproved();
  }

  function setPropositionsReport(id: number) {
    let propositionList: Proposition = {} as Proposition;

    propositionList.propositions = [
      {
        name: "string",
        link: "string",
      },
    ];

    propositionList.propositions.pop();

    const getPropositions = () => {
      axios
        .get(
          "https://totalcors.herokuapp.com/https://www.camara.leg.br/internet/sileg/Prop_lista.asp?Relator=0&ideCadastroProp=" +
            idPolitician +
            "&Limite=N&tipoProp=3"
        )
        .then((response) => {
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

            for (let index = 2; index < Math.ceil(number / 30) + 1; index++)
              axios
                .get(
                  "https://totalcors.herokuapp.com/https://www.camara.leg.br/internet/sileg/Prop_lista.asp?Pagina=" +
                    index +
                    "&Relator=0&ideCadastroProp=" +
                    idPolitician +
                    "&Limite=N&tipoProp=3"
                )
                .then((response) => {
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
                });

            const urlElems = $("table > tbody > tr > td > a");

            urlElems.each((idx: number, val: any) => {
              var obj = {
                name: $(val).text(),
                link: $(val).attr("href"),
              };
              console.log(obj);
              propositionList.propositions.push(obj);
            });

            setReports(propositionList);
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
              if (i == 1) {
                array[i] = array[i].replace("Inteiro teor", "");
                var obj = {
                  name: array[i].trim(),
                  link: response.headers["x-final-url"],
                };
                propositionList.propositions.push(obj);
              }
            }

            setReports(propositionList);
          }
        });
    };

    getPropositions();
  }

  return (
    <div className="mainBg">
      <div className="cards-container">
        {/*<PoliticianGallery />*/}

        {deputiesData.map((politician, idx) => (
          <div
            className="cardContainerCenter"
            onClick={() => {
              setModalShow(true);

              setIdPolitician(politician.id);
              setUrlPolitician(politician.uri);
              setCurrentPolitician(politician.uri, politician.uriPartido);
              setCurrentPoliticianCareer();
              setAuthorshipPropositions(politician.id);
              setPropositionsReport(politician.id);
              setLegislaturesData(politician.id);
              setSpeechData(politician.id, 1);
              setAttendanceData(politician.id);
              setExpensesData(politician.id, 1);
            }}
          >
            <Image
              className="cardImage"
              src={politician.urlFoto + "maior.jpg"}
              rounded
            />

            <Card bg="dark" text="white" style={{ width: "18rem" }}>
              <Card.Body className="cardPadding txtCenter">
                <Card.Subtitle>Deputad{true ? "o" : "a"} Federal</Card.Subtitle>
                <Card.Title>{politician.nome}</Card.Title>

                <Card.Text className="cardTextLeft">
                  Partido:{" "}
                  <span className="cardTextRight">
                    {politician.siglaPartido}
                  </span>
                  <br />
                  UF (estado):{" "}
                  <span className="cardTextRight">{politician.siglaUf}</span>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}

        <PoliticianModal show={modalShow} onHide={() => setModalShow(false)} />
      </div>
    </div>
  );
}

export default App;
