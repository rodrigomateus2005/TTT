declare class ImportTabela extends MouraPageAngular {
    private PATH_DOCUMENTOS;
    readonly Grid: MouraGridViewJSEditavel;
    readonly btnAnexos: MouraButton;
    readonly dlgAnexo: MouraModalAnexo;
    readonly btnLimpar: MouraButton;
    readonly btnGravar: MouraButton;
    readonly btnReverter: MouraButton;
    readonly cboConfig: MouraComboBox;
    protected Init(): void;
    protected OnComboBoxConfigChange(): void;
    protected OnFilesUploadComplete(source: DevExpress.Web.Scripts.ASPxClientUploadControl, ev: any): void;
    private OnBtnAnexoClick;
    private OnBtnReverterClick;
    private OnBtnGravarClick;
    private OnBtnLimparClick;
    private LimparCampos;
    OnPageLoad(): void;
}
declare var importTabela: ImportTabela;
//# sourceMappingURL=ImportTabela.d.ts.map