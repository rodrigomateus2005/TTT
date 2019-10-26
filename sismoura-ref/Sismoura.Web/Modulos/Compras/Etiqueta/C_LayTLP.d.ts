declare class C_LayTLP extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Layout_Zebra> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtNome: MouraTextBox;
    readonly txtLinha: MouraTextBox;
    readonly txtHorizontal: MouraTextBox;
    readonly txtVertical: MouraTextBox;
    readonly txtDescricaoCampo: MouraTextBox;
    readonly txtQtdeEtiquetas: MouraTextBox;
    readonly cboCampo: MouraComboBox;
    readonly cboTamanhoCodBarra: MouraComboBox;
    readonly gridEtiquetas: MouraGridViewJSEditavel;
    readonly agpCampos: MouraAgrupamento;
    readonly agpCodBarra: MouraAgrupamento;
    readonly agpImagem: MouraAgrupamento;
    readonly agpFormatar: MouraAgrupamento;
    readonly agpRetangulo: MouraAgrupamento;
    Campos: SiSMoura.Core.Entity.Layout_Zebra_Campo[];
    Campo: SiSMoura.Core.Entity.Layout_Zebra_Campo;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Layout_Zebra): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Layout_Zebra): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PeencherGrade(Entity: any): void;
    protected OncboCampoChange(): void;
    protected PreencheComboBarraTamanho(): void;
    protected OncboTipoChange(): void;
    protected CamposPadrao(): void;
    protected ExibirOcultarCampos(bool: boolean, flag: string): void;
    protected ValidarCampos(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): boolean;
    protected LimpouCampos(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected NormalizacaoGrid(): void;
}
declare const c_LayTLP: C_LayTLP;
//# sourceMappingURL=C_LayTLP.d.ts.map