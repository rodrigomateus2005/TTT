interface Farmacia_Emprestimo_Itens extends SiSMoura.Core.Common.Entity {
    Data_Baixa: Date;
    Emprestimo: number;
    Id: number;
    DescProduto: String;
    CodProduto: number;
    Quantidade: number;
}
declare class C_Empres extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Farmacia_Emprestimo> {
    EmprestimoItem: SiSMoura.Core.Entity.Farmacia_Emprestimo_Item;
    Farmacia_Emprestimo_Itens: SiSMoura.Core.Entity.Farmacia_Emprestimo_Item[];
    Item: Farmacia_Emprestimo_Itens;
    Itens: Farmacia_Emprestimo_Itens[];
    readonly grid: MouraGridViewJSEditavel;
    readonly txtProduto: MouraTextBoxProcura;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly cboTipo: MouraComboBox;
    OnPageLoad(): void;
    Init(): void;
    private OnProcurouEntidade;
    private OnProcurouProduto;
    OnValidandoItem(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    private ValidarCampos;
    OnAntesGravar(): boolean;
    protected PreencherFilho(Entidade: Farmacia_Emprestimo_Itens[]): SiSMoura.Core.Entity.Farmacia_Emprestimo_Item[];
    Limpar(): void;
    private GetIsControlado;
    private GetCadastrados;
}
declare const c_Empres: C_Empres;
//# sourceMappingURL=C_Empres.d.ts.map