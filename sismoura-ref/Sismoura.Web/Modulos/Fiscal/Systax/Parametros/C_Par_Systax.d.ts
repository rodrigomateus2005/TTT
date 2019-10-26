declare class C_Par_Systax extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Systax_Parametro> {
    ParEmp: any;
    ParEmpresas: any[];
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly grid: MouraGridViewJSEditavel;
    readonly cboOrigem: MouraComboBox;
    readonly txtCodigo: MouraTextBox;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnValidandoItem(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected CarregarDadosTela(): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Systax_Parametro): void;
    protected OnAntesGravar(): boolean;
}
declare const c_Par_Systax: C_Par_Systax;
//# sourceMappingURL=C_Par_Systax.d.ts.map