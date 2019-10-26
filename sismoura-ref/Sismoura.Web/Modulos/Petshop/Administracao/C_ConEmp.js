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
var C_ConEmp = /** @class */ (function (_super) {
    __extends(C_ConEmp, _super);
    function C_ConEmp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ConEmp.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "gridSetor", {
        get: function () {
            return window['gridSetor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "txtEmpresa", {
        get: function () {
            return window['txtEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "txtCluster", {
        get: function () {
            return window['txtCluster_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "txtTipoEmpresa", {
        get: function () {
            return window['txtTipoEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "lstDias", {
        get: function () {
            return window['lstDias_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "txtData", {
        get: function () {
            return window['txtData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "txtHoraDifInicial", {
        get: function () {
            return window['txtHoraDifInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "txtHoraDifFinal", {
        get: function () {
            return window['txtHoraDifFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "txtHoraInicial", {
        get: function () {
            return window['txtHoraInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "txtHoraFinal", {
        get: function () {
            return window['txtHoraFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "Horarios", {
        get: function () {
            if (!this.GetScope()["Horarios"]) {
                return [];
            }
            else {
                return this.GetScope()["Horarios"];
            }
        },
        set: function (value) {
            this.GetScope()["Horarios"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "Horario", {
        get: function () {
            if (!this.GetScope()["Horario"]) {
                return null;
            }
            else {
                return this.GetScope()["Horario"];
            }
        },
        set: function (value) {
            this.GetScope()["Horario"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "HorariosDif", {
        get: function () {
            if (!this.GetScope()["HorariosDif"]) {
                return [];
            }
            else {
                return this.GetScope()["HorariosDif"];
            }
        },
        set: function (value) {
            this.GetScope()["HorariosDif"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "HorarioDif", {
        get: function () {
            if (!this.GetScope()["HorarioDif"]) {
                return null;
            }
            else {
                return this.GetScope()["HorarioDif"];
            }
        },
        set: function (value) {
            this.GetScope()["HorarioDif"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "Setores", {
        get: function () {
            if (!this.GetScope()["Setores"]) {
                return [];
            }
            else {
                return this.GetScope()["Setores"];
            }
        },
        set: function (value) {
            this.GetScope()["Setores"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "Setor", {
        get: function () {
            if (!this.GetScope()["Setor"]) {
                return null;
            }
            else {
                return this.GetScope()["Setor"];
            }
        },
        set: function (value) {
            this.GetScope()["Setor"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "GridServico", {
        get: function () {
            return window['GridServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "GridSala", {
        get: function () {
            return window['GridSala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "GridDiferenciado", {
        get: function () {
            return window['GridDiferenciado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "GridHorarioServico", {
        get: function () {
            return window['GridHorarioServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "lstDiasServico", {
        get: function () {
            return window['lstDiasServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "txtHoraInicialServico", {
        get: function () {
            return window['txtHoraInicialServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "txtHoraFinalServico", {
        get: function () {
            return window['txtHoraFinalServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "txtSubGrupo", {
        get: function () {
            return window['txtSubGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "txtSetorEmpresa", {
        get: function () {
            return window['txtSetorEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "txtSala", {
        get: function () {
            return window['txtSala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "Servicos", {
        get: function () {
            if (!this.GetScope()["Servicos"]) {
                return [];
            }
            else {
                return this.GetScope()["Servicos"];
            }
        },
        set: function (value) {
            this.GetScope()["Servicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "Servico", {
        get: function () {
            if (!this.GetScope()["Servico"]) {
                return null;
            }
            else {
                return this.GetScope()["Servico"];
            }
        },
        set: function (value) {
            this.GetScope()["Servico"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "mdHorarioServico", {
        get: function () {
            return window['mdHorarioServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "mdSalas", {
        get: function () {
            return window['mdSalas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "HorariosServico", {
        get: function () {
            if (!this.GetScope()["HorariosServico"]) {
                return [];
            }
            else {
                return this.GetScope()["HorariosServico"];
            }
        },
        set: function (value) {
            this.GetScope()["HorariosServico"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "HorarioServico", {
        get: function () {
            if (!this.GetScope()["HorarioServico"]) {
                return null;
            }
            else {
                return this.GetScope()["HorarioServico"];
            }
        },
        set: function (value) {
            this.GetScope()["HorarioServico"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "Salas", {
        get: function () {
            if (!this.GetScope()["Salas"]) {
                return [];
            }
            else {
                return this.GetScope()["Salas"];
            }
        },
        set: function (value) {
            this.GetScope()["Salas"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "Sala", {
        get: function () {
            if (!this.GetScope()["Sala"]) {
                return null;
            }
            else {
                return this.GetScope()["Sala"];
            }
        },
        set: function (value) {
            this.GetScope()["Sala"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "btnNovo", {
        get: function () {
            return window["btnNovo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "ItemAtualSetor", {
        get: function () {
            if (!this.GetScope()["ItemAtual"]) {
                return null;
            }
            else {
                return this.GetScope()["ItemAtual"];
            }
        },
        set: function (value) {
            this.GetScope()["ItemAtual"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "ItemAtual", {
        get: function () {
            if (!this.GetScope()["ItemAtual"]) {
                return null;
            }
            else {
                return this.GetScope()["ItemAtual"];
            }
        },
        set: function (value) {
            this.GetScope()["ItemAtual"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "btnOK", {
        get: function () {
            return window['btnOK_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConEmp.prototype, "btnOKSala", {
        get: function () {
            return window['btnOKSala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ConEmp.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.AdicionandoItem, this.OnValidandoAlteracao, this);
            adicionarEventoMoura(this.Grid.LimpouItem, this.OnLimpouItem, this);
        }
        if (this.GridDiferenciado) {
            adicionarEventoMoura(this.GridDiferenciado.AdicionandoItem, this.OnValidandoAlteracaoHorarioDiferenciado, this);
        }
        if (this.gridSetor) {
            adicionarEventoMoura(this.gridSetor.AdicionandoItem, this.OnValidandoAlteracaoSetor, this);
            adicionarEventoMoura(this.gridSetor.Grid.ClickBotaoLinha, this.OnClicouBotaoLinhaSetor, this);
        }
        if (this.GridSala) {
            adicionarEventoMoura(this.GridSala.AdicionandoItem, this.OnValidandoAlteracaoSala, this);
        }
        if (this.GridServico) {
            adicionarEventoMoura(this.GridServico.AdicionandoItem, this.OnValidandoAlteracaoServico, this);
            adicionarEventoMoura(this.GridServico.LimpouItem, this.OnLimpouItemServico, this);
        }
        if (this.GridHorarioServico) {
            adicionarEventoMoura(this.GridHorarioServico.AdicionandoItem, this.OnValidandoAlteracaoHorarioServico, this);
            adicionarEventoMoura(this.GridHorarioServico.LimpouItem, this.OnLimpouItemServico, this);
        }
        if (this.txtEmpresa) {
            adicionarEventoMoura(this.txtEmpresa.Procurou, this.OnMudouEmpresa, this);
        }
        if (this.btnOK) {
            adicionarEventoMoura(this.btnOK.Click, this.OnClicOk, this);
        }
        if (this.btnOKSala) {
            adicionarEventoMoura(this.btnOKSala.Click, this.OnClicOkSala, this);
        }
        if (this.GridServico) {
            adicionarEventoMoura(this.GridServico.Grid.ClickBotaoLinha, this.OnClicouBotaoLinha, this);
        }
        if (this.txtSala) {
            adicionarEventoMoura(this.txtSala.AntesAbrirProcura, this.OnSalaAntesAbrirProcura, this);
        }
    };
    C_ConEmp.prototype.OnSalaAntesAbrirProcura = function (s, ev) {
        this.txtSala.LimparParametros();
        this.txtSala.AddParametro("codEmpresa", this.txtEmpresa.GetText());
    };
    C_ConEmp.prototype.OnClickCancelar = function (s, e) {
        try {
            e.processOnServer = false;
            this.mdHorarioServico.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConEmp.prototype.OnLimpouItemServico = function (s, e) {
        this.lstDiasServico.LimparSelecao();
    };
    C_ConEmp.prototype.OnLimpouItem = function (s, e) {
        this.lstDias.LimparSelecao();
    };
    C_ConEmp.prototype.OnMudouEmpresa = function () {
        this.VerificarExistencia(this.txtEmpresa.GetText().CNum());
    };
    C_ConEmp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.txtCodigo.Visible = false;
    };
    C_ConEmp.prototype.VerificarExistencia = function (empresa) {
        var parametros = {
            Empresa: empresa
        };
        var configuracao = this.ExecutarFuncaoServerSideSynch("GetCodigo", parametros);
        if (configuracao) {
            this.PreencherEntidade(configuracao);
            this.txtCodigo.SetText(configuracao);
        }
        this.RefreshAngular();
    };
    C_ConEmp.prototype.OnValidandoAlteracaoHorarioServico = function (s, e) {
        try {
            if (!this.lstDiasServico.SelectedValues || this.lstDiasServico.SelectedValues.length == 0) {
                MostrarAlerta("Informe ao menos um dia da semana");
                e.cancelar = true;
                return;
            }
            if (!this.txtHoraInicialServico.textBoxHorario.GetDate()) {
                MostrarAlerta("Informe a hora inicial");
                e.cancelar = true;
                return;
            }
            if (!this.txtHoraFinalServico.textBoxHorario.GetDate()) {
                MostrarAlerta("Informe a hora final");
                e.cancelar = true;
                return;
            }
            if (this.txtHoraFinalServico.textBoxHorario.GetDate() < this.txtHoraInicialServico.textBoxHorario.GetDate()) {
                MostrarAlerta("A hora final não pode ser menor que a hora inicial");
                e.cancelar = true;
                return;
            }
            if (this.txtHoraFinalServico.textBoxHorario.GetDate().FormataDataHora().toString() == this.txtHoraInicialServico.textBoxHorario.GetDate().FormataDataHora().toString()) {
                MostrarAlerta("A hora final não pode ser igual que a hora inicial");
                e.cancelar = true;
                return;
            }
            e.cancelar = true;
            for (var i = 0; i < this.lstDiasServico.SelectedValues.length; i++) {
                var prodInserido = this.HorariosServico.FirstOrDefault("Dia_Semana", this.lstDiasServico.SelectedValues[i]);
                if (prodInserido) {
                    this.HorarioServico.Dia_Semana = prodInserido.Dia_Semana;
                    for (var x = 0; x < this.HorariosServico.length; x++) {
                        if (this.HorariosServico[x].Dia_Semana == prodInserido.Dia_Semana) {
                            this.HorariosServico[x].Hora_Final = this.HorarioServico.Hora_Final;
                            this.HorariosServico[x].Hora_Inicial = this.HorarioServico.Hora_Inicial;
                        }
                    }
                }
                else {
                    var hora = {};
                    hora.Dia_Semana = this.lstDiasServico.SelectedValues[i];
                    hora.Dia_Nome = this.lstDiasServico.SelectedTextes[i];
                    hora.Hora_Final = this.HorarioServico.Hora_Final;
                    hora.Hora_Inicial = this.HorarioServico.Hora_Inicial;
                    this.HorariosServico.push(hora);
                }
            }
            this.GridHorarioServico.AtualizarGrid();
            this.HorarioServico = null;
            this.lstDiasServico.LimparSelecao();
            this.txtHoraInicialServico.textBoxHorario.SetValue(null);
            this.txtHoraFinalServico.textBoxHorario.SetValue(null);
            this.GridHorarioServico.Grid.OrderBy("Dia_Semana", "asc");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConEmp.prototype.PreencherHorarios = function (Entidade) {
        try {
            this.Horarios = [];
            for (var i = 0; i < Entidade.Horarios.length; i++) {
                var hora = {};
                hora.Dia = Entidade.Horarios[i].Dia_Semana;
                if (hora.Dia == 1) {
                    hora.Dia_Nome = "Domingo";
                }
                else if (hora.Dia == 2) {
                    hora.Dia_Nome = "Segunda-Feira";
                }
                else if (hora.Dia == 3) {
                    hora.Dia_Nome = "Terça-Feira";
                }
                else if (hora.Dia == 4) {
                    hora.Dia_Nome = "Quarta-Feira";
                }
                else if (hora.Dia == 5) {
                    hora.Dia_Nome = "Quinta-Feira";
                }
                else if (hora.Dia == 6) {
                    hora.Dia_Nome = "Sexta-Feira";
                }
                else if (hora.Dia == 7) {
                    hora.Dia_Nome = "Sábado";
                }
                hora.Codigo = Entidade.Horarios[i].Codigo;
                hora.Hora_Final = Entidade.Horarios[i].Hora_Final;
                hora.Hora_Inicial = Entidade.Horarios[i].Hora_Inicial;
                this.Horarios.push(hora);
            }
            this.Grid.AtualizarGrid();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConEmp.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.Setores = [];
        this.Horarios = [];
        this.Servicos = [];
        this.HorariosDif = [];
        this.Grid.AtualizarGrid();
        this.GridServico.AtualizarGrid();
        this.gridSetor.AtualizarGrid();
        this.GridDiferenciado.AtualizarGrid();
    };
    C_ConEmp.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            this.Setores = [];
            this.Horarios = [];
            this.Servicos = [];
            this.HorariosDif = [];
            var parametros = {
                Configuracao: Entidade.Codigo
            };
            var Setores = this.ExecutarFuncaoServerSideSynch("GetSetores", parametros);
            var Horarios = this.ExecutarFuncaoServerSideSynch("GetHorarios", parametros);
            var HorariosDif = this.ExecutarFuncaoServerSideSynch("GetHorariosDiferenciados", parametros);
            var Servicos = this.ExecutarFuncaoServerSideSynch("GetServicos", parametros);
            if (Setores) {
                this.Setores = Setores;
            }
            if (Horarios) {
                this.Horarios = Horarios;
            }
            if (Servicos) {
                this.Servicos = Servicos;
            }
            if (HorariosDif) {
                this.HorariosDif = HorariosDif;
            }
            this.Grid.AtualizarGrid();
            this.GridServico.AtualizarGrid();
            this.gridSetor.AtualizarGrid();
            this.GridDiferenciado.AtualizarGrid();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConEmp.prototype.PreencherServicos = function (Entidade) {
        this.HorariosServico = [];
        for (var i = 0; i < Entidade.Horarios.length; i++) {
            var hora = {};
            hora.Dia_Semana = Entidade.Horarios[i].Dia_Semana;
            if (hora.Dia_Semana == 1) {
                hora.Dia_Nome = "Domingo";
            }
            else if (hora.Dia_Semana == 2) {
                hora.Dia_Nome = "Segunda-Feira";
            }
            else if (hora.Dia_Semana == 3) {
                hora.Dia_Nome = "Terça-Feira";
            }
            else if (hora.Dia_Semana == 4) {
                hora.Dia_Nome = "Quarta-Feira";
            }
            else if (hora.Dia_Semana == 5) {
                hora.Dia_Nome = "Quinta-Feira";
            }
            else if (hora.Dia_Semana == 6) {
                hora.Dia_Nome = "Sexta-Feira";
            }
            else if (hora.Dia_Semana == 7) {
                hora.Dia_Nome = "Sábado";
            }
            hora.Codigo = Entidade.Horarios[i].Codigo;
            hora.Hora_Final = Entidade.Horarios[i].Hora_Final;
            hora.Hora_Inicial = Entidade.Horarios[i].Hora_Inicial;
            this.HorariosServico.push(hora);
        }
        this.GridServico.AtualizarGrid();
    };
    C_ConEmp.prototype.OnValidandoAlteracaoSetor = function (s, e) {
        try {
            if (this.txtSetorEmpresa.GetText().CNum() == 0) {
                MostrarAlerta("Informe o setor da empresa");
                e.cancelar = true;
                return;
            }
            var setorInserido = this.Setores.FirstOrDefault("Codigo", this.Setor.Codigo);
            this.Setor.Setor_Descricao = this.txtSetorEmpresa.GetResultado();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConEmp.prototype.OnValidandoAlteracaoSala = function (s, e) {
        try {
            var sala = this.Setores.FirstOrDefault("Sala", this.Sala.Sala);
            if (sala) {
                MostrarAlerta("Esta sala já foi inserida");
                e.cancelar = true;
                return;
            }
            this.Sala.Sala_Descricao = this.txtSala.GetResultado();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConEmp.prototype.OnValidandoAlteracaoHorarioDiferenciado = function (s, e) {
        var _this = this;
        try {
            if (!this.txtData.Date) {
                MostrarAlerta("Informe a data");
                e.cancelar = true;
                return;
            }
            if (!this.txtHoraDifInicial.textBoxHorario.GetDate()) {
                MostrarAlerta("Informe a hora inicial");
                e.cancelar = true;
                return;
            }
            if (!this.txtHoraDifFinal.textBoxHorario.GetDate()) {
                MostrarAlerta("Informe a hora final");
                e.cancelar = true;
                return;
            }
            if (this.txtHoraDifFinal.textBoxHorario.GetDate() < this.txtHoraDifInicial.textBoxHorario.GetDate()) {
                MostrarAlerta("A hora final não pode ser menor que a hora inicial");
                e.cancelar = true;
                return;
            }
            if (this.txtHoraDifFinal.textBoxHorario.GetDate().FormataDataHora().toString() == this.txtHoraDifInicial.textBoxHorario.GetDate().FormataDataHora().toString()) {
                MostrarAlerta("A hora final não pode ser igual que a hora inicial");
                e.cancelar = true;
                return;
            }
            var Inserido = false;
            this.HorariosDif.forEach(function (q) {
                if (DiffDays(q.Data, _this.HorarioDif.Data) == 0) {
                    q.Hora_Final = _this.HorarioDif.Hora_Final;
                    q.Hora_Inicial = _this.HorarioDif.Hora_Inicial;
                    Inserido = true;
                }
            });
            //for (var x = 0; x < this.HorariosDif.length; x++) {
            //    if (this.HorariosDif[x].Data == this.HorarioDif.Data) {
            //        this.HorariosDif[x].Hora_Final = this.HorarioDif.Hora_Final;
            //        this.HorariosDif[x].Hora_Inicial = this.HorarioDif.Hora_Inicial;
            //        Inserido = true;
            //    }
            //}
            if (Inserido) {
                e.cancelar = true;
                this.GridDiferenciado.AtualizarGrid();
                this.HorarioDif = null;
                this.txtHoraDifInicial.textBoxHorario.SetValue(null);
                this.txtHoraDifFinal.textBoxHorario.SetValue(null);
                this.GridDiferenciado.Grid.OrderBy("Data", "asc");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConEmp.prototype.OnValidandoAlteracao = function (s, e) {
        try {
            if (!this.lstDias.SelectedValues || this.lstDias.SelectedValues.length == 0) {
                MostrarAlerta("Informe ao menos um dia da semana");
                e.cancelar = true;
                return;
            }
            if (!this.txtHoraInicial.textBoxHorario.GetDate()) {
                MostrarAlerta("Informe a hora inicial");
                e.cancelar = true;
                return;
            }
            if (!this.txtHoraFinal.textBoxHorario.GetDate()) {
                MostrarAlerta("Informe a hora final");
                e.cancelar = true;
                return;
            }
            if (this.txtHoraFinal.textBoxHorario.GetDate() < this.txtHoraInicial.textBoxHorario.GetDate()) {
                MostrarAlerta("A hora final não pode ser menor que a hora inicial");
                e.cancelar = true;
                return;
            }
            if (this.txtHoraFinal.textBoxHorario.GetDate().FormataDataHora().toString() == this.txtHoraInicial.textBoxHorario.GetDate().FormataDataHora().toString()) {
                MostrarAlerta("A hora final não pode ser igual que a hora inicial");
                e.cancelar = true;
                return;
            }
            e.cancelar = true;
            for (var i = 0; i < this.lstDias.SelectedValues.length; i++) {
                var prodInserido = this.Horarios.FirstOrDefault("Dia", this.lstDias.SelectedValues[i]);
                if (prodInserido) {
                    this.Horario.Dia = prodInserido.Dia;
                    for (var x = 0; x < this.Horarios.length; x++) {
                        if (this.Horarios[x].Dia == prodInserido.Dia) {
                            this.Horarios[x].Hora_Final = this.Horario.Hora_Final;
                            this.Horarios[x].Hora_Inicial = this.Horario.Hora_Inicial;
                        }
                    }
                }
                else {
                    var hora = {};
                    hora.Dia = this.lstDias.SelectedValues[i];
                    hora.Dia_Nome = this.lstDias.SelectedTextes[i];
                    hora.Hora_Final = this.Horario.Hora_Final;
                    hora.Hora_Inicial = this.Horario.Hora_Inicial;
                    this.Horarios.push(hora);
                }
            }
            this.Grid.AtualizarGrid();
            this.Horario = null;
            this.lstDias.LimparSelecao();
            this.txtHoraInicial.textBoxHorario.SetValue(null);
            this.txtHoraFinal.textBoxHorario.SetValue(null);
            this.Grid.Grid.OrderBy("Dia", "asc");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConEmp.prototype.OnValidandoAlteracaoServico = function (s, e) {
        try {
            for (var i = 0; i < this.Servicos.length; i++) {
                if (this.Servicos[i].Servico == this.Servico.Servico && this.Servicos[i].Subgrupo == this.Servico.Subgrupo) {
                    MostrarAlerta("Este subgrupo já foi adicionado para este grupo");
                    e.cancelar = true;
                }
            }
            e.item.Servico_Nome = this.txtServico.GetResultado();
            e.item.Subgrupo_Nome = this.txtSubGrupo.GetResultado();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConEmp.prototype.OnAntesGravar = function () {
        try {
            _super.prototype.OnAntesGravar.call(this);
            this.EntityTela.Setores = [];
            this.EntityTela.Horarios = [];
            this.EntityTela.Servicos = [];
            this.EntityTela.HorariosDiferenciados = [];
            for (var i = 0; i < this.Setores.length; i++) {
                var item = {};
                item.Setor = ("" + this.Setores[i].Setor).CNum();
                item.Empresa = this.EntityTela.Empresa;
                item.Salas = this.Setores[i].Salas;
                this.EntityTela.Setores.push(item);
            }
            for (var i = 0; i < this.Horarios.length; i++) {
                var horario = {};
                horario.Hora_Inicial = this.Horarios[i].Hora_Inicial;
                horario.Hora_Final = this.Horarios[i].Hora_Final;
                horario.Dia_Semana = this.Horarios[i].Dia;
                horario.Empresa = this.EntityTela.Empresa;
                this.EntityTela.Horarios.push(horario);
            }
            for (var i = 0; i < this.HorariosDif.length; i++) {
                var horarioDif = {};
                horarioDif.Hora_Inicial = this.HorariosDif[i].Hora_Inicial;
                horarioDif.Hora_Final = this.HorariosDif[i].Hora_Final;
                horarioDif.Data = this.HorariosDif[i].Data;
                this.EntityTela.HorariosDiferenciados.push(horarioDif);
            }
            this.EntityTela.Servicos = this.Servicos;
            //for (var i = 0; i < this.Servicos.length; i++) {
            //    var servico: SiSMoura.Core.Entity.Animais_Servico_Atendimento = <SiSMoura.Core.Entity.Animais_Servico_Atendimento>{};
            //    servico.Servico = ("" + this.Servicos[i].Servico).CNum();
            //    servico.Subgrupo = ("" + this.Servicos[i].Subgrupo).CNum();
            //    servico.Empresa = this.EntityTela.Empresa;
            //    servico.Horarios = this.Servicos[i].Horarios;
            //    this.EntityTela.Servicos.push(servico);
            //}
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    C_ConEmp.prototype.OnClicouBotaoLinhaSetor = function (s, e) {
        try {
            if (!e.data) {
                return;
            }
            var item = e.data;
            if (e.commandName == "sala") {
                this.AbrirModalSala(item);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConEmp.prototype.OnClicouBotaoLinha = function (s, e) {
        try {
            if (!e.data) {
                return;
            }
            var item = e.data;
            if (e.commandName == "horario") {
                this.AbrirModalServico(item);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConEmp.prototype.AbrirModalSala = function (item) {
        try {
            this.ItemAtualSetor = item;
            if (!this.ItemAtualSetor) {
                MostrarAlerta("Nenhum item foi selecionado para vincular!");
                return;
            }
            if (item.Salas) {
                this.Salas = item.Salas;
            }
            else {
                this.Salas = [];
                this.GridSala.Limpar();
            }
            this.GetScope().$apply();
            this.mdSalas.ModalDialog.Show();
            this.GridSala.AtualizarGrid();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConEmp.prototype.AbrirModalServico = function (item) {
        try {
            this.ItemAtual = item;
            if (!this.ItemAtual) {
                MostrarAlerta("Nenhum item foi selecionado para vincular!");
                return;
            }
            if (item.Horarios) {
                this.HorariosServico = item.Horarios;
            }
            else {
                this.HorariosServico = [];
                this.GridServico.Limpar();
            }
            this.GridServico.AtualizarGrid;
            this.GetScope().$apply();
            this.mdHorarioServico.ModalDialog.Show();
            this.GridHorarioServico.AtualizarGrid();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConEmp.prototype.OnClicOk = function (s, e) {
        try {
            e.processOnServer = false;
            if (!this.ItemAtual) {
                MostrarAlerta("Nenhum item foi selecionado para vincular!");
                return;
            }
            var lista = this.GridServico.Grid.DataSource;
            var item;
            for (var i = 0; i < lista.length; i++) {
                if (lista[i].Servico == this.ItemAtual.Servico && lista[i].Subgrupo == this.ItemAtual.Subgrupo) {
                    item = lista[i];
                }
            }
            if (item) {
                item.Horarios = this.HorariosServico;
            }
            this.GridHorarioServico.Grid.PreencherGrid(lista);
            this.mdHorarioServico.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConEmp.prototype.OnClicOkSala = function (s, e) {
        try {
            e.processOnServer = false;
            if (!this.ItemAtualSetor) {
                MostrarAlerta("Nenhum item foi selecionado para vincular!");
                return;
            }
            var lista = this.gridSetor.Grid.DataSource;
            var item = lista.FirstOrDefault("Setor", this.ItemAtualSetor.Setor);
            if (item) {
                item.Salas = this.Salas;
            }
            this.gridSetor.Grid.PreencherGrid(lista);
            this.mdSalas.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_ConEmp;
}(MouraPageCadastroAngular));
var c_ConEmp = new C_ConEmp();
//# sourceMappingURL=C_ConEmp.js.map