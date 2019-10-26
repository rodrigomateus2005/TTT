declare class MouraComponenteTela extends MouraControl {
    private idCHKVisivel;
    private idCHKObrigatorio;
    readonly cbComponente: MouraCallBackPanel;
    readonly Grid: MouraGridViewJS;
    readonly Modal: MouraModal;
    readonly hdnIDCampoCodigo: HTMLInputElement;
    readonly BotaoCancelar: MouraButton;
    readonly BotaoSalvar: MouraButton;
    readonly hdnSource: HTMLInputElement;
    protected IniciarEventos(): void;
    protected OnClickBotaoCancelar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    Fechar(): void;
    Abrir(tipo: string, idCampoCodigo: string): void;
    protected OnChangeCheckBox(checkbox: HTMLInputElement, visibleIndex: number, idChk: string): void;
    protected ProcurarCampos(campoCodigo: string): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected AdicionarItemLista(campo: MouraCampo, idCampoCodigo: string, listaCampos: MouraTelaDataSourceComponente[]): void;
    protected OnClickSalvarComponente(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
interface MouraTelaDataSourceComponente {
    Contador: number;
    IDCampo: string;
    Campo: string;
    CampoObrigatorioFixo: boolean;
    IsComponenteVisivel: boolean;
    IsCampoCodigo: boolean;
    ObrigatorioUsuario: boolean;
    BloquearAlteracao: boolean;
    PermitirObrigatorio: boolean;
    PermitirOcultar: boolean;
    Visivel: boolean;
    Obrigatorio: boolean;
}
//# sourceMappingURL=MouraComponenteTela.d.ts.map