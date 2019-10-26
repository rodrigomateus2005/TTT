declare class MouraTextBoxCepPesquisouEventArgs extends MouraEventArgs {
    Bairro: string;
    CidadeCodigo: number;
    CidadeDescricao: string;
    EncontrouEndereco: boolean;
    Endereco: string;
    Estado: string;
    Erro: boolean;
    MensagemErro: string;
}
declare class MouraTextBoxCep extends MouraTextBox {
    PesquisouCEP: MouraGenericEventHandler<any, MouraTextBoxCepPesquisouEventArgs>;
    readonly hdnProcuraAjax: HTMLInputElement;
    readonly botaoProcurar: DevExpress.Web.Scripts.ASPxClientButton;
    readonly IsProcuraAjax: boolean;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnClickBotaoProcurar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    private ExecutarProcuraCEP;
}
//# sourceMappingURL=MouraTextBoxCep.d.ts.map