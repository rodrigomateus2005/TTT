declare class MouraPageCadastro<Entidade> extends MouraPage {
    private readonly BotoesCadastro;
    protected readonly ValorCodigo: number;
    Gravou: boolean;
    protected Init(): void;
    private OnClickGravar;
    private OnClickExcluir;
    private OnClickNovo;
    MostrarModalExcluir(): void;
    protected OnAntesGravar(): boolean;
    protected OnAntesDeletar(): boolean;
    protected OnAntesNovo(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnDepoisClickNovo(): boolean;
    protected OnDepoisLimpar(Entity: Entidade): void;
    protected ClicarGravar(): void;
    protected ClicarExcluir(): void;
    protected ClicarNovo(): void;
}
//# sourceMappingURL=MouraPageCadastro.d.ts.map