declare class C_ConCfg extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Contabil_Configuracao> {
    readonly txtContaContabilCheque_hdnEmpresaContabil: HTMLInputElement;
    readonly cboEmpresa: MouraComboBox;
    readonly txtContaContabilCheque: MouraTextBoxProcuraContabil;
    readonly Grid: MouraGridViewJS;
    readonly txtCodigo: MouraTextBoxProcura;
    protected Init(): void;
    protected OnClickBotaoLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    PreencherEmpresaContabil(): void;
    protected onEmpresaChange(): void;
    OnPageLoad(): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected GetCadastrados(): void;
    protected OnContaContabilChequeAntesAbrirProcura(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnContaContabilChequePesquisando(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraContabilPesquisandoEventArgs): void;
}
declare var c_ConCfg: C_ConCfg;
//# sourceMappingURL=C_ConCfg.d.ts.map