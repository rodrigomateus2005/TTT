declare class MouraTextBoxProcuraContabilPesquisandoEventArgs extends MouraEventArgs {
    Cancelar: boolean;
    CodigoRetorno: number;
}
declare class MouraTextBoxProcuraContabil extends MouraTextBoxProcura {
    PesquisandoContabil: MouraGenericEventHandler<any, MouraTextBoxProcuraContabilPesquisandoEventArgs>;
    readonly hdnEmpresaContabil: HTMLInputElement;
    readonly hdnComponenteEmpresaContabil: HTMLInputElement;
    EmpresaContabil: number;
    ComponenteEmpresaContabil: string;
    constructor(id: string);
    protected IniciarEventos(): void;
    CarregarCampoAdicional(): void;
    protected OnProcurouProcura(): void;
    protected OnPesquisandoProcura(retorno: MouraTextBoxProcuraRetornoProcura, evento: MouraTextBoxProcuraPesquisandoEventArgs): void;
    protected OnTextBoxProcuraContabilKeyPress(e: any): void;
    protected OnTextBoxProcuraContabilKeyDown(e: any): void;
    protected OnTextBoxProcuraContabilLostFocus(e: any): void;
    protected OnTextBoxProcuraContabilGotFocus(): void;
    protected GetCodigoReduzido(id: number): string;
    protected GetCodigoContabil(reduzido: number, codEmpresa: number): string;
}
//# sourceMappingURL=MouraTextBoxProcuraContabil.d.ts.map