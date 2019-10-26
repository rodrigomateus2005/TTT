declare class C_ConCeg extends MouraPageAngular {
    MovItens: any[];
    MovItem: any;
    readonly mdConfCega: MouraModal;
    readonly grd: MouraGridViewJS;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly lstEmpresaOrigem: MouraListBoxEmpresa;
    readonly lstEmpresaDestino: MouraListBoxEmpresa;
    readonly txtResponsavel: MouraTextBoxProcura;
    readonly txtProduto: MouraTextBoxProcura;
    readonly mdLoginAcesso: MouraModal;
    readonly txtUsuario: MouraTextBox;
    readonly txtSenha: MouraTextBox;
    readonly grdMd: MouraGridViewJSEditavel;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnFechouMdConfCega(e: MouraEventHandler): void;
    protected LimparCampos(): void;
    protected LimparCamposMd(): void;
    protected PreencherEmpresasDestino(): void;
    protected PreencherEmpresasOrigem(): void;
    private movimentacaoSelecionada;
    protected OnClickBtnConferir(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnClickConcluir(): void;
    protected OnClickGerar(): void;
    protected OnClickLimpar(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnTxtProdutoPesquisando(s: any, e: MouraTextBoxProcuraPesquisandoEventArgs): void;
    protected OnClickValidar(): void;
    private isNumeric;
    private realizarTransferencia;
}
declare var c_ConCeg: C_ConCeg;
//# sourceMappingURL=C_ConCeg.d.ts.map