declare class Alt_PrAn extends MouraPageAngular {
    readonly txtAnimal: MouraTextBoxProcura;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly btnAtualizar: MouraButton;
    readonly btnLimpar: MouraButton;
    readonly txtProprietario: MouraTextBoxProcura;
    readonly lblProprietario: MouraLabel;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnProcurouAnimal(): void;
    protected OnClickAtualizar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnSelecionouAtualizar(result: MsgBoxResultEventArgs): void;
    protected LimparCampos(): void;
}
declare var alt_PrAn: Alt_PrAn;
//# sourceMappingURL=Alt_PrAn.d.ts.map