declare class EditorHTML extends MouraPage {
    readonly htmlEditor: MouraHTMLEditor;
    protected Init(): void;
    OnPageLoad(): void;
    htmlEditor_HtmlChanged(): void;
    private corrigirHtml;
}
declare var editorHTML: EditorHTML;
//# sourceMappingURL=EditorHTML.d.ts.map