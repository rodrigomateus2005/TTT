declare class C_DesPro extends MouraPageAngular {
    readonly GridProdutos: MouraGridViewJS;
    readonly btnGerar: MouraButton;
    readonly txtDescricao: MouraTextBox;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnClickGerar(): void;
    protected LimparCampos(): void;
}
declare var c_DesPro: C_DesPro;
//# sourceMappingURL=C_DesPro.d.ts.map