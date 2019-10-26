interface ProdutoQuantidadeLoteJS {
    Produto: number;
    Contador: number;
    Quantidade: number;
    Deposito_Codigo: number;
    Deposito_Descricao: string;
}
interface QtdeLoteInformadoJS {
    Lote: string;
    Contador: number;
    Fornecedor_Codigo: number;
    Fornecedor_Nome: string;
    Produto_Codigo: number;
    Produto_Descricao: string;
    Deposito_Codigo: number;
    Deposito_Descricao: string;
    Validade: Date;
    DataFabricacao: Date;
    DataRecebimento: Date;
    Quantidade: number;
    Peso: number;
    Localizacao1_Codigo: number;
    Localizacao1_Descricao: string;
    Localizacao2_Codigo: number;
    Localizacao2_Descricao: string;
    Localizacao3_Codigo: number;
    Localizacao3_Descricao: string;
    EPC: string;
}
interface ProdutoLoteExistenteJS {
    Produto: number;
    Lote: string;
    Deposito: number;
    Fornecedor: number;
    Quantidade: number;
}
declare enum MouraModalLoteTipoJS {
    Entrada = 1,
    Saida = 2
}
declare class MouraModalLoteJS extends MouraControl {
    Cancelou: MouraEventHandler;
    InformouLote: MouraEventHandler;
    private tipo;
    Tipo: MouraModalLoteTipoJS;
    readonly pnModal: DevExpress.Web.Scripts.ASPxClientPopupControlBase;
    readonly cboProduto: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly lblDeposito: HTMLLabelElement;
    readonly cboLote: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly lblQtdeRestante: HTMLLabelElement;
    readonly txtDataRecebimento: DevExpress.Web.Scripts.ASPxClientDateEdit;
    readonly txtDataFabricacao: DevExpress.Web.Scripts.ASPxClientDateEdit;
    readonly txtValidade: DevExpress.Web.Scripts.ASPxClientDateEdit;
    readonly txtFornecedor: MouraTextBoxProcura;
    readonly txtPeso: HTMLInputElement;
    readonly txtQuantidade: HTMLInputElement;
    readonly cboLocalizacao1: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly cboLocalizacao2: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly cboLocalizacao3: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly hdnDepositoCodigo: HTMLInputElement;
    readonly hdnProdutos: HTMLInputElement;
    readonly hdnRegistroInformados: HTMLInputElement;
    readonly hdnLotesExistentes: HTMLInputElement;
    readonly btnAdicionar: MouraButton;
    readonly hdnBloquearFornecedor: HTMLInputElement;
    readonly btnOK: MouraButton;
    readonly btnCancelar: MouraButton;
    readonly grd: MouraGridViewJS;
    Produtos: ProdutoQuantidadeLoteJS[];
    Informados: QtdeLoteInformadoJS[];
    LotesExistentes: ProdutoLoteExistenteJS[];
    readonly LotesExistentesEInformados: ProdutoLoteExistenteJS[];
    constructor(id: string);
    protected IniciarEventos(): void;
    private validar;
    abrir(): void;
    Limpar(): void;
    private limparLote;
    private preencherItem;
    private atualizarLabels;
    private getQuantidadeInformadaByProduto;
    private getQuantidadeInformadaByProdutoLote;
    private getInformadoByProdutoLote;
    private adicionar;
    private OnCboProdutoChange;
    private OnCboLoteChange;
    private OnBtnAdicionarClick;
    private OnGridExcluiuItem;
    Mostrar(produtos: Array<ProdutoQuantidadeLoteJS>, tipo: MouraModalLoteTipoJS, informados: Array<QtdeLoteInformadoJS>, bloquearFornecedor: boolean, codFornecedor: number): void;
    protected PreencherGrade(): void;
    protected OnClickCancelar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected ConfimarLote(): boolean;
    protected OnClickOk(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected VerificaEstoquesInformados(): boolean;
}
//# sourceMappingURL=MouraModalLoteJS.d.ts.map