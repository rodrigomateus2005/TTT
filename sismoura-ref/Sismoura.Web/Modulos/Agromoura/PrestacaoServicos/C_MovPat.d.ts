declare class C_MovPat extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Agromoura_Patrimonio_Movimentacao> {
    readonly grd: MouraGridViewJSEditavel;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtCodPatrimonio: MouraTextBoxProcura;
    readonly txtPatrimonio: MouraTextBox;
    readonly txtData: MouraTextBoxData;
    readonly txtDescricao: MouraTextBox;
    readonly txtMaquina: MouraTextBoxProcura;
    readonly txtUsuario: MouraTextBoxProcura;
    readonly cboSituacao: MouraComboBox;
    readonly txtObservacao: MouraTextBox;
    Dados: SiSMoura.Core.Entity.Agromoura_PatrimonioRetorno[];
    codigo: number;
    protected Init(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Agromoura_Patrimonio_Movimentacao): SiSMoura.Core.Entity.Agromoura_Patrimonio_Movimentacao;
    OnPageLoad(): void;
    protected OnProcurou(s: any, e: any): void;
    protected OnGrdSelecionouItem(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected BuscarGrid(): void;
    protected OnMudouCodigo(s: any, e: any): void;
    protected OnDepoisGravar(): boolean;
}
declare var c_MovPat: C_MovPat;
//# sourceMappingURL=C_MovPat.d.ts.map