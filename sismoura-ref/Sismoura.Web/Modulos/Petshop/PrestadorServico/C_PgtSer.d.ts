declare class C_PgtSer extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Animais_Pagamento_Prestador_Servico> {
    readonly txtPrestador: MouraTextBoxProcura;
    Servicos: SiSMoura.Core.Entity.AnimaisPrestadorServicoValorRetorno[];
    Servico: SiSMoura.Core.Entity.AnimaisPrestadorServicoValorRetorno;
    readonly accServicos: MouraAccordion;
    readonly txtServico: MouraTextBoxProcura;
    readonly cboListaPreco: MouraComboBox;
    readonly grdServicos: MouraGridViewJSEditavel;
    readonly btnReplicar: MouraButton;
    readonly dlgReplicar: MouraModal;
    readonly txtPrestadorReplicar: MouraTextBoxProcura;
    readonly grdServicosReplicar: MouraGridViewJS;
    readonly btnReplicarSelecionado: MouraButton;
    protected Init(): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Animais_Pagamento_Prestador_Servico): void;
    protected OnAntesAbrirProcuraPrestador(s: any, e: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnTxtPrestadorProcurou(s: MouraTextBoxProcuraRetornoProcura, e: MouraEventArgs): void;
    protected OnTxtServicoProcurou(s: MouraTextBoxProcuraRetornoProcura, e: MouraEventArgs): void;
    protected ValidandoGrdServicos(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnAdicionandoGrdServicos(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected ValidarAdicionarServico(entidade: SiSMoura.Core.Entity.AnimaisPrestadorServicoValorRetorno): boolean;
    protected OnAlterandoItem(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnClickReplicar(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnFechouModalHistoricoServico(s: any, e: MouraEventHandler): void;
    protected OnAntesAbrirProcuraPrestadorReplicar(s: any, e: MouraTextBoxProcuraAntesAbrirProcuraEventArgs): void;
    protected OnTxtPrestadorProcurouReplicar(s: MouraTextBoxProcuraRetornoProcura, e: MouraEventArgs): void;
    protected OnClickReplicarSelecionado(s: any, e: DevExpress.Web.Scripts.ASPxClientButtonClickEventArgs): void;
    protected OnAntesGravar(): boolean;
}
declare const c_PgtSer: C_PgtSer;
//# sourceMappingURL=C_PgtSer.d.ts.map