declare class C_MotInd extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Locacao_Equipamento_Indenizacao_Motivo> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Locacao_Equipamento_Indenizacao_Motivo): void;
    protected GetCadastrados(): void;
    OnPageLoad(): void;
}
declare const c_MotInd: C_MotInd;
//# sourceMappingURL=C_MotInd.d.ts.map