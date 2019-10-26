declare class MouraCadastroButtonClickEventArgs extends MouraEventArgs {
    cancelar: boolean;
}
declare class MouraCadastroButtonClickEventHandler extends MouraGenericEventHandler<MouraCadastroButton, MouraCadastroButtonClickEventArgs> {
}
declare class MouraCadastroButton extends MouraControl {
    ClickGravar: MouraCadastroButtonClickEventHandler;
    ClickNovo: MouraCadastroButtonClickEventHandler;
    ClickExcluir: MouraCadastroButtonClickEventHandler;
    readonly BotaoGravar: MouraButton;
    readonly BotaoNovo: MouraButton;
    readonly BotaoExcluir: MouraButton;
    constructor(id: string);
    protected IniciarEventos(): void;
    OnGravarClick(s: MouraButton, e: MouraClickEventArgs): void;
    OnNovoClick(s: MouraButton, e: MouraClickEventArgs): void;
    OnExcluirClick(s: MouraButton, e: MouraClickEventArgs): void;
}
//# sourceMappingURL=MouraCadastroButton.d.ts.map