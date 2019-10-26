declare var clientIDModalProcura: string;
declare var erroSistema: string;
declare var MouraControlsList: MouraCampo[];
declare function __doPostBack(component: string, parameter: string): void;
declare class MouraException {
    StackTrace: string;
    Message: string;
    ExceptionType: string;
}
declare function JQueryDateFormat(date: Date, formato: string): any;
declare function gettxtBackup(): HTMLElement;
declare function formatNumero(textBox: any, casas: any): void;
declare function completaComZero(texto: string, casas: number, esquerda: boolean): string;
declare function formatTextBoxInteiro(textBox: any): void;
declare function sonumeros(e: any): boolean;
declare function sodecimais(e: any): boolean;
declare function verificaF2(e: any): boolean;
declare function verificaF2CEP(e: any): boolean;
declare function executarFuncaoOnKey(e: any, keysCodes: any, funcaoExecutar: any): boolean;
declare function isTeclaPressed(e: any, keysCodes: number[], alt: boolean, ctrl: boolean, shift: boolean): boolean;
declare function IsControlKeyCode(keyCode: number): boolean;
declare function IsFirefoxControlKeyEvent(keyEvent: JQueryKeyEventObject): boolean;
declare function IsSymbolKeyCode(keyCode: number): boolean;
declare function IsAccentKeyCode(keyCode: number): boolean;
declare function IsOperatorKeyCode(keyCode: number): boolean;
declare function IsComparatorKeyCode(keyCode: number): boolean;
declare function IsPunctuationKeyCode(keyCode: number): boolean;
declare function IsNumberKeyCode(keyCode: number): boolean;
declare function IsNegativeKeyCode(keyCode: number): boolean;
declare function IsSeparatorKeyCode(keyCode: number): boolean;
declare function IsLetterKeyCode(keyCode: number): boolean;
declare function IsWhiteSpaceKeyCode(keyCode: number): boolean;
declare function isAltPressedEvent(e: any): boolean;
declare function isCtrlPressedEvent(e: any): boolean;
declare function isShiftPressedEvent(e: any): boolean;
declare function getTeclaCodeEvent(e: any): number;
declare function getKeyEventEvent(e: any): JQueryKeyEventObject;
declare function corrigirGradeProcura(CompModal: any, CompGrid: any, idGrid: any): void;
declare function ApsxGridViewContentFull(idGrid: any): void;
declare function selecionarRegistroProcura(modal: any, campoCodigo: any, TextBoxProcura: any, isCallback: any): void;
declare function gridDblClickProcura(grid: any, modal: any, linha: any, TextBoxProcura: any, isCallback: any): void;
declare function pesquisarTextBoxProcura(TextBoxProcura: any, valor: any, isCallback: any): void;
declare function InitGridViewProcura(s: any, e: any, modal: any, TextBoxProcura: any, isCallback: any): void;
declare function testarEvento(s: any, e: any): void;
declare function textBoxProcura_LostFocus(combo: any, hiddenField: any, callBack: any): void;
declare function removerCssTextBoxProcura(): void;
declare function endCallBackTextoBoxProcura(combo: any, hdnDigitado: any, funcaoExecutar: any, callBackIDExecutarPerfom: any): void;
declare function adicionarParametrosTextBoxProcura(hdnParametros: any, novosParametros: any): void;
declare function mostrarGradeTodosTextBoxProcura(textBoxProcura: any): void;
declare function limparTextBoxProcura(textBoxProcura: any): void;
declare function salvarLayoutGrid(grid: any): void;
declare function exibirMensagemSucessoLayout(): void;
declare function abrirModalProcura(modal: any, nomeGrid: any): void;
declare function digitarProcura(imgProcura: any, divSuperiorModal: any, caractere: any): void;
declare function clicarBotaoGrid(grid: any, visibleIndex: any, keyValue: any, hdnBotaoGrid: any, CommandArgument: any, CommandName: any, BotaoClique: any): void;
declare function selecionarProximoFocus(elementoAtual?: Element): void;
declare function dispararEventoDx(evento: any, obj: any, args: any): void;
declare function isBotao(element: any): boolean;
declare function isTextarea(element: any): boolean;
declare function isLink(element: any): boolean;
declare function isDevExpressGridView(element: any): boolean;
declare function procurarMenu(textoProcurar: string): void;
declare function gradeFullScreen(grid: any): void;
declare function globalEventsEndCallBack(): void;
declare function executarCallBackPanel(CompCallBackPanel: any): boolean;
declare function executarCallBackPanelArgumento(CompCallBackPanel: any, arg: any): boolean;
declare function endCallBackMoura(CompCallBackPanel: any, hdnTipoAlerta: any, hdnMensagem: any): void;
declare function menuToggle(linkButtonID: any, divEsconderID: any, caminhoImagemMais: any, caminhoImagemMenos: any, caminhoImagemFavorito: any): void;
declare function onGridProcuraRowKeyDown(event: any, visibleIndex: any, grid: any): void;
declare function selecionarIndex(textBox: any): void;
declare function setFocusRowIndexGrid(grid: any, index: any): void;
declare function KeydownTela(event: any): void;
declare function escapeRegExp(str: any): any;
declare function escapeRegExpNoCase(str: any): any;
declare function replaceAll(str: any, find: any, replace: any): string;
declare function replaceAllNoCase(str: any, find: any, replace: any): string;
declare function Right(str: any, n: any): any;
declare function GridViewBatchEditRowValidating(s: any, e: any): void;
declare function CorrigirPopUpCalendario(idDivCalendario: string): void;
declare function SetFocusComponente(idComponente: any): void;
declare function ClickBotaoRemoverProcuraComLista(callback: any, lista: HTMLSelectElement): void;
declare function DuploClickListaProcuraComLista(botaoRemover: any): void;
declare function ExecutarAjaxCallbackSync(methodType: string, methodUrl: string, data: any): any;
declare function ExecutarAjaxCallBackAsync(methodType: string, methodUrl: string, data: any, funcaoSucesso: (d: any) => void, funcaoErro: (erro: JQueryXHR) => void, context: any): void;
declare function ExecutarDownloadBlobHttpRequestAsyncPost(nomeFuncao: string, data: JSON): Promise<any>;
declare function ExecutarDownloadBlob(methodType: string, methodUrl: string, data: any): Promise<{
    event: Event;
    request: XMLHttpRequest;
}>;
declare function adicionarEventoDevExpress(evento: DevExpress.Web.Scripts.ASPxClientEvent, handler: any, context: any): void;
declare function adicionarEventoDevExtreme(objeto: any, evento: string, handler: any, context?: any): void;
declare function adicionarEventoJQuery(objeto: any, evento: string, handler: any, context?: any): void;
declare function adicionarEventoMoura(evento: any, handler: any, context: any): void;
declare function MostrarMensagem(mensagem: string, timeOut?: number): void;
declare function MostrarAlerta(mensagem: string, timeOut?: number): void;
declare function MostrarError(mensagem: string, timeOut?: number): void;
declare function MostrarMensagemCampoObrigatorio(descricaoCampo: string): void;
declare function tratarMensagemToast(mensagem: string): string;
declare function consultarVenda(venda: number): void;
declare function abrirTelaNovaAbaCodigo(url: string, codigo: string): void;
declare function abrirTelaNovaAbaParametros(url: string, parametros?: string[]): void;
declare function formataURLRelativa(url: string): string;
declare function cloneObject(obj: any): any;
declare function cloneArray(arr: any[]): any[];
declare var isEsperaAberta: boolean;
declare function abrirEspera(mensagem?: string): boolean;
declare function fecharEspera(): boolean;
declare enum MsgBoxIcon {
    Info = 1,
    Alert = 2,
    Question = 3
}
declare enum MsgBoxOptions {
    OkOnly = 1,
    YesNo = 2,
    YesNoCancel = 3
}
declare enum MsgBoxResult {
    Ok = 1,
    Yes = 2,
    No = 3,
    Cancel = 4
}
declare class MsgBoxResultEventArgs {
    Resultado: MsgBoxResult;
    Argument: any;
}
declare function MsgBoxJS(msg: string, buttons: MsgBoxOptions, icone: MsgBoxIcon, funcaoResultado?: (result: MsgBoxResultEventArgs) => void, argument?: any, titulo?: string): void;
declare function resultadoMsgBox(resultado: MsgBoxResult, funcaoResultado: (result: MsgBoxResultEventArgs) => void, argument: any): void;
declare class InputBoxResultEventArgs {
    Valor: string;
    Argument: any;
}
declare function InputBoxJS(titulo: string, mensagem: string, argument: any, funcaoRetorno: (result: InputBoxResultEventArgs) => void, context: any, valorDefault?: string): void;
declare function resultadoInputBox(resultado: string, funcaoResultado: (result: InputBoxResultEventArgs) => void, argument: any): void;
declare enum DiferencaData {
    MilliSeconds = 0,
    Seconds = 1,
    Minutes = 2,
    Hours = 3,
    Days = 4,
    Months = 5,
    Years = 6
}
declare function calcularDiferencaData(dataInicio: Date, dataFim: Date, diferenca: DiferencaData): number;
declare function removeTimeFromDate(value: Date): Date;
declare function corrigirTamanhoMouraGridViewJS(grid: any, idDivConteudo: any): void;
declare function RedrawGridsJS(idContainer: string): void;
declare function DecodeTextoJSON(texto: string): string;
declare function EncodeTextoJSON(texto: string): string;
declare function ExibirMensagemAdicionalProcura(msg: string, titulo?: string): void;
declare function AtualizarModelAngular(Elemento: HTMLElement): void;
declare function RecebeFoco(idComponente: string): void;
declare function Sting64ToByteArray(str: string): number[];
declare function ByteArrayToSting64(arr: number[]): string;
declare function StringToParametros(StringParametros: string): any;
declare function FecharModalCadastro(idHdnRetorno: string, parametrosRetorno: string, idUPDPanel: string, idMouraTelaModal: string): void;
declare function FullScreenObjeto(element: any): void;
declare function ToggleFullScreen(elem: any): void;
declare function LogarException(ex: any): void;
declare function LogarExceptionAjax(ex: JQueryXHR): void;
declare function GetRetornoAJAX(d: any): any;
declare function Sleep(ms: any): boolean;
declare enum enmKeyCode {
    ENTER = 13,
    RETURN = 13,
    ESC = 27,
    F1 = 112,
    F2 = 113,
    F3 = 114,
    F4 = 115,
    F5 = 116,
    F6 = 117,
    F7 = 118,
    F8 = 119,
    F9 = 120,
    F10 = 121,
    F11 = 122,
    F12 = 123
}
declare function AdicionarAtalhoHTML(target: any, keycode: enmKeyCode, stopPropagation: boolean, funcaoExecutar: () => void, context: any): void;
declare function OnKeyDownComponente(e: any): void;
declare function StopPropagationJQuery(e: any): void;
declare function getUrlVars(): any[];
declare function createCookie(name: any, value: any, days: any): void;
declare function readCookie(name: any): string;
declare function eraseCookie(name: any): void;
declare function mouraXOR(a: any, b: any): boolean;
declare function criarPropertyObjeto(obj: any, propertyName: string, setMethod: (value: any) => void, getMethod: () => any): void;
declare function MontarEnderecoProprietario(Endereco: string, Bairro: string, Cidade: string): string;
declare function ConvertToDate(valor: any): Date;
declare function CNum(valor: any): number;
declare function iniciarMascaras(): void;
declare function DiffDays(startDate: any, endDate: any): number;
declare function ValidarPeriodo(dataInicial: Date, dataFinal: Date): boolean;
declare function PreencherImagemBlob(htmlImage: HTMLImageElement, file: Blob): void;
declare function AbrirReport(path: string, arquivo: string): void;
declare function AbrirReportInternal(path: string, arquivo: string): void;
declare function downloadArquivo(content: any, filename: string, contentType: string): void;
declare function downloadURI(uri: any, name: any): void;
declare function base64ToArrayBuffer(base64: any): ArrayBuffer;
//# sourceMappingURL=MouraScript.d.ts.map