declare class C_ExaSta extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Status_Exame> {
    readonly Grid: MouraGridViewJS;
    readonly corFonte: MouraColorEdit;
    readonly corFundo: MouraColorEdit;
    protected Init(): void;
    protected OnAntesSetEntidade(eventArg: MouraEntidadeCancelavel<SiSMoura.Core.Entity.Animais_Status_Exame>): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Status_Exame): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected OnAntesGravar(): boolean;
    protected OnRespondeuMensagemExistente(result: MsgBoxResultEventArgs): void;
}
declare var c_ExaSta: C_ExaSta;
//# sourceMappingURL=C_ExaSta.d.ts.map