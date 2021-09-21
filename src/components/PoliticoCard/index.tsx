import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";

interface PoliticoCard {
  show: false;
  onHide: () => {};
  urlPolitician: string;
  urlParty: string;
  partido: Partido;
  politico: Politico[];
  propostas: Proposta[];
  legislaturas: Legislaturas[];
  relatorios: Relatorio[];
}

interface PoliticoCardProps {
  politico: PoliticoCard;
}

const PoliticoCard = ({ politico }: PoliticoCardProps) => {
  return (
    <Modal
      {...politico}
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
        <p>{props.legislatures.map((legislature) => legislature + " ")} </p>
        <h5>Despesas:</h5>
        <h5>Discurso:</h5>
        <h5>Votações:</h5>
        <h5>Presença:</h5>
        <h5>Proposições aprovadas:</h5>
        <ListGroup variant="flush">
          {props.propositions.map((proposition) => (
            <ListGroup.Item>{proposition}</ListGroup.Item>
          ))}
        </ListGroup>
        <h5>Proposições relatadas:</h5>
        <ListGroup variant="flush">
          {props.reports.map((report) => (
            <ListGroup.Item>{report}</ListGroup.Item>
          ))}
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PoliticoCard;
