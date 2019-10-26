declare class R_SerRec extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly txtPrestador: MouraTextBoxProcura;
    readonly grd: MouraGridViewJS;
    readonly tab: MouraTabPanel;
    readonly grdEscala: MouraGridViewJS;
    readonly dlgAtendimento: MouraModal;
    readonly txtValorRepasse: MouraTextBox;
    readonly txtObservacao: MouraTextBox;
    readonly btnConfirmar: MouraButton;
    readonly btnRecusar: MouraButton;
    protected Init(): void;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    protected OnAntesAbrirProcuraProfissional(s: any, e: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnTxtPrestadorProcurou(s: MouraTextBoxProcuraRetornoProcura, e: MouraEventArgs): void;
    PreencherGrade(): void;
    protected PreencherGradeEscala(): void;
    protected ValidarPeriodo(dataInicio: Date, dataFim: Date): boolean;
    private atendimento;
    private codAnimaisServicos;
    private codAceiteTerceiro;
    private novoAtendimento;
    protected OnGrdClickBotaoLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnGrdEscalaClickBotaoLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnFechouModalResposta(s: any, e: MouraEventHandler): void;
    protected OnClickConfirmar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickRecusar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected RecusarFaltaServico(observacao: string): void;
    protected ResponderRecusaPrestador(observacao: string, valorRepasse: number, isConfirmar: boolean): void;
    protected OnFechouModalAtendimento(s: any, e: MouraEventArgs): void;
}
declare const r_SerRec: R_SerRec;
//# sourceMappingURL=R_SerRec.d.ts.map