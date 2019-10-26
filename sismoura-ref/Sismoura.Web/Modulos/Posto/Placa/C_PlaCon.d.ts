declare class C_PlaCon extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Posto_Placa> {
    readonly GridPlacas: MouraGridViewJS;
    readonly txtId: MouraTextBoxProcura;
    readonly txtPlaca: MouraTextBox;
    readonly txtData_Cadastro: MouraTextBoxData;
    readonly txtObservacao: MouraTextBox;
    readonly lstSituacao: MouraRadioButtonList;
    OnPageLoad(): void;
    protected Init(): void;
    protected PlacaPerdeuFoco(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Posto_Placa): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Posto_Placa): void;
    protected AlterouSituacao(): void;
}
declare const c_PlaCon: C_PlaCon;
//# sourceMappingURL=C_PlaCon.d.ts.map