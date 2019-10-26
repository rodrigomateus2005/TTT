declare class R_GerPag extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly gridRelacao: MouraGridViewJS;
    readonly cboConfiguracao: MouraComboBox;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly accFiltro: MouraAccordion;
    readonly optTipoData: MouraRadioButtonList;
    readonly txtFornecedor: MouraTextBoxProcura;
    readonly btnTransmitir: MouraButton;
    protected LimparCampos(): void;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnClickDownload(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected FazerDownload(): void;
    PreencherGrade(): void;
    GerarGrade(): void;
}
declare var r_GerPag: R_GerPag;
//# sourceMappingURL=R_GerPag.d.ts.map