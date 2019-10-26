declare class C_AniCon extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Convenio> {
    readonly Grid: MouraGridViewJS;
    readonly txtCodigo: MouraTextBox;
    readonly txtCep: MouraTextBoxCep;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected AtualizarGrid(): void;
    protected SelecionarRegistro(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnConsultarCEP(s: any, e: MouraTextBoxCepPesquisouEventArgs): void;
}
declare var c_AniCon: C_AniCon;
//# sourceMappingURL=C_AniCon.d.ts.map