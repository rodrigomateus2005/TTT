declare class R_Exame extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly Grid: MouraGridViewJS;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly lstStatus: MouraCheckBoxList;
    readonly accFiltro: MouraAccordion;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly txtLaboratio: MouraTextBoxProcura;
    readonly txtVeterinario: MouraTextBoxProcura;
    readonly pnC: HTMLElement;
    readonly txtTempoAtualizacao: MouraTextBox;
    readonly chkTempoAdicionar: MouraCheckBox;
    readonly dlgMotivoRecusa: MouraModal;
    readonly txtMotivoRecusa: MouraTextBoxProcura;
    readonly txtObservacaoRecusa: MouraTextBox;
    readonly btnConfirmarRecusa: MouraButton;
    protected LimparCampos(): void;
    OnPageLoad(): void;
    protected Init(): void;
    PreencherGrade(): void;
    GerarGrade(): void;
    Refresh(): string;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnGridSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    private atendimento;
    protected OnGridClickBotaoLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnClickConfirmarRecusa(s: any, e: MouraClickEventArgs): void;
    protected OnFechouModalMotivoRecusa(s: any, e: MouraEventHandler): void;
    PreencherLabel(): void;
}
declare var r_Exame: R_Exame;
//# sourceMappingURL=R_Exame.d.ts.map