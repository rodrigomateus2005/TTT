declare class C_RelPer extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Relatorio_Personalizado> {
    Filtros: SiSMoura.Core.Entity.Relatorio_Personalizado_Filtro[];
    Colunas: SiSMoura.Core.Entity.Relatorio_Personalizado_Coluna[];
    Totalizadores: SiSMoura.Core.Entity.Relatorio_Personalizado_Totalizador[];
    readonly txtFiltroVariavel_Inicio: MouraTextBox;
    readonly txtFiltroVariavel_Fim: MouraTextBox;
    readonly cboFiltroCasas_Decimais: MouraComboBox;
    readonly txtFiltroMaxLenght: MouraTextBox;
    readonly txtFiltroCampo_Codigo: MouraTextBox;
    readonly txtFiltroCampo_Descricao: MouraTextBox;
    readonly cboFiltroEngine_Procura: MouraComboBox;
    readonly chkFiltroExibir_Todos: MouraComboBox;
    readonly txtFiltroScript: MouraTextBox;
    readonly cboColunaCasas_Decimais: MouraComboBox;
    readonly btnExportar: MouraButton;
    readonly btnImportar: MouraButton;
    readonly btnTestar: MouraButton;
    readonly fpImport: MouraFileUploadJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected MudouFiltroTipo(newValue: SiSMoura.Core.Entity.Relatorio_Personalizado_Filtro.TipoFiltro, oldValue: SiSMoura.Core.Entity.Relatorio_Personalizado_Filtro.TipoFiltro): void;
    protected MudouColunaTipo(newValue: SiSMoura.Core.Entity.Relatorio_Personalizado_Coluna.TipoColuna, oldValue: SiSMoura.Core.Entity.Relatorio_Personalizado_Filtro.TipoFiltro): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Relatorio_Personalizado): void;
    protected OnAntesGravar(): boolean;
    protected OnAntesSetEntidade(Evento: MouraEntidadeCancelavel<SiSMoura.Core.Entity.Relatorio_Personalizado>): void;
    btnExportar_Click(): void;
    btnImportar_Click(): void;
    btnTestar_Click(): void;
    fpImport_ValueChanged(s: any, e: any): void;
}
declare var c_RelPer: C_RelPer;
//# sourceMappingURL=C_RelPer.d.ts.map