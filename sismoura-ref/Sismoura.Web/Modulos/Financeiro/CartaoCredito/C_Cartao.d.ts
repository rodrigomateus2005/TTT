declare class C_Cartao extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Cartao> {
    Vinculo: any;
    Vinculos: any[];
    Parcela: any;
    Parcelas: any[];
    readonly gridParcelas: MouraGridViewJSEditavel;
    readonly gridVinculoTef: MouraGridViewJSEditavel;
    readonly gridCadastrados: MouraGridViewJS;
    readonly txtDia: MouraTextBox;
    readonly txtDiasMovimentacao: MouraTextBox;
    readonly txtDataBaseMovimentacao: MouraTextBoxData;
    readonly txtDiasParcela: MouraTextBox;
    readonly txtPorcentagem: MouraTextBox;
    readonly cboContaCorrente: MouraContaCorrenteCombo;
    readonly txtBandeira: MouraTextBoxProcura;
    readonly txtParcelasTef: MouraTextBox;
    readonly txtJurosParcela: MouraTextBox;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnContaInativaChange(): void;
    protected OnValidandoItemVinculo(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnValidandoItemParcela(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected AlterarCamposParcelamento(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected GetCadastrados(): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Cartao): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Cartao): void;
    protected LimparVinculo(): void;
    protected LimparParcela(): void;
    protected OnAntesGravar(): boolean;
}
declare const c_Cartao: C_Cartao;
//# sourceMappingURL=C_Cartao.d.ts.map