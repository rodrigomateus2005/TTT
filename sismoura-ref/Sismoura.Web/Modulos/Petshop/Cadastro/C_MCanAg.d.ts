declare class C_MCanAg extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Motivo_Cancelamento_Ag> {
    readonly Grid: MouraGridViewJS;
    readonly cboTipo: MouraComboBox;
    readonly chkExibirObservacao: MouraCheckBox;
    protected Init(): void;
    protected cboTipoSelectedItemChanged(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Motivo_Cancelamento_Ag): void;
    protected OnDepoisDeletar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_MCanAg: C_MCanAg;
//# sourceMappingURL=C_MCanAg.d.ts.map