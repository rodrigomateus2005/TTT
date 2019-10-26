declare class C_CfgLinEmp extends MouraPageAngular {
    readonly txtEmpresa: MouraTextBoxProcura;
    readonly txtLinha: MouraTextBoxProcura;
    readonly chkUtilizarEscala: MouraCheckBox;
    readonly grdConfig: MouraGridViewJSEditavel;
    Configs: SiSMoura.Core.Entity.ConfiguracoesLinhaEmpresaRetorno[];
    Config: SiSMoura.Core.Entity.ConfiguracoesLinhaEmpresaRetorno;
    readonly btnGravar: MouraButton;
    readonly btnExcluir: MouraButton;
    readonly btnLimpar: MouraButton;
    protected Init(): void;
    OnPageLoad(): void;
    private LimparCampos;
    protected OnTxtEmpresaProcurou(s: MouraTextBoxProcuraRetornoProcura, e: MouraEventArgs): void;
    private PreencherGrade;
    protected OnAdicionandoGrdConfig(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnClickGravar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickExcluir(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickLimpar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
declare const c_CfgLinEmp: C_CfgLinEmp;
//# sourceMappingURL=C_CfgLinEmp.d.ts.map