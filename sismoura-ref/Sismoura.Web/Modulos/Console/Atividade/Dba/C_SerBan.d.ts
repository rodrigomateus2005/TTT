declare class C_SerBan extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Console_Banco_Cliente_Servidor> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Console_Banco_Cliente_Servidor): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Console_Banco_Cliente_Servidor): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_SerBan: C_SerBan;
//# sourceMappingURL=C_SerBan.d.ts.map