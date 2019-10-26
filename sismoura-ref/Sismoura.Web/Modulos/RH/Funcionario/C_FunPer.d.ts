declare class C_FunPer extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Rh_Perfil_Funcionario> {
    readonly hdnTempPath: HTMLInputElement;
    Funcionario_Perfil: SiSMoura.Core.Entity.RH_Perfil_Funcionario_Item;
    Perfis: SiSMoura.Core.Entity.RH_Perfil_Funcionario_Item[];
    Funcionario_Perfil_Anexo: SiSMoura.Core.Entity.Rh_Perfil_Anexo;
    Anexos: SiSMoura.Core.Entity.Rh_Perfil_Anexo[];
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtPerfil: MouraTextBoxProcura;
    readonly txtFuncionario: MouraTextBoxProcura;
    readonly Grid: MouraGridViewJSEditavel;
    readonly GridAnexos: MouraGridViewJSEditavel;
    readonly fileUpload: MouraFileUploadJS;
    readonly cboTipoArquivo: MouraComboBox;
    OnPageLoad(): void;
    Init(): void;
    Limpar(): void;
    OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Rh_Perfil_Funcionario): void;
    OnAntesGravar(): boolean;
    private LimparCamposAnexo;
    private LimparCamposPerfil;
    private OnProcurouPerfil;
    private OnProcurouFuncionario;
    private GetDadosPerfil;
    private VerificarPerfilFuncionario;
    private GetPerfisFuncionarios;
    private GetAnexosFuncionarios;
    private OnAdicionandoPerfil;
    private OnAlterandoPerfil;
    private OnSelecionouItem;
    private ValidarCamposPerfil;
    private OnClickLimpar;
    private MudouTipoArquivo;
    private OnAdicionandoAnexo;
    private OnLimpandoAnexo;
    private GetPathArquivo;
    private OnSelecionouAnexo;
    OnDepoisGravar(): boolean;
    private AtualizarPathDocumentos;
    private MudouCodigo;
    protected OnAntesExcluir(): void;
    private DeletarDocumentos;
    private LimparDocumentosTemporarios;
    private OnExcluiuAnexo;
    private DeletarAnexo;
    private ArquivoExists;
}
declare const c_FunPer: C_FunPer;
//# sourceMappingURL=C_FunPer.d.ts.map