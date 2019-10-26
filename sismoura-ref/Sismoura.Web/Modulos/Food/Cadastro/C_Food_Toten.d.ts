declare class C_Food_Toten extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Food_Toten> {
    readonly grd: MouraGridViewJSEditavel;
    Totens: any[];
    ToTenConf: SiSMoura.Core.Entity.Food_Toten_Configuracao;
    readonly fotoFundoTef: MouraImgUploadJs;
    readonly CorFonteTef: MouraColorEdit;
    readonly cboPosicao: MouraComboBox;
    readonly txtTamFonteTef: MouraTextBox;
    protected Init(): void;
    protected OnGrdSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Food_Toten): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Food_Toten): void;
}
declare var c_Food_Toten: C_Food_Toten;
//# sourceMappingURL=C_Food_Toten.d.ts.map