declare class R_Pacote extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly txtLinha: MouraTextBoxProcuraComLista;
    readonly txtGrupo: MouraTextBoxProcuraComLista;
    readonly txtSubGrupo: MouraTextBoxProcuraComLista;
    readonly grd: MouraGridViewJS;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    PreencherGrade(): void;
    protected ValidarPeriodo(dataInicio: Date, dataFim: Date): boolean;
}
declare const r_Pacote: R_Pacote;
//# sourceMappingURL=R_Pacote.d.ts.map