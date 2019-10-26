declare class ConsChatOnLine extends MouraPageAngular {
    readonly txtChat: MouraTextBoxChat;
    readonly txtAtividade: MouraTextBoxProcura;
    readonly btnAtualizar: MouraButton;
    readonly lblData: MouraLabel;
    readonly lblCliente: MouraLabel;
    readonly btnLimpar: MouraButton;
    Init(): void;
    OnPageLoad(): void;
    private OnClickBotaoAtualizar;
    private ObterChat;
    private LimparChat;
    private OnPesquisouAtividade;
    private OnClickBotaoLimpar;
}
declare const consChatOnLine: ConsChatOnLine;
//# sourceMappingURL=ConsChatOnLine.d.ts.map