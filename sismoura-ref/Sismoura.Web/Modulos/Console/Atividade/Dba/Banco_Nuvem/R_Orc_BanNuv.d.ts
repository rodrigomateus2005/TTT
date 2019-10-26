declare class R_Orc_BanNuv extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtRazao_Social: MouraTextBox;
    readonly txtCNPJ: MouraTextBox;
    readonly Grid: MouraGridViewJS;
    readonly cboSituacao: MouraComboBox;
    readonly txtCod_Cliente: MouraTextBoxProcura;
    readonly optTipo_Cliente: MouraRadioButtonList;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnSelecionarTipoCliente(): void;
    PreencherGrade(): void;
}
declare var r_Orc_BanNuv: R_Orc_BanNuv;
//# sourceMappingURL=R_Orc_BanNuv.d.ts.map