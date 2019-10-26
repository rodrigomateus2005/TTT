declare class C_Mesa extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Mesa> {
    readonly txtGarcons: MouraTextBoxProcuraComLista;
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnAntesSetEntidade(eventArg: MouraEntidadeCancelavel<SiSMoura.Core.Entity.Mesa>): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Mesa): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_Mesa: C_Mesa;
//# sourceMappingURL=C_Mesa.d.ts.map