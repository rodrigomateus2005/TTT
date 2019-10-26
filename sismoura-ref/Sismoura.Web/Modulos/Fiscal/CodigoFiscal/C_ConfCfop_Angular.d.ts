declare class C_ConfCfop_Angular extends MouraPageAngular {
    readonly cboTipoCfop: MouraComboBox;
    readonly btnGravar: MouraButton;
    readonly btnCancelar: MouraButton;
    readonly grid: MouraGridViewJSEditavel;
    CFOPs: SiSMoura.Core.Entity.Cfop[];
    OnPageLoad(): void;
    protected Init(): void;
    protected AlterandoItem(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnGravar(s: MouraButton, e: MouraClickEventArgs): void;
    protected OnCancelar(s: MouraButton, e: MouraClickEventArgs): void;
    protected OnTipoCfop(): void;
    protected CarregarCfop(): void;
}
declare const c_ConfCfop_Angular: C_ConfCfop_Angular;
//# sourceMappingURL=C_ConfCfop_Angular.d.ts.map