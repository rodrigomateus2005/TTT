declare class C_DocWiki extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Wiki_Documento> {
    readonly accHtmlEditor: MouraAccordion;
    readonly htmlConteudo: MouraHTMLEditor;
    readonly lstCategorias: MouraCheckBoxList;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnAntesGravar(): boolean;
    protected AntesGravarListaCategoria(entidade: SiSMoura.Core.Entity.Console_Wiki_Documento): void;
    protected ProcurCategorias(codCategoria: number, lista: SiSMoura.Core.Entity.Console_Wiki_Documento_Categoria[]): SiSMoura.Core.Entity.Console_Wiki_Documento_Categoria;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Console_Wiki_Documento): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Console_Wiki_Documento): void;
    protected OnDepoisGravar(): boolean;
}
declare const c_DocWiki: C_DocWiki;
//# sourceMappingURL=C_DocWiki.d.ts.map