declare class G_CliAzu extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Cliente_Azure> {
    readonly grd: MouraGridViewJSEditavel;
    readonly txtCodigo: MouraTextBoxProcura;
    Clientes: SiSMoura.Core.Entity.ConsoleClienteAzureBancoRetorno[];
    Cliente: SiSMoura.Core.Entity.ConsoleClienteAzureBancoRetorno;
    readonly txtCliente: MouraTextBoxProcura;
    readonly txtServidor: MouraTextBoxProcura;
    readonly txtUsuario: MouraTextBoxProcura;
    readonly txtSenha: MouraTextBox;
    readonly txtBanco: MouraTextBox;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Console_Cliente_Azure): void;
    protected OnSetouItemCliente(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnLimpouItemCliente(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnItemAdicionado(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnValidandoItemCliente(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnGrdSelecionouItem(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnAntesGravar(): boolean;
    private PreencherBancos;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Console_Cliente_Azure): void;
    protected OnServidorTextChanged(): void;
}
declare var g_CliAzu: G_CliAzu;
//# sourceMappingURL=G_CliAzu.d.ts.map