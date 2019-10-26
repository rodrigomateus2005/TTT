declare class C_Solict extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Solicitacao> {
    Produto: any;
    Produtos: any[];
    readonly grid: MouraGridViewJSEditavel;
    readonly txtCodigoProduto: MouraTextBoxProcura;
    readonly txtQtde: MouraTextBox;
    readonly btnReplicar: MouraButton;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtDescricaoProduto: MouraTextBox;
    readonly cboUnidadeMedia: MouraComboBox;
    readonly txtSolcitante: MouraTextBoxProcura;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnSelecionouItem(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected MudouDescricaoProduto(): void;
    protected OnClickReplicar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnRepostaReplicar(result: MsgBoxResultEventArgs): void;
    protected LimparProduto(): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Solicitacao): void;
    protected OnProdutoPesquisou(): void;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Solicitacao): void;
    protected OnAntesGravar(): boolean;
}
declare const c_Solict: C_Solict;
//# sourceMappingURL=C_Solict.d.ts.map