declare class C_DocBan extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Documento_Bancario> {
    readonly Grid: MouraGridViewJS;
    readonly chkDadosCheque: MouraCheckBox;
    readonly chkBandeiraCartao: MouraCheckBox;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Documento_Bancario): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected MudouCartao(): void;
    protected MudouCheque(): void;
}
declare var c_DocBan: C_DocBan;
//# sourceMappingURL=C_DocBan.d.ts.map