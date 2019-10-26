declare class C_CumQue extends MouraPageAngular {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly optTipoProcura: MouraRadioButtonList;
    readonly grdProdutos: MouraGridViewJS;
    readonly btnGravar: MouraButton;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnOptTipoProcuraSelectionChanged(s: MouraRadioButtonList, e: MouraEventArgs): void;
    protected OnClickBtnGravar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected preencherGrid(retorno: any): void;
    protected OnExcluiuProduto(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
}
declare const c_CumQue: C_CumQue;
//# sourceMappingURL=C_CumQue.d.ts.map