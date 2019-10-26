interface IMouraScope<EntidadeType> extends ng.IScope {
    Entity: EntidadeType;
    limpar(): any;
}
declare class MouraGravouSucessoEventArgs {
    IsRegistroNovo: boolean;
}
declare class MouraAntesGravarEventArgs {
    Entity: any;
    ParametrosAdicionais: SiSMoura.Core.Entity.ParametrosAngular;
}
declare class MouraAntesExcluirEventArgs {
    Entity: any;
    ParametrosAdicionais: SiSMoura.Core.Entity.ParametrosAngular;
}
declare class MouraLimpouEventArgs {
    Entity: any;
}
declare class MouraDepoisPesquisarEventArgs extends MouraEventArgs {
    Entity: any;
}
declare class MouraEntidadeCancelavel<TEntidade> {
    Entidade: TEntidade;
    Cancelar: boolean;
}
declare class MouraPageCadastroAngular<Entidade> extends MouraPageAngular {
    AntesGravar: MouraGenericEventHandler<any, MouraAntesGravarEventArgs>;
    GravouSucesso: MouraGenericEventHandler<any, MouraGravouSucessoEventArgs>;
    AntesExcluir: MouraGenericEventHandler<any, MouraAntesExcluirEventArgs>;
    ExcluiuSucesso: MouraEventHandler;
    LimpouRegistro: MouraGenericEventHandler<any, MouraLimpouEventArgs>;
    AntesClickBotaoNovo: MouraGenericEventHandler<any, MouraEventArgs>;
    DepoisPesquisar: MouraGenericEventHandler<any, MouraDepoisPesquisarEventArgs>;
    connectionString: SiSMoura.Core.Entity.ItemParametro;
    constructor();
    protected GetScope(): IMouraScope<Entidade>;
    protected readonly EntityTela: Entidade;
    private _isRegistroNovo;
    readonly IsRegistroNovo: boolean;
    private readonly BotoesCadastro;
    protected readonly hdnCampoCodigoAngular: HTMLInputElement;
    protected readonly hdnCodigoCheckIn: HTMLInputElement;
    protected readonly hdnCodigoConvenio: HTMLInputElement;
    protected readonly hdnAutorizacaoConvenio: HTMLInputElement;
    protected readonly hdnIsModalAg: HTMLInputElement;
    protected readonly hdnIdUpdPanel: HTMLInputElement;
    protected readonly hdnIdHdnRetorno: HTMLInputElement;
    protected readonly hdnIdMouraTelaModal: HTMLInputElement;
    protected readonly hdnIDAbrir: HTMLInputElement;
    protected readonly IsModal: boolean;
    protected readonly CampoCodigoID: string;
    protected readonly CodigoValor: string;
    protected readonly AtributoID: string;
    protected readonly CampoCodigoProcura: MouraTextBoxProcura;
    Gravou: boolean;
    protected Init(): void;
    OnPageLoad(): void;
    private OnClickGravar;
    private OnClickExcluir;
    private OnClickNovo;
    private ClicouBotaoNovo;
    private OnClickNovoProcura;
    protected OnAntesGravar(): boolean;
    protected OnAntesDeletar(): boolean;
    protected OnAntesNovo(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnDepoisClickNovo(): boolean;
    protected Limpar(): void;
    protected GetValueEntity(property: string): any;
    protected OnAntesBuscarExistente(): void;
    protected OnDepoisBuscarExistente(Entity: Entidade): void;
    protected OnAntesSetEntidade(eventArg: MouraEntidadeCancelavel<Entidade>): void;
    protected SetEntity(Entidade: Entidade): void;
    protected OnDepoisLimpar(Entity: Entidade): void;
    protected IsSessaoExpirada(retorno: SiSMoura.Core.Entity.RetornoAngular): boolean;
    protected MostrarMensagemRetorno(retorno: SiSMoura.Core.Entity.RetornoAngular): void;
    protected GravarAngular(): boolean;
    protected ExcluirAngular(): void;
    protected OnSelecionouOpcaoExcluir(result: MsgBoxResultEventArgs): void;
    protected OnSelecionouOpcaoGravarDuplicado(result: MsgBoxResultEventArgs): boolean;
    protected OnSelecionouOpcaoInexistente(result: MsgBoxResultEventArgs): void;
    protected ClicarGravar(): boolean;
    protected ClicarExcluir(): void;
    protected ClicarNovo(): void;
    private excluindoNaoLimpar;
    protected OnAtualizouID(newValue: any, oldValue: any, scope: IMouraScope<Entidade>): void;
    protected PreencherEntidade(Codigo: string): void;
    CriarItemParametro(item: string, valor: string): SiSMoura.Core.Entity.ItemParametro;
}
//# sourceMappingURL=MouraPageCadastroAngular.d.ts.map