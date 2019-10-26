declare class C_BaiaAdoc extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Entrada_Adocao_Baia> {
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
declare var c_BaiaAdoc: C_BaiaAdoc;
//# sourceMappingURL=C_BaiaAdoc.d.ts.map