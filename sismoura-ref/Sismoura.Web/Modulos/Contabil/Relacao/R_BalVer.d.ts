declare class R_BalVer extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly cboOrigem: MouraComboBox;
    readonly chkSuspensao: MouraCheckBox;
    readonly grd: MouraGridViewJS;
    readonly btnImprimir: MouraButton;
    readonly lstConsolidacao: MouraRadioButtonList;
    readonly cboAssunaturaSocio: MouraComboBox;
    readonly lblTotalAtivo: MouraLabel;
    readonly lblTotalPassivo: MouraLabel;
    readonly lblTotalDespesas: MouraLabel;
    readonly lblTotalReceitas: MouraLabel;
    readonly lblTotalCustos: MouraLabel;
    readonly lblTotaisDebito: MouraLabel;
    readonly lblTotaisCredito: MouraLabel;
    readonly lblDifDebitoCredito: MouraLabel;
    readonly lblDifAtivoPassivo: MouraLabel;
    readonly lblTotalXPeriodo: MouraLabel;
    readonly lblTotalXAcumulado: MouraLabel;
    readonly DivResumo: HTMLDivElement;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnGerouLinhaTipo(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnAlterouEmpresa(): void;
    validarEmpresaMatriz(): void;
    protected OnClickImprimir(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected LimparCamposAlterou(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    protected GerarResumo(source: SiSMoura.Core.Entity.Balancete_VerificacaoRetorno[]): void;
    protected IsEncerramento(): any;
    protected GerarAcumulado(): void;
}
declare var r_BalVer: R_BalVer;
//# sourceMappingURL=R_BalVer.d.ts.map