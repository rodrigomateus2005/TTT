declare class C_PlaVac extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Plano> {
    readonly txtServico: MouraTextBoxProcura;
    readonly txtDose: MouraTextBox;
    readonly txtDias: MouraTextBox;
    Servico: any;
    Servicos: any[];
    readonly Grid: MouraGridViewJSEditavel;
    protected Init(): void;
    OnPageLoad(): void;
    protected MudouDoseAnual(): void;
    protected MudouDoseSemestral(): void;
    protected OnDepoisBuscarExistente(Entity: SiSMoura.Core.Entity.Animais_Plano): void;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Plano): void;
    protected LimparServico(): void;
    protected OnAntesGravar(): boolean;
}
declare const c_PlaVac: C_PlaVac;
//# sourceMappingURL=C_PlaVac.d.ts.map