declare class Encomen extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Encomenda> {
    readonly chkPadrao: MouraCheckBox;
    readonly txtProdutoCodigo: MouraTextBoxProcura;
    readonly txtCliente: MouraTextBoxProcura;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly cboSituacao: MouraComboBox;
    readonly grid: MouraGridViewJS;
    OnPageLoad(): void;
    Init(): void;
    OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Encomenda): void;
    OnAntesGravar(): boolean;
    Limpar(): void;
    private OnSelecionouLinha;
    private PreencherGradeRegistrosCadastrados;
    private OnProcurouProduto;
    private OnProcurouCliente;
    private OnCheckChanged;
    private OnProcurouCodigo;
    OnDepoisGravar(): boolean;
}
declare const encomen: Encomen;
//# sourceMappingURL=Encomen.d.ts.map