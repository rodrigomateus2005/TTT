declare class C_Baia extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Hospedagem_Baia> {
    readonly Grid: MouraGridViewJS;
    readonly cboTamanhoBaia: MouraComboBox;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected AtualizarGrid(): void;
    protected SelecionarRegistro(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisPesquisar(s: any, e: MouraDepoisPesquisarEventArgs): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisLimpar(): void;
}
declare var c_Baia: C_Baia;
//# sourceMappingURL=C_Baia.d.ts.map