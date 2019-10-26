declare enum MouraModalDialogBotoes {
    OK = 1,
    Sim = 2,
    Nao = 4,
    Cancelar = 8
}
declare class MouraModalDialog extends MouraControl {
    private funcaoRetornoClient;
    readonly BotaoSim: HTMLButtonElement;
    readonly BotaoNao: HTMLButtonElement;
    readonly BotaoOK: HTMLButtonElement;
    readonly BotaoCancelar: HTMLButtonElement;
    readonly hdnCommand: HTMLInputElement;
    readonly hdnParametros: HTMLInputElement;
    readonly LabelMensagem: HTMLSpanElement;
    readonly imgExclamacao: HTMLImageElement;
    readonly imgInterrogacao: HTMLImageElement;
    readonly Modal: MouraModal;
    constructor(id: string);
    protected IniciarEventos(): void;
    AbrirClient(mensagem: string, botoes: MouraModalDialogBotoes, funcaoRetorno: (botaoSelecionado: MouraModalDialogBotoes) => void): void;
    OnClickBotao(ev: JQueryMouseEventObject): boolean;
    executarClickServer(key: string, botao: MouraModalDialogBotoes, parametros: string): void;
}
//# sourceMappingURL=MouraModalDialog.d.ts.map