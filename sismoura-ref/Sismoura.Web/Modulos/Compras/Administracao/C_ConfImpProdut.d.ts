declare class C_ConfImpProdut extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Configuracao_Importacao_Produto> {
    Item: any;
    Itens: any[];
    readonly Grid: MouraGridViewJSEditavel;
    readonly txtColuna: MouraTextBox;
    readonly txtCampo: MouraTextBoxProcura;
    protected Init(): void;
    protected OnContador(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected PreencherGrade(): void;
    protected OnSelecionouItem(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Configuracao_Importacao_Produto): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Configuracao_Importacao_Produto): void;
    protected OnClickExcluirCampos(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
}
declare var c_ConfImpProdut: C_ConfImpProdut;
//# sourceMappingURL=C_ConfImpProdut.d.ts.map