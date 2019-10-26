declare class C_CMRePe extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Relatorio_Personalizado> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Relatorio_Personalizado): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Relatorio_Personalizado): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
}
declare var c_CMRePe: C_CMRePe;
//# sourceMappingURL=C_CMRePe.d.ts.map