declare class C_GServ extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Grupo_Servico> {
    readonly Grid: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected GetCadastrados(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Grupo_Servico): void;
    protected OnDepoisGravar(): boolean;
}
declare const c_GServ: C_GServ;
//# sourceMappingURL=C_GServ.d.ts.map