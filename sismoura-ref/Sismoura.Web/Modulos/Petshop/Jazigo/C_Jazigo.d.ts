declare class C_Jazigo extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Jazigo> {
    readonly Grid: MouraGridViewJS;
    readonly lblAnimalJazigo: MouraLabel;
    readonly lblProprietario: MouraLabel;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Jazigo): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Jazigo): void;
    protected LimparCampos(): void;
}
declare var c_Jazigo: C_Jazigo;
//# sourceMappingURL=C_Jazigo.d.ts.map