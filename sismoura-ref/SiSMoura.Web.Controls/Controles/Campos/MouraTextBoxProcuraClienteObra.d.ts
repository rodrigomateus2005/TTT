declare class MouraProcurouObraEventArgs extends MouraEventArgs {
    Obra: SiSMoura.Core.Entity.Locacao_Cliente_Obra;
}
declare class MouraProcurouClienteEventArgs extends MouraEventArgs {
    Cliente: SiSMoura.Core.Entity.Pessoa;
}
declare class MouraProcurouObraEventHandler extends MouraGenericEventHandler<MouraTextBoxProcuraClienteObra, MouraProcurouObraEventArgs> {
}
declare class MouraProcurouClienteEventHandler extends MouraGenericEventHandler<MouraTextBoxProcuraClienteObra, MouraProcurouClienteEventArgs> {
}
declare class MouraTextBoxProcuraClienteObra extends MouraControl {
    ProcurouObra: MouraEventHandler;
    PesquisandoObra: MouraTextBoxProcuraPesquisandoEventHandler;
    ProcurouCliente: MouraEventHandler;
    PesquisandoCliente: MouraTextBoxProcuraPesquisandoEventHandler;
    private usarAjax;
    UsarAjax: boolean;
    readonly TextBoxCliente: MouraTextBoxProcura;
    readonly TextBoxObra: MouraTextBoxProcura;
    readonly hdnExibirBotaoObras: HTMLInputElement;
    readonly btnObra: DevExpress.Web.Scripts.ASPxClientButton;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnMouraTextBoxProcuraClientePesquisando(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraPesquisandoEventArgs): void;
    protected OnMouraTextBoxProcuraClienteAbriuProcura(s: MouraTextBoxProcura, ev: JQueryEventObject): void;
    protected OnMouraTextBoxProcuraClienteProcurou(s: MouraTextBoxProcura, ev: MouraEventArgs): void;
    protected OnMouraTextBoxProcuraClienteLimpou(s: MouraTextBoxProcura, ev: MouraEventArgs): void;
    protected OnMouraTextBoxProcuraObraPesquisando(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraPesquisandoEventArgs): void;
    protected OnMouraTextBoxProcuraObraValidateMostrar(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraValidateMostrarEventArgs): void;
    Limpar(): void;
    protected LimparParametros(): void;
    protected OnMouraTextBoxProcuraObraProcurou(s: MouraTextBoxProcura, ev: MouraEventArgs): void;
}
//# sourceMappingURL=MouraTextBoxProcuraClienteObra.d.ts.map