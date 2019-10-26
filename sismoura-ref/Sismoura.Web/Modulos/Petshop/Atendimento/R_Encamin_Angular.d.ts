declare class R_Encamin_Angular extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly lstGrupo: MouraCheckBoxList;
    readonly lstSubGrupo: MouraCheckBoxList;
    readonly txtLinha: MouraTextBoxProcura;
    readonly cboTipoEncaminhamento: MouraComboBox;
    readonly grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGrdSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    PreencherGrade(): void;
    protected ValidarPeriodo(dataInicio: Date, dataFim: Date): boolean;
}
declare const r_Encamin_Angular: R_Encamin_Angular;
//# sourceMappingURL=R_Encamin_Angular.d.ts.map