declare class C_EmpPetApp extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Petapp_Empresa> {
    readonly grid: MouraGridViewJS;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly chkAtivoProd: MouraCheckBox;
    readonly chkAtivoHom: MouraCheckBox;
    readonly txtApiProd: MouraTextBox;
    readonly txtApiHom: MouraTextBox;
    OnPageLoad(): void;
    Init(): void;
    Limpar(): void;
    OnDepoisGravar(): boolean;
    OnDepoisDeletar(): boolean;
    private OnProcurouCliente;
    private PreencherGrade;
    private OnSelecionouLinha;
    private VerificaEmpresaExistente;
    private PreencherDadosCliente;
    private OnCheckChanged;
}
declare const c_EmpPetApp: C_EmpPetApp;
//# sourceMappingURL=C_EmpPetApp.d.ts.map