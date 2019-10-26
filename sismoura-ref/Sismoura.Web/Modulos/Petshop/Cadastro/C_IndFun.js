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
var C_IndFun = /** @class */ (function (_super) {
    __extends(C_IndFun, _super);
    function C_IndFun() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_IndFun.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IndFun.prototype, "txtFuncionario", {
        get: function () {
            return window['txtFuncionario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IndFun.prototype, "txtDataInicial", {
        get: function () {
            return window['txtDataInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IndFun.prototype, "txtDataFinal", {
        get: function () {
            return window['txtDataFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IndFun.prototype, "txtHoraInicial", {
        get: function () {
            return window['txtHoraInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IndFun.prototype, "txtHoraFinal", {
        get: function () {
            return window['txtHoraFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IndFun.prototype, "optOpcao", {
        get: function () {
            return window['optOpcao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IndFun.prototype, "grdAtendimentos", {
        get: function () {
            return window['grdAtendimentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IndFun.prototype, "dlgAtendimentos", {
        get: function () {
            return window['dlgAtendimentos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IndFun.prototype, "btnVoltar", {
        get: function () {
            return window['btnVoltar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IndFun.prototype, "btnExcluirPetz", {
        get: function () {
            return window['btnExcluirPetz_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_IndFun.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.txtFuncionario) {
            adicionarEventoMoura(this.txtFuncionario.Procurou, this.OnBuscouFuncionario, this);
        }
        if (this.grdAtendimentos) {
            adicionarEventoMoura(this.grdAtendimentos.SelecionouLinha, this.OnGrdAtendimentosSelecionouLinha, this);
        }
        if (this.btnVoltar) {
            adicionarEventoMoura(this.btnVoltar.Click, this.OnBtnVoltarClick, this);
        }
        if (this.btnExcluirPetz) {
            adicionarEventoMoura(this.btnExcluirPetz.Click, this.OnBtnExcluirPetzClick, this);
        }
    };
    C_IndFun.prototype.OnGrdAtendimentosSelecionouLinha = function (s, e) {
        this.AbrirAtendimento(e.rowKey);
    };
    C_IndFun.prototype.AbrirAtendimento = function (codAtendimento) {
        var parametros = [];
        parametros.push("codigo=" + codAtendimento);
        abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroDeAtendimento), parametros);
    };
    C_IndFun.prototype.OnBuscouFuncionario = function () {
        this.PreencherGrade();
    };
    C_IndFun.prototype.OnGridSelecionouItem = function (s, e) {
        if (!e.data || e.data == undefined) {
            return;
        }
        this.PreencherEntidade(e.rowKey);
    };
    C_IndFun.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouPeriodo) {
            this.GetScope().MudouPeriodo = $.proxy(this.MudouPeriodo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo_Indisponibilidade; }, this.GetScope().MudouPeriodo);
        }
        this.OnDepoisLimpar(this.GetScope().Entity);
        if (this.ParametrosTela.CodProfissional) {
            this.EntityTela.Funcionario = this.ParametrosTela.CodProfissional.CNum();
            this.txtFuncionario.Enabled = false;
        }
    };
    C_IndFun.prototype.MudouPeriodo = function (newValue, oldValue) {
        var entidade;
        entidade = this.GetScope().Entity;
        if (String.IsNullOrWhiteSpace(newValue)) {
            newValue = "D";
        }
        if (newValue == 'D') {
            this.txtDataInicial.Visible = true;
            this.txtDataFinal.Visible = true;
            this.txtHoraFinal.Visible = false;
            this.txtHoraInicial.Visible = false;
            entidade.Hora_Inicial = null;
            entidade.Hora_Final = null;
        }
        else {
            this.txtHoraFinal.Visible = true;
            this.txtHoraInicial.Visible = true;
            this.txtDataInicial.Visible = true;
            this.txtDataFinal.Visible = false;
            if (entidade.Data_Inicial == null) {
                entidade.Data_Inicial = this.DataServidor();
            }
            entidade.Data_Final = null;
        }
        this.GetScope().$applyAsync();
    };
    C_IndFun.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        this.PreencherGrade();
        if (Entidade.Data_Final != null && Entidade.Data_Inicial != null) {
            Entidade.Tipo_Indisponibilidade = "D";
        }
        if (Entidade.Hora_Final != null && Entidade.Hora_Inicial != null && Entidade.Data_Inicial != null) {
            Entidade.Tipo_Indisponibilidade = "H";
        }
    };
    C_IndFun.prototype.OnDepoisLimpar = function (Entity) {
        if (String.IsNullOrWhiteSpace(Entity.Tipo_Indisponibilidade)) {
            Entity.Tipo_Indisponibilidade = "D";
        }
        if (this.ParametrosTela.CodProfissional) {
            Entity.Funcionario = this.ParametrosTela.CodProfissional.CNum();
        }
        this.grid.LimparSelecao();
        this.RefreshAngular();
        this.PreencherGrade();
    };
    C_IndFun.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        if (ValoresSismoura.ConfiguracoesPetshop.Integracao_Zanthus == true) {
            this.Limpar();
        }
        return true;
    };
    C_IndFun.prototype.OnBtnVoltarClick = function (s, e) {
        e.processOnServer = false;
        try {
            this.dlgAtendimentos.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_IndFun.prototype.OnBtnExcluirPetzClick = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            if (this.grid.GetSelectedRowsData.length <= 0) {
                MostrarAlerta("Selecione ao menos um item na Grade para excluir.");
                return;
            }
            MsgBoxJS("Deseja realmente excluir a(s) indisponibilidade(s) selecionada(s)?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.No) {
                    return;
                }
                var codigos = [];
                _this.grid.GetSelectedRowsData.forEach(function (q) {
                    if (("" + q.Codigo).CNum() > 0) {
                        codigos.push(("" + q.Codigo).CNum());
                    }
                });
                if (codigos.length > 0) {
                    var param = {
                        codigos: codigos,
                        tela: ValoresSismoura.NomeTela,
                        codUsuario: ValoresSismoura.UsuarioLogado
                    };
                    abrirEspera("");
                    _this.ExecutarFuncaoServerSideAsynch("ExcluirRegistros", param, function (d) {
                        try {
                            fecharEspera();
                            if (d) {
                                MostrarMensagem("Registros excluidos com sucesso");
                                _this.Limpar();
                            }
                            else {
                                MostrarError("Ocorreu um erro no sistema");
                            }
                        }
                        catch (ex) {
                            fecharEspera();
                            LogarException(ex);
                        }
                    }, function (erro) {
                        fecharEspera();
                        LogarExceptionAjax(erro);
                    }, _this);
                }
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_IndFun.prototype.OnAntesGravar = function () {
        try {
            _super.prototype.OnAntesGravar.call(this);
            if (this.EntityTela.Data_Inicial) {
                var dtInicial = this.txtDataInicial.Date;
                dtInicial.setHours((dtInicial.getTimezoneOffset() / 60));
                this.EntityTela.Data_Inicial = dtInicial;
            }
            if (this.EntityTela.Data_Final) {
                var dtFinal = this.txtDataFinal.Date;
                dtFinal.setHours((dtInicial.getTimezoneOffset() / 60));
                this.EntityTela.Data_Final = dtFinal;
            }
            var dataInicial = this.EntityTela.Data_Inicial;
            var dataFinal = this.EntityTela.Data_Final;
            if (!dataFinal) {
                dataFinal = dataInicial;
            }
            var parametros = {
                datInicial: dataInicial,
                datFinal: dataFinal,
                horaInicial: this.txtHoraInicial.textBoxHorario.GetText(),
                horaFinal: this.txtHoraFinal.textBoxHorario.GetText(),
                profissional: this.txtFuncionario.GetText().CNum(),
                opcao: this.optOpcao.GetValue()
            };
            var itens = this.ExecutarFuncaoServerSideSynch("VerificarAtendimentos", parametros);
            this.grdAtendimentos.PreencherGrid(itens);
            if (this.grdAtendimentos.DataSource && this.grdAtendimentos.DataSource.length > 0) {
                setTimeout($.proxy(function () {
                    MsgBoxJS("Não será possível cadastrar esta indisponibilidade, pois existem agendamentos neste período que deverão ser reagendados.</b> Deseja visualizá-los?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnSelecionouMSGBoxAtendimento, this), null);
                }, this), 200);
                return;
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    C_IndFun.prototype.OnSelecionouMSGBoxAtendimento = function (e) {
        if (e.Resultado == MsgBoxResult.Yes) {
            this.grdAtendimentos.Refresh();
            this.dlgAtendimentos.Show();
        }
    };
    C_IndFun.prototype.PreencherGrade = function () {
        try {
            var codFuncionario = 0;
            if (this.txtFuncionario.GetText().CNum() != null || this.txtFuncionario.GetText().CNum() != undefined) {
                codFuncionario = this.txtFuncionario.GetText().CNum();
            }
            var parametros;
            parametros = {
                codFuncionario: codFuncionario
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetPorFuncionario", parametros);
            this.grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_IndFun;
}(MouraPageCadastroAngular));
var c_IndFun = new C_IndFun();
//# sourceMappingURL=C_IndFun.js.map