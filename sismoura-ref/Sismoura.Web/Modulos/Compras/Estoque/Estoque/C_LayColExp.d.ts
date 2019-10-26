declare class C_LayColExp extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Layout_Coletor_Exp> {
    readonly grd: MouraGridViewJSEditavel;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly chkAlinhamento: MouraCheckBox;
    readonly cboAlinhamento: MouraComboBox;
    readonly cboCampo: MouraComboBox;
    readonly cboSeparador: MouraComboBox;
    readonly cboTipoProcura: MouraComboBox;
    readonly cboTipoDelimitacao: MouraComboBox;
    readonly txtAlinhar: MouraTextBox;
    readonly txtDelimitador: MouraTextBox;
    readonly txtTamanho: MouraTextBox;
    CamposExp: SiSMoura.Core.Entity.Layout_Coletor_Campo_Exp[];
    readonly txtDescricao: MouraTextBox;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnSelecionouSeparador(): void;
    protected OnCheckChangedAlinhamento(): void;
    protected OnDepoisGravar(): boolean;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected AtualizarGrid(): void;
    protected OnProcurou(): void;
    protected OnSelectedIndexChangedCampo(): void;
    protected OnClickIncluir(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    private PreencherGrupos;
    protected OnAntesGravar(): boolean;
    protected OnSelectedIndexChangedTipoDelimitacao(): void;
    protected selecionarCheck(chk: MouraCheckBox, valor: boolean): void;
    protected OnDepoisLimpar(entidade: SiSMoura.Core.Entity.Layout_Coletor_Exp): void;
    protected OnClickExcluirCampos(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
}
declare var c_LayColExp: C_LayColExp;
//# sourceMappingURL=C_LayColExp.d.ts.map