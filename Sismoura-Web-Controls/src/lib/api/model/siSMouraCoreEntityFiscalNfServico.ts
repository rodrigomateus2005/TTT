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


export interface SiSMouraCoreEntityFiscalNfServico { 
    nf?: number;
    qtde?: number;
    servico?: string;
    unitario?: number;
    total?: number;
    iss?: number;
    codigo?: number;
    cfop?: string;
    desconto?: number;
    descontoPorcentagem?: number;
    stPis?: number;
    stCofins?: number;
    aliquotaPis?: number;
    aliquotaCofins?: number;
    valorPis?: number;
    valorCofins?: number;
    valorIss?: number;
    id?: number;
    preencheuClasse?: boolean;
    isInativo?: boolean;
    ignorarDuplicidade?: boolean;
}
