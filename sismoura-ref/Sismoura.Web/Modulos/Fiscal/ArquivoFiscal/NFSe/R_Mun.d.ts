declare class R_Mun extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly cboEstado: MouraComboBox;
    readonly cboHomologado: MouraComboBox;
    readonly grid: MouraGridViewJS;
    readonly mdCidade: MouraModal;
    readonly lblNome: MouraLabel;
    readonly llbCodIBGE: MouraLabel;
    readonly lblModelo: MouraLabel;
    readonly lblProvedor: MouraLabel;
    readonly lblWSProducao: MouraLabel;
    readonly lblWSHomologacao: MouraLabel;
    protected Init(): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected LimparCampos(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
}
declare var r_Mun: R_Mun;
//# sourceMappingURL=R_Mun.d.ts.map