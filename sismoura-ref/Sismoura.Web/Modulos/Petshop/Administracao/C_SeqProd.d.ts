declare class C_SeqProd extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Sequencia_Servico> {
    readonly GridServico: MouraGridViewJSEditavel;
    readonly txtCodigo: MouraTextBoxProcura;
    Itens: SiSMoura.Core.Entity.Animais_Sequencia_Servico_Item[];
    Item: SiSMoura.Core.Entity.Animais_Sequencia_Servico_Item;
    readonly txtServico: MouraTextBoxProcura;
    readonly txtOrdem: MouraTextBox;
    readonly txtServicoItem: MouraTextBoxProcura;
    protected Init(): void;
    protected OnMudouServico(): void;
    OnPageLoad(): void;
    protected VerificarExistencia(empresa: number): void;
    protected atualizarTextOrdem(): void;
    protected OnDepoisSetEntidade(Entidade: SiSMoura.Core.Entity.Animais_Sequencia_Servico): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Sequencia_Servico): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Sequencia_Servico): void;
    protected OnExcluiItem(): void;
    protected CorrigirOrdem(): void;
    protected OnValidandoAlteracaoServico(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnAntesGravar(): boolean;
}
declare const c_SeqProd: C_SeqProd;
//# sourceMappingURL=C_SeqProd.d.ts.map