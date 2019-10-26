declare class C_SerieFaturacao extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Fatura_Serie> {
    readonly txtCodigo: MouraTextBoxProcura;
    readonly cboDocumento: MouraComboBox;
    readonly txtSerie: MouraTextBox;
    readonly lstEmpresa: MouraListBoxEmpresa;
    protected Init(): void;
    protected OnComboBoxDocumentoChange(): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Fatura_Serie): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Fatura_Serie): void;
}
declare const c_SerieFaturacao: C_SerieFaturacao;
//# sourceMappingURL=C_SerieFaturacao.d.ts.map