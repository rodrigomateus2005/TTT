declare class C_ConCst extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Cst_Entrada> {
    readonly cboCstEntrada: MouraComboBox;
    readonly cboCstSaida: MouraComboBox;
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected OnDepoisGravar(): any;
    protected OnExcluiuRegistroGrade(s: any, e: MouraGridViewJSItemEventArgs): void;
    protected LimparCampos(): void;
}
declare const c_ConCst: C_ConCst;
//# sourceMappingURL=C_ConCst.d.ts.map