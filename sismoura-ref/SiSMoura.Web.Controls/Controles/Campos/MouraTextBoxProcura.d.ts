declare class MouraTextBoxProcuraPesquisandoEventArgs extends MouraEventArgs {
    Valido: boolean;
    Retorno: MouraTextBoxProcuraRetornoProcura;
    Valor: any;
}
declare class MouraTextBoxProcuraPesquisandoEventHandler extends MouraGenericEventHandler<MouraTextBoxProcura, MouraTextBoxProcuraPesquisandoEventArgs> {
}
declare class MouraTextBoxProcuraValidateMostrarEventArgs extends MouraEventArgs {
    Valido: boolean;
}
declare class MouraTextBoxProcuraValidateMostrarEventHandler extends MouraGenericEventHandler<MouraTextBoxProcura, MouraTextBoxProcuraValidateMostrarEventArgs> {
}
declare class MouraTextBoxProcuraRetornoProcura {
    Codigo: string;
    Descricao: string;
}
declare class ParametroProcura {
    Key: string;
    Value: string;
}
declare class MouraTextBoxProcuraKeyPressEventArgs extends MouraEventArgs {
    Tecla: number;
    Cancelar: boolean;
    JQueryKey: any;
}
declare class MouraTextBoxProcuraAntesAbrirProcuraEventArgs extends MouraEventArgs {
    Cancelar: boolean;
}
declare class MouraTextBoxProcura extends MouraTextBox {
    Procurou: MouraEventHandler;
    AbriuProcura: MouraEventHandler;
    Pesquisando: MouraTextBoxProcuraPesquisandoEventHandler;
    ValidateMostrar: MouraTextBoxProcuraValidateMostrarEventHandler;
    KeyPressProcura: MouraGenericEventHandler<any, MouraTextBoxProcuraKeyPressEventArgs>;
    AntesAbrirProcura: MouraGenericEventHandler<any, MouraTextBoxProcuraAntesAbrirProcuraEventArgs>;
    Limpou: MouraEventHandler;
    readonly divTextBox: JQuery<HTMLElement>;
    readonly TextBoxAdicional: HTMLInputElement;
    readonly dlgTelaModal: MouraTelaModal;
    private idModalProcura;
    private idModalProcuraModal;
    protected valorAnterior: string;
    protected valorAdicionalAnterior: string;
    private campos;
    Campos: CampoProcura[];
    private idCallbacksExecutar;
    IdCallbacksExecutar: string[];
    private permitirProcurar;
    PermitirProcurar: boolean;
    private permitirInexistente;
    PermitirInexistente: boolean;
    private usarAjax;
    UsarAjax: boolean;
    private somenteAtivos;
    SomenteAtivos: boolean;
    private executarDepoisAjax;
    ExecutarDepoisAjax: any;
    private engine;
    Engine: string;
    private urlCadastro;
    URLCadastro: string;
    Disabled: boolean;
    IndexSelecionarGrade: number;
    readonly NgModel: string;
    readonly Parametros: ParametroProcura[];
    AddParametro(key: string, value: string): void;
    LimparParametros(): void;
    protected GetTextAdicional(): string;
    protected SetTextAdicional(value: string): void;
    readonly LabelResultado: HTMLLabelElement;
    readonly hdnValorDigitado: HTMLInputElement;
    readonly hdnValorAntigo: HTMLInputElement;
    readonly hdnIndexSelecionarGrade: HTMLInputElement;
    readonly hdnValorAnterior: HTMLInputElement;
    readonly hdnValorAdicionalAnterior: HTMLInputElement;
    readonly hdnUsarComboEmpresa: HTMLInputElement;
    readonly hdnExibirCheckInativo: HTMLInputElement;
    readonly hdnExibirInformacoesAdicionais: HTMLInputElement;
    readonly hdnSomenteAtivos: HTMLInputElement;
    readonly hdnLabelResultadoText: HTMLInputElement;
    UsarComboEmpresa: boolean;
    ExibirCheckBoxInativo: boolean;
    ExibirInformacoesAdicionais: boolean;
    readonly hdnScriptExecutarDepoisEndCallback: HTMLInputElement;
    readonly hdnParametros: HTMLInputElement;
    readonly divGrid: HTMLDivElement;
    readonly grdProcura: MouraGridViewJS;
    readonly tbGrid: JQuery<HTMLElement>;
    readonly divFull: JQuery<HTMLElement>;
    readonly BotaoMostrarGridProcura: DevExpress.Web.Scripts.ASPxClientButton;
    readonly lblCarregandoGrid: HTMLLabelElement;
    readonly BotaoNovo: DevExpress.Web.Scripts.ASPxClientButton;
    readonly BotaoCadastro: DevExpress.Web.Scripts.ASPxClientButton;
    private isSomenteAtivosProcura;
    constructor(id: string);
    protected IniciarEventos(): void;
    GetText(): string;
    SetText(valor: string): void;
    GetResultado(): string;
    MostrarInformacoesAdicionais(): void;
    Limpar(): void;
    private LimparInterno;
    Procurar(codigo: string): void;
    private ExecutarCallBackProcura;
    private ExecutarAjaxProcura;
    RegistroInexistente(): void;
    protected OnProcurouProcura(): void;
    protected OnPesquisandoProcura(retorno: MouraTextBoxProcuraRetornoProcura, evento: MouraTextBoxProcuraPesquisandoEventArgs): void;
    GetByIdProcura(id: string): MouraTextBoxProcuraRetornoProcura;
    static GetByIdProcura(id: string, engine: string, somenteAtivos: boolean): MouraTextBoxProcuraRetornoProcura;
    private intervalMostrar;
    MostrarGradeTodosTimer(): void;
    MostrarGradeTodos(): void;
    EsconderGradeTodos(): void;
    private IsGradeTodosAparecendo;
    protected OnTextboxCallbackPanelEndCallBack(s: DevExpress.Web.Scripts.ASPxClientComboBox, e: DevExpress.Web.Scripts.ASPxClientEndCallbackEventArgs): void;
    protected OnThisProcurou(s: MouraTextBoxProcura, e: MouraEventArgs): void;
    protected OnTextBoxProcuraKeyDown(e: any): void;
    abrirProcura(valorTextoProcura: string): void;
    abrirModal(modal: any, ComboClientID: string, UsarCallBackPanel: boolean): void;
    protected OnTextBoxProcuraKeyPress(e: any): void;
    protected OnTextBoxProcuraLostFocus(e: any): void;
    protected OnCallbackProcuraEndCallback(s: DevExpress.Web.Scripts.ASPxClientCallbackPanel, e: any): void;
    protected OnTextBoxProcuraGotFocus(s: DevExpress.Web.Scripts.ASPxClientComboBox, e: any): void;
    protected OnPesquisouGradeResumida(retorno: any): void;
    protected OnPesquisouErro(erro: JQueryXHR): void;
    protected OnCellClickJS(s: any, e: any): void;
    protected OnKeyDownGridJS(s: any, e: any): void;
    private SelecionarLinhaGrid;
    protected OnBotaoMostrarGridClick(s: DevExpress.Web.Scripts.ASPxClientButton, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnTableGridLostFocus(): void;
    protected OnClickDivFull(): void;
    protected OnTableGridKeyDown(e: JQueryEventObject): void;
    protected OnClickLabelResultado(): void;
    private ExecutarGetInformacoesAdicionaisProcura;
    protected OnClickBotaoCadastro(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
//# sourceMappingURL=MouraTextBoxProcura.d.ts.map