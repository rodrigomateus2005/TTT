declare class R_HotelPar extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly cboTipoHospedagem: MouraComboBox;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    OnPageLoad(): void;
    protected Init(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    private GetDadosRelacao;
}
declare var r_HotelPar: R_HotelPar;
//# sourceMappingURL=R_HotelPar.d.ts.map