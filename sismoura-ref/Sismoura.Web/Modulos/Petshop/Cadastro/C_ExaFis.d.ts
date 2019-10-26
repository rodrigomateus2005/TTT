declare class C_ExaFis extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Exame_Fisico> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Exame_Fisico): void;
    protected GetCadastrados(): void;
}
declare const c_ExaFis: C_ExaFis;
//# sourceMappingURL=C_ExaFis.d.ts.map