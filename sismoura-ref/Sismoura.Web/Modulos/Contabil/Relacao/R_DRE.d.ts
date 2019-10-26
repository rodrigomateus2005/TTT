declare class R_DRE extends MouraPageRelacaoAngular {
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly AccordionFiltros: MouraAccordion;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly lstConsolidacao: MouraRadioButtonList;
    readonly grd: MouraGridViewJS;
    readonly btnImprimir: MouraButton;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnAlterouEmpresa(): void;
    protected LimparCampos(): void;
    validarEmpresaMatriz(): void;
    protected OnGerouLinhaTipo(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected PreencherGrade(): void;
    protected OnClickImprimir(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
declare var r_DRE: R_DRE;
//# sourceMappingURL=R_DRE.d.ts.map