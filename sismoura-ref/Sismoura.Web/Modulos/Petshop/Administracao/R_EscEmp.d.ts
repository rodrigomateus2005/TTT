declare class R_EscEmp extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly Grid: MouraGridViewJS;
    readonly txtData: MouraTextBoxPeriodo;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly lstDia: MouraCheckBoxList;
    readonly cboTipoProfissional: MouraComboBox;
    readonly accFiltro: MouraAccordion;
    readonly btnRecolher: MouraButton;
    readonly btnExpandir: MouraButton;
    protected LimparCampos(): void;
    protected ConfigurarGrade(): void;
    OnPageLoad(): void;
    protected Init(): void;
    PreencherGrade(): void;
    GerarGrade(): void;
    protected ValidarCampos(): boolean;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    private codEmpresa;
    protected OnClickBtnExpandir(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickBtnRecolher(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
declare var r_EscEmp: R_EscEmp;
//# sourceMappingURL=R_EscEmp.d.ts.map