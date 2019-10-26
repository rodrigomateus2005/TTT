declare class R_Propri extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly lstAniversariantes: MouraCheckBoxList;
    readonly EnvioSms: MouraSMS;
    readonly btnSms: MouraButton;
    OnPageLoad(): void;
    Init(): void;
    OnEnviarSms(): void;
    PreencherGrade(): void;
    LimparCampos(): void;
}
declare const r_Propri: R_Propri;
//# sourceMappingURL=R_Propri.d.ts.map