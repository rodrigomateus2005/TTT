declare class C_Linha extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Linha> {
    readonly Grid: MouraGridViewJS;
    readonly cboTipoLinha: MouraComboBox;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Linha): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_Linha: C_Linha;
//# sourceMappingURL=C_Linha.d.ts.map