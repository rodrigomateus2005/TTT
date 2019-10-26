declare class MouraTextBoxPeriodo extends MouraCampo {
    readonly textBoxCalendarioInicio: DevExpress.Web.Scripts.ASPxClientDateEdit;
    readonly textBoxCalendarioFim: DevExpress.Web.Scripts.ASPxClientDateEdit;
    readonly textBoxDiferenca: MouraTextBox;
    Enabled: boolean;
    private _ngModelInicial;
    NgModelInicial: string;
    private _ngModelFinal;
    NgModelFinal: string;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnTextBoxCalendarioFimChange(s: DevExpress.Web.Scripts.ASPxClientDateEdit, e: DevExpress.Web.Scripts.ASPxClientEventArgs): void;
    protected OnTextBoxCalendarioInicioChange(s: DevExpress.Web.Scripts.ASPxClientDateEdit, e: DevExpress.Web.Scripts.ASPxClientEventArgs): void;
    protected OnTextBoxDiferencaChange(e: JQueryEventObject): void;
    AtualizarDiferenca(): void;
    Iniciar(): void;
    IniciarDataAtual(): void;
    IsValido(): boolean;
}
//# sourceMappingURL=MouraTextBoxPeriodo.d.ts.map