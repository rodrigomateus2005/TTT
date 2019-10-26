interface GridViewMouraClickEvent extends JQueryEventObject {
    VisibleIndex: number;
}
interface CampoProcura {
    Valor: Number;
    Descricao: String;
    Tipo: Number;
}
declare class MouraControl {
    private id;
    private applicationPath;
    private aspUniqueId;
    readonly ID: string;
    AspUniqueId: string;
    private usarCallBack;
    UsarCallBack: boolean;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected ExecutarHttpRequest(nomeFuncao: string, data: JSON): any;
    protected static ExecutarHttpRequestPost(nomeFuncao: string, data: JSON): any;
    protected ExecutarHttpRequestAsyncPost(nomeFuncao: string, data: JSON, funcaoSucesso: (d: any) => void, funcaoErro: (erro: JQueryXHR) => void, context: any): any;
    protected static ExecutarHttpRequestAsyncPost(nomeFuncao: string, data: JSON, funcaoSucesso: (d: any) => void, funcaoErro: (erro: JQueryXHR) => void, context: any): any;
    protected static ExecutarHttpRequest(nomeFuncao: string, data: JSON): any;
    protected ExecutarHttpRequestAsync(nomeFuncao: string, data: JSON, funcaoSucesso: (d: any) => void, funcaoErro: (erro: JQueryXHR) => void, context: any): any;
    protected static ExecutarHttpRequestAsync(nomeFuncao: string, data: JSON, funcaoSucesso: (d: any) => void, funcaoErro: (erro: JQueryXHR) => void, context: any): any;
    protected DownloadHttpRequestPost(nomeFuncao: string, data: JSON): Promise<void>;
    protected ExecutarHttpRequestWebMethodPageAsync(nomeFuncao: string, data: JSON, funcaoSucesso: (d: any) => void, funcaoErro: (erro: JQueryXHR) => void, context: any): any;
    protected static ExecutarHttpRequestWebMethodPageAsync(nomeFuncao: string, data: JSON, funcaoSucesso: (d: any) => void, funcaoErro: (erro: JQueryXHR) => void, context: any): any;
    protected adicionarEventoDevExpress(evento: DevExpress.Web.Scripts.ASPxClientEvent, handler: any, context: any): void;
    protected abrirTelaNovaAbaCampoCodigo(url: string, codigo: string): void;
    IsValido(): boolean;
}
declare class MouraHandlerPair<S, E extends MouraEventArgs> {
    handler: (s: S, e: E) => void;
    executionContext: any;
}
declare class MouraGenericEventHandler<S, E extends MouraEventArgs> {
    private handlerList;
    constructor();
    AddHandler(handler: (s: S, e: E) => void, executionContext?: any): void;
    RemoveHandler(handler: (s: S, e: E) => void, executionContext?: any): void;
    GetIndexHandler(handler: (s: S, e: E) => void, executionContext?: any): number;
    ClearHandlers(): void;
    FireEvent(sender: S, eventArgs: E): any;
    FireEvent(sender: S, eventArgs: E, indexEvent: number): any;
    Count(): number;
}
declare class MouraEventHandler extends MouraGenericEventHandler<any, MouraEventArgs> {
}
declare class MouraEventArgs {
}
//# sourceMappingURL=MouraControl.d.ts.map