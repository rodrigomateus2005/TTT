declare class C_Config extends MouraPageAngular {
    Entity: SiSMoura.Core.Common.Configurar_Financeiro;
    readonly btnGravar: MouraButton;
    readonly cboContaCorrente: MouraContaCorrenteCombo;
    OnPageLoad(): void;
    Init(): void;
    private OnClickGravar;
    private GetEntidade;
    private LimparCampos;
    private GravarConfiguracao;
}
declare const c_Config: C_Config;
//# sourceMappingURL=C_Config.d.ts.map