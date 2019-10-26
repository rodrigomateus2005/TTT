declare class C_ConCarPDV extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Carga_Tabela_PDV> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly Grid: MouraGridViewJS;
    readonly txtCampo_Chave: MouraTextBox;
    readonly chkCarregarPDV: MouraCheckBox;
    readonly chkPossuiCondicaoEmpresa: MouraCheckBox;
    readonly txtCampoData: MouraTextBox;
    readonly txtOrdem: MouraTextBox;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Carga_Tabela_PDV): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Carga_Tabela_PDV): void;
    protected OnDepoisGravar(): boolean;
    protected OnAntesDeletar(): boolean;
}
declare var c_ConCarPDV: C_ConCarPDV;
//# sourceMappingURL=C_ConCarPDV.d.ts.map