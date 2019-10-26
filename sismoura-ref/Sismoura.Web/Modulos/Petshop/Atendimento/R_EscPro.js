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
var R_EscPro = /** @class */ (function (_super) {
    __extends(R_EscPro, _super);
    function R_EscPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_EscPro.prototype, "grdEscala", {
        get: function () {
            return window['grdEscala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EscPro.prototype, "txtPeriodoEscala", {
        get: function () {
            return window['txtPeriodoEscala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EscPro.prototype, "PeriodosSelecionados", {
        get: function () {
            return this.GetScope()["PeriodosSelecionados"];
        },
        set: function (value) {
            this.GetScope()["PeriodosSelecionados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EscPro.prototype, "btnConfirmarSolicitacao", {
        get: function () {
            return window['btnConfirmarSolicitacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EscPro.prototype, "dlgConfirmarSolicitacao", {
        get: function () {
            return window['dlgConfirmarSolicitacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EscPro.prototype, "cboEmpresaEscala", {
        get: function () {
            return window['cboEmpresaEscala_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EscPro.prototype, "btnFinalizarSolicitacao", {
        get: function () {
            return window['btnFinalizarSolicitacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EscPro.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_EscPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdEscala) {
            adicionarEventoMoura(this.grdEscala.CellPrepared, this.OnGrdEscalaCellPrepared, this);
            adicionarEventoMoura(this.grdEscala.ClickBotaoLinha, this.OnGrdEscalaClicouBotao, this);
        }
        if (this.btnConfirmarSolicitacao) {
            adicionarEventoMoura(this.btnConfirmarSolicitacao.Click, this.OnClickConfirmarSolicitacao, this);
        }
        if (this.btnFinalizarSolicitacao) {
            adicionarEventoMoura(this.btnFinalizarSolicitacao.Click, this.OnClickFinalizarSolicitacao, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickGerar, this);
        }
    };
    R_EscPro.prototype.OnClickGerar = function (s, e) {
        e.processOnServer = false;
        this.PreencherGradeEscala();
    };
    R_EscPro.prototype.ConfigurarGradeEscala = function () {
        this.grdEscala.GroupBy("Dia");
        this.grdEscala.FixarColuna("Dia", true);
        this.grdEscala.FixarColuna("DiaSemana", true);
        var opt = this.grdEscala.Grid.option("paging");
        opt.pageSize = 200;
        this.grdEscala.Grid.option("paging", opt);
    };
    R_EscPro.prototype.PreencherGradeEscala = function () {
        var _this = this;
        try {
            this.PeriodosSelecionados = [];
            this.grdEscala.PreencherGrid(null);
            var parametros = {
                codUsuario: ValoresSismoura.UsuarioLogado,
                dataInicial: this.txtPeriodoEscala.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodoEscala.textBoxCalendarioFim.GetDate()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGridEscala", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grdEscala.Colunas = retorno.ColunasGrade;
                    _this.grdEscala.iniciarGrid();
                    _this.ConfigurarGradeEscala();
                    _this.grdEscala.PreencherGrid(retorno.Dados);
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            this.grdEscala.PreencherGrid([]);
            fecharEspera();
            LogarException(ex);
        }
    };
    R_EscPro.prototype.OnGrdEscalaCellPrepared = function (s, e) {
        try {
            var name_1 = "";
            if (e.column && e.column) {
                name_1 = e.column.name;
            }
            if (e.rowType == "data" && e.data) {
                if (name_1.substring(0, 18).toLowerCase() == "botaotemplate_hora") {
                    var dados = e.data[replaceAllNoCase(name_1, "botaotemplate_", "")];
                    var cor = dados.split("|")[1];
                    var empresa = dados.split("|")[2];
                    if (!String.IsNullOrWhiteSpace(cor)) {
                        e.cellElement.css("background-color", cor);
                        e.cellElement.css("color", cor);
                        e.cellElement.addClass("botaoFull");
                        if (cor.toLowerCase() != "white") {
                            $(e.cellElement).find("input").attr("title", empresa.split("-")[1]);
                        }
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_EscPro.prototype.OnGrdEscalaClicouBotao = function (s, e) {
        try {
            if (String.IsNullOrWhiteSpace(e.commandName)) {
                return;
            }
            if (e.data['Dia'] <= new Date()) {
                MostrarAlerta("Selecione um período após o dia de hoje");
                return;
            }
            if (e.commandName.substring(0, 5).toLowerCase() == "hora-") {
                var periodoEncontrado = false;
                var cor = ("" + e.data[e.commandName]).split("|")[1];
                if (cor.toLocaleLowerCase() == "orange" || cor.toLocaleLowerCase() == "yellow") {
                    MostrarAlerta("Período já solicitado");
                    return;
                }
                if (this.PeriodosSelecionados.length > 0) {
                    for (var i = 0; i < this.PeriodosSelecionados.length; i++) {
                        if (this.PeriodosSelecionados[i].Hora == e.commandName.split("-")[1] &&
                            this.PeriodosSelecionados[i].Data == e.data['Dia'] &&
                            this.PeriodosSelecionados[i].DiaSemana == this.RetornaDiaSemana(("" + e.data['DiaSemana']))) {
                            this.grdEscala.Grid.getCellElement(e.rowIndex, e.columnIndex).css("background-color", cor);
                            this.grdEscala.Grid.getCellElement(e.rowIndex, e.columnIndex).css("color", cor);
                            this.PeriodosSelecionados.splice(i, 1);
                            periodoEncontrado = true;
                            break;
                        }
                    }
                }
                if (!periodoEncontrado) {
                    var tipo = "";
                    (cor.toLocaleLowerCase() == "white") ? tipo = "E" : tipo = "I";
                    var empresa = 0;
                    if (tipo == "I") {
                        empresa = ("" + e.data[e.commandName]).split("|")[2].CNum();
                    }
                    this.PeriodosSelecionados.push({
                        Data: e.data['Dia'],
                        Hora: e.commandName.split("-")[1],
                        DiaSemana: this.RetornaDiaSemana(("" + e.data['DiaSemana']).toLowerCase()),
                        Tipo: tipo,
                        Empresa: empresa
                    });
                    if (tipo == "E") {
                        this.grdEscala.Grid.getCellElement(e.rowIndex, e.columnIndex).css("background-color", "yellow");
                        this.grdEscala.Grid.getCellElement(e.rowIndex, e.columnIndex).css("color", "yellow");
                    }
                    else {
                        this.grdEscala.Grid.getCellElement(e.rowIndex, e.columnIndex).css("background-color", "orange");
                        this.grdEscala.Grid.getCellElement(e.rowIndex, e.columnIndex).css("color", "orange");
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_EscPro.prototype.RetornaDiaSemana = function (diaSemana) {
        var retorno = 0;
        try {
            switch (diaSemana.toLowerCase()) {
                case "domingo":
                    retorno = 1;
                    break;
                case "segunda-feira":
                    retorno = 2;
                    break;
                case "terça-feira":
                    retorno = 3;
                    break;
                case "quarta-feira":
                    retorno = 4;
                    break;
                case "quinta-feira":
                    retorno = 5;
                    break;
                case "sexta-feira":
                    retorno = 6;
                    break;
                case "sabado":
                    retorno = 7;
                    break;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    R_EscPro.prototype.OnClickConfirmarSolicitacao = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            if (!this.PeriodosSelecionados || this.PeriodosSelecionados.length <= 0) {
                MostrarAlerta("Nenhum período selecionado");
                return;
            }
            MsgBoxJS("Informe para qual unidade é a solicitação de escala.", MsgBoxOptions.OkOnly, MsgBoxIcon.Info, function (result) {
                var empresas = _this.ExecutarFuncaoServerSideSynch("GetEmpresasProfissional", { usuario: ValoresSismoura.UsuarioLogado });
                if (!empresas || !empresas.Empresas)
                    return;
                _this.cboEmpresaEscala.Combo.ClearItems();
                empresas.Empresas.forEach(function (q) {
                    _this.cboEmpresaEscala.Combo.AddItem(q.Empresa, q.Codigo, "");
                });
                _this.dlgConfirmarSolicitacao.Show();
            });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_EscPro.prototype.OnClickFinalizarSolicitacao = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            if (("" + this.cboEmpresaEscala.GetValue()).CNum() <= 0) {
                MostrarAlerta("Informe para qual unidade deseja solicitar o horário");
                return;
            }
            var codPrestador_1 = this.ExecutarFuncaoServerSideSynch("GetCodProfissional", { usuario: ValoresSismoura.UsuarioLogado });
            if (codPrestador_1 <= 0)
                return;
            var listaPeriodos_1 = [];
            this.PeriodosSelecionados.forEach(function (q) {
                if (q.Empresa <= 0)
                    q.Empresa = ("" + _this.cboEmpresaEscala.GetValue()).CNum();
                listaPeriodos_1.push({
                    Data: q.Data,
                    Dia: q.DiaSemana,
                    Empresa: q.Empresa,
                    Hora: q.Hora,
                    Profissional: codPrestador_1,
                    Tipo: q.Tipo
                });
            });
            var param = {
                periodos: JSON.stringify(listaPeriodos_1),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GravarSolicitacoes", param, function (d) {
                (d) ? MostrarMensagem("Solicitações gravadas com sucesso") : MostrarError("Ocorreu um erro no sistema");
                _this.dlgConfirmarSolicitacao.Hide();
                fecharEspera();
            }, function (er) {
                fecharEspera();
                LogarExceptionAjax(er);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_EscPro;
}(MouraPageAngular));
var r_EscPro = new R_EscPro();
//# sourceMappingURL=R_EscPro.js.map