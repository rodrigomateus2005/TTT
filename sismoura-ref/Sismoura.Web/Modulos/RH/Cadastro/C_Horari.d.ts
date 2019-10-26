declare class C_Horari extends MouraPageCadastroAngular<SiSMoura.Core.Entity.Rh_Horario> {
    readonly txtHoraEntrada: MouraTextBoxHora;
    readonly txtHoraSaida: MouraTextBoxHora;
    readonly txtDuracaoJornada: MouraTextBox;
    readonly txtHoraInicio: MouraTextBoxHora;
    readonly txtHoraFim: MouraTextBoxHora;
    readonly txtDuracaoIntervalo: MouraTextBox;
    readonly Grid: MouraGridViewJSEditavel;
    readonly cboTipo: MouraComboBox;
    readonly cboPermiteFlexibilidade: MouraComboBox;
    readonly cboTipoIntervalo: MouraComboBox;
    readonly cboIntervaloPrincipal: MouraComboBox;
    Intervalo: SiSMoura.Core.Entity.Rh_Horario_Intervalo;
    Intervalos: SiSMoura.Core.Entity.Rh_Horario_Intervalo[];
    readonly accIntervalo: MouraComboBox;
    protected Init(): void;
    protected OnAdicionandoItem(s: any, e: MouraGridViewJSEditavelItemValidandoEventArgs): void;
    protected OnAntesGravar(): boolean;
    OnPageLoad(): void;
    protected MudouTipoIntervalo(newValue: any, oldValue: any): void;
    protected OnDepoisLimpar(Entity: SiSMoura.Core.Entity.Rh_Horario): void;
    protected OnDepoisGravar(): boolean;
    protected OnDepoisBuscarExistente(Entidade: SiSMoura.Core.Entity.Rh_Horario): void;
    protected ontxtHoraSaidaChange(): void;
    protected ontxtHoraFimChange(): void;
    /**
    * Retona a diferença entre duas horas em minutos.
    * Exemplo: 14:35 a 17:21 = 166 minutos **/
    protected diferencaHoras(horaInicial: Date, horaFinal: Date): number;
    protected verificaVisibilidadeRegra(): void;
    protected verificaVisibilidadeTipoIntervalo(): void;
    private IniciarValoresIntervalo;
}
declare var c_Horari: C_Horari;
//# sourceMappingURL=C_Horari.d.ts.map