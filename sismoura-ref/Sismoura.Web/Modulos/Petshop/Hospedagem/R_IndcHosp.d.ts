declare class R_IndcHosp extends MouraPageRelacaoAngular {
    PercentualClientesNaoRecorrentesHotel: any;
    PercentualClientesNaoRecorrentesDaycare: any;
    FaturamentoHotel: any;
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly cboTipoHospedagem: MouraComboBox;
    readonly tab: MouraTabPanel;
    readonly grdFaturamentoHospedagem: MouraGridViewJS;
    readonly grdCortesias: MouraGridViewJS;
    readonly grdRankinClientes: MouraGridViewJS;
    readonly grdRacasFrequentes: MouraGridViewJS;
    readonly grdClientesNaoRecorrentes: MouraGridViewJS;
    readonly grdNovosClientes: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    private GerarGridClientesNaoRecorrentes;
    private GerarGridRacasFrequentes;
    private GerarGridRankingClientes;
    private GerarGridCortesiaHospedagem;
    private GerarGridFaturamentoHospedagem;
    private GerarGridNovosClientes;
    private ValidadarFiltros;
    protected PreencherGrade(): void;
    protected LimparCampos(): void;
}
declare var r_IndcHosp: R_IndcHosp;
//# sourceMappingURL=R_IndcHosp.d.ts.map