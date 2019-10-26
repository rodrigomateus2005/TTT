declare class C_SenBan extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Banco_Cliente> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Console_Banco_Cliente): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Console_Banco_Cliente): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected TestarConexao(): void;
}
declare const c_SenBan: C_SenBan;
//# sourceMappingURL=C_SenBan.d.ts.map