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


export interface SiSMouraCoreEntityVendaTefDedicado { 
    venda?: number;
    operadora?: string;
    bandeira?: string;
    nsuSitef?: string;
    nsuHost?: string;
    parcelas?: number;
    modalidadePagamento?: string;
    modalidadePagamentoTexto?: string;
    instituicaoTransacao?: string;
    codigoAutorizacao?: string;
    dataTransacao?: Date;
    nomeInstituicao?: string;
    tipoCartaoLido?: number;
    bin?: string;
    valorAprovado?: number;
    grupoModalidade?: string;
    subgrupoModalidade?: string;
    bandeiraNumero?: number;
    valorDescontoTef?: number;
    valorSaqueTef?: number;
    codigoRecebimento?: number;
    bandeiraOriginal?: number;
    viaEstabelecimento?: string;
    viaCliente?: string;
    codigoEstabelecimento?: string;
    id?: number;
    preencheuClasse?: boolean;
    isInativo?: boolean;
    ignorarDuplicidade?: boolean;
}
