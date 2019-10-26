declare class C_Cidade extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Cidade> {
    readonly txtEstado: MouraTextBox;
    readonly txtCodPais: MouraTextBox;
    readonly txtDescPais: MouraTextBox;
    readonly Grid: any;
    protected Init(): void;
    protected OnGridSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Cidade): boolean;
    protected OnDepoisGravar(): boolean;
    protected CidadeIbgeOnChange(): void;
    protected EstadoOnChange(): void;
}
declare var c_Cidade: C_Cidade;
//# sourceMappingURL=C_Cidade.d.ts.map