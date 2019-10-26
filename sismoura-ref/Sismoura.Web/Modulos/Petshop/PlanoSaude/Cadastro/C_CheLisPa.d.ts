declare class C_CheLisPa extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Plano_Triagem> {
    readonly Grid: MouraGridViewJS;
    readonly grdItens: MouraGridViewJSEditavel;
    readonly txtTipoTriagem: MouraTextBoxProcura;
    readonly cboScore: MouraComboBox;
    Item: any;
    Itens: any[];
    protected Init(): void;
    OnPageLoad(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Plano_Triagem): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Plano_Triagem): void;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected PreencherItens(): void;
    protected PreencherGrade(): void;
}
declare const c_CheLisPa: C_CheLisPa;
//# sourceMappingURL=C_CheLisPa.d.ts.map