declare class C_SalIni extends MouraPageAngular {
    readonly txtContraPartidaPassivo_hdnEmpresaContabil: HTMLInputElement;
    readonly txtContraPartidaAtivo_hdnEmpresaContabil: HTMLInputElement;
    Entity: SiSMoura.Core.Entity.Contabil_Lancamento;
    Ativos: SiSMoura.Core.Entity.ContabilSaldoInicialRetorno[];
    Passivos: SiSMoura.Core.Entity.ContabilSaldoInicialRetorno[];
    readonly cboEmpresa: MouraComboBox;
    readonly txtContraPartidaPassivo: MouraTextBoxProcuraContabil;
    readonly txtContraPartidaAtivo: MouraTextBoxProcuraContabil;
    readonly txtDataLancamento: MouraTextBoxData;
    readonly txtHistoricoAtivo: MouraTextBoxProcura;
    readonly txtHistoricoPassivo: MouraTextBoxProcura;
    readonly grdAtivo: MouraGridViewJSEditavel;
    readonly grdPassivo: MouraGridViewJSEditavel;
    readonly btnCadastrar: MouraButton;
    readonly lblAtivo: MouraLabel;
    readonly lblPassivo: MouraLabel;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnEditouItemAtivo(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    CalcularLabels(): void;
    protected OnEditouItemPassivo(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected PreencherGrades(): void;
    protected OnClickGravar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    PreencherEmpresaContabil(): void;
    protected OnContraPartidaPassivoAntesAbrirProcura(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnContraPartidaPassivoPesquisando(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraContabilPesquisandoEventArgs): void;
    protected OnContraPartidaAtivoAntesAbrirProcura(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnContraPartidaAtivoPesquisando(s: MouraTextBoxProcura, ev: MouraTextBoxProcuraContabilPesquisandoEventArgs): void;
    protected LimparCampos(): void;
}
declare var c_SalIni: C_SalIni;
//# sourceMappingURL=C_SalIni.d.ts.map