declare class C_ParamNfse extends MouraPageAngular {
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly lblLocal: MouraLabel;
    readonly abaGeral: MouraTabPage;
    readonly Tab: MouraTabPanel;
    readonly abaEtransparencia: MouraTabPage;
    readonly abaOsasco: MouraTabPage;
    readonly abaNovaLima: MouraTabPage;
    readonly btnGravar: MouraButton;
    readonly btnExcluir: MouraButton;
    readonly btnNovo: MouraButton;
    readonly txtCpfResponsavel: MouraTextBoxCPF;
    OnPageLoad(): void;
    protected Init(): void;
    private LimparCampos;
    protected OnClickBtnNovo(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickBtnGravar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    private Gravar;
    protected AbasVisible(flag: boolean, CodigoIbge: number): void;
    protected ValidarCampos(): void;
}
declare var c_ParamNfse: C_ParamNfse;
//# sourceMappingURL=C_ParamNfse.d.ts.map