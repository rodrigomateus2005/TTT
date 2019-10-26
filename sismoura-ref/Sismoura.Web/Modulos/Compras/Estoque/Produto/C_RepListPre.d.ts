declare class C_RepListPre extends MouraPageAngular {
    readonly txtListaDe: MouraTextBoxProcura;
    readonly txtListaPara: MouraTextBoxProcura;
    readonly btnReplicar: MouraButton;
    readonly btnLimpar: MouraButton;
    protected Init(): void;
    protected OnProcurouListaOrigem(e: MouraEventArgs): void;
    protected OnProcurouListaDestino(e: MouraEventArgs): void;
    OnPageLoad(): void;
    LimparCampos(): void;
    protected onClicouBotaoLimpar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected onClicouBotaoReplicar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): boolean;
}
declare const c_RepListPre: C_RepListPre;
//# sourceMappingURL=C_RepListPre.d.ts.map