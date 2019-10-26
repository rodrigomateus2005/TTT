declare class C_LayCol extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Layout_Coletor> {
    readonly grd: MouraGridViewJSEditavel;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly chkAlinhamento: MouraCheckBox;
    readonly cboAlinhamento: MouraComboBox;
    readonly cboCampo: MouraComboBox;
    readonly cboTipoProcura: MouraComboBox;
    readonly cboTipoDelimitacao: MouraComboBox;
    readonly txtAlinhar: MouraTextBox;
    readonly txtDelimitador: MouraTextBox;
    readonly txtTamanho: MouraTextBox;
    Campos: SiSMoura.Core.Entity.Layout_Coletor_Campo[];
    readonly txtDescricao: MouraTextBox;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnSelectedIndexChangedCampo(): void;
    protected OnCheckChangedAlinhamento(): void;
    protected OnDepoisGravar(): boolean;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected AtualizarGrid(): void;
    protected OnProcurou(): void;
    protected OnClickIncluir(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    private PreencherGrupos;
    protected OnAntesGravar(): boolean;
    protected OnSelectedIndexChangedTipoDelimitacao(): void;
    protected selecionarCheck(chk: MouraCheckBox, valor: boolean): void;
    protected OnDepoisLimpar(entidade: SiSMoura.Core.Entity.Layout_Coletor): void;
    protected OnClickExcluirCampos(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
}
declare var c_LayCol: C_LayCol;
//# sourceMappingURL=C_LayCol.d.ts.map