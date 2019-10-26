declare class C_CliVei_Angular extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Cliente_Veiculo> {
    readonly Grid: MouraGridViewJS;
    CodigoRepresentante: any;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
    protected OnDepoisLimpar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnDepoisGravar(): boolean;
}
declare var c_CliVei_Angular: C_CliVei_Angular;
//# sourceMappingURL=C_CliVei_Angular.d.ts.map