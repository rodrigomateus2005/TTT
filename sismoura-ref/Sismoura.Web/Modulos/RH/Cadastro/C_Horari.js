var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var C_Horari = /** @class */ (function (_super) {
    __extends(C_Horari, _super);
    function C_Horari() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Horari.prototype, "txtHoraEntrada", {
        get: function () {
            return window['txtHoraEntrada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Horari.prototype, "txtHoraSaida", {
        get: function () {
            return window['txtHoraSaida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Horari.prototype, "txtDuracaoJornada", {
        get: function () {
            return window['txtDuracaoJornada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Horari.prototype, "txtHoraInicio", {
        get: function () {
            return window['txtHoraInicio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Horari.prototype, "txtHoraFim", {
        get: function () {
            return window['txtHoraFim_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Horari.prototype, "txtDuracaoIntervalo", {
        get: function () {
            return window['txtDuracaoIntervalo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Horari.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Horari.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Horari.prototype, "cboPermiteFlexibilidade", {
        get: function () {
            return window['cboPermiteFlexibilidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Horari.prototype, "cboTipoIntervalo", {
        get: function () {
            return window['cboTipoIntervalo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Horari.prototype, "cboIntervaloPrincipal", {
        get: function () {
            return window['cboIntervaloPrincipal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Horari.prototype, "Intervalo", {
        get: function () {
            return this.GetScope()["Intervalo"];
        },
        set: function (value) {
            this.GetScope()["Intervalo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Horari.prototype, "Intervalos", {
        get: function () {
            return this.GetScope()["Intervalos"];
        },
        set: function (value) {
            this.GetScope()["Intervalos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Horari.prototype, "accIntervalo", {
        get: function () {
            return window['accIntervalo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Horari.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtHoraSaida && this.txtHoraSaida.textBoxHorario) {
            adicionarEventoDevExpress(this.txtHoraSaida.textBoxHorario.ValueChanged, this.ontxtHoraSaidaChange, this);
            adicionarEventoDevExpress(this.txtHoraEntrada.textBoxHorario.ValueChanged, this.ontxtHoraSaidaChange, this);
        }
        if (this.txtHoraFim && this.txtHoraFim.textBoxHorario) {
            adicionarEventoDevExpress(this.txtHoraFim.textBoxHorario.ValueChanged, this.ontxtHoraFimChange, this);
            adicionarEventoDevExpress(this.txtHoraInicio.textBoxHorario.ValueChanged, this.ontxtHoraFimChange, this);
        }
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.AdicionandoItem, this.OnAdicionandoItem, this);
        }
    };
    C_Horari.prototype.OnAdicionandoItem = function (s, e) {
        if (e.item.Hora_Fim == null) {
            MostrarAlerta("Preencha corretamente o campo: Hora Fim");
            e.cancelar = true;
        }
        if (e.item.Hora_Inicio == null) {
            MostrarAlerta("Preencha corretamente o campo: Hora Início");
            e.cancelar = true;
        }
        if (e.item.Hora_Fim == e.item.Hora_Inicio) {
            MostrarAlerta("O campo Hora Início é igual ao campo Hora Fim");
            e.cancelar = true;
        }
        if (e.item.Hora_Inicio > e.item.Hora_Fim) {
            MostrarAlerta("Preencha corretamente o campo: Hora Início");
            e.cancelar = true;
        }
        if (this.cboIntervaloPrincipal.GetSelectedIndex() == -1) {
            MostrarAlerta("Preencha corretamente o campo: Intervalo Principal");
            e.cancelar = true;
        }
    };
    C_Horari.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var parametros;
        var entidade = this.GetScope().Entity;
        entidade.Rh_Horario_Intervalo = this.Intervalos;
        if (this.EntityTela.Tipo_Intervalo == 1) {
            if (this.Intervalos.length <= 0) {
                MostrarAlerta("Adicione um Horário de Intervalo.");
                return;
            }
        }
        return true;
    };
    C_Horari.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().verificaVisibilidadeRegra) {
            this.GetScope().verificaVisibilidadeRegra = $.proxy(this.verificaVisibilidadeRegra, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo; }, this.GetScope().verificaVisibilidadeRegra);
        }
        if (!this.GetScope().verificaVisibilidadeTipoIntervalo) {
            this.GetScope().verificaVisibilidadeTipoIntervalo = $.proxy(this.verificaVisibilidadeTipoIntervalo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo_Intervalo; }, this.GetScope().verificaVisibilidadeTipoIntervalo);
        }
        if (!this.GetScope().MudouTipoIntervalo) {
            this.GetScope().MudouTipoIntervalo = $.proxy(this.MudouTipoIntervalo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo_Intervalo; }, this.GetScope().MudouTipoIntervalo);
        }
        if (!this.GetScope().IniciarValoresIntervalo) {
            var that = this;
            this.Intervalo = {};
            this.GetScope().IniciarValoresIntervalo = $.proxy(this.IniciarValoresIntervalo, this);
            this.GetScope().$watch(function (scope) { return that.Intervalo.Intervalo_Principal; }, this.GetScope().IniciarValoresIntervalo);
        }
    };
    C_Horari.prototype.MudouTipoIntervalo = function (newValue, oldValue) {
        if (this.EntityTela.Tipo_Intervalo == 2) {
            for (var x = 0; x < this.Intervalos.length; x++) {
                this.Intervalos[x].Hora_Inicio = "00:00";
                this.Intervalos[x].Hora_Fim = "00:00";
                this.Intervalos[x].Duracao_Intervalo = 0;
            }
            this.Grid.Grid.Refresh();
            this.GetScope().$applyAsync();
        }
        if (this.EntityTela.Tipo_Intervalo == 0) {
            this.Grid.Grid.PreencherGrid(null);
            this.Intervalos = [];
        }
        if (this.EntityTela.Tipo_Intervalo == 1) {
            for (var x = 0; x < this.Intervalos.length; x++) {
                if (this.Intervalos[x].Duracao_Intervalo == 0) {
                    this.Grid.Grid.PreencherGrid(null);
                    this.Intervalos = [];
                }
            }
        }
    };
    C_Horari.prototype.OnDepoisLimpar = function (Entity) {
        this.Intervalos = [];
        this.Intervalo = {};
        try {
            var parametros;
            parametros = {
                codEmpresa: ValoresSismoura.EmpresaPadraoUsuario
            };
            var data = this.ExecutarFuncaoServerSideSynch("GetAdesaoData", parametros);
            Entity.Validade_Inicio = data;
        }
        catch (ex) {
            LogarException(ex);
        }
        this.RefreshAngular();
    };
    C_Horari.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        return true;
    };
    C_Horari.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        if (!Entidade.Rh_Horario_Intervalo) {
            Entidade.Rh_Horario_Intervalo = [];
        }
        this.Intervalos = Entidade.Rh_Horario_Intervalo;
        this.RefreshAngular();
    };
    C_Horari.prototype.ontxtHoraSaidaChange = function () {
        var dataEntrada;
        var dataSaida;
        dataEntrada = this.txtHoraEntrada.textBoxHorario.GetDate();
        dataSaida = this.txtHoraSaida.textBoxHorario.GetDate();
        if (dataEntrada != null && dataSaida != null) {
            this.EntityTela.Duracao_Jornada = this.diferencaHoras(dataEntrada, dataSaida);
        }
    };
    C_Horari.prototype.ontxtHoraFimChange = function () {
        var dataInicial;
        var dataFinal;
        dataInicial = this.txtHoraInicio.textBoxHorario.GetDate();
        dataFinal = this.txtHoraFim.textBoxHorario.GetDate();
        if (dataInicial != null && dataFinal != null) {
            this.Intervalo.Duracao_Intervalo = this.diferencaHoras(dataInicial, dataFinal);
        }
    };
    /**
    * Retona a diferença entre duas horas em minutos.
    * Exemplo: 14:35 a 17:21 = 166 minutos **/
    C_Horari.prototype.diferencaHoras = function (horaInicial, horaFinal) {
        if (horaInicial.getTime() > horaFinal.getTime())
            horaFinal.setDate(horaFinal.getDate() + 1); // Quando a hora inicial for maior, exemplo, entra as 23:00 e sai as 07:00, trabalha 480 minutos.
        var diferenca = calcularDiferencaData(horaInicial, horaFinal, DiferencaData.Minutes);
        return diferenca;
    };
    C_Horari.prototype.verificaVisibilidadeRegra = function () {
        this.txtHoraEntrada.Enabled = true;
        this.txtHoraSaida.Enabled = true;
        this.cboPermiteFlexibilidade.Enabled = true;
        this.cboTipoIntervalo.Enabled = true;
        this.txtHoraEntrada.Obrigatorio = true;
        this.txtHoraSaida.Obrigatorio = true;
        this.cboPermiteFlexibilidade.Obrigatorio = true;
        this.cboTipoIntervalo.Obrigatorio = true;
        if (this.EntityTela.Tipo != 1) {
            this.EntityTela.Hora_Entrada = "00:00";
            this.EntityTela.Hora_Saida = "00:00";
            this.EntityTela.Duracao_Jornada = 0;
            this.cboPermiteFlexibilidade.SetSelectedIndex(-1);
            this.cboTipoIntervalo.SetSelectedIndex(-1);
            this.txtHoraEntrada.Enabled = false;
            this.txtHoraSaida.Enabled = false;
            this.cboPermiteFlexibilidade.Enabled = false;
            this.cboTipoIntervalo.Enabled = false;
            this.txtHoraEntrada.Obrigatorio = false;
            this.txtHoraSaida.Obrigatorio = false;
            this.cboPermiteFlexibilidade.Obrigatorio = false;
            this.cboTipoIntervalo.Obrigatorio = false;
        }
    };
    C_Horari.prototype.verificaVisibilidadeTipoIntervalo = function () {
        if (this.EntityTela.Tipo_Intervalo == 1) {
            this.accIntervalo.Enabled = true;
            this.txtHoraInicio.Enabled = true;
            this.txtHoraFim.Enabled = true;
            this.txtDuracaoIntervalo.ReadOnly = false;
            this.cboIntervaloPrincipal.Enabled = true;
        }
        if (this.EntityTela.Tipo_Intervalo == 2) {
            this.accIntervalo.Enabled = true;
            this.txtHoraInicio.Enabled = false;
            this.txtHoraFim.Enabled = false;
            this.txtDuracaoIntervalo.ReadOnly = false;
            this.cboIntervaloPrincipal.Enabled = true;
        }
        if (this.EntityTela.Tipo_Intervalo == 0) {
            this.accIntervalo.Enabled = false;
            this.txtHoraInicio.Enabled = false;
            this.txtHoraFim.Enabled = false;
            this.txtDuracaoIntervalo.ReadOnly = true;
            this.cboIntervaloPrincipal.Enabled = false;
        }
    };
    C_Horari.prototype.IniciarValoresIntervalo = function () {
        var int_p;
        int_p = this.Intervalo.Intervalo_Principal;
        if (int_p == "1") {
            this.Intervalo.Intervalo_Principal_Texto = "SIM";
        }
        else {
            this.Intervalo.Intervalo_Principal_Texto = "NÃO";
        }
    };
    return C_Horari;
}(MouraPageCadastroAngular));
var c_Horari = new C_Horari();
//# sourceMappingURL=C_Horari.js.map