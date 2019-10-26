declare class MouraCampo extends MouraControl {
    private _NgModelController;
    NgModelController: ng.INgModelController;
    readonly Painel: HTMLDivElement;
    readonly CallBackPanel: DevExpress.Web.Scripts.ASPxClientCallbackPanel;
    readonly LabelControl: HTMLLabelElement;
    GetTextLabelControl(): string;
    SetTextLabelControl(value: string): void;
    protected _modalPai: string;
    ModalPai: string;
    protected _labelInicial: string;
    LabelInicial: string;
    protected _visibleInicial: boolean;
    VisibleInicial: boolean;
    protected _isComponenteInterno: boolean;
    IsComponenteInterno: boolean;
    Visible: boolean;
    Enabled: boolean;
    private _ngModel;
    NgModel: string;
    private _obrigatorio;
    Obrigatorio: boolean;
    private _obrigatorioUsuario;
    ObrigatorioUsuario: boolean;
    private _componenteValidacao;
    ComponenteValidacao: string;
    private _permitirOcultar;
    PermitirOcultar: boolean;
    private _permitirConfigurarObrigatorio;
    PermitirConfigurarObrigatorio: boolean;
    private _exibirNaConfiguracaoDeCampos;
    ExibirNaConfiguracaoDeCampos: boolean;
    protected IniciarEventos(): void;
}
//# sourceMappingURL=MouraCampo.d.ts.map