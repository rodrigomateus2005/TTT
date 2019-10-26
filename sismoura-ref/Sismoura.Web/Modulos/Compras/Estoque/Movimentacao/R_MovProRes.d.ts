declare class R_MovProRes extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly grid: MouraGridViewJS;
    readonly cboDeposito: MouraComboBox;
    readonly lstGrupo: MouraCheckBoxList;
    readonly lstSubGrupo: MouraCheckBoxList;
    readonly accCadastro: MouraAccordion;
    readonly chkAgruparMarca: MouraCheckBox;
    readonly chkTamanho: MouraCheckBox;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    PreencherGrade(): void;
    protected CheckChanged(): void;
}
declare const r_MovProRes: R_MovProRes;
//# sourceMappingURL=R_MovProRes.d.ts.map