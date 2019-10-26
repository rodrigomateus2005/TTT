declare class R_PagtoEmailStoom extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly cboTipoHospedagem: MouraComboBox;
    readonly cboStatus: MouraComboBox;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    OnPageLoad(): void;
    protected Init(): void;
    protected LimparCampos(): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnGrdidClicouBotao(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
    private GetDadosRelacao;
    private EnviarEmailPagamento;
}
declare var r_PagtoEmailStoom: R_PagtoEmailStoom;
//# sourceMappingURL=R_PagtoEmailStoom.d.ts.map