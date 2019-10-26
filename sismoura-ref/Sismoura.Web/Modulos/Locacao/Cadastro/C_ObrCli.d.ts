declare class C_ObrCli extends MouraPageAngular {
    readonly Grid: MouraGridViewJSEditavel;
    Obras: SiSMoura.Core.Entity.Locacao_Cliente_Obra[];
    readonly txtCep: MouraTextBoxCep;
    readonly txtCliente: MouraTextBoxProcura;
    readonly txtCodigo: MouraTextBox;
    readonly txtNomeObra: MouraTextBox;
    readonly txtEndereco: MouraTextBox;
    readonly txtNumero: MouraTextBox;
    readonly txtComplemento: MouraTextBox;
    readonly txtBairro: MouraTextBox;
    readonly txtCidade: MouraTextBoxProcura;
    readonly txtContato: MouraTextBox;
    readonly txtTelefone: MouraTextBoxTelefone;
    readonly chkInativo: MouraCheckBox;
    Obra: any;
    Entity: any;
    readonly btnGravar: MouraButton;
    readonly btnLimpar: MouraButton;
    readonly btnNovo: MouraButton;
    protected Init(): void;
    protected OnGridSelecionarItem(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected PreencherGrade(): void;
    protected OnConsultarCEP(s: any, e: MouraTextBoxCepPesquisouEventArgs): void;
    protected OnClickIncluirObra(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnClickBtnLimpar(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnClickBtnNovo(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickBtnGravar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    private Gravar;
    protected LimparCampos(): void;
    protected ValidarCampos(): boolean;
}
declare var c_ObrCli: C_ObrCli;
//# sourceMappingURL=C_ObrCli.d.ts.map