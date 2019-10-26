declare class C_CheLoc extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Checkin_Local> {
    readonly GridCheLoc: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Checkin_Local): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_CheLoc: C_CheLoc;
//# sourceMappingURL=C_CheLoc.d.ts.map