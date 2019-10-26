declare class R_ComAbe extends MouraPageAngular {
    readonly tab: MouraTabPanel;
    readonly grdComandas: MouraGridViewJS;
    readonly grdDiscriminadas: MouraGridViewJS;
    readonly cboComanda: MouraComboBox;
    readonly hdnURLComandasDiscriminadas: HTMLInputElement;
    readonly btnGerar: MouraButton;
    protected Init(): void;
    OnPageLoad(): void;
    private OnSelecionouLinhaResumida;
    private OnGerarResumida;
}
declare const r_ComAbe: R_ComAbe;
//# sourceMappingURL=R_ComAbe.d.ts.map