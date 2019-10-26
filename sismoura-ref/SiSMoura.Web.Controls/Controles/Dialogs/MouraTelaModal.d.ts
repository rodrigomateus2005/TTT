declare class MouraTelaModalRetornouEventArgs extends MouraEventArgs {
    Parametros: string;
    ParametrosObject: any;
    IDComponenteProcura: string;
}
declare class MouraTelaModal extends MouraControl {
    Retornou: MouraGenericEventHandler<any, MouraTelaModalRetornouEventArgs>;
    Fechou: MouraEventHandler;
    protected idComponenteProcura: string;
    constructor(id: string);
    readonly IFrame: HTMLIFrameElement;
    readonly HiddenRetorno: HTMLInputElement;
    readonly hdnClient: HTMLInputElement;
    readonly Modal: MouraModal;
    protected IniciarEventos(): void;
    private naoFecharModalAoGravar;
    protected LimparCampos(): void;
    AbrirTelaModal(urlTela: string, parametros: Array<string>, idComponenteProcura: string, naoFecharModalAoGravar?: boolean): void;
    AbrirTelaModalUrlPropria(urlTela: string): void;
    protected OnFechouModal(s: any, e: any): void;
    protected AtualizaURLIFrame(url: string, parametros: string[], isUrlPropria: boolean): void;
    private TrataURLParametros;
    FinalizarModal(strParametros: string): void;
    FecharModal(): void;
}
//# sourceMappingURL=MouraTelaModal.d.ts.map