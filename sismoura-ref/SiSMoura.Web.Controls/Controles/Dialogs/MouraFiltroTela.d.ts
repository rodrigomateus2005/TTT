declare class MouraFiltroTela extends MouraControl {
    private idCHKVisivel;
    private idCHKObrigatorio;
    private data;
    protected readonly Modal: MouraModal;
    protected readonly Grid: MouraGridViewJS;
    protected readonly BotaoCancelar: MouraButton;
    protected readonly BotaoSalvar: MouraButton;
    readonly hdnSource: HTMLInputElement;
    readonly hdnSelecionar: HTMLInputElement;
    protected IniciarEventos(): void;
    Abrir(accordionFiltros: MouraAccordion): void;
    private GetControlLabelCorreta;
    protected OnEndCallBackModal(s: any, e: any): void;
    protected OnCloseDialog(s: any, e: any): void;
    protected OnClickBotaoCancelar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected Esconder(): void;
    protected OnClickBotaoSalvar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
}
//# sourceMappingURL=MouraFiltroTela.d.ts.map