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


export interface SiSMouraCoreEntityAgendaConsolidadaPetRetornoAPI { 
    fantasia?: string;
    codigoEmpresa?: number;
    enderecoEmpresa?: string;
    numeroEmpresa?: number;
    cidadeEmpresa?: string;
    estadoEmpresa?: string;
    data?: Date;
    hora?: string;
    codigoProfissional?: number;
    nomeProfissional?: string;
    temServico?: number;
    temIndisponibilidade?: number;
    temHorarioTrabalho?: number;
    duaracaoServicoHoras?: number;
    duaracaoServicoMinutos?: number;
    readonly statusHorario?: string;
    readonly isDisponivel?: boolean;
    distanciaEmpresa?: number;
    tempoEmpresa?: number;
    preencheuClasse?: boolean;
    isInativo?: boolean;
    ignorarDuplicidade?: boolean;
}
