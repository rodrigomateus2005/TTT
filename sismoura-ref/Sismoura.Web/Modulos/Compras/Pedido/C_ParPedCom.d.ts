declare class C_ParPedCom extends MouraPageAngular {
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly cboGradeSemana: MouraComboBox;
    readonly cboPrazoResposta: MouraComboBox;
    readonly txtHorarioLimite: MouraTextBoxHora;
    readonly btnAdicionar: MouraButton;
    readonly gridPrazoResposta: MouraGridViewJS;
    readonly btnGravar: MouraButton;
    protected Init(): void;
    private MostraPrazoRespostaHora;
    protected ClicouBotaoAdicionar(): void;
    private ListarCamposNaGrade;
    protected validaPrazoResposta(prazoResposta: number, diaSemana: number): any;
    protected OnClickAdicionarBotao(): void;
    private VerificaInseridos;
    private InsereItens;
    private CampoJaExiste;
    private InserirCampoUnicoNaGrid;
    private inserirVariosCamposNaGrid;
    private onRespostaAlterarDiaSemana;
    private PreencherItemEInserirNaGrid;
    private AlteraDiaSemana;
    private MostrarPerguntaItem;
    protected OnClickGravar(): void;
    private LimpaCampos;
}
declare var c_ParPedCom: C_ParPedCom;
//# sourceMappingURL=C_ParPedCom.d.ts.map