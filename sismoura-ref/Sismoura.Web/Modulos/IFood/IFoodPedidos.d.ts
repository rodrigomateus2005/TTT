declare class IFoodPedidos extends MouraPageCadastroAngular<SiSMoura.Core.Entity.IFood_Parametros> {
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly grdPedidos: MouraGridViewJS;
    readonly btnConfirmar: MouraButton;
    readonly btnSaiuParaEntrega: MouraButton;
    readonly btnEntregue: MouraButton;
    protected Init(): void;
    OnPageLoad(): void;
    preencherPedidos(): void;
    OnCboEmpresaSelectedItemChanged(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnGrdPedidoSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnBtnConfirmarTokenClick(s: DevExpress.Web.Scripts.ASPxClientControl, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    OnBtnSaiuParaEntregaTokenClick(s: DevExpress.Web.Scripts.ASPxClientControl, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    OnBtnEntregueTokenClick(s: DevExpress.Web.Scripts.ASPxClientControl, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
declare const iFoodPedidos: IFoodPedidos;
//# sourceMappingURL=IFoodPedidos.d.ts.map