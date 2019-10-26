declare class MouraGoogleMaps extends MouraControl {
    private apiKEY;
    APIKEY: string;
    private urlEndereco;
    URLENDERECO: string;
    private urlDirection;
    URLDIRECTION: string;
    readonly CallBackPanel: DevExpress.Web.Scripts.ASPxClientCallbackPanel;
    readonly IFrame: HTMLIFrameElement;
    private readonly hdnURL;
    protected IniciarEventos(): void;
    protected SetURL(value: string): void;
    private FormatarEnderecoPesquisa;
    ProcurarEndereco(endereco: string, numeroEndereco: string, cidadeEstado: string): void;
    ProcurarDirecoes(enderecoOrigem: string, numeroEnderecoOrigem: string, cidadeEstadoOrigem: string, enderecoDestino: string, numeroEnderecoDestino: string, cidadeEstadoDestino: string): void;
    Limpar(): void;
}
//# sourceMappingURL=MouraGoogleMaps.d.ts.map