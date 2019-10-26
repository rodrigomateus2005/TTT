declare class MouraGridViewSelecionouEventArgs extends MouraEventArgs {
    CodigoSelecionado: string;
}
declare class MouraGridView extends MouraControl {
    SelecionouCodigo: MouraGenericEventHandler<any, MouraGridViewSelecionouEventArgs>;
    constructor(id: string);
    private urlPagina;
    readonly Grid: DevExpress.Web.Scripts.ASPxClientGridView;
    readonly ModalGrafico: DevExpress.Web.Scripts.ASPxPopupControl;
    readonly botaoFullScreen: DevExpress.Web.Scripts.ASPxClientButton;
    readonly hdnCustomButton: HTMLInputElement;
    readonly hdnTam: HTMLInputElement;
    readonly hdnIsFull: HTMLInputElement;
    readonly Painel: HTMLDivElement;
    protected IniciarEventos(): void;
    PerformCallback(args?: string): void;
    InCallback(): boolean;
    private GridCustomButtonClick;
    abrirURLPagina(id: any): void;
    abrirPainelGrafico(): void;
    GrdFullScreen(): void;
    protected IsGradeFullScreen(pnGrade: JQuery): boolean;
    protected onClickFullScreen(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    SelecionarCodigo(id: string): void;
}
//# sourceMappingURL=MouraGridView.d.ts.map