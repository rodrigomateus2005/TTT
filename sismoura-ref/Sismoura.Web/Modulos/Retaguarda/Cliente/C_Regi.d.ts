declare class C_Regi extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Regiao> {
    readonly GridRegi: MouraGridViewJS;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtRegiao: MouraTextBox;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Regiao): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected OnAntesDeletar(): boolean;
    protected LimparCampos(): void;
}
declare const c_Regi: C_Regi;
//# sourceMappingURL=C_Regi.d.ts.map