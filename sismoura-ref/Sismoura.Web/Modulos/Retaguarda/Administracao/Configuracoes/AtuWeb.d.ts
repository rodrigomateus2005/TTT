declare class AtuWeb extends MouraPageAngular {
    protected readonly fpSite: MouraFileUploadJS;
    protected _pathImportado: string;
    protected pathImportado: string;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnClickBotaoAtualizar(): void;
    protected IniciarAtualizacao(): void;
    protected OnUploadComplete(s: any, e: any): void;
}
declare var atuWeb: AtuWeb;
//# sourceMappingURL=AtuWeb.d.ts.map