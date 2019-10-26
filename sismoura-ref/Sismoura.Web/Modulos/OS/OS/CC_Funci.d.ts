declare class CC_Funci extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Usuario_Os_Configuracao> {
    readonly Grid: MouraGridViewJS;
    readonly txtFuncionario: MouraTextBoxProcura;
    readonly txtDesconto_Maximo_Produto: MouraTextBox;
    readonly txtDesconto_Maximo_Os: MouraTextBox;
    Funcionario: SiSMoura.Core.Entity.Usuario;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Usuario_Os_Configuracao): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnAntesDeletar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnProcurou(): void;
}
declare const cC_Funci: CC_Funci;
//# sourceMappingURL=CC_Funci.d.ts.map