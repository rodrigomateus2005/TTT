declare class C_CancAtenPend extends MouraPageAngular {
    readonly grid: MouraGridViewJS;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly txtPeriodo: MouraTextBoxPeriodo;
    readonly rdbTipoData: MouraRadioButtonList;
    readonly btnExcluir: MouraButton;
    readonly btnGerar: MouraButton;
    readonly btnLimpar: MouraButton;
    readonly lblTotalAtendimentos: MouraLabel;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnClickGerar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickExcluir(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnSelecionouExcluir(result: MsgBoxResultEventArgs): void;
    protected OnClickLimpar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected LimparCampos(): void;
    protected GetRegistros(): void;
}
declare const c_CancAtenPend: C_CancAtenPend;
//# sourceMappingURL=C_CancAtenPend.d.ts.map