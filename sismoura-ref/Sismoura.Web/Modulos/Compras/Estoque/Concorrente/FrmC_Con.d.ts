declare class FrmC_Con extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Concorrente> {
    readonly Grid: MouraGridViewJSEditavel;
    Concorrente_Produto: SiSMoura.Core.Entity.Concorrente_Produto;
    Concorrente_Produtos: SiSMoura.Core.Entity.Concorrente_Produto[];
    readonly txtProduto: MouraTextBoxProcura;
    protected Init(): void;
    OnPageLoad(): void;
    OnSelecionouLinha(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Concorrente): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Concorrente): void;
    protected OnLimpouProduto(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnAntesGravar(): boolean;
    protected OnRespondeuMensagemExistente(result: MsgBoxResultEventArgs): void;
    protected OnSelecionouItem(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
}
declare var frmC_Con: FrmC_Con;
//# sourceMappingURL=FrmC_Con.d.ts.map