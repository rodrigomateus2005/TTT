declare class R_EscPro extends MouraPageAngular {
    readonly grdEscala: MouraGridViewJS;
    readonly txtPeriodoEscala: MouraTextBoxPeriodo;
    PeriodosSelecionados: SiSMoura.Core.Entity.AnimaisPeriodoSelecionadoRetorno[];
    readonly btnConfirmarSolicitacao: MouraButton;
    readonly dlgConfirmarSolicitacao: MouraModal;
    readonly cboEmpresaEscala: MouraComboBox;
    readonly btnFinalizarSolicitacao: MouraButton;
    readonly btnGerar: MouraButton;
    protected Init(): void;
    protected OnClickGerar(s: any, e: MouraClickEventArgs): void;
    protected ConfigurarGradeEscala(): void;
    protected PreencherGradeEscala(): void;
    protected OnGrdEscalaCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnGrdEscalaClicouBotao(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    private RetornaDiaSemana;
    protected OnClickConfirmarSolicitacao(s: any, e: MouraClickEventArgs): void;
    protected OnClickFinalizarSolicitacao(s: any, e: MouraClickEventArgs): void;
}
declare const r_EscPro: R_EscPro;
//# sourceMappingURL=R_EscPro.d.ts.map