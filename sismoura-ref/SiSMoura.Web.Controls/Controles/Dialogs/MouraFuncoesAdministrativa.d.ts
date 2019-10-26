declare enum enmAutorizacaoMarcado {
    Nenhum = 0,
    Gravar = 1,
    Alterar = 2,
    Excluir = 4,
    Imprimir = 8,
    Excel = 16,
    OcultarColunas = 32,
    Todos = 63
}
declare class MouraFuncoesAdministrativasRetorno {
    Funcao: number;
    Usuario: number;
    Autorizacoes: enmAutorizacaoMarcado;
    Autorizado: boolean;
    Valido: boolean;
    SenhaAoAbrir: boolean;
    SolicitarAutorizacao: boolean;
    Cancelado: boolean;
}
declare class MouraFuncoesAdministrativa extends MouraControl {
    private Context;
    private FuncaoRetorno;
    private FuncaoRetornoCancelamento;
    private CodigoUsuario;
    readonly hdncodfuncaoadm: HTMLInputElement;
    readonly hdnUsarAngular: HTMLInputElement;
    private FuncaoAdministrativa;
    private IsClientMode;
    private redirecionar;
    readonly Modal: MouraModal;
    readonly painel: HTMLDivElement;
    readonly painelFuncao: HTMLDivElement;
    readonly painelLogin: HTMLDivElement;
    readonly painelSenha: HTMLDivElement;
    readonly painelBotoes: HTMLDivElement;
    readonly painelRadios: HTMLDivElement;
    readonly labelFuncao: HTMLLabelElement;
    readonly login: HTMLInputElement;
    readonly senha: HTMLInputElement;
    readonly botaoOk: MouraButton;
    readonly botaoCancelar: MouraButton;
    constructor(id: string);
    protected IniciarEventos(): void;
    OnBotaoCancelarClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    OnBotaoOKClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    Verificar(funcaoAdministrativa: string, codigoUsuario: number, redirecionar: boolean, funcaoRetorno: (retorno: MouraFuncoesAdministrativasRetorno) => void, context: any, sempreVerificar?: boolean, funcaoRetornoCancelamento?: (retorno: MouraFuncoesAdministrativasRetorno) => void): void;
    VerificarPorCodigo(funcaoAdministrativa: number, codigoUsuario: number, redirecionar: boolean, funcaoRetorno: (retorno: MouraFuncoesAdministrativasRetorno) => void, context: any): void;
}
//# sourceMappingURL=MouraFuncoesAdministrativa.d.ts.map