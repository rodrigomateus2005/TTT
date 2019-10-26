declare class C_MetVen2 extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Usuario_Meta> {
    readonly grdCad: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnChangeFuncionario(): void;
    protected PreencherCampos(Entity: SiSMoura.Core.Entity.Usuario_Meta): void;
    protected PreencherGrade(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Usuario_Meta): void;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
}
declare var c_MetVen2: C_MetVen2;
//# sourceMappingURL=C_MetVen2.d.ts.map