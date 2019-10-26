declare class C_ImpPre extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Imposto_Prestador> {
    readonly txtAliquota: MouraTextBox;
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnTxtAliquotaLostFocus(e: MouraEventHandler): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Imposto_Prestador): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_ImpPre: C_ImpPre;
//# sourceMappingURL=C_ImpPre.d.ts.map