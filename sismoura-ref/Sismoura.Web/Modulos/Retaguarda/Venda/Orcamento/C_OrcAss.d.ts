declare class C_OrcAss extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Assinaturas_Orcamento> {
    readonly btnExportar: MouraButton;
    readonly btnImportar: MouraButton;
    readonly mdImportacao: MouraModal;
    readonly btnMdImportar: MouraButton;
    readonly fUpload: MouraFileUploadJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Assinaturas_Orcamento): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnAntesGravar(): boolean;
    protected OnClickBotaoExportar(): void;
    protected OnClickBotaoImportar(): void;
    protected OnClickImportarModal(): void;
    protected ExecutarImportacao(): void;
}
declare const c_OrcAss: C_OrcAss;
//# sourceMappingURL=C_OrcAss.d.ts.map