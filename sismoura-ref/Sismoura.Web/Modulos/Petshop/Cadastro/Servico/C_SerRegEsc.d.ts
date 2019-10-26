declare class C_SerRegEsc extends MouraPageAngular {
    readonly grd: MouraGridViewJSEditavel;
    Servicos: SiSMoura.Core.Entity.ServicoRegraEscalaRetorno[];
    readonly btnGravar: MouraButton;
    readonly btnLimpar: MouraButton;
    protected Init(): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected OnClickGravar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickLimpar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
declare const c_SerRegEsc: C_SerRegEsc;
//# sourceMappingURL=C_SerRegEsc.d.ts.map