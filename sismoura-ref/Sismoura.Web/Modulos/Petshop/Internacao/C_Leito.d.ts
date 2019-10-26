declare class C_Leito extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Internacao_Leito> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected AtualizarGrid(): void;
    protected SelecionarRegistro(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
}
declare var c_Leito: C_Leito;
//# sourceMappingURL=C_Leito.d.ts.map