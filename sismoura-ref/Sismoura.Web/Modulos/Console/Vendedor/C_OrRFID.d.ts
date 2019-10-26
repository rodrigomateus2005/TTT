declare class C_OrRFID extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Rfid_Orcamento> {
    readonly grd: MouraGridViewJSEditavel;
    readonly txtCodigo: MouraTextBoxProcura;
    Dados: SiSMoura.Core.Entity.Console_RFID_OrcamentoRetorno[];
    codigo: number;
    readonly txtCliente: MouraTextBoxProcura;
    readonly lblRazaoSocial: MouraLabel;
    readonly lblCNPJ: MouraLabel;
    readonly lblContato: MouraLabel;
    readonly lblTelefone: MouraLabel;
    readonly lblEmail: MouraLabel;
    readonly lblCidade: MouraLabel;
    readonly lblDataCadastro: MouraLabel;
    readonly txtProdutoObs: MouraTextBox;
    readonly txtProduto: MouraTextBoxProcura;
    readonly txtQtde: MouraTextBox;
    readonly txtDetalhesProjeto: MouraTextBox;
    readonly txtObservacao: MouraTextBox;
    readonly txtObsCliente: MouraTextBox;
    protected Init(): void;
    protected OnDepoisBuscarExistente(entity: SiSMoura.Core.Entity.Console_Rfid_Orcamento): void;
    protected OnDepoisLimpar(): boolean;
    protected OnAntesGravar(): boolean;
    private PreencherProdutos;
    protected OnValidandoItem(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnExcluindoItem(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OntxtClienteProcurou(): void;
}
declare var c_OrRFID: C_OrRFID;
//# sourceMappingURL=C_OrRFID.d.ts.map