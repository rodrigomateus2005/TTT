declare class C_Pais extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Pais> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtDescricao: MouraTextBox;
    readonly txtCodESoc: MouraTextBox;
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnValidando(): boolean;
    protected OntxtCodESoc(): void;
    OnPageLoad(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected MudouZero(Padrao: any): void;
    protected MudouTipo(Padrao: any): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Pais): void;
    protected PreencherGrade(): void;
    protected LimparCampos(): void;
}
declare var c_Pais: C_Pais;
//# sourceMappingURL=C_Pais.d.ts.map