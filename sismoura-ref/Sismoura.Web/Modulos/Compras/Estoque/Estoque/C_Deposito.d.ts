declare class C_Deposito extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Deposito> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Deposito): void;
    protected OnAntesGravar(): boolean;
    protected OnRespondeuMensagemExistente(result: MsgBoxResultEventArgs): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_Deposito: C_Deposito;
//# sourceMappingURL=C_Deposito.d.ts.map