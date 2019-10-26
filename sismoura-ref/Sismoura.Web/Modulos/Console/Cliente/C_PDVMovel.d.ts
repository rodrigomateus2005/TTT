declare class C_PDVMovel extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Pdvmovel> {
    lblUsuarioInseriu: MouraLabel;
    lblUsuarioAlterou: MouraLabel;
    lblDataInseriu: MouraLabel;
    lblDataAlterou: MouraLabel;
    readonly grdDispositivos: MouraGridViewJSEditavel;
    Dispositivo: SiSMoura.Core.Entity.Console_Pdvmovel_Dispositivo;
    Dispositivos: any[];
    readonly mdDispositivo: MouraModal;
    readonly txtDescDispositivo: MouraTextBox;
    readonly txtPDVDispositivo: MouraTextBox;
    readonly txtDeposito: MouraTextBox;
    readonly txtCasasDecValor: MouraTextBox;
    readonly txtCasasDecQtde: MouraTextBox;
    readonly btnAddDispositivo: MouraButton;
    readonly btnFechar: MouraButton;
    readonly cboTipoEmissao: MouraComboBox;
    readonly txtSerieNFCe: MouraTextBox;
    readonly chkNFceContingencia: MouraCheckBox;
    readonly chkNFCeAmbiente: MouraCheckBox;
    readonly txtNFCeIdToken: MouraTextBox;
    readonly txtNFCeToken: MouraTextBox;
    protected Init(): void;
    protected OnMudouTipoEmissao(): void;
    OnPageLoad(): void;
    protected OnSelecionouLinha(): void;
    protected OnClickbtnAddDispositivo(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickbtnFechar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Console_Pdvmovel): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Console_Pdvmovel): void;
    protected LimparDispositivo(): void;
    protected OnAntesGravar(): boolean;
    protected AtualizarLabels(Entity: SiSMoura.Core.Entity.Console_Pdvmovel): void;
}
declare var c_PDVMovel: C_PDVMovel;
//# sourceMappingURL=C_PDVMovel.d.ts.map