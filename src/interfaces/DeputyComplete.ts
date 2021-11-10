export default interface IDeputyComplete {
    dados: {
    id: number;
    uri: string;
    nomeCivil: string;
    ultimoStatus: {
        id: number;
        uri: string;
        nome:string;
        siglaPartido: string;
        uriPartido: string;
        siglaUf: string;
        idLegislatura: string;
        urlFoto: string;
        email: string;
        data: string;
        nomeEleitoral: string;
        gabinete: {
            nome: string;
            predio: string;
            sala: string;
            andar: string;
            telefone: string;
            email: string;
        };
        situacao: string;
        condicaoEleitoral: string;
        descricaoStatus: string;
    };
    cpf: number;
    sexo: string;
    urlWebsite: string;
    redeSocial: string[];
    dataNascimento: string;
    dataFalecimento: string;
    ufNascimento: string;
    municipioNascimento: string;
    escolaridade: string;
    }
}