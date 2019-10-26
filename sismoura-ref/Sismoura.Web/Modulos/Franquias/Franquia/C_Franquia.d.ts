declare class C_Franquia extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Franquia_Pessoa> {
    readonly fpXML: MouraFileUploadJS;
    readonly gdvSocios: MouraGridViewJSEditavel;
    readonly grdAnexos: MouraGridViewJSEditavel;
    readonly grdAnexosCandidato: MouraGridViewJSEditavel;
    Franquia_Socio: SiSMoura.Core.Entity.Franquia_Socios;
    Franquia_Socios: SiSMoura.Core.Entity.Franquia_Socios[];
    Franquia_Anexo: SiSMoura.Core.Entity.Franquia_Anexo;
    Franquia_Anexos: SiSMoura.Core.Entity.Franquia_Anexo[];
    Franquia_Prospeccao_Anexo: SiSMoura.Core.Entity.Franquia_Prospeccao_Anexo;
    Franquia_Prospeccao_Anexos: SiSMoura.Core.Entity.Franquia_Prospeccao_Anexo[];
    PathArquivoImportado: string;
    readonly txtCep: MouraTextBoxCep;
    readonly txtSocio_Cep: MouraTextBoxCep;
    readonly txtSocio_Cidade: MouraTextBoxProcura;
    readonly txtCodigoCandidato: MouraTextBoxProcura;
    readonly hdnCaminhoSessao: HTMLInputElement;
    protected Init(): void;
    protected OnSelecionouItem(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnValidandoSocios(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Franquia_Pessoa): void;
    protected OnProcurouCandidato(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Franquia_Pessoa): void;
    protected OnLimpouSocios(): void;
    protected OnValidandoAnexo(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnLimpouAnexo(): void;
    protected OnConsultarCEP(s: any, e: MouraTextBoxCepPesquisouEventArgs): void;
    protected OnConsultarCEPSocio(s: any, e: MouraTextBoxCepPesquisouEventArgs): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGradeSocios(Entity: SiSMoura.Core.Entity.Franquia_Pessoa): void;
    protected PreencherGradeAnexo(Entity: SiSMoura.Core.Entity.Franquia_Pessoa): void;
    protected PreencherGradeAnexoCandidato(Entity: SiSMoura.Core.Entity.Franquia_Pessoa): void;
    protected OnFileUploadXMLCompleted(s: any, e: any): void;
}
declare var c_Franquia: C_Franquia;
//# sourceMappingURL=C_Franquia.d.ts.map