declare class C_TipPro extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Tipo_Profissional> {
    readonly GridTipPro: MouraGridViewJS;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtDescricao: MouraTextBox;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Tipo_Profissional): void;
    protected OnDepoisGravar(): boolean;
    protected OnAntesDeletar(): boolean;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
}
declare const c_TipPro: C_TipPro;
//# sourceMappingURL=C_TipPro.d.ts.map