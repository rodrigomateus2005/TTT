declare class C_ProMec extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Agromoura_Programacao_Contrato> {
    readonly txtCodigo: MouraTextBox;
    readonly txtContrato: MouraTextBoxProcura;
    readonly txtMaquina: MouraTextBoxProcura;
    readonly txtFazenda: MouraTextBoxProcura;
    readonly txtTalhao: MouraTextBox;
    readonly txtHectares: MouraTextBox;
    readonly cboOperacao: MouraComboBox;
    readonly txtDataInicial: MouraTextBoxData;
    readonly grd: MouraGridViewJSEditavel;
    Prog: SiSMoura.Core.Entity.Agromoura_Programacao_ContratoRetorno[];
    protected Init(): void;
    OnPageLoad(): void;
    protected OnDepoisGravar(): boolean;
    protected OnAntesGravar(): boolean;
    protected BuscarGrid(): void;
    protected OnProcurouContrato(s: any, e: any): void;
    protected OnProcurouMaquina(s: any, e: any): void;
    protected OnPesquisouMaquina(s: any, e: any): void;
}
declare var c_ProMec: C_ProMec;
//# sourceMappingURL=C_ProMec.d.ts.map