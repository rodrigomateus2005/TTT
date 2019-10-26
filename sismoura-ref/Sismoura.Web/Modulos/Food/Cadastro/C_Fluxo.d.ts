declare class C_Fluxo extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Food_Fluxo> {
    readonly grdTelas: MouraGridViewJSEditavel;
    readonly grdFluxoTelas: MouraGridViewJSEditavel;
    readonly txtPosicao: MouraTextBox;
    readonly txtAlturaBotaoModalSugestao: MouraTextBox;
    readonly txtLarguraBotaoModalSugestao: MouraTextBox;
    Tela: any;
    Telas: any[];
    Fluxos: any[];
    readonly cboFluxoTela: MouraComboBox;
    readonly cboTela: MouraComboBox;
    readonly chkInserirCPFNota: MouraCheckBox;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly fotoFundoSugestao: MouraImgUploadJs;
    readonly fotoFundoCPFNota: MouraImgUploadJs;
    readonly fotoFundoDigitarCPF: MouraImgUploadJs;
    readonly fotoFundoPedido: MouraImgUploadJs;
    private codigos;
    protected Init(): void;
    OnPageLoad(): void;
    protected PreencherEmpresas(empresas: SiSMoura.Core.Entity.Food_Fluxo_Empresa[]): void;
    protected OnGrdSelecionouFluxoTelas(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnInserirCPF(): void;
    protected OnAntesGravar(): boolean;
    protected OnAntesDeletar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Food_Fluxo): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Food_Fluxo): void;
    protected OnClickIncluirTela(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected CalcularPosicao(posicaoCalculada: any): void;
}
declare var c_Fluxo: C_Fluxo;
//# sourceMappingURL=C_Fluxo.d.ts.map