declare class C_SeqIng extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Food_Sequencia_Ingredientes> {
    readonly Grid: MouraGridViewJSEditavel;
    Cadastrados: any[];
    protected Init(): void;
    protected OnGrdSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Food_Sequencia_Ingredientes): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected OnMudouSubGrupo(): void;
}
declare var c_SeqIng: C_SeqIng;
//# sourceMappingURL=C_SeqIng.d.ts.map