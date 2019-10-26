declare class C_Manequim extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Provador_Manequim> {
    private _tamImage;
    readonly txtDescricao: MouraTextBox;
    readonly cboEmpresa: MouraComboBoxEmpresa;
    readonly imgUploadManequim: MouraImgUploadJs;
    readonly grdManequinsDuplicados: MouraGridViewJS;
    readonly mdManequinsDuplicados: MouraModal;
    readonly grdManequim: MouraGridViewJS;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Provador_Manequim): void;
    protected OnDepoisDeletar(): boolean;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Provador_Manequim): void;
    protected OnGridSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected ProcuraEmpresa(codEmpresa: number, lista: SiSMoura.Core.Entity.Provador_Manequim_Empresa[]): SiSMoura.Core.Entity.Provador_Manequim_Empresa;
    protected PreencherGrade(): void;
    protected ValidarAntesGravar(entity: SiSMoura.Core.Entity.Provador_Manequim): boolean;
    protected FormatImg(img: any): any;
    protected OnStartUploadManequim(s: any, e: MouraFileUpdloadJsStartUpload): void;
    protected CarregarFotoManequim(Entity: SiSMoura.Core.Entity.Provador_Manequim): void;
    protected CaminhoCompletoImagem(codManequim: number): string;
    protected LimparFotoManequim(): void;
}
declare var c_Manequim: C_Manequim;
//# sourceMappingURL=C_Manequim.d.ts.map