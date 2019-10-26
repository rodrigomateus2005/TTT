declare class Cliente {
    Codigo_Cliente: number;
    Nome_Fantasia: string;
    Razao_Social: string;
    Segmento: string;
    Conta_Receber: number;
}
declare class ClientePendente extends Cliente {
    Data_Vencimento: Date;
    Rede_Franqueador: string;
    Ultimo_Registro_Internet: Date;
}
declare class ClienteBloqueado extends Cliente {
    Data_Bloqueio: Date;
    Motivo: string;
    Bloqueio: string;
    Sistema_Em_Uso: string;
}
declare class ClienteBloqueadoLog extends Cliente {
    Data: Date;
    Tipo: string;
    Motivo: string;
}
declare class C_CliBlo extends MouraPageAngular {
    private isContinuar;
    readonly txtPeriodoContasReceber: MouraTextBoxPeriodo;
    readonly txtPeriodoRelatorio: MouraTextBoxPeriodo;
    readonly txtDataPrevisao: MouraTextBoxData;
    readonly txtCliente: MouraTextBox;
    readonly txtContato: MouraTextBox;
    readonly txtObservacao: MouraTextBox;
    readonly chkSegmentoBloquear: MouraCheckBoxList;
    readonly chkSegmentoRelatorio: MouraCheckBoxList;
    readonly grdClientes: MouraGridViewJS;
    readonly grdBloqueados: MouraGridViewJS;
    readonly grdBloqueadosRelatorio: MouraGridViewJS;
    readonly btnBloquear: MouraButton;
    readonly btnDesbloquear: MouraButton;
    readonly btnGerarBloquear: MouraButton;
    readonly btnGerarRelatorio: MouraButton;
    readonly cboTipo: MouraComboBox;
    readonly cboMotivoBloqueio: MouraComboBox;
    readonly cboMotivoDesbloqueio: MouraComboBox;
    OnPageLoad(): void;
    protected Init(): void;
    protected OnClickBtnBloquear(s: MouraButton, e: MouraClickEventArgs): void;
    protected OnClickBtnDesbloquear(s: MouraButton, e: MouraClickEventArgs): void;
    protected OnClickBtnGerarBloquear(s: MouraButton, e: MouraClickEventArgs): void;
    protected MostrarMensagemNenhumClienteSelecionado(clientes: Cliente[]): boolean;
    protected OnClickBtnGerarRelatorio(s: MouraButton, e: MouraClickEventArgs): void;
    protected MostrarMensagemObrigatorio(campo: string): void;
    protected OnGerouLinhaCliente(s: any, e: MouraGridViewJSCellPreparedEventArgs): void;
    protected PreencherGradeBloqueados(): void;
    protected LimparCampos(): void;
    protected LimparCamposDesbloquearClientes(): void;
}
declare const c_CliBlo: C_CliBlo;
//# sourceMappingURL=C_CliBlo.d.ts.map