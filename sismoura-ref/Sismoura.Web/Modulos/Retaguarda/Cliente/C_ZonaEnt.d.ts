declare class C_ZonaEnt extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Zona_Entrega> {
    readonly Grid: MouraGridViewJS;
    readonly grdDiasSemana: MouraGridViewJS;
    readonly lstDia: MouraCheckBoxList;
    readonly mdDiasSemana: MouraModal;
    protected Init(): void;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected PreencherDias(dias: SiSMoura.Core.Entity.Zona_Entrega_Semanal[]): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Zona_Entrega): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Zona_Entrega): void;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected OnGridClicouBotao(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
}
declare var c_ZonaEnt: C_ZonaEnt;
//# sourceMappingURL=C_ZonaEnt.d.ts.map