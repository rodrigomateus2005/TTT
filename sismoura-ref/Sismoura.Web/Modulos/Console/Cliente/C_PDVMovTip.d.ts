declare class C_PDVMovTip extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Pdvmovel_Tipo> {
    readonly grdTipoPdv: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Console_Pdvmovel_Tipo): void;
    protected PreencherGrade(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
}
declare var c_PDVMovTip: C_PDVMovTip;
//# sourceMappingURL=C_PDVMovTip.d.ts.map