declare class FrmBalanca extends MouraPageAngular {
    readonly cboModelo: MouraComboBox;
    readonly cboListaPreco: MouraComboBox;
    readonly lblInfoModelo: MouraLabel;
    readonly btnGerar: MouraButton;
    Filtro: any;
    private modelo;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    private OnClickGerar;
    private GerarArquivo;
    private OnMudouModelo;
    private VerificaModeloBalanca;
}
declare const frmBalanca: FrmBalanca;
//# sourceMappingURL=FrmBalanca.d.ts.map