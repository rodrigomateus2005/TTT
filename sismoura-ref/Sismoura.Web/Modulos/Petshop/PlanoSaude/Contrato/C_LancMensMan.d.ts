declare class C_LancMensMan extends MouraPageAngular {
    grid: MouraGridViewJS;
    mensalidade: Mensalidade;
    readonly btnAtualizarMensalidade: MouraButton;
    readonly btnLimpar: MouraButton;
    readonly txtContrato: MouraTextBoxProcura;
    OnPageLoad(): void;
    Init(): void;
    protected LimparCampos(): void;
    OnDepoisProcurou(s: any, e: MouraEventArgs): boolean;
    protected OnBtnAtualizarMensalidade(s: any, e: MouraClickEventArgs): boolean;
    InserirMensalidade(): void;
}
declare const c_LancMensMan: C_LancMensMan;
declare class Mensalidade {
    contrato: number;
    nsu: string;
    bandeira: string;
    operadora: string;
    parcela: number;
    valor: number;
    data: Date;
    constructor();
}
//# sourceMappingURL=C_LancMensMan.d.ts.map