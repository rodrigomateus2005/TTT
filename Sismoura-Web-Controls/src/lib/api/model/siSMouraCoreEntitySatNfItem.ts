/**
 * Sismoura.Web.View
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


export interface SiSMouraCoreEntitySatNfItem { 
    codigo?: number;
    codigoSatNf?: number;
    numItem?: number;
    produto?: number;
    codigoBarra?: string;
    descricao?: string;
    quantidade?: number;
    unitario?: number;
    total?: number;
    baseIcms?: number;
    porcentagemIcms?: number;
    valorIcms?: number;
    baseIcmsSt?: number;
    porcentagemIcmsSt?: number;
    valorIcmsSt?: number;
    unidade?: string;
    cstIcms?: string;
    cfop?: string;
    observacao?: string;
    valorDesconto?: number;
    valorOutrasDespesas?: number;
    stPis?: string;
    basePis?: number;
    aliquotaPis?: number;
    valorPis?: number;
    stCofins?: string;
    baseCofins?: number;
    aliquotaCofins?: number;
    valorCofins?: number;
    codAnp?: string;
    vrdescrat?: number;
    vracresrat?: number;
    observacaoProduto?: string;
    preencheuClasse?: boolean;
    isInativo?: boolean;
    ignorarDuplicidade?: boolean;
}
