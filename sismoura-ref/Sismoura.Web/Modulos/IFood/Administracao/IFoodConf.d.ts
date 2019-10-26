interface OAuthTokenResponse {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
}
declare class IFoodConf extends MouraPageCadastroAngular<SiSMoura.Core.Entity.IFood_Parametros> {
    readonly Grid: MouraGridViewJS;
    readonly btnGerarToken: MouraButton;
    protected Init(): void;
    OnBtnGerarTokenClick(s: DevExpress.Web.Scripts.ASPxClientControl, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.IFood_Parametros): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
}
declare var iFoodConf: IFoodConf;
//# sourceMappingURL=IFoodConf.d.ts.map