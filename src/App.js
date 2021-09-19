import React  from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import Placeholder from 'react-bootstrap/Placeholder';
import Image from 'react-bootstrap/Image';
import ListGroup from 'react-bootstrap/ListGroup';

const axios = require('axios');
const cheerio = require('cheerio');

function MyVerticallyCenteredModal(props) {
  //const [party, setParty] = React.useState({});
  
  /*axios.get(props.urlPolitician)
    .then((responsePolitician) => {
    console.log(responsePolitician.data.dados);
  })*/
  
  /*React.useEffect(() => {
    const getParty = async => {
      axios.get(props.urlParty)
        .then((responseParty) => {
        //console.log(responseParty.data.dados);
        setParty(responseParty.data.dados);
      })
    }

    getParty();
  });*/
  console.log(props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        { props.politician.nomeCivil }
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Patido filiado e estrutura do partido:</h4>
        <Image className="btImage" src={ props.party.urlLogo } thumbnail />
        <h6>{ props.party.nome }</h6>
        { (props.party.status != null) ? <Image className="btImage" src={ props.party.status.lider.urlFoto } thumbnail /> : null }
        <h6>Lider: { (props.party.status != null) ? props.party.status.lider.nome : "" }</h6>
        {/*<h6>Lider: { JSON.stringify(props.party.status.líder.nome) }</h6>
        <Image className="btImage" src={ props.party.status.líder.urlFoto } thumbnail />*/}
        <h5>Partidos filiados:</h5>
        <h4>Dados Pessoais:</h4>
        <h5>Nascimento:</h5>
        <p>{ props.politician.dataNascimento } | { props.politician.municipioNascimento } - { props.politician.ufNascimento }</p>
        <h5>Escolaridade:</h5>
        <p>{ props.politician.escolaridade }</p>
        <p></p>
        <h4>Dados Políticos:</h4>
        <h5>Legislaturas:</h5>
        <p>{ props.legislatures.map((legislature) => ( legislature + " " )) } </p>
        <h5>Despesas:</h5>
        <h5>Discurso:</h5>
        <h5>Votações:</h5>
        <h5>Presença:</h5>
        <h5>
          Proposições aprovadas:
          {/*Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros. { props.party.nome } - { props.politician.nomeCivil }*/}
        </h5>
        <ListGroup variant="flush">
          { props.propositions.map((proposition) => (
              <ListGroup.Item>{ proposition }</ListGroup.Item>
          )) }
        </ListGroup>
        <h5>Proposições relatadas:</h5>
        <ListGroup variant="flush">
          { props.reports.map((report) => (
              <ListGroup.Item>{ report }</ListGroup.Item>
          )) }
        </ListGroup>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={ props.onHide }>Fechar</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = React.useState(false);
  const [urlParty, setUrlParty] = React.useState("");
  const [urlPolitician, setUrlPolitician] = React.useState("");

  const [party, setParty] = React.useState({});
  const [politician, setPolitician] = React.useState({});
  const [propositions, setPropositions] = React.useState([]);
  const [reports, setReports] = React.useState([]);
  const [legislatures, setLegislatures] = React.useState([]);

  const initial = [
    {
      email: "",
      id: 0,
      idLegislatura: 0,
      nome: "",
      siglaPartido: "",
      siglaUf: "",
      uri: "",
      uriPartido: "",
      urlFoto: ""
    }
  ];

  const [politicians, setPoliticians] = React.useState(initial);

  React.useEffect(() => {
    const getPoliticians = async () => {
      axios.get('https://cors-anywhere.herokuapp.com/https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome')
        .then((response) => {
        const deputados = response.data.dados;
        //console.log(deputados);
        //console.log(state);
        //this.setState({ deputados });

        setPoliticians(deputados);

      })
    }; 

    getPoliticians();
  }, []);
  //console.log("politicians");
  //console.log(politicians);

  function loadXMLDoc() {
    //console.log(politicians);

    return (
      <div className="cards-container">
        { politicians.map((politician, index) => (
        <Card
          bg='dark'
          text='white'
          style={{ width: '15rem' }}
          className="mb-2"
          onClick={() => { setUrlPolitician(politician.uri); setAltPolitician(politician.uri);
            setUrlParty(politician.uriPartido); setAltParty(politician.uriPartido); setModalShow(true); setAltPropositions(politician.id);
            setAltLegislatures(politician.id); setAltReports(politician.id)
           }}
        >
          <Card.Header>{ politician.siglaPartido } - { politician.siglaUf }</Card.Header>
          <Card.Img variant="top" src={ politician.urlFoto } />
          <Card.Body>
            <Card.Title>{ politician.nome }</Card.Title>
            <Card.Text>
              { index } Some quick example text to build on the card title and make up the bulk
              of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>)) }
      </div>
    );
 
    /*const arrayNovo = ["204528", "204516", "204365", "204523", "156190", "204461", "204519", "204532"];
    const arrayPsol = ["204509", "205548", "204407", "152605", "73531", "74784", "76874", "204535", "204464", "215044"];

    for (let n = 0; n < arrayPsol.length; n++) 
      axios.get('https://cors-anywhere.herokuapp.com/https://www.camara.leg.br/internet/sileg/Prop_lista.asp?Autor=0&ideCadastro=' + arrayPsol[n] + '&Limite=N&tipoProp=2').then((response) => {
        const $ = cheerio.load(response.data);

        const urlElems = $('table');
        
        const array = urlElems.text().split("\n");

        for (let i = 14; i < array.length; i++) {
          if(array[i].trim().startsWith("P"))
            console.log(array[i].trim());
        }

        for (let i = 0; i < urlElems.length; i++) {
          const urlSpan = $(urlElems[i]).find('tr')[0];
          if (urlSpan) {
            const urlText = $(urlSpan).text();
          }
        }
      })*/
  }

  function setAltPolitician(url) {
    const getPolitician = async => {
    axios.get(url)
      .then((responsePolitician) => {
        setPolitician(responsePolitician.data.dados);
      })
    }

    getPolitician();
  }

  function setAltParty(url) {
    //React.useEffect(() => {
      //console.log(url);
      const getParty = async => {
        axios.get(url)
          .then((responseParty) => {
          //console.log(responseParty.data.dados);
          setParty(responseParty.data.dados);
        })
      }
  
      getParty();
    //})
  }

  function setAltPropositions(id) {
    let arrayProposition = [];
    //React.useEffect(() => {
    const getPropositions = async => {
      axios.get('https://cors-anywhere.herokuapp.com/https://www.camara.leg.br/internet/sileg/Prop_lista.asp?Autor=0&ideCadastro=' + id + '&Limite=N&tipoProp=2')
        .then((response) => {

          console.log("AQUI");
          console.log(response.headers['x-final-url']);

          const $ = cheerio.load(response.data);

          if(response.headers['x-final-url'].includes("Prop_lista")) {

            const urlElems = $('table');
            
            const array = urlElems.text().split("\n");

            for (let i = 14; i < array.length; i++) {
              if(array[i].trim().startsWith("P")) {
                arrayProposition.push(array[i].trim());
                console.log(array[i].trim());
              }
            }
            setPropositions(arrayProposition);

            for (let i = 0; i < urlElems.length; i++) {
              const urlSpan = $(urlElems[i]).find('tr')[0];
              if (urlSpan) {
                const urlText = $(urlSpan).text();
              }
            }
          } else {

            const urlElems = $('h3');

            const array = urlElems.text().split("\n");

            array.forEach(element => {
              element.replace("Inteiro teor", "");
              element.trim();
            });

            for (let i = 0; i < array.length; i++) {
              if (i == 1){
                array[i] = array[i].replace("Inteiro teor", "");
                arrayProposition.push(array[i].trim());
              }
            }

            console.log("BOLSAFAMILIA");
            console.log(array.length);

            setPropositions(arrayProposition);

          }
      })
    }
    //}, []);
    getPropositions();
  }

  function setAltReports(id) {
    let arrayReport = [];
    //React.useEffect(() => {
    const getReports = async => {
      axios.get('https://cors-anywhere.herokuapp.com/https://www.camara.leg.br/internet/sileg/Prop_lista.asp?Relator=0&ideCadastroProp=' + id + '&Limite=N&tipoProp=3')
        .then((response) => {
          const $ = cheerio.load(response.data);

          const urlElems = $('table');
          console.log("AQUI2");
          console.log(response.headers['x-final-url']);
          //console.log(response);
          //console.log(response.headers);

          const array = urlElems.text().split("\n");

          for (let i = 14; i < array.length; i++) {
            if(array[i].trim().startsWith("P")) {
              arrayReport.push(array[i].trim());
              console.log(array[i].trim());
            }
          }
          setReports(arrayReport);

          for (let i = 0; i < urlElems.length; i++) {
            const urlSpan = $(urlElems[i]).find('tr')[0];
            if (urlSpan) {
              const urlText = $(urlSpan).text();
            }
          }
      })
    }
    //}, []);
    getReports();
  }

  function setAltLegislatures(id) {
    const getLegislatures = async => {
      axios.get('https://cors-anywhere.herokuapp.com/https://www.camara.leg.br/deputados/' + id + '/biografia')
        .then((response) => {
          const lastLegislature = 60;

          let text;

          const $ = cheerio.load(response.data);

          const urlElems = $('a');

          let array = [];

          for (let i = 0; i < urlElems.length; i++) {
            for (let j = 0; j < lastLegislature; j++) {
              //if(urlElems.text().split("\n") == String(i))
              text = String(urlElems[i].children[0].data);
              text.split("\n");
              text = String(text).trim();

              //console.log(text);
              //console.log(String(j));

              if(text == String(j)) {
                let bool = true;
                
                let k;
                //console.log(array);
                for (k = 0; k < array.length; k++) {
                  //console.log("valor");
                  
                  if(array[k] == text)
                    bool = false;
                }
                if(bool) {
                  array.push(text);
                }
              }
            }
          }

          setLegislatures(array);

          /*const array = urlElems.text().split("\n");

          console.log("cheerio");
          console.log(array);*/

          /*const urlElems = $('table');
          
          const array = urlElems.text().split("\n");

          for (let i = 14; i < array.length; i++) {
            if(array[i].trim().startsWith("P"))
              arrayProposition.push(array[i].trim());
              //console.log(array[i].trim());
          }
          setPropositions(arrayProposition);

          for (let i = 0; i < urlElems.length; i++) {
            const urlSpan = $(urlElems[i]).find('tr')[0];
            if (urlSpan) {
              const urlText = $(urlSpan).text();
            }
          }*/
      })
    }
    //}, []);
    getLegislatures();

  }

  return (
    <div>
      <Card border="primary" style={{ width: '18rem' }} onClick={() => setModalShow(true)}>
        <Card.Header>Header</Card.Header>
        <Card.Body>
          <Card.Title>Primary Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk
            of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>

      { loadXMLDoc() }

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
      {/*<Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
        </Button>*/}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        urlPolitician={urlPolitician}
        urlParty={urlParty}
        party={party}
        politician={politician}
        propositions={propositions}
        legislatures={legislatures}
        reports={reports}
      />
    </div>
  );
}

/*function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;