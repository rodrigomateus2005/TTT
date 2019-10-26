declare class C_ConRet extends MouraPageAngular {
    readonly grdConsulta: MouraGridViewJSEditavel;
    readonly grdRetorno: MouraGridViewJSEditavel;
    readonly lblDiasRetorno: MouraLabel;
    readonly txtServicoConsulta: MouraTextBoxProcura;
    readonly txtServicoRetorno: MouraTextBoxProcura;
    Consulta: any;
    Consultas: any[];
    Retorno: any;
    Retornos: any[];
    protected Init(): void;
    OnPageLoad(): void;
    protected OnExcluiuConsulta(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnExcluiuRetorno(s: any, e: MouraGridViewJSEditavelItemEventArgs): void;
    protected OnExcluiuServico(e: MouraGridViewJSEditavelItemEventArgs, tipo: number): void;
    protected OnValidandoItemServicoConsulta(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected OnValidandoItemServicoRetorno(s: any, e: MouraGridViewJSEditavelItemCancelavelEventArgs): void;
    protected ValidarItem(e: MouraGridViewJSEditavelItemCancelavelEventArgs, tipo: number, nomeServico: string): void;
    protected LimparCampos(): void;
    protected LimparServicoConsulta(): void;
    protected LimparServicoRetorno(): void;
    protected GetServico(): void;
}
declare const c_ConRet: C_ConRet;
//# sourceMappingURL=C_ConRet.d.ts.map