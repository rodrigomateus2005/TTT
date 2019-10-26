declare class G_ArqBanXML extends MouraPageAngular {
    readonly txtSenha: MouraTextBox;
    readonly txtBanco: MouraTextBox;
    readonly txtUsuario: MouraTextBox;
    readonly txtServidor: MouraTextBox;
    readonly txtBancoCliente: MouraTextBoxProcura;
    readonly lblTipoBanco: MouraLabel;
    protected Init(): void;
    protected OnClickBotaoGerar(): void;
    protected OnClickBotaoGerarCliente(): void;
    protected OnPesquisouBancoCliente(s: any, e: any): void;
}
declare var g_ArqBanXML: G_ArqBanXML;
//# sourceMappingURL=G_ArqBanXML.d.ts.map