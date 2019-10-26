declare class C_GruPro extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Fiscal_Grupo_Produto> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtDescricao: MouraTextBox;
    readonly txtProduto: MouraTextBoxProcura;
    readonly txtGrupoFiscal: MouraTextBoxProcura;
    readonly txtGrupoProcura: MouraTextBoxProcura;
    readonly grdGrupoFiscal: MouraGridViewJS;
    readonly grdProduto: MouraGridViewJS;
    readonly btnIncluirProduto: MouraButton;
    readonly btnRemoverProduto: MouraButton;
    readonly btnNovoProduto: MouraButton;
    readonly btnCancelarProcura: MouraButton;
    readonly btnGravarProcura: MouraButton;
    readonly btnProcura: MouraButton;
    readonly mdProcura: MouraModal;
    protected Init(): void;
    protected OnCancelarProcura(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnProcura(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnGravarProcura(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnRespostaGravarRegistro(result: MsgBoxResultEventArgs): void;
    protected OnNovoProduto(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickRemover(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickIncluir(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected AlteracaoProduto(flag: boolean): void;
    protected OntxtGrupoFiscalMudou(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnGridSelecionouItemProduto(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected LimparCamposProduto(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Fiscal_Grupo_Produto): void;
    protected PreencherGrade(): void;
}
declare const c_GruPro: C_GruPro;
//# sourceMappingURL=C_GruPro.d.ts.map