declare class C_DesTit extends MouraPageAngular {
    Entity: SiSMoura.Core.Entity.Desconto_Titulo;
    readonly btnConfirmar: MouraButton;
    readonly btnLimpar: MouraButton;
    readonly optOpcao: MouraRadioButtonList;
    readonly cboContaCorrente: MouraContaCorrenteCombo;
    readonly txtContaReceber: MouraTextBoxProcura;
    readonly txtCheque: MouraTextBoxProcura;
    readonly cboPosicao: MouraComboBox;
    readonly txtData: MouraTextBoxData;
    readonly lblCliente: MouraLabel;
    readonly txtContaContabil: MouraTextBoxProcura;
    OnPageLoad(): void;
    Init(): void;
    ValidarCamposObrigatorios(): boolean;
    private LimparCampos;
    private OnMudouOpcao;
    private OnClickConfirmar;
    private Confirmar;
    private OnBuscouCheque;
    private OnBuscouContaReceber;
    private BuscarByCheque;
    private BuscarByContaReceber;
    private MudouDescontoPorcentagem;
    private MudouDescontoValor;
    private VerificarContaContabilEmpresa;
    private OnBuscouContaContabil;
}
declare const c_DesTit: C_DesTit;
//# sourceMappingURL=C_DesTit.d.ts.map