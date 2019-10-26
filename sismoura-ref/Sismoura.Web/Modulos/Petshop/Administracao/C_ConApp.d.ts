declare class C_ConApp extends MouraPageAngular {
    Resultados: any[];
    Funcionario: any;
    readonly grdEmpresas: MouraGridViewJSEditavel;
    protected Init(): void;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    protected LimparFuncionario(): void;
    protected CarregarEmpresas(): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellComboBoxOpened): void;
    protected SalvarEmpresas(): void;
    protected CarregarFuncionario(): void;
    protected AlterarFuncionario(): void;
}
declare var c_ConApp: C_ConApp;
//# sourceMappingURL=C_ConApp.d.ts.map