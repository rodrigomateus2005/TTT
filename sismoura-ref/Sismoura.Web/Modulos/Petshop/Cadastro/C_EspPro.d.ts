declare class C_EspPro extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Categoria_Profissional> {
    Servicos: SiSMoura.Core.Entity.Categoria_Profissional_Servico[];
    Servico: SiSMoura.Core.Entity.Categoria_Profissional_Servico;
    readonly grid: MouraGridViewJSEditavel;
    readonly txtServico: MouraTextBoxProcura;
    readonly txtGrupo: MouraTextBoxProcura;
    readonly txtSubgrupo: MouraTextBoxProcura;
    readonly mdGrupo: MouraModal;
    readonly btnFechar: MouraButton;
    readonly btnOk: MouraButton;
    readonly btnAdicionarGrupo: MouraButton;
    protected Init(): void;
    protected OnClickAdicionar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickOk(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnClickFechar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnValidandoAlteracao(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnAntesGravar(): boolean;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Categoria_Profissional): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Categoria_Profissional): void;
}
declare var c_EspPro: C_EspPro;
//# sourceMappingURL=C_EspPro.d.ts.map