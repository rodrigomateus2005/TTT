declare module signalR {
    class HubConnectionBuilder {
        build(): HubConnection;
        configureLogging(logLevel: LogLevel): HubConnectionBuilder;
        configureLogging(logger: ILogger): HubConnectionBuilder;
        withHubProtocol(protocol: IHubProtocol): HubConnectionBuilder;
        withUrl(url: string): HubConnectionBuilder;
        withUrl(url: string, transportType: HttpTransportType): HubConnectionBuilder;
        withUrl(url: string, options: IHttpConnectionOptions): HubConnectionBuilder;
    }

    class HubConnection {
        serverTimeoutInMilliseconds: number;
        state: number;

        invoke<T>(methodName: string, ... args: any[]): Promise<T>;
        off(methodName: string);
        off(methodName: string, method: (... args: any[]) => void);
        on(methodName: string, newMethod: (... args: any[]) => void);
        onclose(callback: (error?: Error) => void);
        send(methodName: string, ... args: any[]): Promise<void>;
        start(): Promise<void>;
        stop(): Promise<void>;
        stream<T>(methodName: string, ... args: any[]): IStreamResult<T>;
    }

    class HttpClient {
        delete(url: string);
        delete(url: string, options: HttpRequest);
        get(url: string);
        get(url: string, options: HttpRequest);
        post(url: string);
        post(url: string, options: HttpRequest);
        send(request: HttpRequest);
    }

    interface AbortSignal {
        aborted: boolean;
        onabort: () => void;
    }

    interface IStreamResult<T> {
        subscribe(subscriber: IStreamSubscriber<T>);
    }

    interface IStreamSubscriber<T> {
        closed?: boolean;
        complete();
        error(err: any);
        next(value: T);
    }

    interface HttpRequest {
        abortSignal?: AbortSignal;
        content?: string | ArrayBuffer;
        headers?: any;
        method?: string;
        responseType?: XMLHttpRequestResponseType;
        timeout?: number;
        url?: string;
    }

    interface HubMessageBase {
        type: MessageType
    }

    interface ITransport {
        onclose: (error?: Error) => void;
        onreceive: (data: string | ArrayBuffer) => void;

        connect(url: string, transferFormat: TransferFormat);
        send(data: any);
        stop();
    }

    interface IHttpConnectionOptions {
        httpClient?: HttpClient;
        logger?: ILogger | LogLevel;
        logMessageContent?: boolean;
        skipNegotiation?: boolean;
        transport?: HttpTransportType | ITransport;

        accessTokenFactory();
    }

    interface IHubProtocol {
        name: string;
        transferFormat: TransferFormat;
        version: number;

        parseMessages(input: string | ArrayBuffer, logger: ILogger);
        writeMessage(message: HubMessageBase);
    }

    interface ILogger {
        log(logLevel: LogLevel, message: string);
    }

    interface IHubProtocol {
        httpClient?: HttpClient;
        logger?: ILogger | LogLevel;
        logMessageContent?: boolean;
        skipNegotiation?: boolean;
        transport?: HttpTransportType | ITransport;

        accessTokenFactory();
    }

    interface IHubProtocol {
        onclose: (error?: Error) => void;
        onreceive: (data: string | ArrayBuffer) => void;

        connect(url: string, transferFormat: TransferFormat);
        send(data: any);
        stop();
    }

    enum LogLevel {
        Trace = 0,
        Debug = 1,
        Information = 2,
        Warning = 3,
        Error = 4,
        Critical = 5,
        None = 6,
    }

    enum HttpTransportType {
        None = 0,
        WebSockets = 1,
        ServerSentEvents = 2,
        LongPolling = 4,
    }

    enum TransferFormat {
        Binary,
        Text = 1,
    }

    enum MessageType {
        Invocation = 1,
        StreamItem = 2,
        Completion = 3,
        StreamInvocation = 4,
        CancelInvocation = 5,
        Ping = 6,
        Close = 7,
    }
}