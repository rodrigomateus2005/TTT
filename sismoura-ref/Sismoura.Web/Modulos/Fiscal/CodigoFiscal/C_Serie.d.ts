declare class C_Serie extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Fiscal_Serie_Nf> {
    readonly Grid: MouraGridViewJS;
    readonly cboAmbiente: MouraComboBox;
    readonly cboModeloImpressao: MouraComboBox;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly txtUltimaNotaEmitida: MouraTextBox;
    readonly gridNotasPorEmpresa: MouraGridViewJSEditavel;
    readonly txtCodigo: MouraTextBox;
    SeriesEmpresa: SiSMoura.Core.Entity.Fiscal_Serie_Nf_Empresa[];
    SerieEmpresa: SiSMoura.Core.Entity.Fiscal_Serie_Nf_Empresa;
    protected Init(): void;
    protected OnGridSeriesSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnAntesGravar(): boolean;
    protected MudouModelo(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Fiscal_Serie_Nf): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Fiscal_Serie_Nf): void;
    protected GetSeriesEmpresa(Entidade: SiSMoura.Core.Entity.Fiscal_Serie_Nf): void;
    protected OnAntesDeletar(): boolean;
    protected PreencherGrade(): void;
}
declare var c_Serie: C_Serie;
//# sourceMappingURL=C_Serie.d.ts.map