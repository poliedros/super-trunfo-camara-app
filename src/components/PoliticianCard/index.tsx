import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

import { deputyExtraDataDictionary } from "../../data/deputyExtraDataDictionary";

/*interface PoliticianCard {
  show: false;
  onHide: () => {};
  urlPolitician: string;
  urlParty: string;
  party: Partido;
  politician: Politicos[];
  proposed: Propostas[];
  legislatures: Legislaturas[];
  reported: Relatadas[];
}*/

interface PoliticianCardProps {
  //politician: PoliticianCard;
}

const PoliticianCard = ({ politician }: any) => {
  
  return (
    
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
          //waitForUs(politician); ESSE AQUI NAO ESTAVA COMENTADO
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
              
    {/*<Modal
      {...politician}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.politician.nomeCivil}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Patido filiado e estrutura do partido:</h4>
        <Image className="btImage" src={props.party.urlLogo} thumbnail />
        <h6>{props.party.nome}</h6>
        {props.party.status != null ? (
          <Image
            className="btImage"
            src={props.party.status.lider.urlFoto}
            thumbnail
          />
        ) : null}
        <h6>
          Lider:{" "}
          {props.party.status != null ? props.party.status.lider.nome : ""}
        </h6>
        <h5>Partidos filiados:</h5>
        <h4>Dados Pessoais:</h4>
        <h5>Nascimento:</h5>
        <p>
          {props.politician.dataNascimento} |{" "}
          {props.politician.municipioNascimento} -{" "}
          {props.politician.ufNascimento}
        </p>
        <h5>Escolaridade:</h5>
        <p>{props.politician.escolaridade}</p>
        <p></p>
        <h4>Dados Políticos:</h4>
        <h5>Legislaturas:</h5>
        <p>{props.legislatures.map((legislatures) => legislatures + " ")} </p>
        <h5>Despesas:</h5>
        <h5>Discurso:</h5>
        <h5>Votações:</h5>
        <h5>Presença:</h5>
        <h5>Proposições aprovadas:</h5>
        <ListGroup variant="flush">
          {props.propositions.map((proposed) => (
            <ListGroup.Item>{proposed}</ListGroup.Item>
          ))}
        </ListGroup>
        <h5>Proposições relatadas:</h5>
        <ListGroup variant="flush">
          {props.reports.map((reported) => (
            <ListGroup.Item>{report}</ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>*/}
    </div>
  );
};

export default PoliticianCard;