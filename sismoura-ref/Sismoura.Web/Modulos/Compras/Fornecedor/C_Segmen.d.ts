declare class C_Segmen extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Segmento> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Segmento): void;
    protected GetCadastrados(): void;
    OnPageLoad(): void;
}
declare var c_Segmen: C_Segmen;
//# sourceMappingURL=C_Segmen.d.ts.map