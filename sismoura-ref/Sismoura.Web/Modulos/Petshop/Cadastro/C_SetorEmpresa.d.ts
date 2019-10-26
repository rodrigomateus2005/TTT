declare class C_SetorEmpresa extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Setor_Empresa> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Setor_Empresa): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_SetorEmpresa: C_SetorEmpresa;
//# sourceMappingURL=C_SetorEmpresa.d.ts.map