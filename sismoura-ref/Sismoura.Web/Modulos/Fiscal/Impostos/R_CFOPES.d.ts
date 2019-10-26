declare class R_CFOPES extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Cfop_Entrada> {
    readonly cboCfopEntrada: MouraComboBox;
    readonly cboCfopSaida: MouraComboBox;
    readonly grd: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected OnDepoisGravar(): any;
    protected OnExcluiuRegistroGrade(s: any, e: MouraGridViewJSItemEventArgs): void;
    protected LimparCampos(): void;
}
declare const r_CFOPES: R_CFOPES;
//# sourceMappingURL=R_CFOPES.d.ts.map