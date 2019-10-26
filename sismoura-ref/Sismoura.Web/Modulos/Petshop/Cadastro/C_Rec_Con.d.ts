declare class C_Rec_Con extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Receitas> {
    readonly GridRec: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Receitas): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_Rec_Con: C_Rec_Con;
//# sourceMappingURL=C_Rec_Con.d.ts.map