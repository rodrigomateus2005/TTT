declare class C_TratDoe extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Tratamento_Doenca> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Tratamento_Doenca): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_TratDoe: C_TratDoe;
//# sourceMappingURL=C_TratDoe.d.ts.map