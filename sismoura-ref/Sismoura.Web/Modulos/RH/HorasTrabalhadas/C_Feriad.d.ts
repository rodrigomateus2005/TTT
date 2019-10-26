declare class C_Feriad extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Feriado_Ponto> {
    readonly grd: MouraGridViewJS;
    readonly cboTipo: MouraComboBox;
    readonly lstCidade: MouraTextBoxProcuraComLista;
    protected Init(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Feriado_Ponto): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected ValidarAnoReplicar(anoReplicar: string): boolean;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Feriado_Ponto): void;
    protected OnGrdSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherGrade(Entidade: SiSMoura.Core.Entity.Feriado_Ponto): void;
    protected OnCboTipoChange(s: DevExpress.Web.Scripts.ASPxClientComboBox, e: DevExpress.Web.Scripts.ASPxClientEventArgs): void;
}
declare const c_Feriad: C_Feriad;
//# sourceMappingURL=C_Feriad.d.ts.map