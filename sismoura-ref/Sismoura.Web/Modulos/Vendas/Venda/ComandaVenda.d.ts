declare class ComandaVenda {
    private _telaVenda;
    TelaVenda: VendaWEB;
    readonly mdComanda: MouraModal;
    readonly btnGravarComanda: MouraButton;
    readonly btnFecharComanda: MouraButton;
    readonly txtComanda: MouraTextBox;
    constructor(telaVenda: VendaWEB);
    Init(): void;
    AbrirComanda(): void;
    protected GravarComanda(comanda: string, codEmpresa: number, codVendedor: number): boolean;
    protected OnClickBotaoFecharComanda(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickBotaoGravarComanda(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected LimparCamposComanda(): void;
    protected OnKeyDownComanda(e: any): void;
}
//# sourceMappingURL=ComandaVenda.d.ts.map