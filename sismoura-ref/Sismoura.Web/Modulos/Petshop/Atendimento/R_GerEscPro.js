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
var R_GerEscPro = /** @class */ (function (_super) {
    __extends(R_GerEscPro, _super);
    function R_GerEscPro() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.codigoAlteracaoSelecionado = 0;
        _this.temAtendimentoSelcionado = 0;
        return _this;
    }
    Object.defineProperty(R_GerEscPro.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerEscPro.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerEscPro.prototype, "txtData", {
        get: function () {
            return window["txtData_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerEscPro.prototype, "txtProfissional", {
        get: function () {
            return window["txtProfissional_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerEscPro.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerEscPro.prototype, "lblData", {
        get: function () {
            return window['lblData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerEscPro.prototype, "btnMenos", {
        get: function () {
            return window['btnMenos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerEscPro.prototype, "btnMais", {
        get: function () {
            return window['btnMais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerEscPro.prototype, "agpData", {
        get: function () {
            return window['agpData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerEscPro.prototype, "PeriodosSelecionados", {
        get: function () {
            return this.GetScope()["PeriodosSelecionados"];
        },
        set: function (value) {
            this.GetScope()["PeriodosSelecionados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerEscPro.prototype, "btnAprovar", {
        get: function () {
            return window['btnAprovar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerEscPro.prototype, "btnReprovar", {
        get: function () {
            return window['btnReprovar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerEscPro.prototype, "dlgRealocar", {
        get: function () {
            return window['dlgRealocar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerEscPro.prototype, "grdRealocar", {
        get: function () {
            return window['grdRealocar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_GerEscPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnGridCellPrepared, this);
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.OnGridClicouBotao, this);
            //Exibir linhas
            if (this.grid.Grid) {
                this.grid.Grid.option("showRowLines", true);
            }
        }
        if (this.btnMenos) {
            adicionarEventoMoura(this.btnMenos.Click, this.OnClickBtnMenos, this);
        }
        if (this.btnMais) {
            adicionarEventoMoura(this.btnMais.Click, this.OnClickBtnMais, this);
        }
        if (this.btnAprovar) {
            adicionarEventoMoura(this.btnAprovar.Click, this.OnClickBtnAprovar, this);
        }
        if (this.btnReprovar) {
            adicionarEventoMoura(this.btnReprovar.Click, this.OnClickBtnReprovar, this);
        }
        if (this.grdRealocar) {
            adicionarEventoMoura(this.grdRealocar.SelecionouLinha, this.OnGrdRealocarSelecionouLinha, this);
        }
    };
    R_GerEscPro.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_GerEscPro.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        try {
            this.PeriodosSelecionados = [];
            this.agpData.Visible = false;
            this.txtData.Date = new Date();
            this.txtProfissional.Limpar();
            //this.ConfigurarGrade();
            this.grid.PreencherGrid([]);
            if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
                this.lstEmpresa.SelecionarEmpresaPadraoUsuario;
            }
            this.grdRealocar.PreencherGrid([]);
            this.codigoAlteracaoSelecionado = 0;
            this.temAtendimentoSelcionado = 0;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_GerEscPro.prototype.OnClickBtnMenos = function (s, e) {
        try {
            e.processOnServer = false;
            this.txtData.Date = this.txtData.Date.addDays(-1);
            this.lblData.Text = "Data: " + this.txtData.Date.FormataData() + " (" + this.retornarDiaSemana(this.txtData.Date.getDay()) + ")";
            this.PreencherGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_GerEscPro.prototype.OnClickBtnMais = function (s, e) {
        try {
            e.processOnServer = false;
            this.txtData.Date = this.txtData.Date.addDays(1);
            this.lblData.Text = "Data: " + this.txtData.Date.FormataData() + " (" + this.retornarDiaSemana(this.txtData.Date.getDay()) + ")";
            this.PreencherGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_GerEscPro.prototype.OnGridCellPrepared = function (s, e) {
        try {
            var name = "";
            if (e.column && e.column) {
                name = e.column.name;
            }
            if (e.rowType == "data" && e.data) {
                if (name.substring(0, 18).toLowerCase() == "botaotemplate_hora") {
                    var dados = e.data[replaceAllNoCase(name, "botaotemplate_", "")];
                    if (dados && dados.split("|").length > 0) {
                        var cor = dados.split("|")[1];
                        var temAtendimento = dados.split("|")[3].CNum();
                        if (!String.IsNullOrWhiteSpace(cor)) {
                            e.cellElement.css("background-color", cor);
                        }
                        if (temAtendimento > 0) {
                            $(e.cellElement).find("input").prop('value', '***');
                            $(e.cellElement).find("input").css({ 'color': 'white', 'font-size': '150%', 'font-weight': 'bold' });
                        }
                    }
                    else {
                        e.cellElement.css("background-color", 'White');
                        e.cellElement.css("color", 'White');
                    }
                    e.cellElement.addClass("botaoFull");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_GerEscPro.prototype.OnGridClicouBotao = function (s, e) {
        var _this = this;
        try {
            if (String.IsNullOrWhiteSpace(e.commandName)) {
                return;
            }
            this.grdRealocar.PreencherGrid([]);
            this.codigoAlteracaoSelecionado = 0;
            this.temAtendimentoSelcionado = 0;
            if (e.commandName.substring(0, 5).toLowerCase() == "hora-") {
                var periodoEncontrado = false;
                var cor = ("" + e.data[e.commandName]).split("|")[1];
                if (cor.toLocaleLowerCase() != "yellow") {
                    MostrarAlerta("Selecione um período solicitado");
                    return;
                }
                var codigoAlteracao_1 = ("" + e.data[e.commandName]).split("|")[2].CNum();
                if (this.PeriodosSelecionados.length > 0) {
                    for (var i = 0; i < this.PeriodosSelecionados.length; i++) {
                        if (this.PeriodosSelecionados[i].Codigo_Alteracao == codigoAlteracao_1) {
                            this.grid.Grid.getCellElement(e.rowIndex, e.columnIndex).css("background-color", cor);
                            this.grid.Grid.getCellElement(e.rowIndex, e.columnIndex).css("color", cor);
                            this.PeriodosSelecionados.splice(i, 1);
                            periodoEncontrado = true;
                            break;
                        }
                    }
                }
                if (!periodoEncontrado) {
                    var temAtendimento_1 = ("" + e.data[e.commandName]).split("|")[3].CNum();
                    this.codigoAlteracaoSelecionado = codigoAlteracao_1;
                    this.temAtendimentoSelcionado = temAtendimento_1;
                    if (temAtendimento_1 > 0) {
                        MsgBoxJS("Para aprovar um pedido de indisponilidade que possua um agendamento cadastrado é preciso realocar o mesmo para outro profissional. Caso for reprovar, não continue para a realocação. Deseja realocar o agendamento?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                            if (result.Resultado == MsgBoxResult.Yes) {
                                var profissionais = _this.ExecutarFuncaoServerSideSynch("GetProfissionaisServico", { codAnimaisServico: temAtendimento_1 });
                                if (!profissionais || profissionais.length <= 0) {
                                    MostrarAlerta("Nenhum profissional liberado para realocar");
                                    return;
                                }
                                _this.grid.Grid.getCellElement(e.rowIndex, e.columnIndex).css("background-color", "orange");
                                _this.grid.Grid.getCellElement(e.rowIndex, e.columnIndex).css("color", "orange");
                                _this.grdRealocar.PreencherGrid(profissionais);
                                _this.dlgRealocar.Show();
                            }
                            else {
                                _this.PeriodosSelecionados.push({
                                    Codigo_Alteracao: codigoAlteracao_1,
                                    Animais_Servicos: temAtendimento_1,
                                    Profissional_Selecionado: 0
                                });
                                _this.grid.Grid.getCellElement(e.rowIndex, e.columnIndex).css("background-color", "orange");
                                _this.grid.Grid.getCellElement(e.rowIndex, e.columnIndex).css("color", "orange");
                            }
                        });
                    }
                    else {
                        this.PeriodosSelecionados.push({
                            Codigo_Alteracao: codigoAlteracao_1,
                            Animais_Servicos: 0,
                            Profissional_Selecionado: 0
                        });
                        this.grid.Grid.getCellElement(e.rowIndex, e.columnIndex).css("background-color", "orange");
                        this.grid.Grid.getCellElement(e.rowIndex, e.columnIndex).css("color", "orange");
                    }
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_GerEscPro.prototype.OnGrdRealocarSelecionouLinha = function (s, e) {
        try {
            var profissionalSelecionado = ("" + e.data['Codigo_Profissional']).CNum();
            if (profissionalSelecionado <= 0)
                return;
            this.PeriodosSelecionados.push({
                Animais_Servicos: this.temAtendimentoSelcionado,
                Codigo_Alteracao: this.codigoAlteracaoSelecionado,
                Profissional_Selecionado: profissionalSelecionado
            });
            this.codigoAlteracaoSelecionado = 0;
            this.temAtendimentoSelcionado = 0;
            this.dlgRealocar.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_GerEscPro.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        try {
            this.PeriodosSelecionados = [];
            if (this.txtData.Date == null || this.txtData.Date == undefined) {
                MostrarAlerta("Informe a data!");
                return;
            }
            var param = {
                data: this.txtData.Date,
                codProfissional: this.txtProfissional.GetText().CNum(),
                empresas: this.lstEmpresa.GetValuesRelacaoNumber()
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GerarRelacao", param, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.Colunas = retorno.ColunasGrade;
                    _this.grid.iniciarGrid();
                    _this.ConfigurarGrade();
                    _this.grid.PreencherGrid(retorno.Dados);
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (er) {
                fecharEspera();
                LogarExceptionAjax(er);
            }, this);
            this.lblData.Text = "Data: " + this.txtData.Date.FormataData() + " (" + this.retornarDiaSemana(this.txtData.Date.getDay()) + ")";
            this.agpData.Visible = true;
            this.AccordionFiltros.SetExpanded(false);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    R_GerEscPro.prototype.ConfigurarGrade = function () {
        this.grid.GroupBy("Empresa");
        this.grid.FixarColuna("Empresa", true);
        this.grid.FixarColuna("Profissional", true);
        var opt = this.grid.Grid.option("paging");
        opt.pageSize = 200;
        this.grid.Grid.option("paging", opt);
    };
    R_GerEscPro.prototype.OnClickBtnAprovar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            if (!this.PeriodosSelecionados || this.PeriodosSelecionados.length <= 0) {
                MostrarAlerta("Selecione ao menos um pedido de alteração para aprovar");
                return;
            }
            for (var i = 0; i < this.PeriodosSelecionados.length; i++) {
                if (this.PeriodosSelecionados[i].Profissional_Selecionado <= 0 && this.PeriodosSelecionados[i].Animais_Servicos > 0) {
                    MostrarAlerta("Não é possível aprovar um pedido sem realocar o agendamento");
                    return;
                }
            }
            MsgBoxJS("Deseja realmente aprovar os selecionados?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (result) {
                if (result.Resultado == MsgBoxResult.No)
                    return;
                _this.AprovarReprovar(true);
            });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_GerEscPro.prototype.OnClickBtnReprovar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            if (!this.PeriodosSelecionados || this.PeriodosSelecionados.length <= 0) {
                MostrarAlerta("Selecione ao menos um pedido de alteração para reprovar");
                return;
            }
            MsgBoxJS("Deseja realmente reprovar os selecionados?", MsgBoxOptions.YesNo, MsgBoxIcon.Alert, function (result) {
                if (result.Resultado == MsgBoxResult.No)
                    return;
                _this.AprovarReprovar(false);
            });
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_GerEscPro.prototype.AprovarReprovar = function (aprovar) {
        var _this = this;
        try {
            var status_1 = 0;
            (aprovar) ? status_1 = 1 : status_1 = 2;
            var param = {
                codigosAlteracao: this.PeriodosSelecionados,
                status: status_1,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("AprovarReprovar", param, function (d) {
                fecharEspera();
                if (d) {
                    (aprovar) ? MostrarMensagem("Solicitação aprovada com sucesso") : MostrarMensagem("Solicitação reprovada com sucesso");
                    _this.PreencherGrade();
                }
                else {
                    MostrarError("Ocorreu um erro no sistema");
                }
            }, function (er) {
                fecharEspera();
                LogarExceptionAjax(er);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    R_GerEscPro.prototype.retornarDiaSemana = function (dia) {
        switch (dia) {
            case 0:
                return "Domingo";
            case 1:
                return "Segunda-Feira";
            case 2:
                return "Terça-Feira";
            case 3:
                return "Quarta-Feira";
            case 4:
                return "Quinta-Feira";
            case 5:
                return "Sexta-Feira";
            case 6:
                return "Sábado";
        }
        return "";
    };
    return R_GerEscPro;
}(MouraPageRelacaoAngular));
var r_GerEscPro = new R_GerEscPro();
//# sourceMappingURL=R_GerEscPro.js.map