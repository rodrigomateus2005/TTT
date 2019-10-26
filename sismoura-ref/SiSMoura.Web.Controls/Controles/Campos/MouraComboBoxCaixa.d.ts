declare class MouraComboBoxCaixa extends MouraControl {
    readonly cboPdv: MouraComboBox;
    readonly cboCaixa: MouraComboBox;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly btnConsulta: MouraButton;
    readonly agrupamento: MouraAgrupamento;
    readonly divBotao: HTMLDivElement;
    readonly divCombo: HTMLDivElement;
    readonly divTotal: HTMLDivElement;
    readonly hdnPeriodo: HTMLInputElement;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    constructor(id: string);
    protected IniciarEventos(): void;
    protected OnBtnConsultaClick(s: MouraButton, e: MouraClickEventArgs): void;
}
//# sourceMappingURL=MouraComboBoxCaixa.d.ts.map