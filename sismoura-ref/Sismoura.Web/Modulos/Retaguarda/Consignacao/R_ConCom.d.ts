declare class R_ConCom extends MouraPageRelacaoAngular {
    readonly AccordionFiltros: MouraAccordion;
    readonly gridDiscriminada: MouraGridViewJS;
    readonly gridResumida: MouraGridViewJS;
    readonly gridResumidaFiltro: MouraGridViewJS;
    readonly rblOpcao: MouraRadioButtonList;
    readonly rblOrdenar: MouraRadioButtonList;
    readonly txtAjudante: MouraTextBoxProcura;
    readonly txtVendedor: MouraTextBoxProcura;
    OnPageLoad(): void;
    Init(): void;
    LimparCampos(): void;
    private MudouGerar;
    private VerificarColunas;
    PreencherGrade(): void;
    private GerarGradeDiscriminada;
    private GerarGradeResumida;
    private GerarGradeResumidaConsignacao;
    private GerarGradeResumidaFiltros;
    private OnDepoisProcurou;
    private GetComissao;
}
declare const r_ConCom: R_ConCom;
//# sourceMappingURL=R_ConCom.d.ts.map