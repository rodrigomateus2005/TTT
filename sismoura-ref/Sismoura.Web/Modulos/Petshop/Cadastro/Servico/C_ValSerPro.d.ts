declare class C_ValSerPro extends MouraPageAngular {
    readonly txtProfissional: MouraTextBoxProcura;
    readonly txtServico: MouraTextBoxProcura;
    readonly grd: MouraGridViewJSEditavel;
    Servicos: SiSMoura.Core.Entity.AnimaisProfissionalValorServicoRetorno[];
    Servico: SiSMoura.Core.Entity.AnimaisProfissionalValorServicoRetorno;
    readonly btnGravar: MouraButton;
    readonly btnLimpar: MouraButton;
    protected Init(): void;
    OnPageLoad(): void;
    private LimparCampos;
    protected OnProcurouProfissional(s: MouraTextBoxProcuraRetornoProcura, e: MouraEventArgs): void;
    protected OnAdicionandoGrd(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnClickLimpar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickGravar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
}
declare const c_ValSerPro: C_ValSerPro;
//# sourceMappingURL=C_ValSerPro.d.ts.map