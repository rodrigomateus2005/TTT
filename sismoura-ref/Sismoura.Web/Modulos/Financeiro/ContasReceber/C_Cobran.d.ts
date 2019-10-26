declare class C_Cobran extends MouraPage {
    readonly cboConseguiuContato: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly cboFormaContato: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly cboMotivo: DevExpress.Web.Scripts.ASPxClientComboBox;
    readonly txtNomeContato: MouraTextBox;
    readonly txtHistorico: MouraTextBox;
    readonly txtObservacao: MouraTextBox;
    readonly gridContas: MouraGridView;
    readonly btnHistorico: MouraButton;
    protected Init(): void;
    protected OnComboBoxConseguiuContatoSelectedIndexChanged(): void;
    protected AdicionarEventosPagina(): void;
    protected OnEndCallBack(s: any, e: DevExpress.Web.Scripts.ASPxClientGridViewSelectionEventArgs): void;
    protected OnClickBtnHistorico(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    private CarregarHistorico;
    protected OnRetornouLinhasSelecionadas(result: Object[]): void;
    protected OnPrencherHistorico(d: any): void;
    protected OnErroHistorico(erro: JQueryXHR): void;
}
declare var c_Cobran: C_Cobran;
//# sourceMappingURL=C_Cobran.d.ts.map