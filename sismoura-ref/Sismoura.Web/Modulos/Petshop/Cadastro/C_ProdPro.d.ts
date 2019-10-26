declare class C_ProdPro extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Profissional_Produtividade> {
    readonly GridServico: MouraGridViewJSEditavel;
    Itens: SiSMoura.Core.Entity.Animais_Profissional_Produtividade_Servico[];
    Item: SiSMoura.Core.Entity.Animais_Profissional_Produtividade_Servico;
    readonly txtServico: MouraTextBoxProcura;
    readonly txtProfissional: MouraTextBoxProcura;
    readonly txtCodigo: MouraTextBoxProcura;
    protected Init(): void;
    private _profissional;
    protected VerificarExistencia(profissional: number): void;
    protected OnMudouProfissional(): void;
    protected OnValidandoAlteracao(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Profissional_Produtividade): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Profissional_Produtividade): void;
    protected OnAntesGravar(): boolean;
}
declare const c_ProdPro: C_ProdPro;
//# sourceMappingURL=C_ProdPro.d.ts.map