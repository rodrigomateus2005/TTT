declare class C_CioAn extends MouraPageAngular {
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    Cio: SiSMoura.Core.Entity.Animais_Cio;
    Cios: SiSMoura.Core.Entity.Animais_Cio[];
    readonly Grid: MouraGridViewJSEditavel;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly btnGravar: MouraButton;
    readonly btnNovo: MouraButton;
    readonly btnExcluir: MouraButton;
    protected Init(): void;
    protected OnProcurouAnimal(s: MouraTextBoxProcuraProprietarioAnimal, e: MouraEventArgs): void;
    OnPageLoad(): void;
    protected OnLimpouPeriodo(): void;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnGravarRegistro(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnExcluirRegistro(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
    protected OnRespondeuExcluir(result: MsgBoxResultEventArgs): void;
    protected PrencherGridCio(): void;
    protected OnLimparCampos(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected LimparCampos(): void;
}
declare var c_CioAn: C_CioAn;
//# sourceMappingURL=C_CioAn.d.ts.map