declare class C_Ibpt extends MouraPageAngular {
    readonly Grid: MouraGridViewJS;
    readonly optOrigem: MouraRadioButtonList;
    readonly fileUpload: MouraFileUpload;
    readonly lblNomeArquivo: MouraLabel;
    readonly btnCarregar: MouraButton;
    readonly btnGravar: MouraButton;
    readonly cboUf: MouraComboBox;
    readonly lblVersaoSistema: MouraLabel;
    readonly lblVersaoOrigem: MouraLabel;
    PathArquivo: string;
    protected Init(): void;
    protected OnFilesUploadStart(source: MouraFileUpload, ev: MouraEventArgs): void;
    protected replaceSpecialChars(str: any): any;
    protected OnSelecionouUf(): void;
    protected OnOptOrigemChange(): void;
    protected getVersaoSistema(uf: string): void;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    protected OnClickGerar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickBtnGravar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnFileUploadCompleted(s: any, e: DevExpress.Web.Scripts.ASPxClientUploadControlFileUploadCompleteEventArgs): void;
}
declare const c_Ibpt: C_Ibpt;
//# sourceMappingURL=C_Ibpt.d.ts.map