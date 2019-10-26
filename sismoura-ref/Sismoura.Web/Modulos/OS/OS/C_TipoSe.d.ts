declare class C_TipoSe extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Tipo_Servico_Os> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Tipo_Servico_Os): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_TipoSe: C_TipoSe;
//# sourceMappingURL=C_TipoSe.d.ts.map