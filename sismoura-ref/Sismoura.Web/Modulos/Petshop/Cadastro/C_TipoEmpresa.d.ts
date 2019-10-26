declare class C_TipoEmpresa extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Tipo_Empresa> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Tipo_Empresa): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_TipoEmpresa: C_TipoEmpresa;
//# sourceMappingURL=C_TipoEmpresa.d.ts.map