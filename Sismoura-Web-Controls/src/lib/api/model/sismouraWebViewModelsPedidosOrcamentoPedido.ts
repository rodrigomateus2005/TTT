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
import { SismouraWebViewModelsPedidosEmpresaPedido } from './sismouraWebViewModelsPedidosEmpresaPedido';
import { SismouraWebViewModelsPedidosFormaPagamentoPedido } from './sismouraWebViewModelsPedidosFormaPagamentoPedido';
import { SismouraWebViewModelsPedidosOrcamentoCartaoPedido } from './sismouraWebViewModelsPedidosOrcamentoCartaoPedido';
import { SismouraWebViewModelsPedidosOrcamentoChequesPedido } from './sismouraWebViewModelsPedidosOrcamentoChequesPedido';
import { SismouraWebViewModelsPedidosOrcamentoItemPedido } from './sismouraWebViewModelsPedidosOrcamentoItemPedido';
import { SismouraWebViewModelsPedidosOrcamentoPagamentoPedido } from './sismouraWebViewModelsPedidosOrcamentoPagamentoPedido';
import { SismouraWebViewModelsPedidosPessoaPedido } from './sismouraWebViewModelsPedidosPessoaPedido';
import { SismouraWebViewModelsPedidosUsuarioPedido } from './sismouraWebViewModelsPedidosUsuarioPedido';


export interface SismouraWebViewModelsPedidosOrcamentoPedido { 
    codigo?: number;
    cliente?: SismouraWebViewModelsPedidosPessoaPedido;
    codigoOrcamento?: number;
    data?: Date;
    dataEnvio?: Date;
    descontoAbsoluto?: number;
    descontoRelativo?: number;
    empresa?: SismouraWebViewModelsPedidosEmpresaPedido;
    situacao?: number;
    enviado?: boolean;
    formaPagamento?: SismouraWebViewModelsPedidosFormaPagamentoPedido;
    hasPosicao?: boolean;
    latitude?: number;
    longitude?: number;
    listaPreco?: number;
    observacao?: string;
    valorDinheiro?: number;
    valorTicket?: number;
    ordem?: number;
    precisao?: number;
    status?: number;
    bonificado?: boolean;
    vendedor?: SismouraWebViewModelsPedidosUsuarioPedido;
    itens?: Array<SismouraWebViewModelsPedidosOrcamentoItemPedido>;
    crediarioPagamentos?: Array<SismouraWebViewModelsPedidosOrcamentoPagamentoPedido>;
    cartaoPagamentos?: Array<SismouraWebViewModelsPedidosOrcamentoCartaoPedido>;
    chequePagamentos?: Array<SismouraWebViewModelsPedidosOrcamentoChequesPedido>;
}
