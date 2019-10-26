declare class C_MotCanCon extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Contrato_Motivo_Cancelamento> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Contrato_Motivo_Cancelamento): void;
    protected GetCadastrados(): void;
    OnPageLoad(): void;
}
declare const c_MotCanCon: C_MotCanCon;
//# sourceMappingURL=C_MotCanCon.d.ts.map