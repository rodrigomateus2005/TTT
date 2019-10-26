declare class FrmExCo extends MouraPageAngular {
    private atualizou;
    readonly grid: MouraGridViewJSEditavel;
    readonly tabPanel: MouraTabPanel;
    readonly cboDelimitador: MouraComboBox;
    readonly cboCampo: MouraComboBox;
    readonly cboPreencher: MouraComboBox;
    readonly cboAlinhamento: MouraComboBox;
    readonly txtDelimitador: MouraTextBox;
    readonly txtTamanho: MouraTextBox;
    readonly btnGravar: MouraButton;
    readonly btnExporta: MouraButton;
    readonly txtGrupo: MouraTextBoxProcura;
    Configuracao: SiSMoura.Core.Entity.Layout_Exportacao_Coletor;
    Configuracoes: SiSMoura.Core.Entity.Layout_Exportacao_Coletor[];
    OnPageLoad(): void;
    Init(): void;
    protected PreencherGrade(): void;
    protected LimparCampos(): void;
    private OnTipoDelimitadorChanged;
    private VerificaDelimitador;
    private OnSelecionouItem;
    private OnCliqueAdicionarItem;
    protected OnClickGravar(s: any, e: MouraEventArgs): void;
    private Gravar;
    private OnTabChanged;
    private ValidarCampos;
    private OnCliqueExcluir;
    private OnAlterandoItem;
    private OnCampoChanged;
    private ObterConfiguracoes;
    private OnClickExportar;
    protected FazerDownload(configuracoes: SiSMoura.Core.Entity.Layout_Exportacao_Coletor[]): void;
    private ExcluirConfig;
}
declare const frmExCo: FrmExCo;
//# sourceMappingURL=FrmExCo.d.ts.map