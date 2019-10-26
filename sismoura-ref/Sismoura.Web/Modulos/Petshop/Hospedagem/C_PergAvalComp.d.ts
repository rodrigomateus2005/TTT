declare class C_PergAvalComp extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Comportamento_Pergunta> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected AtualizarGrid(): void;
    protected SelecionarRegistro(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisPesquisar(s: any, e: MouraDepoisPesquisarEventArgs): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisLimpar(): void;
}
declare var c_PergAvalComp: C_PergAvalComp;
//# sourceMappingURL=C_PergAvalComp.d.ts.map