declare class C_AvalComp extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Comportamento_Avaliacao> {
    readonly grdAvaliacaoComportamento: MouraGridViewJS;
    readonly txtPet: MouraTextBoxProcuraProprietarioAnimal;
    readonly txtAtendimento: MouraTextBoxProcura;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnGravouSucesso(s: any, e: MouraGravouSucessoEventArgs): void;
    protected OnExcluiuSucesso(s: any, e: any): void;
    protected SelecionarRegistro(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisLimpar(): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Animais_Comportamento_Avaliacao): void;
    protected OnDepoisProcurouAtendimento(s: any, e: MouraEventHandler): void;
    protected OnDepoisProcurouAnimal(s: any, e: MouraEventHandler): void;
    private GetDadosAvaliacao;
    private ValidarAvaliacaoComportamental;
    private LerParametrosURL;
}
declare var c_AvalComp: C_AvalComp;
//# sourceMappingURL=C_AvalComp.d.ts.map