declare class C_ComSql extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Comando_Carga> {
    Comandos: any[];
    Pdvs: SiSMoura.Core.Entity.Pdv[];
    Item: SiSMoura.Core.Entity.Comando_Item_Carga[];
    Comando: any;
    readonly txtCodigo: MouraTextBoxProcura;
    readonly lstEmpresa: MouraListBoxEmpresa;
    readonly chkInativo: MouraCheckBox;
    readonly txtDescricao: MouraTextBox;
    readonly txtComando: MouraTextBox;
    readonly lstPdv: MouraCheckBoxList;
    readonly grd: MouraGridViewJS;
    readonly btnAdicionar: MouraButton;
    protected Init(): void;
    OnPageLoad(): void;
    protected OnAlterouEmpresa(): void;
    protected preencherGrade(): void;
    protected OnGerouLinhaExecutado(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisDeletar(): boolean;
    private respondeuMsgbox;
    protected OnAntesDeletar(): boolean;
    protected OnAntesGravar(): boolean;
    protected onGridSelecionouLinha(s: any, e: MouraGridViewJSClickBotaoLinhaEventArgs): void;
    protected OnAdicionandoComando(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Comando_Carga): void;
    protected carregarPdvs(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Comando_Carga): void;
    protected ValidarAntesInserirGrade(empresa: number, descricao: string, nomePdv: string, codigoPDV: number): boolean;
}
declare var c_ComSql: C_ComSql;
//# sourceMappingURL=C_ComSql.d.ts.map