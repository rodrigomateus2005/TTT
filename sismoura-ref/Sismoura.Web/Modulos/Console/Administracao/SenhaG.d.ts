declare class SenhaG extends MouraPageAngular {
    readonly txtCliente: MouraTextBoxProcura;
    readonly txtAtendente: MouraTextBoxProcura;
    readonly txtContato: MouraTextBox;
    readonly lblSenha: MouraLabel;
    readonly lblCnpj: MouraLabel;
    readonly lblEndereco: MouraLabel;
    readonly lblDiaPagamento: MouraLabel;
    readonly lblValor: MouraLabel;
    readonly lblUltimoPagamento: MouraLabel;
    readonly lblVencido: MouraLabel;
    readonly lbSenhalQtdeMaquinas: MouraLabel;
    readonly hdnSenhaTag: HTMLInputElement;
    readonly btnAntiga: MouraButton;
    readonly btnSenhaTresDias: MouraButton;
    readonly btnRegistrarQtdeMaquinas: MouraButton;
    readonly btnGravar: MouraButton;
    readonly btnAtualizado: MouraButton;
    readonly btnLimpar: MouraButton;
    RetornoFinanceiroCliente: SiSMoura.Core.Entity.RetornoFinanceiroClienteMoura;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnClickBtnLimpar(s: MouraButton, e: MouraClickEventArgs): void;
    private LimparCampos;
    protected OnDepoisProcurarCliente(s: MouraTextBoxProcura, e: MouraEventArgs): void;
    protected OnAntesAbrirProcuraAtendente(s: any, e: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    private entrouPergunta;
    protected AtualizarSenhaAntiga(): void;
    protected OnClickBtnGravar(s: MouraButton, e: MouraClickEventArgs): void;
    protected OnClickBtnAntiga(s: MouraButton, e: MouraClickEventArgs): void;
    protected OnClickBtnSenhaTresDias(s: MouraButton, e: MouraClickEventArgs): void;
    protected OnClickBtnRegistrarQtdeMaquinas(s: MouraButton, e: MouraClickEventArgs): void;
    protected OnClickBtnAtualizado(s: MouraButton, e: MouraClickEventArgs): void;
    protected SistemaAtualizado(codCliente: number): void;
}
declare const senhaG: SenhaG;
//# sourceMappingURL=SenhaG.d.ts.map