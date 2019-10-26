declare class C_RomCon extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Agromoura_Contrato_Romaneio> {
    readonly grd: MouraGridViewJSEditavel;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtContrato: MouraTextBoxProcura;
    readonly txtFazenda: MouraTextBoxProcura;
    readonly txtData: MouraTextBoxData;
    readonly txtRomaneio: MouraTextBox;
    Dados: SiSMoura.Core.Entity.Agromoura_Contrato_RomaneioRetorno[];
    codigo: number;
    private contrato;
    protected Init(): void;
    protected OnGrdSelecionouItem(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnAdiciouItem(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnLimpouItem(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnSetouItem(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnValidandoItem(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnAdicionandoItem(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnExcluindoItem(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnAntesExcluir(): boolean;
    protected OnAntesGravar(): boolean;
    private PreencherRomaneios;
    protected OnDepoisGravar(): boolean;
    protected BuscarGrade(): void;
}
declare var c_RomCon: C_RomCon;
//# sourceMappingURL=C_RomCon.d.ts.map