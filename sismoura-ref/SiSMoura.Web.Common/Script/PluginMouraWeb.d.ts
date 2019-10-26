declare class PluginMouraWeb {
    private static VERSAO_MIN_PLUGIN;
    private static urlPlugin;
    private static connection;
    private static Connect;
    static Imprimir(porta: string, rawText: string): Promise<boolean>;
    static CriarArquivo(caminho: string, conteudo: string): Promise<boolean>;
    static CriarDiretorio(caminho: string): Promise<boolean>;
    static ExecuteShell(command: string, args: string, workingDirectory: string): Promise<boolean>;
    static GetImpressorasInstaladas(): Promise<string[]>;
    static GetCertificados(dominioWindows: string, usuarioWindows: string, senhaWindows: string): Promise<string[]>;
    static AssinarDocumento(dominioWindows: string, usuarioWindows: string, senhaWindows: string, tipoArquivo: number, dadosAssinar: string, nomeCertificado: string, senhaCertificado: string): Promise<string[]>;
    static GetIps(): Promise<string[]>;
    static GetTempFolder(): Promise<string[]>;
    static IsOnline(): Promise<boolean>;
    private static VerificarPluginMoura;
    private static VerificarVersaoPlugin;
    static ExecutarFuncaoServerSideAsynch(nomeFuncao: string, parametros: JSON): Promise<any>;
}
//# sourceMappingURL=PluginMouraWeb.d.ts.map