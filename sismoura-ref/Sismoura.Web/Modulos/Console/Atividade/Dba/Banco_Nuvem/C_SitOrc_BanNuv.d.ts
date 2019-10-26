declare class C_SitOrc_BanNuv extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_DBA_Orcamento_Nuvem_Situacao> {
    readonly grd: MouraGridViewJS;
    readonly chkPadrao: MouraCheckBox;
    readonly txtCodigo: MouraTextBoxProcura;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected onGridSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected AtualizarGrid(): void;
    private respondeuGravar;
    protected OnAntesGravar(): boolean;
    private respontaGravar;
}
declare var c_SitOrc_BanNuv: C_SitOrc_BanNuv;
//# sourceMappingURL=C_SitOrc_BanNuv.d.ts.map