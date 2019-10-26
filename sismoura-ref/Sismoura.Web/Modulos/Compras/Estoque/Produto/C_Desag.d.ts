declare class C_Desag extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Produto_Desagregacao> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtDescricao: MouraTextBox;
    readonly txtProduto: MouraTextBoxProcura;
    readonly cboRealizarDesag: MouraComboBox;
    readonly txtSubProduto: MouraTextBoxProcura;
    readonly txtPeso: MouraTextBox;
    readonly chkPerda: MouraCheckBox;
    readonly txtAjusteCusto: MouraTextBox;
    readonly Grid: MouraGridViewJS;
    readonly grdSubProd: MouraGridViewJSEditavel;
    Desagregado: SiSMoura.Core.Entity.Produto_Desagregacao_Item;
    Desagregados: SiSMoura.Core.Entity.Produto_Desagregacao_Item[];
    protected Init(): void;
    OnPageLoad(): void;
    protected OnClickBotaoLinhaItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    private produtoExcluido;
    protected OnClickBotaoExcluiuItem(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Produto_Desagregacao): void;
    protected PreencherGradeSubProdutos(Entity: SiSMoura.Core.Entity.Produto_Desagregacao): void;
    protected OnConfigurarPerda(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Produto_Desagregacao): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnBotaoNovo(): void;
    protected LimparCampos(): void;
}
declare const c_Desag: C_Desag;
//# sourceMappingURL=C_Desag.d.ts.map