declare class C_ProGru extends MouraPageAngular {
    Servico: any;
    Servicos: any[];
    readonly txtTipoProfissional: MouraTextBoxProcura;
    readonly txtGrupoServico: MouraTextBoxProcura;
    readonly Grid: MouraGridViewJSEditavel;
    readonly btnGravar: MouraButton;
    readonly btnNovo: MouraButton;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnValidandoItemServico(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected LimparServico(): void;
    protected OnProcurouTipoProfissional(): void;
    protected OnClickNovoProfissional(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickNovo(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickNovoGrupoServico(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickGravar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected LimparCampos(): void;
    protected GetCadastrados(): void;
}
declare var c_ProGru: C_ProGru;
//# sourceMappingURL=C_ProGru.d.ts.map