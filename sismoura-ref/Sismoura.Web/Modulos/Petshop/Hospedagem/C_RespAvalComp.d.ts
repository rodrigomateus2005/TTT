declare class C_RespAvalComp extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Comportamento_Respostas> {
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
declare var c_RespAvalComp: C_RespAvalComp;
//# sourceMappingURL=C_RespAvalComp.d.ts.map