declare class C_MotRecLab extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Motivo_Recusa_Laboratorio_Exames> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Motivo_Recusa_Laboratorio_Exames): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Animais_Motivo_Recusa_Laboratorio_Exames): void;
    protected GetCadastrados(): void;
    OnPageLoad(): void;
}
declare const c_MotRecLab: C_MotRecLab;
//# sourceMappingURL=C_MotRecLab.d.ts.map