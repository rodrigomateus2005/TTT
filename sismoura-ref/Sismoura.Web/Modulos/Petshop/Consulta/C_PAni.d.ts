declare class C_PAni extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Cadastro> {
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    Peso: SiSMoura.Core.Entity.Animais_Peso;
    Pesos: SiSMoura.Core.Entity.Animais_Peso[];
    readonly Grid: MouraGridViewJSEditavel;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtData: MouraTextBoxData;
    readonly txtPeso: MouraTextBox;
    protected Init(): void;
    protected OnProcurouAnimal(s: MouraTextBoxProcuraProprietarioAnimal, e: MouraEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Cadastro): void;
    protected OnValidando(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnLimpouPeso(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
}
declare var c_PAni: C_PAni;
//# sourceMappingURL=C_PAni.d.ts.map