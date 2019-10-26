declare class C_ComuCl_Angular extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Comunicado_Cliente> {
    readonly lblUsuario: MouraLabel;
    readonly cboCidade: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly cboEstado: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly cboSegmento: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly lstClientes: MouraCheckBoxList;
    OnPageLoad(): void;
    Init(): void;
    OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Console_Comunicado_Cliente): boolean;
    Limpar(): void;
    OnAntesGravar(): boolean;
    OnDepoisGravar(): boolean;
    OnSelecionouMsgBox(s: any, e: MsgBoxResultEventArgs): void;
    OnDepoisBuscarExistente(): void;
    PreencherTela(): void;
    private PreencherComboCidade;
    private PreencherComboPessoa;
    private PreencherComboSegmento;
    private SelectedIndexChanged;
    private SelectedIndexChangedEstado;
    private ClickMarcar;
    private ClickDesmarcar;
}
declare const c_ComuCl_Angular: C_ComuCl_Angular;
//# sourceMappingURL=C_ComuCl_Angular.d.ts.map