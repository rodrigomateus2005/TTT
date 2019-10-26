declare class C_IndFun extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Indisponibilidade_Funcionario> {
    readonly grid: MouraGridViewJS;
    readonly txtFuncionario: MouraTextBoxProcura;
    readonly txtDataInicial: MouraTextBoxData;
    readonly txtDataFinal: MouraTextBoxData;
    readonly txtHoraInicial: MouraTextBoxHora;
    readonly txtHoraFinal: MouraTextBoxHora;
    readonly optOpcao: MouraRadioButtonList;
    readonly grdAtendimentos: MouraGridViewJS;
    readonly dlgAtendimentos: MouraModal;
    readonly btnVoltar: MouraButton;
    readonly btnExcluirPetz: MouraButton;
    protected Init(): void;
    protected OnGrdAtendimentosSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected AbrirAtendimento(codAtendimento: number): void;
    protected OnBuscouFuncionario(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected MudouPeriodo(newValue: any, oldValue: any): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Indisponibilidade_Funcionario): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Indisponibilidade_Funcionario): void;
    protected OnDepoisGravar(): boolean;
    protected OnBtnVoltarClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnBtnExcluirPetzClick(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnAntesGravar(): boolean;
    protected OnSelecionouMSGBoxAtendimento(e: MsgBoxResultEventArgs): void;
    protected PreencherGrade(): void;
}
declare const c_IndFun: C_IndFun;
//# sourceMappingURL=C_IndFun.d.ts.map