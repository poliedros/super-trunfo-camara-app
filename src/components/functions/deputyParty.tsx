export default interface IDeputyParty {
    dados: {
    id: number;
    sigla: string;
    nome: string;
    uri: string;
    status: {
        data: string;
        idLegislatura: number;
        situacao: string;
        totalPosse: number;
        totalMembros: number;
        uriMembros: string;
        líder: {
            uri: string;
            nome: string;
            siglaPartido: string;
            uriPartido: string;
            uf: string;
            idLegislatura: number;
            urlFoto: string;
        };
    };
    numeroEleitoral: number;
    urlLogo: string;
    urlWebSite: number;
    urlFacebook: string;
    }
}