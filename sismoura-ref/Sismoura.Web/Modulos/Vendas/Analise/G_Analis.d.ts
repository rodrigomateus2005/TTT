declare class G_Analis extends MouraPageAngular {
    Filtro: any;
    readonly txtDataAnalise: MouraTextBoxMesAno;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly btnGerar: MouraButton;
    OnPageLoad(): void;
    Init(): void;
    private InicializarLabels;
    private OnClickGerar;
    private GerarAnaliseVendas;
}
declare const g_Analis: G_Analis;
//# sourceMappingURL=G_Analis.d.ts.map