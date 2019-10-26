declare class G_SATF extends MouraPageAngular {
    readonly optTipo: MouraRadioButtonList;
    readonly txtMesAno: MouraTextBoxMesAno;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly btnDownload: MouraButton;
    readonly lstEmpresa: MouraListBoxEmpresa;
    protected Init(): void;
    protected OnClickDownload(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected FazerDownload(): void;
    protected OnSelectionChanged(): void;
}
declare var g_SATF: G_SATF;
//# sourceMappingURL=G_SAFT.d.ts.map