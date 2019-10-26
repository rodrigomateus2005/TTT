declare class R_AberEnc extends MouraPageAngular {
    Livro: any;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly btnLimpar: MouraButton;
    readonly btnImprimir: MouraButton;
    Init(): void;
    OnPageLoad(): void;
    private ClickLimpar;
    LimparCampos(): void;
    private Imprimir;
    private ValidarTermo;
}
declare const r_AberEnc: R_AberEnc;
//# sourceMappingURL=R_AberEnc.d.ts.map