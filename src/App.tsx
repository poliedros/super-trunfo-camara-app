import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

//import PolitianServiceData from "./components/functions/politian.service";

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";

import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Modal from "react-bootstrap/Modal";

import PoliticianGallery from "./components/PoliticianGallery/index";

import Deputy from "./components/functions/deputy";
import DeputyComplete from "./components/functions/deputyComplete";
import DeputyParty from "./components/functions/deputyParty";
import DeputyProfession from "./components/functions/deputyProfession";
import DeputyOccupation from "./components/functions/deputyOccupation";

import { Radar } from '@ant-design/charts';

import axios, {AxiosResponse} from "axios";
const cheerio = require('cheerio');

function App() {
  const [modalShow, setModalShow] = useState(false);
  
  const [deputiesData, setDeputiesData] = useState<Deputy[]>([]);
  const [deputyCompleteData, setDeputyCompleteData] = useState<DeputyComplete>();
  const [deputyPartyData, setDeputyPartyData] = useState<DeputyParty>();
  const [deputyProfessionData, setDeputyProfessionData] = useState<DeputyProfession>();
  const [deputyOccupationData, setDeputyOccupationData] = useState<DeputyOccupation>();
  
  const [urlPolitician, setUrlPolitician] = useState<String>();
  const [idPolitician, setIdPolitician] = useState<number>();
  
  const [reports, setReports] = useState<Proposition>();

  useEffect(() => {

    axios.get<Deputy[]>('https://totalcors.herokuapp.com/https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome')
      .then((response: AxiosResponse) => {
        setDeputiesData(response.data.dados);
      });
    
  }, []);

  interface Proposition {
    propositions: [
      {
        name: string,
        link: string
      }
    ],
    total: number
  }

  interface Coordinate {
    name: string,
    star: number
  }

  function getData():Coordinate[] {
    var list:Coordinate[] = [];
    list.push({name: "Legislaturas", star: (deputyCompleteData?.dados.id == null) ? 0 : deputyCompleteData.dados.id/1000 });
    list.push({name: "Despesas", star: 200});
    list.push({name: "Discursos", star: 150});
    list.push({name: "Votações", star: 50});
    list.push({name: "Presenças", star: 300});
    list.push({name: "Leis Aprovadas", star: 250});
    return list;
  }

  const DemoRadar: React.FC = () => {
    const data = getData();
    const config = {
      data: data.map((d) => ({ ...d, star: d.star })),
      xField: 'name',
      yField: 'star',
      meta: {
        star: {
          alias: 'Pontuação',
          min: 0,
          nice: true,
        },
      },
      xAxis: {
        line: null,
        tickLine: null,
      },
      yAxis: {
        label: false,
        grid: {
          alternateColor: 'rgba(0, 0, 0, 0.25)',
        },
      },
      point: {},
      area: {},
    };
    return <Radar {...config} />;
  };

  function MyVerticallyCenteredModal(props: any) {
    console.log('dados');
    console.log(deputyProfessionData);
    console.log(deputyOccupationData);
    console.log(reports);

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >

        <Modal.Header closeButton closeVariant="white" className="bg-dark wc">

          <Modal.Title id="contained-modal-title-vcenter">
            { toCapitalize(getDeputyInformation('name').toLowerCase()) }
          </Modal.Title>

        </Modal.Header>

        <Modal.Body
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(141, 153, 174, 0.1)), url(https://www.camara.leg.br/internet/deputado/bandep/pagina_do_deputado/${idPolitician}.jpg)`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: '50% 50%',
            backgroundSize: 'cover'
          }}
          className="show-grid">

          <Container className="txtCenter">

            <Row className="middle">

              <Col xs={6} md={6}>

                <h4 className="wc">Dados Pessoais</h4>
                <br/>
                <h6 className="cardTextLeft wc">Nascimento<span className="cardTextRight">{ getDeputyInformation('birthDate') }</span></h6>
                <h6 className="cardTextLeft wc">Local<span className="cardTextRight">{ getDeputyInformation('birthPlace') } - { getDeputyInformation('birthPlaceState') }</span></h6>
                <h6 className="cardTextLeft wc">Escolaridade<span className="cardTextRight">{ getDeputyInformation('schooling') }</span></h6>
                <br/>
                <h4 className="wc">Profissão</h4>
                <br/>
                <div>{ getDeputyList('profession') }</div>
                <br/>
                <Accordion>
                  <Accordion.Item eventKey="0" className="bgTrans wc">
                    <Accordion.Header>Cargos ocupados</Accordion.Header>
                      <Accordion.Body>
                        { getDeputyList('occupation') }
                      </Accordion.Body>
                  </Accordion.Item>
                </Accordion>

              </Col>
              <Col xs={6} md={6}>

                <h4 className="wc">Estrutura do Partido Filiado</h4>
                <br />
                <Image width="150px" style={{ backgroundColor: 'white', borderRadius: '0.5em', padding: '10px' }} src={ getDeputyInformation('partyLogo') } />
                <br />
                <br />
                <h6 className="cardTextLeft wc">Partido<span className="cardTextRight">{ getDeputyInformation('partyName') }</span></h6>
                <br />
                <Image width="150px" src={ getDeputyInformation('leaderPhoto') } thumbnail />
                <br />
                <br />
                <h6 className="cardTextLeft wc">Líder<span className="cardTextRight">{ getDeputyInformation('leader') }</span></h6>

              </Col>

            </Row>
            <br />
            <Row>

              <Col xs={12} md={12}>
                
                <h4 className="wc">Gráfico</h4>
                <br />
                <DemoRadar />

              </Col>

            </Row>
            <br/>
            <Row>
              <h4 className="wc">Dados</h4>
              <Col xs={12} md={12}>
                <ListGroup variant="flush" className="cardTextLeft">
                  <ListGroup.Item  className="bgTrans wc">
                    Legislaturas (56)<span className="cardTextRight">1</span>
                  </ListGroup.Item>
                  <ListGroup.Item  className="bgTrans wc">
                    Despesas (R$2.450.889,91)<span className="cardTextRight">23,3%</span>
                  </ListGroup.Item>
                  <ListGroup.Item  className="bgTrans wc">
                    Discursos<span className="cardTextRight">345</span>
                  </ListGroup.Item>
                  <ListGroup.Item  className="bgTrans wc">
                    Votações (609)<span className="cardTextRight">80,7%</span>
                  </ListGroup.Item>
                  <ListGroup.Item  className="bgTrans wc">
                    Presenças (98/103)<span className="cardTextRight">94%</span>
                  </ListGroup.Item>
                  <ListGroup.Item  className="bgTrans wc">
                    Leis Aprovadas (0 + 3)<span className="cardTextRight">1,5</span>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
            <br/>
            <Row>
              <Col xs={12} md={12}>
                <h4 className="wc">Informações Adicionais e Detalhadas</h4>
                <br/>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>Despesas (R$2.450.889,91)</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>Discursos (345)</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>Presença (98)</Accordion.Header>
                    <Accordion.Body>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                      est laborum.
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>Proposições Aprovadas (0)</Accordion.Header>
                    <Accordion.Body>
                      { getDeputyList('proposition') }
                    </Accordion.Body>
                  </Accordion.Item>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>Proposições Relatadas ({ (reports?.total == null) ? 0 : reports.total } | { reports?.propositions.length } { (reports?.propositions.length == 1) ? 'encontrada' : 'encontradas' })</Accordion.Header>
                    <Accordion.Body>
                      { getDeputyList('proposition') }
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

  function partyLogo(party: string): string {
    let logo = '';
    switch (party) {
      case 'PL':
        logo = 'http://pl22.com.br/LOGO/MARCA_FINAL_PL.png'
        break;
      case 'PSOL':
        logo = 'https://psol50sp.org.br/wp-content/uploads/2019/12/Logo_PSOL-SP-13.png'
        break;
      case 'DEM':
        logo = 'https://logodownload.org/wp-content/uploads/2017/03/dem-democratas-logo-partido-7.png'
        break;
      case 'PSD':
        logo = 'http://www.psd-ba.org.br/imagens/psd-logo-manual-04.svg'
        break;
      case 'PSDB':
        logo = 'https://www.psdb.org.br/wp-content/themes/psdb-2017/dist/images/logo-nova.png'
        break;
      case 'PT':
        logo = 'https://pt.org.br/wp-content/themes/pt_2016/assets/images/ico-news-pt.png'
        break;
      case 'PSL':
        logo = 'https://seeklogo.com/images/P/psl-17-logo-E611BA820A-seeklogo.com.png'
        break;
      case 'PV':
        logo = 'https://pv.org.br/wp-content/uploads/2021/07/logo-vertical-destaque.png'
        break;
      case 'MDB':
        logo = 'https://logodownload.org/wp-content/uploads/2018/04/mdb-logo-partido-5.png'
        break;
      case 'NOVO':
        logo = 'https://a2.vnda.com.br/novo/2020/08/13/17_8_0_058_23_8_9_957_Novo30_AOC.svg'
        break;
      case 'PSC':
        logo = 'https://psc.org.br/wp-content/themes/psc/dist/images/logo20.png'
        break;
      case 'PP':
        logo = 'https://progressistas.org.br/website2020/wp-content/uploads/2020/12/logo.png'
        break;
      case 'PROS':
        logo = 'https://pros.org.br/wp-content/uploads/2021/02/pros-partido-republicano-da-ordem-social.png'
        break;
      case 'PCdoB':
        logo = 'http://www.isauralemos.com.br/wp-content/uploads/2012/04/logo-pcdob.jpg'
        break;
      case 'REDE':
        logo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Logomarca_da_Rede_Sustentabilidade_%28REDE%29%2C_do_Brasil.png/576px-Logomarca_da_Rede_Sustentabilidade_%28REDE%29%2C_do_Brasil.png'
        break;
      case 'REPUBLICANOS':
        logo = 'https://republicanos10.org.br/wp-content/uploads/2019/08/AF_Logo_Republicanos10_CMYK.png'
        break;
      case 'PATRIOTA':
        logo = 'https://patriota51.org.br/wp-content/uploads/2021/07/patriotasp-400x88-1.png'
        break;
      case 'PATRI':
        logo = 'https://patriota51.org.br/wp-content/uploads/2021/07/patriotasp-400x88-1.png'
        break;
      case 'PSB':
        logo = 'https://www.psb40.org.br/cms/wp-content/themes/psb40/assets/images/logo-footer.png'
        break;
      case 'PODE':
        logo = 'https://www.podemos.org.br/wp-content/uploads/2020/11/logo-podemos1.png'
        break;
      case 'AVANTE':
        logo = 'https://avante70.org.br/wp-content/themes/avante/assets/images/logo-sticky.png'
        break;
      case 'SOLIDARIEDADE':
        logo = 'https://www.solidariedade.org.br/media/2021/05/logo.svg'
        break;
      case 'PDT':
        logo = 'https://www.pdt.org.br/wp-content/uploads/2016/10/logo-vert-medio.png'
        break;
      case 'PTB':
        logo = 'https://ptb.org.br/wp-content/themes/ptb/v4/img/logo1-white-2.png'
        break;
      case 'CIDADANIA':
        logo = 'https://cidadania23.org.br/wp-content/uploads/2021/05/logo-retina-primary2-1.png'
        break;

      default:
        break;
    }
    return logo;
  }

  function getDeputyInformation(type: string): string {
    let text:string = "";
    switch (type) {
      case 'name':
        text = (deputyCompleteData?.dados.nomeCivil == undefined) ? '' : deputyCompleteData.dados.nomeCivil;
        break;
      case 'birthDate':
        text = (deputyCompleteData?.dados.dataNascimento == undefined) ? '' : deputyCompleteData.dados.dataNascimento;
        break;
      case 'birthPlace':
        text = (deputyCompleteData?.dados.municipioNascimento == undefined) ? '' : deputyCompleteData.dados.municipioNascimento;
        break;
      case 'birthPlaceState':
        text = (deputyCompleteData?.dados.ufNascimento == undefined) ? '' : deputyCompleteData.dados.ufNascimento;
        break;
      case 'schooling':
        text = (deputyCompleteData?.dados.escolaridade == undefined) ? '' : deputyCompleteData.dados.escolaridade;
        break;
      case 'partyLogo':
        text = (deputyPartyData?.dados.sigla == undefined) ? partyLogo('') : partyLogo(deputyPartyData.dados.sigla);
        break;
      case 'partyName':
        text = (deputyPartyData?.dados.nome == undefined) ? '' : deputyPartyData?.dados.nome;
        break;
    
      default:
        break;
    }
    return text;
  }

  function getDeputyList(type: string):any {
    if(type == 'profession')
      return deputyProfessionData?.dados.map((profession, idx) => (

        <ListGroup variant="flush" className="cardTextLeft">
          <ListGroup.Item  className="bgTrans wc">
            <h6>{ profession.titulo }<span className="cardTextRight">{ profession.dataHora }</span></h6>
          </ListGroup.Item>
        </ListGroup>

      ));
    if(type == 'occupation')
      return deputyOccupationData?.dados.map((occupation, idx) => (

        <ListGroup variant="flush" className="cardTextLeft">
          { (occupation.titulo != null) ?
            <ListGroup.Item  className="bgTrans wc txtCenter">
              <h6>{ occupation.titulo }</h6>
            </ListGroup.Item>
           : null
          }
          { (occupation.entidade != null) ?
            <ListGroup.Item  className="bgTrans wc">
              Empregador<span className="cardTextRight">{ occupation.entidade }</span>
            </ListGroup.Item>
            : null
          }
          { (occupation.entidadeUF != null || occupation.entidadePais != null) ?
            <ListGroup.Item  className="bgTrans wc">
              Localidade<span className="cardTextRight">{ occupation.entidadeUF } { (occupation.entidadeUF != null && occupation.entidadePais != null) ? ' - ' : null } { toCapitalize(occupation.entidadePais.toLowerCase()) }</span>
            </ListGroup.Item>
            : null
          }
          { (occupation.anoInicio != null || occupation.anoFim != null) ?
            <ListGroup.Item  className="bgTrans wc">
              Período<span className="cardTextRight">{ occupation.anoInicio } { (occupation.anoInicio != null && occupation.anoFim != null) ? ' - ' : null } { occupation.anoFim }</span>
            </ListGroup.Item>
            : null
          }
          <br />
        </ListGroup>

      ));
      if(type == 'proposition')
        return reports?.propositions.map((report, idx) => (

          <ListGroup variant="flush" className="cardTextLeft">
            <ListGroup.Item  className="">
              <h6>{ report.name }<span className="cardTextRight"><a href={ 'https://www.camara.leg.br/proposicoesWeb/fichadetramitacao?idProposicao=' + report.link.substring(20, report.link.length) }>Acompanhe</a></span></h6>
            </ListGroup.Item>
          </ListGroup>

        ));

  }

  function setCurrentPolitician(urlPolitician: string, urlParty: string) {

    const getPolitician = () => {

      axios.get<DeputyComplete>(urlPolitician)

        .then((responsePolitician) => {

          setDeputyCompleteData(responsePolitician.data);

        })

    }

    const getParty = () => {

      axios.get<DeputyParty>(urlParty)

        .then((responseParty) => {

          setDeputyPartyData(responseParty.data);

        })

    }

    getPolitician();
    getParty();

  }

  function toCapitalize(text: string):string {
    return text.replace(/(?:^|\s)\S/g, function(first: string):string { return first.toUpperCase(); });
  };

  function setCurrentPoliticianCareer() {

    const getProfession = () => {

      axios.get<DeputyProfession>('https://dadosabertos.camara.leg.br/api/v2/deputados/' + deputyCompleteData?.dados.id + '/profissoes')

        .then((responseProfession) => {

          setDeputyProfessionData(responseProfession.data);

        })

    }

    const getOccupation = () => {

      axios.get<DeputyOccupation>('https://dadosabertos.camara.leg.br/api/v2/deputados/' + deputyCompleteData?.dados.id + '/ocupacoes')

        .then((responseOccupation) => {

          setDeputyOccupationData(responseOccupation.data);

        })

    }

    getProfession();
    getOccupation();

  }

  function setPropositionsReport(id: number) {

    let propositionList:Proposition = {} as Proposition;

    propositionList.propositions = [{
      name: 'string',
      link: 'string'
    }];

    propositionList.propositions.pop();

    const getPropositions = () => {

      axios.get('https://totalcors.herokuapp.com/https://www.camara.leg.br/internet/sileg/Prop_lista.asp?Relator=0&ideCadastroProp=' + idPolitician + '&Limite=N&tipoProp=3')
        .then((response) => {

          const $ = cheerio.load(response.data);

          if(response.headers['x-final-url'].includes("Prop_lista")) {

            const urlElemsNumber = $('b')

            const arrayNumber = urlElemsNumber.text().trim().split("\n")

            var number;

            for (let i = 0; i < arrayNumber.length; i++)
                if(arrayNumber[i].includes('Foram encontrados'))
                    number = arrayNumber[i].match(/\b(\w+)\b/g)[2]

            propositionList.total = number;

            console.log(propositionList);

            for (let index = 2; index < Math.ceil(number/30)+1; index++)
            
              axios.get('https://totalcors.herokuapp.com/https://www.camara.leg.br/internet/sileg/Prop_lista.asp?Pagina=' + index + '&Relator=0&ideCadastroProp=' + idPolitician + '&Limite=N&tipoProp=3').then((response) => {

                const $ = cheerio.load(response.data)

                const urlElems2 = $('table > tbody > tr > td > a')

                urlElems2.each(
                    (idx:number, val:any) => {

                      var obj = {
                        name: $(val).text(),
                        link: $(val).attr('href')
                      };
                      console.log(obj)
                      propositionList.propositions.push(obj)

                    }
                )

              })

            const urlElems = $('table > tbody > tr > td > a')

            urlElems.each(

                (idx:number, val:any) => {

                  var obj = {
                    name: $(val).text(),
                    link: $(val).attr('href')
                  };
                  console.log(obj)
                  propositionList.propositions.push(obj)

                }

            )

            setReports(propositionList);

        } else {
          //revisar
          propositionList.total = 1;

          const urlElems = $('h3');

          const array:string[] = urlElems.text().split("\n");

          array.forEach(element => {
            element.replace("Inteiro teor", "");
            element.trim();
          });

          for (let i = 0; i < array.length; i++) {

            if (i == 1){
              array[i] = array[i].replace("Inteiro teor", "");
              var obj = {
                name: array[i].trim(),
                link: response.headers['x-final-url']
              };
              propositionList.propositions.push(obj);
            }

          }

          setReports(propositionList);

        }

      })

    }
    
    getPropositions();

  }

  return (
    
    <div className="mainBg">

      <div className="cards-container">

        <PoliticianGallery />

        {

          deputiesData.map((politician, idx) => (

            <div
              className="cardContainerCenter"
              onClick={
                () => { 
                  setModalShow(true)

                  setIdPolitician(politician.id)
                  setUrlPolitician(politician.uri)
                  setCurrentPolitician(politician.uri, politician.uriPartido)
                  setCurrentPoliticianCareer()
                  setPropositionsReport(politician.id)

                }}
            >

              <Image className="cardImage" src={ politician.urlFoto + 'maior.jpg' } rounded />
              
              <Card bg="dark" text="white" style={{ width: '18rem' }}>

                <Card.Body className="cardPadding txtCenter">

                  <Card.Subtitle>Deputad{ true ? 'o' : 'a' } Federal</Card.Subtitle>
                  <Card.Title>{ politician.nome }</Card.Title>

                  <Card.Text className="cardTextLeft">

                    Partido: <span className="cardTextRight">{ politician.siglaPartido }</span><br />
                    UF (estado): <span className="cardTextRight">{ politician.siglaUf }</span>

                  </Card.Text>
                  
                </Card.Body>

              </Card>

            </div>

          ))

        }

      <MyVerticallyCenteredModal

        show={modalShow}
        onHide={() => setModalShow(false)}

      />

      </div>

    </div>
  );
}

export default App;
