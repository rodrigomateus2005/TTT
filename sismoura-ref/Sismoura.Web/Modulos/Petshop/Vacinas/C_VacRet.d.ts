declare class C_VacRet extends MouraPageAngular {
    readonly Grid: MouraGridViewJSEditavel;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    CodigoAnimal: number;
    Vacinacao: SiSMoura.Core.Entity.Animais_Vacinacoes_Retroativas;
    Vacinacoes: SiSMoura.Core.Entity.Animais_Vacinacoes_Retroativas[];
    readonly txtCodigo: MouraTextBoxProcura;
    readonly txtVacina: MouraTextBoxProcura;
    protected Init(): void;
    protected OnProcurouAnimal(s: MouraTextBoxProcuraProprietarioAnimal, e: MouraEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Cadastro): void;
    protected OnLimpouVacinacao(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnValidandoVacinacao(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnItemAdicionadoVacinacao(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnItemExcluidoVacinacao(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnAntesGravar(): boolean;
}
declare var c_VacRet: C_VacRet;
//# sourceMappingURL=C_VacRet.d.ts.map