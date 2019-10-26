declare class C_HistAc extends MouraPageAngular {
    readonly btnGerar: MouraButton;
    readonly btnNovo: MouraButton;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly cboUf: MouraComboBox;
    readonly cboMotivo: MouraComboBox;
    readonly grdHistorico: MouraGridViewJS;
    readonly grdDevolvidos: MouraGridViewJS;
    readonly grdAlterados: MouraGridViewJS;
    readonly btnRemoverDevolvidos: MouraButton;
    private prodRemover;
    private empresaUF;
    private filtroDevolucao;
    protected Init(): void;
    OnPageLoad(): void;
    protected GetEmpresaUF(): void;
    protected OnClickRemoverDevolvidos(): void;
    protected OnClickGerar(): void;
    protected OnMudouMotivo(): void;
    protected LimparCampos(): void;
}
declare var c_HistAc: C_HistAc;
//# sourceMappingURL=C_HistAc.d.ts.map