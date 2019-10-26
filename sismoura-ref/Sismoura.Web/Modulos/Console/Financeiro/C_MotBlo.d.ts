declare class C_MotBlo extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Motivo_Bloqueio_Cliente> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Console_Motivo_Bloqueio_Cliente): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected OnSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
}
declare const c_MotBlo: C_MotBlo;
//# sourceMappingURL=C_MotBlo.d.ts.map