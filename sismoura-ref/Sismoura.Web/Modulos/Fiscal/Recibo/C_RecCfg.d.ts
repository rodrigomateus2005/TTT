declare class C_RecCfg extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Recibo_Configuracoes> {
    Observ: any;
    Observs: any[];
    readonly grid: MouraGridViewJSEditavel;
    readonly cboModelo: MouraComboBox;
    readonly txtDescObs: MouraTextBox;
    readonly txtObs: MouraTextBox;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnSelectedItemChangedModelo(): void;
    protected PreencherCombo(): any;
    protected SelecionarItem(): any;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected PreencherTela(): void;
    protected LimparEntidade(entidade: SiSMoura.Core.Entity.Recibo_Configuracoes): void;
    protected PreencherGrade(): void;
    protected OnAntesGravar(): boolean;
    protected OnAntesDeletar(): any;
    protected OnAntesNovo(): any;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Recibo_Configuracoes): void;
    protected OnDepoisGravar(): boolean;
}
declare var c_RecCfg: C_RecCfg;
//# sourceMappingURL=C_RecCfg.d.ts.map