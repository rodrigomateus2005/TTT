declare class R_Imp_Systax extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtData: MouraTextBoxData;
    readonly cboCenario: MouraComboBox;
    readonly btnAtualizar: MouraButton;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly accFiltros: MouraAccordion;
    protected Init(): void;
    protected OnClicouBotaoConfirmar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    protected OnGridComparacaoCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    private GetDadosRelacao;
}
declare var r_Imp_Systax: R_Imp_Systax;
//# sourceMappingURL=R_Imp_Systax.d.ts.map