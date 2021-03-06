declare class C_Conf_Fiscal extends MouraPageAngular {
    readonly MouraAccordion1: MouraAccordion;
    readonly MouraAccordion2: MouraAccordion;
    readonly MouraAccordion3: MouraAccordion;
    readonly MouraAccordion4: MouraAccordion;
    readonly MouraAccordion5: MouraAccordion;
    readonly MouraAccordion6: MouraAccordion;
    readonly MouraAccordion7: MouraAccordion;
    readonly MouraAccordion8: MouraAccordion;
    readonly txtVersaoGIARJ: MouraTextBox;
    readonly cboSeriePadrao: MouraComboBox;
    readonly cboAmbienteEnvioNFe: MouraComboBox;
    readonly chkCliente_Devolucao: MouraCheckBox;
    readonly chkNF_Simples_Nac_Emitir_Msg: MouraCheckBox;
    readonly chkCFOP_Cliente: MouraCheckBox;
    readonly chkOcultarCodigo: MouraCheckBox;
    readonly chkGerar_Receber_Fiscal: MouraCheckBox;
    readonly chkAlterar_Documento_Mercantil_Receber: MouraCheckBox;
    readonly chkSem_Fatura: MouraCheckBox;
    readonly chkNao_Excluir_Receber: MouraCheckBox;
    readonly chkImprimir_Vencimentos_NFE: MouraCheckBox;
    readonly chkAdicionar_Classificacao_Dados_Adicionais: MouraCheckBox;
    readonly chkObservacao_Cliente: MouraCheckBox;
    readonly chkImprimir_Descricao_Imposto: MouraCheckBox;
    readonly chkObservacao_Orcamento: MouraCheckBox;
    readonly chkImprimir_Vendedor_NF: MouraCheckBox;
    readonly chkICMS_ST_Dados_Adicionais: MouraCheckBox;
    readonly chkOrcamento_DadosAdicionais: MouraCheckBox;
    readonly chkDesconto: MouraCheckBox;
    readonly chkVenda_Dados_Adicionais: MouraCheckBox;
    readonly chkDados_Adicionais_ST: MouraCheckBox;
    readonly chkDestcPisCofins: MouraCheckBox;
    readonly chkCFOP_Dados_Adicionais: MouraCheckBox;
    readonly chkAddCodOSAdicionais: MouraCheckBox;
    readonly chkImp_EndEnt: MouraCheckBox;
    readonly chkImportarCondicaoPagamento: MouraCheckBox;
    readonly chkImp_Objeto_OS: MouraCheckBox;
    readonly chkAdicionar_CST_NF: MouraCheckBox;
    readonly chkDadosTroca: MouraCheckBox;
    readonly chkDiscriminar_Controlado: MouraCheckBox;
    readonly chkRegras_Simples: MouraCheckBox;
    readonly chkClassificacao: MouraCheckBox;
    readonly chkRegraNotaDev: MouraCheckBox;
    readonly chkTiraValorDespesas: MouraCheckBox;
    readonly chkAgrupar: MouraCheckBox;
    readonly chkOcultar_TipoNF: MouraCheckBox;
    readonly chkImportar_Observacao_Produto: MouraCheckBox;
    readonly chkOrdenar_Produto: MouraCheckBox;
    readonly chkAgrupar_Produtos_NF: MouraCheckBox;
    readonly chk_PermitirSomarProdutos: MouraCheckBox;
    readonly chkImprimir_Referencia_NF: MouraCheckBox;
    readonly chkSempre_Pedir_Lista: MouraCheckBox;
    readonly chkObsVenda: MouraCheckBox;
    readonly chkAgrupar_Servico: MouraCheckBox;
    readonly chkDesconsiderar_Vasilhame: MouraCheckBox;
    readonly chkProduto_Fornecedor: MouraCheckBox;
    readonly chkProdutoEstoqueNegativo: MouraCheckBox;
    readonly chkEmpresaDeposito: MouraCheckBox;
    readonly chkCalcular_Volume_NF: MouraCheckBox;
    readonly chkCalcular_Peso: MouraCheckBox;
    readonly chkVolume_Venda: MouraCheckBox;
    readonly txtProduto: MouraTextBox;
    readonly chkInformarVolume: MouraCheckBox;
    readonly chkSomar_Frete_Simples: MouraCheckBox;
    readonly chkAcrescimo_Outras_Despesas: MouraCheckBox;
    readonly chkImportar_Desconto_Orcamento: MouraCheckBox;
    readonly chkEmbutir_Acrescimo: MouraCheckBox;
    readonly chkEmbutir_Desconto: MouraCheckBox;
    readonly chkDescontoRatearSt: MouraCheckBox;
    readonly chkTravar_Client_Imp: MouraCheckBox;
    readonly chkPermitir_Produto_Troca: MouraCheckBox;
    readonly chkDesabilitar_Fatura: MouraCheckBox;
    readonly chkPor_Carga: MouraCheckBox;
    readonly chkNao_Importar_Servicos: MouraCheckBox;
    readonly chkDuplicata_Nota: MouraCheckBox;
    readonly chkVerificar_CFOP: MouraCheckBox;
    readonly chkCancelarVendaNF: MouraCheckBox;
    readonly chkNFe: MouraCheckBox;
    readonly chkGerar_NFe_Automaticamente: MouraCheckBox;
    readonly chkOcultarCFOP2: MouraCheckBox;
    readonly btnGravar: MouraButton;
    Entidade: SiSMoura.Core.Common.Configuracoes_Fiscal;
    protected Init(): void;
    OnPageLoad(): void;
    protected PreencherTela(): void;
    protected OnClicouBtnAtualizarConfiguracao(): void;
}
declare var c_Conf_Fiscal: C_Conf_Fiscal;
//# sourceMappingURL=C_Conf_Fiscal.d.ts.map