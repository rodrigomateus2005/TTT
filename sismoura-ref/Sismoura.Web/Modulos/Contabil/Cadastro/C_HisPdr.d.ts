declare class C_HisPdr extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Contabil_Historico_Padrao> {
    readonly Grid: MouraGridViewJS;
    readonly lstDescricao: MouraCheckBoxList;
    OnPageLoad(): void;
    Init(): void;
    PreencherGrade(): void;
    private SelecionouLinha;
    protected OnAntesGravar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Contabil_Historico_Padrao): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisClickNovo(): boolean;
    protected OnDepoisDeletar(): boolean;
    OnDepoisBuscarExistente(entity: SiSMoura.Core.Entity.Contabil_Historico_Padrao): void;
    private ItemEnable;
    private ValidarItemHabilitado;
    private SelectionChanged;
    private ClickMarcar;
}
declare const c_HisPdr: C_HisPdr;
//# sourceMappingURL=C_HisPdr.d.ts.map