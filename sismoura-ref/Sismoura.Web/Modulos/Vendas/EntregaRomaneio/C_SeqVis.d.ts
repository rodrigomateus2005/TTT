declare class C_SeqVis extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Rota_Venda> {
    readonly grid: MouraGridViewJSEditavel;
    Clientes: SiSMoura.Core.Entity.UltimaCompraRetorno[];
    readonly txtCodigo: MouraTextBoxProcura;
    readonly chkDiaFixo: MouraCheckBox;
    readonly txtData: MouraTextBoxData;
    readonly cboDiaSemana: MouraComboBox;
    readonly txtOrdem: MouraTextBox;
    readonly txtCliente: MouraTextBoxProcura;
    readonly lblSaldoDevedor: MouraLabel;
    readonly hdnDiaFixo: HTMLInputElement;
    readonly btnImportarClientes: MouraButton;
    readonly mdImportarClientes: MouraModal;
    readonly txtVendedor: MouraTextBoxProcura;
    readonly txtZonaVenda: MouraTextBoxProcura;
    readonly txtCidade: MouraTextBoxProcura;
    readonly chkClientesVendedor: MouraCheckBox;
    readonly btnGerarClientes: MouraButton;
    readonly grdClientes: MouraGridViewJS;
    readonly btnImportar: MouraButton;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnChkDiaFixoCheckedChange(): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Rota_Venda): void;
    protected VerificaChkDiaFixo(is: boolean): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Rota_Venda): void;
    protected LimparModalImportarClientes(): void;
    protected CarregarSaldoDevedor(): void;
    protected CarregarVenda(codCliente: number, saldoDevedor: number): any;
    protected OnClickIncluirCliente(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnAntesGravar(): boolean;
    private PreencherClientes;
    protected MostrarModalImpClientes(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected GerarClientes(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected ImportarClientesSelecionados(): void;
}
declare const c_SeqVis: C_SeqVis;
//# sourceMappingURL=C_SeqVis.d.ts.map