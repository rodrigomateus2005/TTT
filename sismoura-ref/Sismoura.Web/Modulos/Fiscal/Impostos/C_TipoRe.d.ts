declare class C_TipoRe extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Fiscal_Tipo_Regra_Imposto> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Fiscal_Tipo_Regra_Imposto): void;
    protected OnDepoisGravar(): boolean;
    protected OnAntesGravar(): boolean;
    protected OnAntesDeletar(): boolean;
    protected VerificarConfiguracaoImendes(): boolean;
    protected PreencherGrade(): void;
}
declare var c_TipoRe: C_TipoRe;
//# sourceMappingURL=C_TipoRe.d.ts.map