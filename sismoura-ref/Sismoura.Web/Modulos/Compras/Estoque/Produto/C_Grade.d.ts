declare class C_Grade extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Grade> {
    readonly grid: MouraGridViewJSEditavel;
    readonly txtTamanhos: MouraTextBox;
    Tamanhos: any[];
    Tamanho: any;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Grade): void;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Grade): void;
    protected LimparCampos(): void;
    protected OnAntesGravar(): boolean;
}
declare const c_Grade: C_Grade;
//# sourceMappingURL=C_Grade.d.ts.map