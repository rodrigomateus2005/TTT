declare class C_FrTrei extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Franquia_Treinamento> {
    readonly Grid: MouraGridViewJSEditavel;
    Franquia_Treinamento_Realizado: SiSMoura.Core.Entity.Franquia_Treinamento_Realizado;
    Franquia_Treinamento_Realizados: SiSMoura.Core.Entity.Franquia_Treinamento_Realizado[];
    readonly txtTipoTreinamento: MouraTextBoxProcura;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    protected Init(): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Franquia_Treinamento): void;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Franquia_Treinamento): void;
    protected OnLimpouTreinamento(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(Entity: SiSMoura.Core.Entity.Franquia_Treinamento): void;
}
declare var c_FrTrei: C_FrTrei;
//# sourceMappingURL=C_FrTrei.d.ts.map