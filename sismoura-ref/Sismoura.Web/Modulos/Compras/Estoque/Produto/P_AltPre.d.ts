declare class P_AltPre extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Programar_Alteracao_Preco> {
    readonly txtProduto: MouraTextBoxProcura;
    readonly txtPreco: MouraTextBox;
    readonly txtData: MouraTextBoxData;
    readonly txtNovoPreco: MouraTextBox;
    readonly Grid: MouraGridViewJS;
    readonly cboTipo: MouraComboBox;
    readonly txtId: MouraTextBox;
    protected Init(): void;
    protected MudouTextoProduto(): void;
    protected OnLimparProduto(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    OnPageLoad(): void;
    protected OnBuscouProduto(s: MouraTextBoxProcura, e: MouraTextBoxProcura): void;
    protected PreencherComboPreco(codProduto: number): void;
    protected OnAlterouTipo(): void;
    OnSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Programar_Alteracao_Preco): void;
    protected OnAntesDeletar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Programar_Alteracao_Preco): void;
    protected LimparCampos(): void;
}
declare const p_AltPre: P_AltPre;
//# sourceMappingURL=P_AltPre.d.ts.map