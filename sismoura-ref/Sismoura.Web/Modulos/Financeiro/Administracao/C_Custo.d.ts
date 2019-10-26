declare class C_Custo extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Centro_Custo> {
    readonly Grid: MouraGridViewJS;
    readonly lstEmpresa: MouraListBoxEmpresa;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherEmpresas(empresas: SiSMoura.Core.Entity.Centro_Custo_Empresa[]): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Centro_Custo): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Centro_Custo): void;
    protected PreencherGrade(): void;
}
declare var c_Custo: C_Custo;
//# sourceMappingURL=C_Custo.d.ts.map