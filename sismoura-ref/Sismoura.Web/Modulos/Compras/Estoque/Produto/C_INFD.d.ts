declare class C_INFD extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Configuracao_Grupo_Impressao> {
    readonly cboAmbiente: MouraComboBox;
    readonly cboImpressora: MouraComboBox;
    readonly grid: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    private OnPreencheComboImpressora;
    protected OnGridSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Configuracao_Grupo_Impressao): void;
    protected LimparCampos(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Configuracao_Grupo_Impressao): void;
    protected OnDepoisGravar(): boolean;
}
declare const c_INFD: C_INFD;
//# sourceMappingURL=C_INFD.d.ts.map