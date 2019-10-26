declare class C_DescProg extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Desconto_Faixa_Valor> {
    readonly Grid: MouraGridViewJS;
    readonly grdEmpresas: MouraGridViewJS;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly mdEmpresas: MouraModal;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Desconto_Faixa_Valor): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Desconto_Faixa_Valor): void;
    protected PreencherGrade(): void;
    protected PreencherEmpresas(empresas: SiSMoura.Core.Entity.Desconto_Faixa_Valor_Empresa[]): void;
    protected VerificarFaixaValores(Entity: SiSMoura.Core.Entity.Desconto_Faixa_Valor): boolean;
    protected OnGridClicouBotao(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
}
declare var c_DescProg: C_DescProg;
//# sourceMappingURL=C_DescProg.d.ts.map