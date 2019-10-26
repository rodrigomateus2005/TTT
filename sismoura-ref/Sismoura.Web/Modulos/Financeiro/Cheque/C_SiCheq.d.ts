declare class C_SiCheq extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Cheque_Historico> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Cheque_Historico): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Cheque_Historico): void;
    protected PreencherGrade(): void;
}
declare var c_SiCheq: C_SiCheq;
//# sourceMappingURL=C_SiCheq.d.ts.map