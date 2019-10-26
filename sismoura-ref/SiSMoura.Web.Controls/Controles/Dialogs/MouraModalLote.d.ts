interface ProdutoQuantidadeLote {
    Produto: number;
    Quantidade: number;
    Deposito_Codigo: number;
    Deposito_Descricao: string;
}
interface QtdeLoteInformado {
    Lote: string;
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
interface ProdutoLoteExistente {
    Produto: number;
    Lote: string;
    Deposito: number;
    Fornecedor: number;
    Quantidade: number;
}
declare enum MouraModalLoteTipo {
    Entrada = 1,
    Saida = 2
}
declare class MouraModalLote extends MouraControl {
    private tipo;
    Tipo: MouraModalLoteTipo;
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
    readonly btnAdicionar: HTMLButtonElement;
    readonly hdnBloquearFornecedor: HTMLInputElement;
    readonly grd: DevExpress.Web.Scripts.ASPxClientGridView;
    Produtos: ProdutoQuantidadeLote[];
    Informados: QtdeLoteInformado[];
    LotesExistentes: ProdutoLoteExistente[];
    readonly LotesExistentesEInformados: ProdutoLoteExistente[];
    constructor(id: string);
    protected IniciarEventos(): void;
    private validar;
    abrir(): void;
    private limpar;
    private limparLote;
    private preencherItem;
    private atualizarLabels;
    private getQuantidadeInformadaByProduto;
    private getQuantidadeInformadaByProdutoLote;
    private getInformadoByProdutoLote;
    private adicionar;
    private OnCboProdutoChange;
    private OnBtnAdicionarClick;
    private OnGridExcluirButtonMouraClick;
}
//# sourceMappingURL=MouraModalLote.d.ts.map