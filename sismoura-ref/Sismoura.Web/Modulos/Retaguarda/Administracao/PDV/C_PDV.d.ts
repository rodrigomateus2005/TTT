declare class C_PDV extends MouraPageCadastro<SiSMoura.Core.Entity.Produto_Promocao> {
    readonly btnTestarConexao: MouraButton;
    readonly txtUsuario: MouraTextBox;
    readonly txtIP: MouraTextBox;
    readonly txtBancoDados: MouraTextBox;
    readonly txtSenha: MouraTextBox;
    readonly cboPerfil: MouraComboBox;
    protected Init(): void;
    OnPageLoad(): void;
    protected VerificarConexao(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
declare var c_PDV: C_PDV;
//# sourceMappingURL=C_PDV.d.ts.map