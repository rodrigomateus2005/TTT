declare class Comp_Atu extends MouraPageAngular {
    Dados: Array<SiSMoura.Core.Entity.PrecoEntradaRetorno>;
    readonly hdnCodChave: HTMLInputElement;
    readonly hdnCodDeposito: HTMLInputElement;
    readonly hdnCodEmpresa: HTMLInputElement;
    readonly grd: MouraGridViewJSEditavel;
    readonly txtSomarNoCusto: MouraTextBox;
    protected Init(): void;
    OnPageLoad(): void;
    protected CarregarDados(): void;
    protected AtualizarGrid(): void;
    protected MarcarTodos(): void;
    protected DesmarcarTodos(): void;
    protected ClickSomar(): void;
    protected ClickCorrigir(): void;
    protected AtualizarPrecos(): void;
    protected OnAlterouItemGrade(s: any, e: any): void;
    protected Imprimir(): void;
}
declare var comp_Atu: Comp_Atu;
//# sourceMappingURL=Comp_Atu.d.ts.map