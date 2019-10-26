interface CardapioAdicionalRetorno {
    Codigo: number;
    Nome: string;
    Valor: number;
    Selecionar: boolean;
}
declare class V_OpProd extends MouraPageAngular {
    readonly optTipo: MouraRadioButtonList;
    readonly cboModoFunc: MouraComboBox;
    readonly txtProduto: MouraTextBoxProcura;
    readonly txtGrupo: MouraTextBoxProcura;
    readonly txtSubgrupo: MouraTextBoxProcura;
    readonly txtOpcional: MouraTextBoxProcura;
    readonly btnGravar: MouraButton;
    readonly btnNovo: MouraButton;
    readonly grid: MouraGridViewJSEditavel;
    Item: CardapioAdicionalRetorno;
    Itens: CardapioAdicionalRetorno[];
    Selecionados: SiSMoura.Core.Entity.Cardapio_Produto_Adicional[];
    Excluidos: SiSMoura.Core.Entity.Cardapio_Produto_Adicional[];
    protected Init(): void;
    OnPageLoad(): void;
    protected OnPesquisou(s: any, e: any): void;
    protected OnClickAdicionar(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnExcluiuItem(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnClickGravar(): void;
    protected ValidarAntesAdicionar(): string;
    protected OnSelecionouTipo(): void;
    protected LimparTela(): void;
}
declare const v_OpProd: V_OpProd;
//# sourceMappingURL=V_OpProd.d.ts.map