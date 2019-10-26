declare class C_PjProg extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Sprint_Projeto> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    OnSelecionouLinha(e: any, s: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Console_Sprint_Projeto): void;
    protected PreencherGrade(): void;
}
declare var c_PjProg: C_PjProg;
//# sourceMappingURL=C_PjProg.d.ts.map