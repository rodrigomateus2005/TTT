declare class R_ProdImpo extends MouraPage {
    readonly grdRel: MouraGridViewJS;
    readonly btnGerar: MouraButton;
    readonly btnLimpar: MouraButton;
    readonly btnBaixarExcel: MouraButton;
    readonly hdnCodigo: HTMLInputElement;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtUsuario: MouraTextBoxProcura;
    protected Init(): void;
    protected OnClickBotaoLimpar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickBotaoGerar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickBotaoLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
}
declare var r_ProdImpo: R_ProdImpo;
//# sourceMappingURL=R_ProdImpo.d.ts.map