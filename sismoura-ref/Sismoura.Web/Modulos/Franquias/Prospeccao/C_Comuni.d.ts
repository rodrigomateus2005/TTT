declare class C_Comuni extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Franquia_Comunicado> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly lstFranquia: MouraCheckBoxList;
    readonly htmlEditor: MouraHTMLEditor;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Franquia_Comunicado): void;
    protected LimparFranquia(): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Franquia_Comunicado): boolean;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnEnviarComunicado(result: MsgBoxResultEventArgs): void;
    protected PreencherGrade(): void;
    protected GetTags(): string;
    protected PreencherFranquia(): void;
}
declare var c_Comuni: C_Comuni;
//# sourceMappingURL=C_Comuni.d.ts.map