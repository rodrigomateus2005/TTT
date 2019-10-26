declare class MouraTextBoxProcuraConfiguracaoContabilPesquisandoEventArgs extends MouraEventArgs {
    Cancelar: boolean;
    CodigoRetorno: number;
}
declare class MouraTextBoxProcuraConfiguracaoContabil extends MouraTextBoxProcura {
    PesquisandoContabil: MouraGenericEventHandler<any, MouraTextBoxProcuraConfiguracaoContabilPesquisandoEventArgs>;
    readonly hdnEmpresaContabil: HTMLInputElement;
    readonly hdnComponenteEmpresaContabil: HTMLInputElement;
    EmpresaContabil: number;
    ComponenteEmpresaContabil: string;
    constructor(id: string);
    protected IniciarEventos(): void;
    CarregarCampoAdicional(): void;
    protected OnProcurouProcura(): void;
    protected OnPesquisandoProcura(retorno: MouraTextBoxProcuraRetornoProcura, evento: MouraTextBoxProcuraPesquisandoEventArgs): void;
    protected OnTextBoxProcuraConfiguracaoContabilKeyPress(e: any): void;
    protected OnTextBoxProcuraConfiguracaoContabilKeyDown(e: any): void;
    protected OnTextBoxProcuraConfiguracaoContabilLostFocus(e: any): void;
    protected OnTextBoxProcuraConfiguracaoContabilGotFocus(): void;
    protected GetCodigoReduzido(id: number): string;
    protected GetCodigoContabil(reduzido: number, codEmpresa: number, tipoConfiguracao: string): string;
}
//# sourceMappingURL=MouraTextBoxProcuraConfiguracaoContabil.d.ts.map