declare class R_HosPer extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly cboTipoHospedagem: MouraComboBox;
    readonly txtLocalHospedagem: MouraTextBoxProcura;
    readonly chkCortesia: MouraCheckBox;
    readonly tab: MouraTabPanel;
    readonly grdHospedagem: MouraGridViewJS;
    readonly grdReserva: MouraGridViewJS;
    readonly lstSituacoes: MouraCheckBoxList;
    readonly cboTipo: MouraComboBox;
    protected Init(): void;
    protected OnGridReservaCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnGridHospedagemCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnGrdHospedagemClicouBotao(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnGrdReservaClicouBotao(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    private GerarGridHospedagem;
    private ValidadarFiltros;
    private GerarGridReserva;
    protected PreencherGrade(): void;
    protected LimparCampos(): void;
}
declare var r_HosPer: R_HosPer;
//# sourceMappingURL=R_HosPer.d.ts.map