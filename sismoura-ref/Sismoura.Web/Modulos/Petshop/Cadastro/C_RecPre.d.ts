declare class C_RecPre extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Motivo_Recusa_Prestador> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Motivo_Recusa_Prestador): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_RecPre: C_RecPre;
//# sourceMappingURL=C_RecPre.d.ts.map