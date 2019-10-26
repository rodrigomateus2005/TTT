declare class C_CDC extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Cdc> {
    readonly grdParcela: MouraGridViewJSEditavel;
    readonly grd: MouraGridViewJS;
    Parcelas: SiSMoura.Core.Entity.Cdc_Dia[];
    readonly txtParcela: MouraTextBox;
    readonly txtDiasDebito: MouraTextBox;
    readonly txtDiasCredito: MouraTextBox;
    readonly txtFator: MouraTextBox;
    readonly txtDescontado: MouraTextBox;
    readonly txtCodigo: MouraTextBox;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Cdc): void;
    protected OnClickIncluirParcela(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnClickAdicionouParcela(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnAntesSetEntidade(eventArg: MouraEntidadeCancelavel<SiSMoura.Core.Entity.Cdc>): void;
    protected onGridSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Cdc): void;
    protected OnAntesGravar(): boolean;
    private PreencherParcelas;
    private AlterarCampoParcela;
}
declare const c_CDC: C_CDC;
//# sourceMappingURL=C_CDC.d.ts.map