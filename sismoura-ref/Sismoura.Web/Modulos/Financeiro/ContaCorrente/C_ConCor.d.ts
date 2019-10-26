declare class C_ConCor extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Conta_Corrente> {
    readonly accCadastro: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly txtCodigo: MouraTextBox;
    readonly txtBanco: MouraTextBoxProcura;
    readonly txtConta: MouraTextBox;
    readonly lblSaldo: MouraLabel;
    OnPageLoad(): void;
    Init(): void;
    Limpar(): void;
    protected OnDepoisLimpar(Entidade: SiSMoura.Core.Entity.Conta_Corrente): void;
    private OnBuscouNomeBanco;
    private OnSelecionouLinha;
    OnAntesGravar(): boolean;
    private ResetarContasCorrentesPadrao;
    private ExisteContaPadrao;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Conta_Corrente): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    private GetCnpj;
    private GetNomeBanco;
    private OnEmpresaChenged;
    PreencherGrade(): void;
    private OnMudouConta;
    private VerificarContaCorrente;
    private GetSaldo;
}
declare const c_ConCor: C_ConCor;
//# sourceMappingURL=C_ConCor.d.ts.map