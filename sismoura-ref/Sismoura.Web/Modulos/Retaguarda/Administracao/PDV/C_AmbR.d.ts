declare class C_AmbR extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Ambiente_Restaurante> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtDescricao: MouraTextBox;
    readonly txtMicroResp: MouraTextBox;
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_AmbR: C_AmbR;
//# sourceMappingURL=C_AmbR.d.ts.map