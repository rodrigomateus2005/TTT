declare class C_VinAdc extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Vinculo_Adicional> {
    readonly Grid: MouraGridViewJS;
    readonly txtAdicional: MouraTextBox;
    readonly txtCodProduto: MouraTextBoxProcura;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Console_Vinculo_Adicional): void;
    protected GetCadastrados(): void;
    OnPageLoad(): void;
}
declare const c_VinAdc: C_VinAdc;
//# sourceMappingURL=C_VinAdc.d.ts.map