declare class MouraProcurouAnimalEventArgs extends MouraEventArgs {
    Animal: SiSMoura.Core.Entity.Animais_Cadastro;
}
declare class MouraProcurouProprietarioEventArgs extends MouraEventArgs {
    Proprietario: SiSMoura.Core.Entity.Pessoa;
}
declare class MouraProcurouAnimalEventHandler extends MouraGenericEventHandler<MouraTextBoxProcuraProprietarioAnimal, MouraProcurouAnimalEventArgs> {
}
declare class MouraProcurouProprietarioEventHandler extends MouraGenericEventHandler<MouraTextBoxProcuraProprietarioAnimal, MouraProcurouProprietarioEventArgs> {
}
declare class MouraTextBoxProcuraProprietarioAnimal extends MouraControl {
    ProcurouAnimal: MouraEventHandler;
    PesquisandoAnimal: MouraTextBoxProcuraPesquisandoEventHandler;
    ProcurouProprietario: MouraEventHandler;
    PesquisandoProprietario: MouraTextBoxProcuraPesquisandoEventHandler;
    private usarAjax;
    UsarAjax: boolean;
    private sexoAnimal;
    SexoAnimal: number;
    readonly TextBoxProprietario: MouraTextBoxProcura;
    readonly TextBoxAnimal: MouraTextBoxProcura;
    readonly TextBoxConvenio: MouraTextBoxProcura;
    readonly hdnExibirBotaoAgendamentos: HTMLInputElement;
    readonly btnAgendamento: DevExpress.Web.Scripts.ASPxClientButton;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnMouraTextBoxProcuraProprietarioPesquisando(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraPesquisandoEventArgs): void;
    protected OnMouraTextBoxProcuraProprietarioAbriuProcura(s: MouraTextBoxProcura, ev: JQueryEventObject): void;
    protected OnMouraTextBoxProcuraProprietarioProcurou(s: MouraTextBoxProcura, ev: MouraEventArgs): void;
    private AdicionarParametroSexo;
    protected OnMouraTextBoxProcuraProprietarioLimpou(s: MouraTextBoxProcura, ev: MouraEventArgs): void;
    protected OnMouraTextBoxProcuraAnimalPesquisando(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraPesquisandoEventArgs): void;
    protected OnMouraTextBoxProcuraAnimalValidateMostrar(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraValidateMostrarEventArgs): void;
    Limpar(): void;
    protected LimparParametros(): void;
    protected OnMouraTextBoxProcuraAnimalProcurou(s: MouraTextBoxProcura, ev: MouraEventArgs): void;
}
//# sourceMappingURL=MouraTextBoxProcuraProprietarioAnimal.d.ts.map