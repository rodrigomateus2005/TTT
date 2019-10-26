declare class G_Simulador extends MouraPageAngular {
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly lstGrupo: MouraCheckBoxList;
    readonly GridProdutos: MouraGridViewJS;
    readonly btnGerar: MouraButton;
    readonly btnExportar: MouraButton;
    readonly btnDownload: MouraButton;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnClickGerar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
declare var g_Simulador: G_Simulador;
//# sourceMappingURL=G_Simulador.d.ts.map