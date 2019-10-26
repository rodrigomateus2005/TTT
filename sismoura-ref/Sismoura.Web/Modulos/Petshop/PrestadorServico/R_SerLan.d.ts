declare class R_SerLan extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly txtPrestador: MouraTextBoxProcura;
    readonly grd: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    protected OnAntesAbrirProcuraProfissional(s: any, e: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnTxtPrestadorProcurou(s: MouraTextBoxProcuraRetornoProcura, e: MouraEventArgs): void;
    protected ValidarPeriodo(dataInicio: Date, dataFim: Date): boolean;
    PreencherGrade(): void;
    private novoAtendimento;
    protected OnGrdClickBotaoLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnFechouModalAtendimento(s: any, e: MouraEventArgs): void;
}
declare const r_SerLan: R_SerLan;
//# sourceMappingURL=R_SerLan.d.ts.map