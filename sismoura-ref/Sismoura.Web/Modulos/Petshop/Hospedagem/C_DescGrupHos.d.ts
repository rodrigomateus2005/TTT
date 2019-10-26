declare class C_DescGrupHos extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Hospedagem_Desconto_Grupo> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    private validarDesconto;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected AtualizarGrid(): void;
    protected SelecionarRegistro(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisPesquisar(s: any, e: MouraDepoisPesquisarEventArgs): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisLimpar(): void;
}
declare var c_DescGrupHos: C_DescGrupHos;
//# sourceMappingURL=C_DescGrupHos.d.ts.map