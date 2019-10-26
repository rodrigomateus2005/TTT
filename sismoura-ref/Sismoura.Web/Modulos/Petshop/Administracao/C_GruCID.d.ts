declare class C_GruCID extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Grupo_Cid> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Grupo_Cid): void;
    protected GetCadastrados(): void;
}
declare const c_GruCID: C_GruCID;
//# sourceMappingURL=C_GruCID.d.ts.map