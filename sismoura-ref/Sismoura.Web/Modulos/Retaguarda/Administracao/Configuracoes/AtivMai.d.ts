declare class AtivMai extends MouraPageAngular {
    readonly pageContainer: HTMLElement;
    readonly ativCode: HTMLElement;
    readonly hdnIpData: HTMLInputElement;
    OnPageLoad(): void;
    private Inicializar;
    private RenderQRCode;
    private TestConnection;
    private OnTestConnectionSuccess;
    private OnTestConnectionFail;
    private OnTestConnectionTimeout;
    private SendGetCode;
    private SendGetDevices;
    private OnGetCodeFinished;
    private GetCode;
    private OnGetCodeError;
    private OnGetDevicesFinished;
    private OnGetDevicesError;
    private DisableDevice;
    private OnCancelDeviceFinished;
}
interface DispositivoResposta {
    Sucesso: boolean;
    Mensagem: string;
    Dispositivos: Dispositivo[];
}
interface Dispositivo {
    Codigo: string;
    DataCadastro: string;
    DataAcesso: string;
    Dispositivo: string;
    Cancelado: boolean;
}
declare var ativMai: AtivMai;
//# sourceMappingURL=AtivMai.d.ts.map