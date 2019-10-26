declare class R_RazAna extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtContaContabil_hdnEmpresaContabil: HTMLInputElement;
    readonly cboEmpresa: MouraComboBox;
    readonly txtContaContabil: MouraTextBoxProcuraContabil;
    readonly grid: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly mdLancamento: MouraModalAnexo;
    readonly btnImprimir: MouraButton;
    protected Init(): void;
    PreencherEmpresaContabil(): void;
    LimparCampos(): void;
    protected OnContaContabilAntesAbrirProcura(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnRetornouTelaModalCadastro(s: any, e: MouraTelaModalRetornouEventArgs): void;
    protected OnContaContabilPesquisando(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraContabilPesquisandoEventArgs): void;
    protected onGridSelecionouLinha(s: any, e: any): void;
    protected ValidarPeriodo(dataInicio: Date, dataFim: Date): boolean;
    PreencherGrade(): void;
    protected OnClickImprimir(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
}
declare var r_RazAna: R_RazAna;
//# sourceMappingURL=R_RazAna.d.ts.map