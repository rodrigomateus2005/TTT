declare class R_PrNEnc extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtEmpresa: MouraTextBoxProcura;
    readonly lblCNPJ: MouraLabel;
    readonly lblRazaoSocial: MouraLabel;
    readonly lblIE: MouraLabel;
    readonly lblEndereco: MouraLabel;
    readonly Grid: MouraGridViewJS;
    readonly btnImprimir: MouraButton;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnClickImprimir(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    OnPesquisouEmpresa(s: MouraTextBoxProcura, e: MouraEventArgs): void;
    protected PreencherGrade(): void;
    protected LimparCampos(): void;
    protected LimparCamposEmpresa(): void;
}
declare var r_PrNEnc: R_PrNEnc;
//# sourceMappingURL=R_PrNEnc.d.ts.map