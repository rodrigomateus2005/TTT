declare class C_ImOrAt extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Atendimento_Orcamento_Documento> {
    readonly Grid: MouraGridViewJS;
    readonly htmlEditor: MouraHTMLEditor;
    readonly lstEmpresa: MouraListBoxEmpresa;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected PreencherEmpresa(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Atendimento_Orcamento_Documento): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Animais_Atendimento_Orcamento_Documento): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected GetTags(): string;
}
declare var c_ImOrAt: C_ImOrAt;
//# sourceMappingURL=C_ImOrAt.d.ts.map