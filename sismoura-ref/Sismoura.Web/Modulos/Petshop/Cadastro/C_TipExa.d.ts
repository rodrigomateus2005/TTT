declare class C_TipExa extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Tipo_Exame> {
    readonly Grid: MouraGridViewJS;
    readonly chkInativo: MouraCheckBox;
    Tipo_Exames: SiSMoura.Core.Entity.AnimaisPainelTipoExameRetorno[];
    Tipo_Exame: SiSMoura.Core.Entity.AnimaisPainelTipoExameRetorno;
    readonly btnPainel: MouraButton;
    readonly dlgPainel: MouraModal;
    readonly txtTipoExamePainel: MouraTextBoxProcura;
    readonly grdPainel: MouraGridViewJSEditavel;
    readonly btnSalvarPainel: MouraButton;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Tipo_Exame): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Animais_Tipo_Exame): void;
    protected GetCadastrados(): void;
    OnPageLoad(): void;
    private OnBtnPainelClick;
    protected OnAdicionandoGrdPainel(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    private ValidarAdicionarPainel;
    private OnBtnSalvarPainelClick;
}
declare const c_TipExa: C_TipExa;
//# sourceMappingURL=C_TipExa.d.ts.map