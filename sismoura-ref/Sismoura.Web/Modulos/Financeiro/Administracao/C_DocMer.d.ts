declare class C_DocMer extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Documento_Mercantil> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Documento_Mercantil): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_DocMer: C_DocMer;
//# sourceMappingURL=C_DocMer.d.ts.map