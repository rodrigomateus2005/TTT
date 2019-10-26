declare class C_Combo extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Food_Combo> {
    readonly grdProduto: MouraGridViewJSEditavel;
    Produto: any;
    Produtos: any[];
    readonly grdCombo: MouraGridViewJSEditavel;
    Combo: any;
    Combos: any[];
    readonly txtProduto: MouraTextBoxProcura;
    readonly txtProdutoCombo: MouraTextBoxProcura;
    readonly txtLinhaProduto: MouraTextBox;
    readonly txtColunaProduto: MouraTextBox;
    readonly txtSomarValor: MouraTextBox;
    readonly lblPrecoProduto: MouraLabel;
    protected Init(): void;
    protected OnPrecoProduto(): void;
    protected OnGrdSelecionouCombo(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnClickIncluirProduto(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): boolean;
    protected PreencherGrade(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Food_Combo): void;
    protected OnDepoisGravar(): boolean;
    protected OnAntesGravar(): boolean;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Food_Combo): void;
}
declare var c_Combo: C_Combo;
//# sourceMappingURL=C_Combo.d.ts.map