declare class C_CID extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Cid> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtGrupo: MouraTextBoxProcura;
    readonly Grid: MouraGridViewJS;
    readonly chkAtivo: MouraCheckBox;
    readonly btnProtocolo: MouraButton;
    readonly mdAnexo: MouraModalAnexo;
    protected Init(): void;
    btnProtocolo_ClickBotao(s: any, e: MouraClickEventArgs): void;
    protected OnGridCellPrepared(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Cid): void;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Cid): void;
    protected GetCadastrados(): void;
}
declare const c_CID: C_CID;
//# sourceMappingURL=C_CID.d.ts.map