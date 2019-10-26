declare class C_PlCoSP extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Fiscal_Plano_Contas_Sped> {
    readonly txtConta_Contabil_RFB: MouraTextBoxProcuraContabil;
    readonly Grid: MouraGridViewJS;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    protected Init(): void;
    OnPageLoad(): void;
    protected MudouConta(): void;
    protected OnAntesGravar(): boolean;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Fiscal_Plano_Contas_Sped): void;
    protected GetCadastrados(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
}
declare var c_PlCoSP: C_PlCoSP;
//# sourceMappingURL=C_PlCoSP.d.ts.map