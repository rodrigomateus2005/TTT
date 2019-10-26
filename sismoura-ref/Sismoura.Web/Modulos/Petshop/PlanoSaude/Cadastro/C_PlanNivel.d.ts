declare class C_PlanNivel extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Plano_Nivel> {
    Usuarios: SiSMoura.Core.Entity.Animais_Plano_Nivel_Usuario[];
    Usuario: SiSMoura.Core.Entity.Animais_Plano_Nivel_Usuario;
    readonly cboNivel: MouraComboBox;
    readonly grdUsuario: MouraGridViewJSEditavel;
    readonly Grid: MouraGridViewJS;
    readonly txtUsuario: MouraTextBoxProcura;
    readonly txtDescricao: MouraTextBox;
    protected Init(): void;
    protected OnValidandoItemUsuario(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected VerificaExistenciaUsuario(codUsuario: number): boolean;
    protected OnGridSelecionouItem(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    OnPageLoad(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Plano_Nivel): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Plano_Nivel): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisGravar(): boolean;
    protected PreencherGrade(): void;
}
declare const c_PlanNivel: C_PlanNivel;
//# sourceMappingURL=C_PlanNivel.d.ts.map