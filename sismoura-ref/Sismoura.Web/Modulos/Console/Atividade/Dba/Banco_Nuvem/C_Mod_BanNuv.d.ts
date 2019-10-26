declare class C_Mod_BanNuv extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Modelo_Banco_Nuvem> {
    readonly grd: MouraGridViewJS;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtDescricao: MouraTextBox;
    readonly btnModelo: MouraButton;
    readonly htmlEditor: MouraHTMLEditor;
    protected Init(): void;
    protected OnHtmlEditorInit(s: any, e: any): void;
    protected OnHtmlEditorCommandExecuting(s: any, e: DevExpress.Web.Scripts.ASPxClientHtmlEditorCommandExecutingEventArgs): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected onGridSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected AtualizarGrid(): void;
    protected onHtmlEditor(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected LimparCampos(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisClickNovo(): boolean;
    protected OnDepoisLimpar(): boolean;
}
declare var c_Mod_BanNuv: C_Mod_BanNuv;
//# sourceMappingURL=C_Mod_BanNuv.d.ts.map