declare class C_Subst extends MouraPageAngular {
    readonly GridVinculoProduto: MouraGridViewJS;
    Entity: any;
    private respostaExcluir;
    protected Init(): void;
    OnSelecionouLinha(e: any, s: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected PesquisouProduto(): void;
    protected LimparCampos(): void;
    protected PreencherGrade(): void;
    protected Gravar(codProduto: number, codOnu: number, codClasse: number): void;
    protected OnClickBtnExcluir(): void;
    protected OnRespostaExcluirRegistro(result: MsgBoxResultEventArgs): void;
    protected Excluir(codProduto: number): void;
    protected OnAntesGravar(codProduto: number, codOnu: number, codClasse: number): boolean;
}
declare var c_Subst: C_Subst;
//# sourceMappingURL=C_Subst.d.ts.map