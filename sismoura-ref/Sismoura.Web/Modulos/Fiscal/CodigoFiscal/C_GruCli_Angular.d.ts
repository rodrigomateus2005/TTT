declare class C_GruCli_Angular extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Fiscal_Grupo_Cliente> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtDescricao: MouraTextBox;
    readonly gridGrupoFiscal: MouraGridViewJS;
    readonly txtGrupoFiscal: MouraTextBoxProcura;
    readonly txtCliente: MouraTextBoxProcura;
    readonly btnIncluirCliente: MouraButton;
    readonly btnRemoverCliente: MouraButton;
    readonly btnNovoCliente: MouraButton;
    readonly gridCliente: MouraGridViewJS;
    private isContinuar;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnDepoisBuscarGrupoFiscal(): void;
    protected OnSelecionouLinhaCliente(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnSelecionouLinhaGrupoFiscal(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Fiscal_Grupo_Cliente): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGridGrupoFiscal(): void;
    protected OnClicouBotaoNovoCliente(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClicouBotaoIncluirCliente(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClicouBotaoRemoverCliente(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected GravarCliente(): boolean;
    protected PreencherGridCliente(): void;
    protected LimparCampos(): void;
    protected LimparCamposCliente(): void;
    protected CampoObrigatorio(campo: string): string;
}
declare const c_GruCli_Angular: C_GruCli_Angular;
//# sourceMappingURL=C_GruCli_Angular.d.ts.map