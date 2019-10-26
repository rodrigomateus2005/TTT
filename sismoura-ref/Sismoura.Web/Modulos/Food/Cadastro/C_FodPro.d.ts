declare class C_FodPro extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Food_Produto> {
    Produtos: any[];
    readonly cboPosicao: MouraComboBox;
    readonly cboPosicaoChapeiroFritadeira: MouraComboBox;
    readonly txtTempoSugestao: MouraTextBox;
    readonly tab: MouraTabPanel;
    readonly fotoProduto: MouraImgUploadJs;
    readonly fotoLateral: MouraImgUploadJs;
    readonly fotoLateralFlat: MouraImgUploadJs;
    readonly fotoSuperior: MouraImgUploadJs;
    readonly fotoInferior: MouraImgUploadJs;
    readonly grdProdutos: MouraGridViewJSEditavel;
    protected Init(): void;
    OnPageLoad(): void;
    protected Selecionou(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Food_Produto): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Food_Produto): void;
    protected MudouTipoPreparo(): void;
    protected MudouTipoProduto(): void;
    protected AlterarVisibleAbas(visible: boolean): void;
    protected MudouSugestao(): void;
    protected MudouProduto(): void;
    protected PreencherGrade(): void;
}
declare var c_FodPro: C_FodPro;
//# sourceMappingURL=C_FodPro.d.ts.map