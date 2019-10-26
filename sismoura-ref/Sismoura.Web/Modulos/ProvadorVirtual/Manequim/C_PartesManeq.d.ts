declare class C_PartesManeq extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Provador_Manequim_Corpo> {
    readonly grdRegistros: any;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Provador_Manequim_Corpo): boolean;
    protected OnGridSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
}
declare const c_PartesManeq: C_PartesManeq;
//# sourceMappingURL=C_PartesManeq.d.ts.map