declare class R_ABCFarma extends MouraPageAngular {
    readonly btnGerarABC: MouraButton;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnClickBotaoGerar(s: MouraButton, e: MouraClickEventArgs): void;
    protected iniciouIntegracao: boolean;
    protected OnRespondeuMSGBox(result: MsgBoxResultEventArgs): void;
    protected AtualizarStatusIntegracao(): void;
}
declare var r_ABCFarma: R_ABCFarma;
//# sourceMappingURL=R_ABCFarma.d.ts.map