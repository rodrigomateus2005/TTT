declare class C_Patrim extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Agromoura_Patrimonio> {
    readonly grd: MouraGridViewJSEditavel;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtPatrimonio: MouraTextBox;
    readonly txtDescricao: MouraTextBox;
    readonly txtMaquina: MouraTextBoxProcura;
    readonly txtUsuario: MouraTextBoxProcura;
    readonly cboSituacao: MouraComboBox;
    readonly txtID: MouraTextBox;
    readonly txtValor: MouraTextBox;
    Patrimonios: SiSMoura.Core.Entity.Agromoura_PatrimonioRetorno[];
    codigo: number;
    protected Init(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisLimpar(): SiSMoura.Core.Entity.Agromoura_Patrimonio;
    OnPageLoad(): void;
    protected BuscarGrid(): void;
    protected OnMudouCodigo(s: any, e: any): void;
    protected OnDepoisGravar(): boolean;
}
declare var c_Patrim: C_Patrim;
//# sourceMappingURL=C_Patrim.d.ts.map