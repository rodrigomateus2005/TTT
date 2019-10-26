declare class C_ZonaV extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Zona_Venda> {
    readonly accItens: MouraAccordion;
    readonly Grid: MouraGridViewJSEditavel;
    readonly gridComissao: MouraGridViewJSEditavel;
    Cadastrados: any[];
    Comissoes: any[];
    Comissao: any;
    readonly txtTaxaServico: MouraTextBoxProcura;
    readonly txtContaContabil: MouraTextBoxProcura;
    readonly txtComissaoMoura: MouraTextBox;
    readonly txtComissao: MouraTextBox;
    OnPageLoad(): void;
    Init(): void;
    OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Zona_Venda): boolean;
    LimparCamposComissao(): void;
    OnSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    PreencherGrade(): void;
    PreencherDadosComissao(): void;
    OnDepoisGravar(): boolean;
    protected OnDepoisClickNovo(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnAntesGravar(): boolean;
    protected OnAdicionandoItemComissao(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    OnDepoisBuscarExistente(entity: SiSMoura.Core.Entity.Zona_Venda): void;
}
declare const c_ZonaV: C_ZonaV;
//# sourceMappingURL=C_ZonaV.d.ts.map