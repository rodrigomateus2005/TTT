declare class V_Precos_Petz extends MouraPageRelacaoAngular {
    private listaPrecos;
    readonly lstListaPreco: MouraListBox;
    readonly txtServico: MouraTextBoxProcura;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly grid: MouraGridViewJS;
    readonly AccordionFiltros: MouraAccordion;
    protected Init(): void;
    protected OnTxtServicoLimpou(): void;
    protected OnClickNovo(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnTxtServicoProcurou(s: MouraTextBoxProcura, e: MouraEventArgs): void;
    PreencherGrade(): void;
    protected preencherListas(): void;
    protected LimparCampos(): void;
}
declare var v_Precos_Petz: V_Precos_Petz;
//# sourceMappingURL=V_Precos_Petz.d.ts.map