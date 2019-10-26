declare class C_Marca extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Marca> {
    readonly chkInativo: MouraCheckBox;
    readonly chkPadrao: MouraCheckBox;
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected MudouInativo(): void;
    protected MudouPadrao(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Marca): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected LimparCampos(Entity: SiSMoura.Core.Entity.Marca): void;
}
declare var c_Marca: C_Marca;
//# sourceMappingURL=C_Marca.d.ts.map