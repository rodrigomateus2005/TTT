declare class R_Credit extends MouraPageRelacaoAngular {
    readonly tab: MouraTabPanel;
    readonly AccordionFiltros: MouraAccordion;
    readonly AccordionFiltrosSintetico: MouraAccordion;
    readonly AccordionFiltrosNaoUtilizados: MouraAccordion;
    readonly optTipoValidadeAnalitico: MouraRadioButtonList;
    readonly optTipoValidadeSintetico: MouraRadioButtonList;
    readonly lblTotEntAnalitico: MouraLabel;
    readonly lblTotSaiAnalitico: MouraLabel;
    readonly lblTotEntSintetico: MouraLabel;
    readonly lblTotSaiSintetico: MouraLabel;
    readonly txtPeriodoNaoUtilizados: MouraTextBoxPeriodoMesAno;
    readonly gridAnalitico: MouraGridViewJS;
    readonly gridSintetico: MouraGridViewJS;
    readonly gridNaoUtilizados: MouraGridViewJS;
    labelEnt: number;
    labelSai: number;
    Init(): void;
    OnPageLoad(): void;
    PreencherGrade(): void;
    private ValidarPeriodoAba;
    protected SetParametros(): any;
    protected LabelsTot(retorno: any): void;
    protected OnAlteraTipoAnalitico(): void;
    protected OnAlteraTipoSintetico(): void;
    LimparCampos(): void;
    protected LimpaLabelsTot(): void;
    private CellPrepared;
}
declare const r_Credit: R_Credit;
//# sourceMappingURL=R_Credit.d.ts.map