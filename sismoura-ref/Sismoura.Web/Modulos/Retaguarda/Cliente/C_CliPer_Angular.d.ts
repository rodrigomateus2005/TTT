declare class C_CliPer_Angular extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Campo_Cliente> {
    Item: any;
    Itens: any[];
    readonly GridCadastroCampos: MouraGridViewJS;
    readonly GridItens: MouraGridViewJSEditavel;
    readonly cboTipo: MouraComboBox;
    readonly cboPertence: MouraComboBox;
    readonly txtMascara: MouraTextBox;
    readonly txtItemDescricao: MouraTextBox;
    readonly txtItem: MouraTextBox;
    readonly txtCodigo: MouraTextBox;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Campo_Cliente): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Campo_Cliente): void;
    protected AlterouTipoCampo(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected LimparItem(): void;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnClicouAdicionar(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnTxtItemLostFocus(): void;
}
declare var c_CliPer_Angular: C_CliPer_Angular;
//# sourceMappingURL=C_CliPer_Angular.d.ts.map