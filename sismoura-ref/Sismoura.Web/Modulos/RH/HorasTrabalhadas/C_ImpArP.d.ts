declare class C_ImpArP extends MouraPageAngular {
    readonly Grid: MouraGridViewJSEditavel;
    readonly btnCarregar: MouraButton;
    readonly btnNovo: MouraButton;
    readonly btnGravar: MouraButton;
    readonly cboLayout: MouraComboBox;
    readonly lblArquivo: MouraLabel;
    readonly txtDescricao: MouraTextBox;
    readonly fileUpload: MouraFileUpload;
    readonly hdnPath: HTMLInputElement;
    Itens: any[];
    protected Init(): void;
    protected OnFilesUploadStart(source: DevExpress.Web.Scripts.ASPxClientUploadControl, ev: any): void;
    protected OnFilesUploadComplete(source: DevExpress.Web.Scripts.ASPxClientUploadControl, ev: any): void;
    protected OnClickGravar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnClickNovo(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected LimparCampos(): void;
    protected LimparGrade(): void;
    OnPageLoad(): void;
    protected OnComboChange(): void;
    protected OnClickCarregar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected PreencherGrade(): void;
}
declare const c_ImpArP: C_ImpArP;
//# sourceMappingURL=C_ImpArP.d.ts.map