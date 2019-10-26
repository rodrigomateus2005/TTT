declare class C_CaPerP extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Rh_Campo_Personalizado> {
    readonly GridItens: MouraGridViewJSEditavel;
    readonly txtDescricao: MouraTextBox;
    readonly cboTipo: MouraComboBox;
    readonly txtItemDescricao: MouraTextBox;
    Itens: any[];
    Item: any;
    readonly tab: MouraTabPanel;
    protected Init(): void;
    protected MudouTipo(newValue: any, oldValue: any): void;
    protected OnDepoisLimpar(): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Rh_Campo_Personalizado): void;
    protected OnValidandoItem(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    OnPageLoad(): void;
    protected PreencherGrade(): void;
    protected OnAntesGravar(): boolean;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected PreencherItensGrade(Entidade: SiSMoura.Core.Entity.Rh_Campo_Personalizado): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
}
declare const c_CaPerP: C_CaPerP;
//# sourceMappingURL=C_CaPerP.d.ts.map