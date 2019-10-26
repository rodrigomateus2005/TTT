declare class C_Exame extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Exame> {
    readonly GridJS: MouraGridViewJS;
    readonly txtTipoExame: MouraTextBoxProcura;
    readonly txtExame: MouraTextBoxProcura;
    readonly btnAdicionar: MouraButton;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Exame): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected OnClickAdicionar(s: MouraButton, e: MouraClickEventArgs): boolean;
    protected LimparCampos(): void;
}
declare const c_Exame: C_Exame;
//# sourceMappingURL=C_Exame.d.ts.map