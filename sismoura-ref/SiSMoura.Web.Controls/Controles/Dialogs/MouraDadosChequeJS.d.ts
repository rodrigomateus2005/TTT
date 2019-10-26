declare class DadosChequeEventArgs extends MouraEventArgs {
    CodigoCheque: number;
    NovaSituacao: number;
    ContaCorrente: string;
    ValorCheque: number;
}
declare class MouraDadosChequeJS extends MouraControl {
    InformouCheque: MouraGenericEventHandler<any, DadosChequeEventArgs>;
    readonly pnModal: MouraModal;
    readonly btnCancelar: MouraButton;
    readonly btnOk: MouraButton;
    readonly txtChequeCodigo: MouraTextBoxProcura;
    readonly txtChequeVencimento: MouraTextBoxData;
    readonly txtChequeValor: MouraTextBox;
    readonly txtChequeBanco: MouraTextBox;
    readonly txtChequeAgencia: MouraTextBox;
    readonly txtChequeConta: MouraTextBox;
    readonly txtChequeNumero: MouraTextBox;
    readonly txtChequeClienteCodigo: MouraTextBoxProcura;
    readonly txtChequeClienteNome: MouraTextBox;
    readonly cboChequeClienteTipo: MouraComboBox;
    readonly txtChequeClienteCPF: MouraTextBoxCPF;
    readonly txtChequeClienteFone: MouraTextBox;
    readonly txtChequeClienteEndereco: MouraTextBox;
    readonly cboChequeContaCorrente: MouraContaCorrenteCombo;
    readonly txtChequeObservacao: MouraTextBox;
    readonly cboChequeAlterarSituacao: MouraComboBox;
    readonly lblSituacaoAtual: MouraLabel;
    readonly hdnCodUsuario: HTMLInputElement;
    readonly hdnTela: HTMLInputElement;
    constructor(id: string);
    protected IniciarEventos(): void;
    private AlterarTipoCliente;
    private LimparCampos;
    private OnClickCancelar;
    Mostrar(valorCheque: number, codUsuario: number, tela: string): void;
    private ValidarCheque;
    private OnProcurouCliente;
    private GetDadosCliente;
    private OnClickBotaoNovo;
    private OnProcurouCheque;
    private GetDadosCheque;
    private GetDadosSituacaoAtual;
    private OnClickOk;
    private GravarCheque;
    private Grava;
}
//# sourceMappingURL=MouraDadosChequeJS.d.ts.map