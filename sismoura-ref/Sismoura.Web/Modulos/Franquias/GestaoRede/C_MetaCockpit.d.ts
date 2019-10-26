declare class C_MetaCockpit extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Meta_Faturamento> {
    private itens;
    readonly Grid: MouraGridViewJS;
    readonly btnProjetarMeta: MouraButton;
    readonly bntReporjetarMeta: MouraButton;
    readonly btnVisualizarMeta: MouraButton;
    readonly btnVoltar: MouraButton;
    readonly mdMetaCadastrada: MouraModal;
    readonly hndCodigoMeta: HTMLInputElement;
    readonly txtMetaDiaria: MouraTextBox;
    readonly txtMetaSemanal: MouraTextBox;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtValorFaturamento: MouraTextBox;
    protected Init(): void;
    protected OnEditouItem(s: any, e: MouraGridViewJSItemEventArgs): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Meta_Faturamento): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Meta_Faturamento): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(Entity: SiSMoura.Core.Entity.Meta_Faturamento): void;
    protected ValidarCampos(Entity: SiSMoura.Core.Entity.Meta_Faturamento): boolean;
    protected OnClickProjetarMeta(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnClickReprojetarMeta(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickVisualizarMeta(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickVoltar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected MetaCadastrada(): number;
    protected GetRazaoSocial(): String;
    protected CalcularMetas(Entity: SiSMoura.Core.Entity.Meta_Faturamento): void;
    protected RetornarDiasMes(Entity: SiSMoura.Core.Entity.Meta_Faturamento): number;
    protected setLabelFaturamento(Entity: SiSMoura.Core.Entity.Meta_Faturamento): void;
    protected OnAntesGravar(): boolean;
}
declare var c_MetaCockpit: C_MetaCockpit;
//# sourceMappingURL=C_MetaCockpit.d.ts.map