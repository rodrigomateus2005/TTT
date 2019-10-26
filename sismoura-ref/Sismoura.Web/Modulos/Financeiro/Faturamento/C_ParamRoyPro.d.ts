declare class C_ParamRoyPro extends MouraPageAngular {
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly cboTipoRoyalties: MouraComboBox;
    readonly txtPercentRoyalties: MouraTextBox;
    readonly cboTipoTaxaProp: MouraComboBox;
    readonly txtPercentTaxaProp: MouraTextBox;
    readonly txtDiaVencimento: MouraTextBox;
    readonly btnAdicionar: MouraButton;
    readonly btnGravar: MouraButton;
    readonly btnNovo: MouraButton;
    readonly grdParametros: MouraGridViewJS;
    readonly txtQtdeParcelas: MouraTextBox;
    readonly txtIntervaloParcelas: MouraTextBox;
    Parametros: SiSMoura.Core.Entity.Parametro_Royalty_Propaganda[];
    Parametro: SiSMoura.Core.Entity.Parametro_Royalty_Propaganda;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnValidandoItem(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnTipoRoyaltyChanged(): void;
    protected OnTipoTaxaRoyaltyChanged(): void;
    ValidaTipoRoyalty(): void;
    ValidaTipoTaxaPropaganda(): void;
    protected DigitouParcelas(): void;
    protected DigitouVencimento(): void;
    protected DigitouIntervalo(): void;
    protected validaIntervalo(): boolean;
    protected OnClickGravar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnExcluirLinhaGrade(s: any, e: MouraGridViewJSItemEventArgs): void;
    protected OnClickNovo(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected LimparCampos(): void;
    protected PreencherCadastrados(): void;
}
declare var c_ParamRoyPro: C_ParamRoyPro;
//# sourceMappingURL=C_ParamRoyPro.d.ts.map