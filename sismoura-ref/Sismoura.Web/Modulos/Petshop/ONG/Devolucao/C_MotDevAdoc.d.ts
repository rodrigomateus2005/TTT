declare class C_MotDevAdoc extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Adocao_Motivo_Devolucao> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected AtualizarGrid(): void;
    protected SelecionarRegistro(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(): void;
}
declare var c_MotDevAdoc: C_MotDevAdoc;
//# sourceMappingURL=C_MotDevAdoc.d.ts.map