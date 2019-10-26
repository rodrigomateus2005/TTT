declare class R_AgeCan extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly cboMotivoCancelamento: MouraComboBox;
    readonly cboTipoProfissional: MouraComboBox;
    readonly grd: MouraGridViewJS;
    readonly gridServicos: MouraGridViewJS;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly txtProfissional: MouraTextBoxProcura;
    readonly mdServicos: MouraModal;
    readonly btnFechar: MouraButton;
    protected Init(): void;
    protected OnGrdSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnClickFecharModal(s: MouraButton, e: MouraClickEventArgs): void;
    protected LimparCampos(): void;
    PreencherGrade(): void;
    protected ValidarPeriodo(dataInicio: Date, dataFim: Date): boolean;
}
declare const r_AgeCan: R_AgeCan;
//# sourceMappingURL=R_AgeCan.d.ts.map