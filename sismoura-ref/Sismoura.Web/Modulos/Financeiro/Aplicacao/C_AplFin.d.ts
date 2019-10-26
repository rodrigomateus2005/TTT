declare class C_AplFin extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Financeiro_Aplicacao> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtData: MouraTextBoxData;
    readonly txtFornecedor: MouraTextBoxProcura;
    readonly txtValor: MouraTextBox;
    readonly txtJuros: MouraTextBox;
    readonly txtDias: MouraTextBox;
    readonly txtData_Parcela: MouraTextBoxData;
    readonly txtParcelas: MouraTextBox;
    readonly cboTipo: MouraComboBox;
    readonly cboConta_Corrente_Destino: MouraComboBox;
    readonly btnGerar: MouraButton;
    Dados: SiSMoura.Core.Entity.Financeiro_Aplicacao_Parcela[];
    readonly grid: MouraGridViewJSEditavel;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Financeiro_Aplicacao): void;
    protected OnProcurou(): void;
    protected alterarTipo(): void;
    protected GerarParcelas(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
declare var c_AplFin: C_AplFin;
//# sourceMappingURL=C_AplFin.d.ts.map