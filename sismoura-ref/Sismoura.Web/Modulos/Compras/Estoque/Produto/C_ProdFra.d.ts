declare class C_ProdFra extends MouraPageAngular {
    Fracionados: any[];
    Fracionado: SiSMoura.Core.Entity.Produto_Fracionado;
    Produto: SiSMoura.Core.Entity.Produto;
    readonly lblProduto: MouraLabel;
    readonly lblUnidade: MouraLabel;
    readonly lblEstoque: MouraLabel;
    readonly lblPrecoCusto: MouraLabel;
    readonly lblPrecoVenda: MouraLabel;
    readonly txtPrecodeCusto: MouraTextBox;
    readonly txtPrecodeVenda: MouraTextBox;
    readonly txtAdicionalValor: MouraTextBox;
    readonly txtQtdeTransAuto: MouraTextBox;
    readonly txtQtdeAposFracionamento: MouraTextBox;
    readonly txtDescricao: MouraTextBox;
    readonly chkInativo: MouraCheckBox;
    readonly txtCodigo: MouraTextBox;
    readonly cboUnidadeFracionamento: MouraComboBox;
    readonly rdTipoRateio: MouraRadioButtonList;
    readonly txtCodBarras: MouraTextBox;
    readonly grd: MouraGridViewJSEditavel;
    readonly btnGravar: MouraButton;
    readonly btnNovo: MouraButton;
    protected Init(): void;
    OnPageLoad(): void;
    carregarDadosProduto(): void;
    protected OnSelecionouLinhaGrade(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    PreencherGrade(): void;
    protected OnDigitouQtdeFracioinamento(): void;
    protected OnDigitouValorAdicional(): void;
    protected OnAlterouTipoAdicional(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Produto_Fracionado): boolean;
    protected OnClickBtnGravar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickBtnNovo(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnAdicionandoGrade(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected LimparCampos(): void;
}
declare var c_ProdFra: C_ProdFra;
//# sourceMappingURL=C_ProdFra.d.ts.map