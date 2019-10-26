declare class C_CPQues extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Quest_Perfil_Cliente> {
    readonly grid: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Quest_Perfil_Cliente): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected OnGridSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
}
declare const c_CPQues: C_CPQues;
//# sourceMappingURL=C_CPQues.d.ts.map