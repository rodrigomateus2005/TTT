declare class C_AniCad extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Cadastro> {
    readonly GridAniCad: MouraGridViewJS;
    readonly btnPlanoVacinacao: MouraButton;
    readonly txtProprietario: MouraTextBoxProcura;
    protected Init(): void;
    private OnTxtProprietarioProcurou;
    protected ProprietarioChange(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Cadastro): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Cadastro): void;
    protected OnAntesGravar(): boolean;
    protected PreencherGrade(Entidade: SiSMoura.Core.Entity.Animais_Cadastro): void;
    protected OnClickPlanoVacinacao(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
declare const c_AniCad: C_AniCad;
//# sourceMappingURL=C_AniCad.d.ts.map