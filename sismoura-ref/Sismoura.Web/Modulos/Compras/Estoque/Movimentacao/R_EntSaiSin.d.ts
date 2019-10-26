declare class R_EntSaiSin extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly gridSintetica: MouraGridViewJS;
    readonly gridAgrupMovSintetica: MouraGridViewJS;
    readonly lstDescricao: MouraCheckBoxList;
    readonly lstOrigem: MouraListBoxEmpresa;
    readonly lstDestino: MouraListBoxEmpresa;
    readonly cboMovimento: MouraComboBox;
    readonly AbaSinteticaAgrup: MouraTabPage;
    OnPageLoad(): void;
    Init(): void;
    private OnPreencheDescricao;
    LimparCampos(): void;
    protected PreencherGrade(): void;
    PreencherGradeAgrupada(): void;
    PreencherGradeSintetica(): void;
}
declare const r_EntSaiSin: R_EntSaiSin;
//# sourceMappingURL=R_EntSaiSin.d.ts.map