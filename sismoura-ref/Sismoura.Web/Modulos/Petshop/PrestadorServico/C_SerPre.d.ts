declare class C_SerPre extends MouraPageAngular {
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly txtData: MouraTextBoxData;
    readonly txtHora: MouraTextBoxHora;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    Servicos: SiSMoura.Core.Entity.AnimaisServicosRealizadosPrestadorRetorno[];
    readonly txtServico: MouraTextBoxProcura;
    readonly grdServicos: MouraGridViewJSEditavel;
    readonly btnLimpar: MouraButton;
    readonly btnGravar: MouraButton;
    protected Init(): void;
    OnPageLoad(): void;
    protected LimparCampos(): void;
    protected OnClickLimpar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected ValidandoGrdServicos(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnAdicionandoGrdServicos(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected ValidarGravar(): boolean;
    protected OnClickGravar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
}
declare const c_SerPre: C_SerPre;
//# sourceMappingURL=C_SerPre.d.ts.map