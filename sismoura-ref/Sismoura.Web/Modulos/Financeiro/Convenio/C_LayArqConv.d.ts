declare class C_LayArqConv extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Layout_Arquivo_Convenio> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly cboSeparador: MouraComboBox;
    readonly cboFormata: MouraComboBox;
    readonly cboAlinhamento: MouraComboBox;
    readonly txtDescricao: MouraTextBox;
    readonly cboCodCampo: MouraComboBox;
    readonly txtTextoLivre: MouraTextBox;
    readonly txtPosIni: MouraTextBox;
    readonly txtPosFim: MouraTextBox;
    Item: SiSMoura.Core.Entity.Layout_Arquivo_Convenio_Item;
    Itens: SiSMoura.Core.Entity.Layout_Arquivo_Convenio_Item[];
    readonly grdItemLay: MouraGridViewJSEditavel;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnSelectedItemChangeCampo(s: any, e: MouraComboBox): void;
    protected OnAntesDeletar(): boolean;
    protected GetItens(Codigo: any): SiSMoura.Core.Entity.Layout_Arquivo_Convenio_Item[];
    protected OnAntesGravar(): boolean;
    protected MontarComboFormatacaoPorData(): void;
    protected MontarComboFormatacaoPorHora(): void;
    protected MontarComboFormatacaoPorValor(): void;
    protected OnSelecionouLinha(e: any, s: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected ValidarItensLayout(mensagem: string, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected LimparCampos(): void;
    protected OnLimpouItens(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Layout_Arquivo_Convenio): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Layout_Arquivo_Convenio): void;
    protected PreencherGrade(Codigo: SiSMoura.Core.Entity.Layout_Arquivo_Convenio): void;
    protected ValidarPosicaoInicial(): void;
}
declare const c_LayArqConv: C_LayArqConv;
//# sourceMappingURL=C_LayArqConv.d.ts.map