declare class C_RegCit extends MouraPageAngular {
    readonly txtRegiao: MouraTextBoxProcura;
    readonly txtCidade: MouraTextBoxProcura;
    readonly grid: MouraGridViewJSEditavel;
    readonly btnAdicionar: MouraButton;
    readonly btnGravar: MouraButton;
    readonly btnLimpar: MouraButton;
    Entity: any;
    Cidades: any[];
    Cidade: any;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnPesquisouRegiao(s: any, e: MouraEventArgs): void;
    protected OnPesquisouCidade(s: any, e: MouraEventArgs): void;
    protected OnbtnAdicionarClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickBtnLimpar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected PreencherGrade(): any;
    protected LimparCampos(): void;
    protected Gravar(): void;
    protected VerificarCidade(): boolean;
    protected ValidarCampos(): boolean;
}
declare const c_RegCit: C_RegCit;
//# sourceMappingURL=C_RegCit.d.ts.map