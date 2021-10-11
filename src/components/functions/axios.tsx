const axios = require('axios');

export default axios.create({
    baseUrl: 'https://totalcors.herokuapp.com/https://dadosabertos.camara.leg.br/api/v2',
    heards: {
        'Content-type': 'application/json'
    }
});

/*interface Deputy {
    id: number;
    uri: string;
    nome: string;
    siglaPartido: string;
    uriPartido: string;
    siglaUf: string;
    idLegislatura: number;
    urlFoto: string;
    email: string;
}

axios.get<Deputy[]>('https://totalcors.herokuapp.com/https://dadosabertos.camara.leg.br/api/v2/deputados?ordem=ASC&ordenarPor=nome')
    .then(response => {

    });*/

/*interface response {
    id: number;
    uri: string;
    nome: string;
    siglaPartido: string;
    uriPartido: string;
    siglaUf: string;
    idLegislatura: number;
    urlFoto: string;
    email: string;
};
*/