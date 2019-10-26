declare class C_LocHos extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Hospedagem_Local> {
    readonly Grid: MouraGridViewJS;
    readonly optTipoHospedagem: MouraRadioButtonList;
    protected Init(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Hospedagem_Local): void;
    protected GetCadastrados(): void;
    OnPageLoad(): void;
}
declare var c_LocHos: C_LocHos;
//# sourceMappingURL=C_LocHos.d.ts.map