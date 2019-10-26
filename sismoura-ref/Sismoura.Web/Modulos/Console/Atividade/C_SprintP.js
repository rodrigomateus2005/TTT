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
var C_SprintP = /** @class */ (function (_super) {
    __extends(C_SprintP, _super);
    function C_SprintP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SprintP.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "cboSprint", {
        get: function () {
            return window['cboSprint_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "cboStaus", {
        get: function () {
            return window['cboStaus_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "txtPeriodoSprint", {
        get: function () {
            return window['txtPeriodoSprint_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "txtPeriodoAnalise", {
        get: function () {
            return window['txtPeriodoAnalise_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "txtPeriodoDesenvolvimento", {
        get: function () {
            return window['txtPeriodoDesenvolvimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "chkFreelancer", {
        get: function () {
            return window['chkFreelancer_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "chkLiberacaoMensal", {
        get: function () {
            return window['chkLiberacaoMensal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "DivKambam", {
        get: function () {
            return $("#dvKamban");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "btnCadastro", {
        get: function () {
            return window['btnCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "btnFecharSprint", {
        get: function () {
            return window['btnFecharSprint_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "mdCadastro", {
        get: function () {
            return window['mdCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "cboPeriodoSprint", {
        get: function () {
            return window['cboPeriodoSprint_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "txtAtividade", {
        get: function () {
            return window['txtAtividade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "txtProgramador", {
        get: function () {
            return window['txtProgramador_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "grdAtividades", {
        get: function () {
            return window['grdAtividades_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "grdProgramadores", {
        get: function () {
            return window['grdProgramadores_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "btnSalvarSprint", {
        get: function () {
            return window['btnSalvarSprint_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "btnFecharInf", {
        get: function () {
            return window['btnFecharInf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "btnAdicionarAtividade", {
        get: function () {
            return window['btnAdicionarAtividade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "mdInf", {
        get: function () {
            return window['mdInf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "lblDataCadInf", {
        get: function () {
            return window['lblDataCadInf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "lblDiasDesenv", {
        get: function () {
            return window['lblDiasDesenv_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "btnConsultarAtividade", {
        get: function () {
            return window['btnConsultarAtividade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "grdKanban", {
        get: function () {
            return window['grdKanban_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "Sprint", {
        get: function () {
            if (!this.GetScope()["Sprint"]) {
                return null;
            }
            else {
                return this.GetScope()["Sprint"];
            }
        },
        set: function (value) {
            this.GetScope()["Sprint"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "Atividade", {
        get: function () {
            if (!this.GetScope()["Atividade"]) {
                return null;
            }
            else {
                return this.GetScope()["Atividade"];
            }
        },
        set: function (value) {
            this.GetScope()["Atividade"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "DadosAtividade", {
        get: function () {
            if (!this.GetScope()["DadosAtividade"]) {
                return null;
            }
            else {
                return this.GetScope()["DadosAtividade"];
            }
        },
        set: function (value) {
            this.GetScope()["DadosAtividade"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "IsLiderProgramacao", {
        get: function () {
            var hdn = window['hdnLiderProgramacao'];
            return $(hdn).val() == "S" ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "mdProcurarAtividades", {
        get: function () {
            return window['mdProcurarAtividades_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "grdAtv", {
        get: function () {
            return window['grdAtv_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SprintP.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Sprint = {};
    };
    Object.defineProperty(C_SprintP.prototype, "Info", {
        get: function () {
            if (!this.GetScope()["Info"]) {
                this.GetScope()["Info"] = {};
            }
            return this.GetScope()["Info"];
        },
        set: function (value) {
            this.GetScope()["Info"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "chkTransbordo", {
        get: function () {
            return window['chkTransbordo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "chkPodeAtrasar", {
        get: function () {
            return window['chkPodeAtrasar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "optTipo", {
        get: function () {
            return window['optTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "agpSprint", {
        get: function () {
            return window['agpSprint_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "chkExibirFinalizadas", {
        get: function () {
            return window['chkExibirFinalizadas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "btnAlterarHoras", {
        get: function () {
            return window['btnAlterarHoras_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "mdTransbordo", {
        get: function () {
            return window['mdTransbordo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "lblAtividadeTransbordo", {
        get: function () {
            return window['lblAtividadeTransbordo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "lblProgramadorOriginalTransbordo", {
        get: function () {
            return window['lblProgramadorOriginalTransbordo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "cboSprintTransbordo", {
        get: function () {
            return window['cboSprintTransbordo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "txtProgramadorTransbordo", {
        get: function () {
            return window['txtProgramadorTransbordo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "chkPodeAtrasarTransbordo", {
        get: function () {
            return window['chkPodeAtrasarTransbordo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "btnConfirmarTransbordo", {
        get: function () {
            return window['btnConfirmarTransbordo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SprintP.prototype, "btnFecharTransbordo", {
        get: function () {
            return window['btnFecharTransbordo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SprintP.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        this.PreencherGrade();
        if (!this.GetScope().AlterouData) {
            this.GetScope().AlterouData = $.proxy(this.AlterouData, this);
            this.GetScope().$watch(function (scope) { return scope.Sprint.Data_Inicio_Desenvolvimento; }, this.GetScope().AlterouData);
            this.GetScope().$watch(function (scope) { return scope.Sprint.Data_Fim_Desenvolvimento; }, this.GetScope().AlterouData);
        }
    };
    C_SprintP.prototype.AlterouData = function (newValue, oldValue) {
        this.CalculaTotaisSprint();
    };
    C_SprintP.prototype.Init = function () {
        var _this = this;
        _super.prototype.Init.call(this);
        if (this.btnCadastro) {
            adicionarEventoMoura(this.btnCadastro.Click, this.OnClickCadastro, this);
        }
        if (this.btnFecharSprint) {
            adicionarEventoMoura(this.btnFecharSprint.Click, this.OnClickFecharSprint, this);
        }
        if (this.btnSalvarSprint) {
            adicionarEventoMoura(this.btnSalvarSprint.Click, this.OnClickSalvarSprint, this);
        }
        if (this.btnAdicionarAtividade) {
            adicionarEventoMoura(this.btnAdicionarAtividade.Click, this.OnClickAdicionarAtividade, this);
        }
        if (this.txtAtividade) {
            adicionarEventoMoura(this.txtAtividade.Procurou, this.OnPesquisouAtividade, this);
        }
        if (this.cboSprint) {
            adicionarEventoMoura(this.cboSprint.SelectedItemChanged, this.OnIndexChangedSprint, this);
        }
        if (this.cboPeriodoSprint) {
            adicionarEventoMoura(this.cboPeriodoSprint.SelectedItemChanged, this.OnIndexChangedPeriodo, this);
        }
        if (this.grdAtividades) {
            adicionarEventoMoura(this.grdAtividades.SelecionouLinha, this.OnSelecionouLinhaAtividade, this);
            adicionarEventoMoura(this.grdAtividades.ExcluiuLinhaGrade, this.OnExcluiuAtividade, this);
            adicionarEventoMoura(this.grdAtividades.ExcluindoLinhaGrade, this.OnExclindoAtividade, this);
            adicionarEventoMoura(this.grdAtividades.CellPrepared, this.OnGridAtividadesCellPrepared, this);
            adicionarEventoMoura(this.grdAtividades.ClickBotaoLinha, this.OnClickBotaoLinhaAtividade, this);
            this.grdAtividades.SetPageSize(200);
        }
        if (this.btnFecharInf) {
            adicionarEventoMoura(this.btnFecharInf.Click, this.OnClickFecharModalInf, this);
        }
        if (this.grdProgramadores) {
            adicionarEventoMoura(this.grdProgramadores.EditouItemGrade, this.OnEditouItemProgramadores, this);
            adicionarEventoMoura(this.grdProgramadores.RowValidating, this.OnEditandoItemProgramadores, this);
            adicionarEventoMoura(this.grdProgramadores.CellPrepared, this.OnGridCellPreparedProgramadores, this);
            this.grdProgramadores.SetPageSize(200);
        }
        if (this.btnConsultarAtividade) {
            adicionarEventoMoura(this.btnConsultarAtividade.Click, this.OnClickConsultarAtividade, this);
        }
        if (this.grdAtv) {
            adicionarEventoMoura(this.grdAtv.SelecionouLinha, this.OnSelecionouLinhaRelacao, this);
            adicionarEventoMoura(this.grdAtv.ClickBotaoLinha, this.OnClicouLinhaRelacao, this);
            this.grdAtv.SetPageSize(200);
        }
        if (this.optTipo) {
            adicionarEventoMoura(this.optTipo.SelectionChanged, this.OnAlterouOptTipo, this);
        }
        if (this.chkExibirFinalizadas) {
            adicionarEventoMoura(this.chkExibirFinalizadas.CheckChanged, this.OnAlterouCheckFinalizado, this);
            this.chkExibirFinalizadas.Checked = false;
        }
        if (this.grdKanban) {
            this.grdKanban.SetPageSize(200);
            adicionarEventoMoura(this.grdKanban.SelecionouLinha, this.OnSelecionouLinhaKanban, this);
            adicionarEventoMoura(this.grdKanban.CellPrepared, this.OnGridKanbamCellPrepared, this);
            adicionarEventoMoura(this.grdKanban.ClickBotaoLinha, this.OnClickBotaoLinhaKanban, this);
        }
        if (this.btnAlterarHoras) {
            adicionarEventoMoura(this.btnAlterarHoras.Click, this.OnClickAlterarHoras, this);
        }
        if (this.btnFecharTransbordo) {
            adicionarEventoMoura(this.btnFecharTransbordo.Click, this.OnClickFecharTransbordo, this);
        }
        if (this.btnFecharTransbordo) {
            adicionarEventoMoura(this.btnConfirmarTransbordo.Click, this.OnClickSalvarTransbordo, this);
        }
        this.DivKambam.css("width", $("#content").width() - 50);
        setTimeout(function () {
            _this.PreencherComboStatus();
            _this.PreencherComboSprint();
        }, 1000);
        this.HabilitaCampos();
        this.AlterarTipo(false);
    };
    C_SprintP.prototype.HabilitaCampos = function () {
        this.cboStaus.Enabled = this.IsLiderProgramacao;
        this.txtDescricao.Disabled = !this.IsLiderProgramacao;
        this.txtPeriodoAnalise.textBoxCalendarioFim.SetEnabled(this.IsLiderProgramacao);
        this.txtPeriodoAnalise.textBoxCalendarioInicio.SetEnabled(this.IsLiderProgramacao);
        this.txtPeriodoSprint.textBoxCalendarioFim.SetEnabled(this.IsLiderProgramacao);
        this.txtPeriodoSprint.textBoxCalendarioInicio.SetEnabled(this.IsLiderProgramacao);
        this.txtPeriodoDesenvolvimento.textBoxCalendarioFim.SetEnabled(this.IsLiderProgramacao);
        this.txtPeriodoDesenvolvimento.textBoxCalendarioInicio.SetEnabled(this.IsLiderProgramacao);
        this.chkFreelancer.Enabled = this.IsLiderProgramacao;
        this.chkLiberacaoMensal.Enabled = this.IsLiderProgramacao;
    };
    C_SprintP.prototype.OnAlterouOptTipo = function (s, e) {
        this.AlterarTipo(true);
    };
    C_SprintP.prototype.OnAlterouCheckFinalizado = function (s, e) {
        this.PreencherComboSprint();
    };
    C_SprintP.prototype.AlterarTipo = function (atualizarGrid) {
        this.agpSprint.Visible = false;
        this.cboPeriodoSprint.Visible = false;
        if (this.optTipo.GetValue() == "S") {
            this.agpSprint.Visible = true;
        }
        if (this.optTipo.GetValue() == "R") {
            this.cboPeriodoSprint.Visible = true;
        }
        if (atualizarGrid) {
            this.PreencherGrade();
        }
    };
    C_SprintP.prototype.PreencherComboStatus = function () {
        this.cboStaus.ClearItems();
        this.cboStaus.AddItem("Cadastrado", 1, "");
        this.cboStaus.AddItem("Liberado para Planejamento", 2, "");
        this.cboStaus.AddItem("Em Andamento", 3, "");
        this.cboStaus.AddItem("Concluída", 4, "");
    };
    C_SprintP.prototype.PreencherComboSprint = function () {
        var parametros = {
            exibirFinalizados: this.chkExibirFinalizadas.Checked
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetSprintsCombo", parametros);
        var bkp = this.cboSprint.GetValue();
        this.cboSprint.ClearItems();
        this.cboSprint.AddItem("<< Nova Sprint >>", 0, "");
        for (var x = 0; x <= retorno.length - 1; x++) {
            this.cboSprint.AddItem(retorno[x].Descricao, retorno[x].Codigo, "");
        }
        if (bkp) {
            this.cboSprint.SetValue(bkp);
        }
        else {
            this.cboSprint.SetValue(0);
        }
    };
    C_SprintP.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        try {
            var parametros;
            var codSprint = CNum(this.cboSprint.GetValue());
            var tipoSprints = this.optTipo.GetValue();
            if (tipoSprints != "S") {
                codSprint = 0;
            }
            parametros = {
                codSprint: codSprint,
                tipoSprints: tipoSprints,
                data: this.cboPeriodoSprint.GetValue()
            };
            this.DivKambam.html("");
            this.grdKanban.PreencherGrid([]);
            //this.Info = {};
            //this.RefreshAngular();
            var agendamento = this.ExecutarFuncaoServerSideAsynch("GetAtividadesSprint", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    var dados;
                    dados = retorno.Items;
                    _this.Info.Total = retorno.Total;
                    _this.Info.Finalizadas = retorno.TotalFinalizadas;
                    _this.Info.Porcentagem = retorno.Porcentagem;
                    _this.Info.Status = retorno.Status;
                    _this.Info.Periodo_Sprint = retorno.Periodo_Sprint;
                    _this.Info.Situacao = retorno.Situacao;
                    _this.RefreshAngular();
                    _this.grdKanban.PreencherGrid(retorno.DadosKanban);
                    _this.grdKanban.GroupBy("Setor_Descricao");
                    _this.kanban = new jKanban({
                        element: '#dvKamban',
                        gutter: '5px',
                        widthBoard: '162px',
                        boards: dados,
                        dragBoards: false,
                        addItemButton: false,
                        click: function (el) {
                            if (el && el.dataset && el.dataset.eid) {
                                var atividade = replaceAll("" + el.dataset.eid, "d", "");
                                _this.ConsultarAtividade(atividade.CNum());
                            }
                        },
                        dragEl: function (el, source) {
                        },
                    });
                    //Pinta os elementos que transbordaram
                    $("[data-podeatrasar=true]").css("background-color", "#87CEFA");
                    $("[data-transbordo=true]").css("background-color", "#FF6347");
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, function (erro) {
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.OnClickCadastro = function (s, e) {
        try {
            e.processOnServer = false;
            if (!this.cboSprint.GetValue() && !this.IsLiderProgramacao) {
                MostrarAlerta("Apenas líderes da programação podem cadastrar uma nova sprint");
                return;
            }
            var parametros = {
                codSprint: CNum(this.cboSprint.GetValue())
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetSprint", parametros);
            if (!retorno.Sprint) {
                retorno.Sprint = {};
                retorno.Sprint.Status = 1;
            }
            this.Atividade = null;
            this.txtAtividade.Limpar();
            this.lblDataCadInf.Text = "";
            this.lblDiasDesenv.Text = "";
            this.chkPodeAtrasar.Checked = false;
            this.chkTransbordo.Checked = false;
            this.grdProgramadores.PreencherGrid(retorno.Programadores);
            this.grdAtividades.PreencherGrid(retorno.Atividades);
            this.Sprint = retorno.Sprint;
            this.RefreshAngular();
            this.CalculaTotaisSprint();
            this.mdCadastro.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.CalculaTotaisSprint = function () {
        if (!this.Sprint) {
            return;
        }
        var atividades = this.grdAtividades.DataSource;
        var totalAtividades = 0;
        for (var x = 0; x <= atividades.length - 1; x++) {
            totalAtividades += CNum(atividades[x].Horas_Desenvolvimento);
        }
        this.Sprint.Horas_Utilizadas = totalAtividades;
        this.Sprint.Data_Inicio_Desenvolvimento = ConvertToDate(this.Sprint.Data_Inicio_Desenvolvimento);
        this.Sprint.Data_Fim_Desenvolvimento = ConvertToDate(this.Sprint.Data_Fim_Desenvolvimento);
        this.Sprint.Horas_Disponiveis = 0;
        var dif = 0;
        if (this.Sprint.Data_Inicio_Desenvolvimento && this.Sprint.Data_Fim_Desenvolvimento) {
            var parametros = {
                dataInicial: this.Sprint.Data_Inicio_Desenvolvimento,
                dataFinal: this.Sprint.Data_Fim_Desenvolvimento,
            };
            dif = this.ExecutarFuncaoServerSideSynch("GetDiferencaDiasUteis", parametros);
            this.CalcularHorasProgramadores(dif);
            if (dif >= 0) {
                var totalDisponivel = 0;
                var lista = this.grdProgramadores.DataSource;
                for (var x = 0; x < lista.length; x++) {
                    var item = lista[x];
                    if (CNum(item.Horas_Disponiveis) > 0) {
                        totalDisponivel += CNum(item.Horas_Disponiveis);
                    }
                }
                this.Sprint.Horas_Disponiveis = totalDisponivel;
            }
        }
        else {
            this.CalcularHorasProgramadores(0);
        }
        this.lblDiasDesenv.Text = "" + dif;
        this.RefreshAngular();
    };
    C_SprintP.prototype.CalcularHorasProgramadores = function (diasDesenvolvimento) {
        if (!diasDesenvolvimento || diasDesenvolvimento < 0) {
            diasDesenvolvimento = 0;
        }
        var lista = this.grdProgramadores.DataSource;
        for (var x = 0; x <= lista.length - 1; x++) {
            var item = lista[x];
            item.Horas_Disponiveis = 0;
            item.Horas_Restantes = 0;
            item.Horas_Utilizadas = 0;
            if (item.Porc_Tempo_Sprint > 0) {
                var horasPorDia = Math.round((8 * (CNum(item.Porc_Tempo_Sprint) / 100)).Format(2).CNum());
                item.Horas_Disponiveis = horasPorDia * diasDesenvolvimento;
            }
            item.Horas_Utilizadas = this.GetSomaHorasUtilizadasProgramador(CNum(item.Codigo));
            if (item.Horas_Disponiveis >= item.Horas_Utilizadas) {
                item.Horas_Restantes = item.Horas_Disponiveis - item.Horas_Utilizadas;
            }
        }
        this.grdProgramadores.PreencherGrid(lista);
    };
    C_SprintP.prototype.GetSomaHorasUtilizadasProgramador = function (codProgramador) {
        var horasUtilizadas = 0;
        var atividades = this.grdAtividades.DataSource;
        for (var y = 0; y <= atividades.length - 1; y++) {
            var atv = atividades[y];
            if (CNum(atv.Programador) == codProgramador) {
                horasUtilizadas += CNum(atv.Horas_Desenvolvimento);
            }
        }
        return horasUtilizadas;
    };
    C_SprintP.prototype.GetItemProgramador = function (codProgramador) {
        var lista = this.grdProgramadores.DataSource;
        var retorno = null;
        for (var x = 0; x <= lista.length - 1; x++) {
            var item = lista[x];
            if (CNum(item.Codigo) == codProgramador) {
                return item;
            }
        }
        return retorno;
    };
    C_SprintP.prototype.OnClickSalvarSprint = function (s, e) {
        try {
            e.processOnServer = false;
            this.CalculaTotaisSprint();
            var lista = this.grdProgramadores.DataSource;
            if ((this.Sprint.Horas_Utilizadas > this.Sprint.Horas_Disponiveis) && (!this.IsLiderProgramacao)) {
                MostrarAlerta("Você utilizou mais moras do que o que está diponível para esta sprint");
                return;
            }
            for (var x = 0; x <= lista.length - 1; x++) {
                var item = lista[x];
                if (CNum(item.Porc_Tempo_Sprint) > 0) {
                    //if (CNum(item.Categoria) <= 0) {
                    //    MostrarAlerta("O programador " + item.Programador + " está sem categoria configurada");
                    //    return;
                    //}
                    //if (CNum(item.Dias_Baixa) <= 0) {
                    //    MostrarAlerta("O programador " + item.Programador + " está sem dias para baixa configurado");
                    //    return;
                    //}
                }
            }
            this.Sprint.Programadores = [];
            for (var x = 0; x <= lista.length - 1; x++) {
                var item = lista[x];
                if (CNum(item.Porc_Tempo_Sprint) > 0) {
                    var entity = {};
                    entity.Categoria = CNum(item.Categoria);
                    entity.Dias_Baixa = CNum(item.Dias_Baixa);
                    entity.Porc_Tempo_Sprint = CNum(item.Porc_Tempo_Sprint);
                    entity.Programador = CNum(item.Codigo);
                    entity.Sprint = CNum(this.Sprint.Codigo);
                    entity.Pontos = CNum(item.Pontos);
                    this.Sprint.Programadores.push(entity);
                }
            }
            this.Sprint.Atividades = [];
            var atividades = this.grdAtividades.DataSource;
            for (var x = 0; x <= atividades.length - 1; x++) {
                var atv = atividades[x];
                var entityAtividade = {};
                entityAtividade.Codigo = CNum(atv.Codigo_Sprint_Atividade);
                entityAtividade.Atividade = CNum(atv.Atividade);
                entityAtividade.Sprint = CNum(this.Sprint.Codigo);
                entityAtividade.Programador = CNum(atv.Programador);
                entityAtividade.Pode_Atrasar = atv.Pode_Atrasar;
                entityAtividade.Transbordo_Sprint_Anterior = atv.Transbordo_Sprint_Anterior;
                this.Sprint.Atividades.push(entityAtividade);
            }
            var parametros = {
                strSprint: JSON.stringify(this.Sprint),
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            this.ExecutarFuncaoServerSideSynch("GravarSprint", parametros);
            MostrarMensagem("Sprint salva com sucesso!");
            //this.FecharModalCadastro();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.FecharModalCadastro = function () {
        this.mdCadastro.Hide();
        this.PreencherComboSprint();
        this.PreencherGrade();
    };
    C_SprintP.prototype.OnPesquisouAtividade = function (s, e) {
        try {
            if (!this.Sprint) {
                return;
            }
            var parametros = {
                codAtividade: this.txtAtividade.GetText().CNum(),
                retornarHistorico: false,
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetDadosAtividade", parametros);
            this.Atividade = retorno;
            this.RefreshAngular();
            if (retorno) {
                if (!this.Sprint.Liberacao_Mensal) {
                    if (retorno.Tipo_Atividade_Codigo != 1) {
                        MostrarAlerta("A atividade precisa ser do tipo Alteração");
                        this.txtAtividade.Limpar();
                        this.txtAtividade.Focus();
                        this.Atividade = null;
                        this.RefreshAngular();
                        return;
                    }
                    if (!retorno.Horas_Desenvolvimento) {
                        MostrarAlerta("A atividade ainda não foi categorizada");
                        this.txtAtividade.Limpar();
                        this.txtAtividade.Focus();
                        this.Atividade = null;
                        this.RefreshAngular();
                        return;
                    }
                }
                if (retorno.IsProjeto && !this.IsLiderProgramacao) {
                    MostrarAlerta("A atividade está categorizada como projeto e não pode ser adicionada na sprint");
                    this.txtAtividade.Limpar();
                    this.txtAtividade.Focus();
                    this.Atividade = null;
                    this.RefreshAngular();
                    return;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.OnClickAdicionarAtividade = function (s, e) {
        try {
            e.processOnServer = false;
            this.AdicionarAtividade(true);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.AdicionarAtividade = function (verificarProgramadorHoras) {
        var _this = this;
        if (this.txtAtividade.GetText().CNum() <= 0) {
            MostrarAlerta("Informe a atividade!");
            this.txtAtividade.Focus();
            return;
        }
        if (!this.Atividade) {
            MostrarAlerta("Atividade não encontrada");
            return;
        }
        if (this.txtProgramador.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o programador responsável pela atividade");
            this.txtProgramador.Focus();
            return;
        }
        if (this.Sprint.Status != 2 && !this.IsLiderProgramacao) {
            MostrarAlerta("Atividade não está liberada para planejamento");
            return;
        }
        var atividades = this.grdAtividades.DataSource;
        var aux = atividades.FirstOrDefault("Atividade", this.txtAtividade.GetText().CNum());
        if (aux) {
            MostrarAlerta("Esta atividade já foi adicionada!");
            this.txtAtividade.Focus();
            return;
        }
        var programador = this.GetItemProgramador(this.txtProgramador.GetText().CNum());
        if (programador) {
            if (CNum(programador.Porc_Tempo_Sprint) <= 0) {
                MostrarAlerta("O programador informado não faz parte desta sprint!");
                return;
            }
            if (verificarProgramadorHoras && CNum(programador.Horas_Restantes) < CNum(this.Atividade.Horas_Desenvolvimento)) {
                MsgBoxJS("O programador informado tem " + programador.Horas_Restantes + " hora(s) restante(s) de desenvolvimento. <br />A atividade precisa de " + CNum(this.Atividade.Horas_Desenvolvimento) + " hora(s). <br /> Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                    if (result.Resultado == MsgBoxResult.Yes) {
                        _this.AdicionarAtividade(false);
                    }
                }, null, "");
                return;
            }
        }
        else {
            MostrarAlerta("O programador informado não faz parte desta sprint!");
            return;
        }
        var entityAtividade = {};
        entityAtividade.Atividade = this.txtAtividade.GetText().CNum();
        entityAtividade.Categoria_Atividade = this.Atividade.Categoria_Atividade;
        entityAtividade.Pontos = this.Atividade.Pontos;
        entityAtividade.Horas_Desenvolvimento = this.Atividade.Horas_Desenvolvimento;
        entityAtividade.Cliente = this.Atividade.Razao_Social_Cliente;
        entityAtividade.Modulo = this.Atividade.Modulo;
        entityAtividade.Programador = this.txtProgramador.GetText().CNum();
        entityAtividade.Programador_Nome = this.txtProgramador.GetResultado();
        entityAtividade.Codigo_Sprint_Atividade = 0;
        entityAtividade.Pode_Atrasar = this.chkPodeAtrasar.Checked;
        entityAtividade.Transbordo_Sprint_Anterior = this.chkTransbordo.Checked;
        atividades.push(entityAtividade);
        this.grdAtividades.PreencherGrid(atividades);
        this.txtAtividade.Limpar();
        this.txtAtividade.Focus();
        this.txtProgramador.Limpar();
        this.chkPodeAtrasar.Checked = false;
        this.chkTransbordo.Checked = false;
        this.CalculaTotaisSprint();
    };
    C_SprintP.prototype.OnClickFecharSprint = function (s, e) {
        try {
            e.processOnServer = false;
            this.mdCadastro.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.OnIndexChangedSprint = function (s, e) {
        try {
            this.PreencherGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.OnIndexChangedPeriodo = function (s, e) {
        try {
            this.PreencherGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.ConsultarAtividade = function (codAtividade) {
        try {
            var parametros = {
                codAtividade: codAtividade,
                retornarHistorico: true,
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetDadosAtividade", parametros);
            if (!retorno) {
                MostrarAlerta("Atividade não encontrada");
                return;
            }
            this.DadosAtividade = retorno;
            this.RefreshAngular();
            this.lblDataCadInf.Text = ConvertToDate(retorno.Data_Cadastro).FormataDataHora();
            this.mdInf.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.OnSelecionouLinhaAtividade = function (s, e) {
        try {
            var atividade = ("" + e.data.Atividade).CNum();
            this.ConsultarAtividade(atividade);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.OnExcluiuAtividade = function (s, e) {
        this.CalculaTotaisSprint();
    };
    C_SprintP.prototype.OnExclindoAtividade = function (s, e) {
        if (this.Sprint.Status != 2 && !this.IsLiderProgramacao) {
            e.cancelar = true;
            MostrarAlerta("Atividade não está liberada para planejamento");
            return;
        }
    };
    C_SprintP.prototype.OnEditandoItemProgramadores = function (s, e) {
        if (!this.IsLiderProgramacao) {
            MostrarAlerta("Apenas líderes da programação podem editar esta grade");
            this.grdProgramadores.CancelChanges();
        }
    };
    C_SprintP.prototype.OnEditouItemProgramadores = function (s, e) {
        this.CalculaTotaisSprint();
    };
    C_SprintP.prototype.OnGridCellPreparedProgramadores = function (s, e) {
        try {
            if (e.rowType == "data" && e.data) {
                var horasDisponiveis = CNum(e.data["Horas_Disponiveis"]);
                var horasUtilizadas = CNum(e.data["Horas_Utilizadas"]);
                if (horasUtilizadas > horasDisponiveis) {
                    e.cellElement.css("color", "red");
                }
            }
        }
        catch (ex) {
        }
    };
    C_SprintP.prototype.OnClickFecharModalInf = function (s, e) {
        try {
            e.processOnServer = false;
            this.mdInf.Hide();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.OnClickConsultarAtividade = function (s, e) {
        try {
            e.processOnServer = false;
            if (this.txtAtividade.GetText().CNum() <= 0) {
                MostrarAlerta("Informe a atividade");
                this.txtAtividade.Focus();
                return;
            }
            this.ConsultarAtividade(this.txtAtividade.GetText().CNum());
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.OnClickProcurarAtividades = function () {
        try {
            this.grdAtv.PreencherGrid([]);
            this.mdProcurarAtividades.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.OnClickRelacaoAtividades = function () {
        try {
            var parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                codCliente: this.txtCliente.GetText().CNum(),
                isLiberacaoMensal: this.Sprint.Liberacao_Mensal
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetAtividadesPriorizadasRelacao", parametros);
            this.grdAtv.PreencherGrid(retorno);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.OnClicouLinhaRelacao = function (s, e) {
        var codigo = ("" + e.data['Atividade']).CNum();
        this.ConsultarAtividade(codigo);
    };
    C_SprintP.prototype.OnSelecionouLinhaKanban = function (s, e) {
        var codigo = ("" + e.data['Codigo_Atividade']).CNum();
        this.ConsultarAtividade(codigo);
    };
    C_SprintP.prototype.OnSelecionouLinhaRelacao = function (s, e) {
        var codigo = ("" + e.data['Atividade']).CNum();
        if (codigo) {
            this.txtAtividade.Procurar("" + codigo);
            this.mdProcurarAtividades.Hide();
        }
    };
    C_SprintP.prototype.OnClickFinalizarPlanejamento = function () {
        var _this = this;
        try {
            if (!this.Sprint)
                return;
            if (this.Sprint.Status != 2 && !this.IsLiderProgramacao) {
                MostrarAlerta("A sprint não está liberada para planejamento");
                return;
            }
            MsgBoxJS("Deseja realmente finalizar o planejamento da Sprint?<br />Após a finalização não será mais possível alterar as atividades", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.Yes) {
                    MostrarAlerta("Status alterado com sucesso");
                    _this.FecharModalCadastro();
                }
            }, null);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.OnClickAlterarHoras = function (s, e) {
        var _this = this;
        try {
            e.processOnServer = false;
            if (this.txtAtividade.GetText().CNum() <= 0 || !this.Atividade) {
                MostrarAlerta("Informe uma atividade");
                return;
            }
            InputBoxJS("Sprint", "Informe a quantidade de horas de desenvolvimento", "", function (result) {
                var retorno = result.Valor;
                if (CNum(retorno) > 0) {
                    try {
                        var parametros = {
                            codAtividade: _this.txtAtividade.GetText().CNum(),
                            horasDesenvolvimento: CNum(retorno),
                            nomeTela: ValoresSismoura.NomeTela,
                            codUsuario: ValoresSismoura.UsuarioLogado
                        };
                        var retFuncao = _this.ExecutarFuncaoServerSideSynch("AlterarCategoriaAtividade", parametros);
                        MostrarMensagem("Horas alteradas com sucesso");
                        _this.Atividade.Horas_Desenvolvimento = CNum(retorno);
                        _this.RefreshAngular();
                    }
                    catch (ex) {
                        LogarException(ex);
                    }
                }
            }, this, CNum(this.Atividade.Horas_Desenvolvimento).toString());
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.OnGridAtividadesCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data) {
                var transbordo = e.data["Transbordo_Sprint_Anterior"];
                var podeAtrasar = e.data["Pode_Atrasar"];
                if (podeAtrasar) {
                    e.cellElement.css("color", "blue");
                }
                if (transbordo) {
                    e.cellElement.css("color", "red");
                }
            }
        }
        catch (ex) {
        }
    };
    C_SprintP.prototype.OnGridKanbamCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data) {
                var transbordo = e.data["Transbordo_Sprint_Anterior"];
                var podeAtrasar = e.data["Pode_Atrasar"];
                if (podeAtrasar) {
                    e.cellElement.css("color", "blue");
                }
                if (transbordo) {
                    e.cellElement.css("color", "red");
                }
            }
        }
        catch (ex) {
        }
    };
    C_SprintP.prototype.OnClickFecharTransbordo = function (s, e) {
        e.processOnServer = false;
        this.mdTransbordo.Hide();
    };
    C_SprintP.prototype.OnClickSalvarTransbordo = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            if (CNum(this.cboSprintTransbordo.GetValue()) <= 0) {
                MostrarAlerta("Informe a sprint de destino");
                return;
            }
            if (CNum(this.txtProgramadorTransbordo.GetText()) <= 0) {
                MostrarAlerta("Informe o programador de destino");
                return;
            }
            MsgBoxJS("Deseja realmente transbordar esta atividade?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                try {
                    if (result.Resultado == MsgBoxResult.Yes) {
                        var parametros = {
                            codAtividade: CNum(_this.lblAtividadeTransbordo.Text),
                            codSprintDestino: CNum(_this.cboSprintTransbordo.GetValue()),
                            codProgramadorDestino: CNum(_this.txtProgramadorTransbordo.GetText()),
                            atividadePodeAtrasar: _this.chkPodeAtrasarTransbordo.Checked,
                            codUsuario: ValoresSismoura.UsuarioLogado,
                            nomeTela: ValoresSismoura.NomeTela
                        };
                        var retorno = _this.ExecutarFuncaoServerSideSynch("TransbordarAtividade", parametros);
                        if (retorno) {
                            MostrarMensagem("Atividade transbordada com sucesso");
                            _this.mdTransbordo.Hide();
                        }
                        else {
                            MostrarAlerta("Ocorreu um erro ao transbordar a ativdiade");
                        }
                    }
                }
                catch (ex) {
                    LogarException(ex);
                }
            }, null, "");
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.PreencherComboSprintTransbordo = function () {
        try {
            var parametros = {};
            var retorno = this.ExecutarFuncaoServerSideSynch("GetSprintsComboTransbordo", parametros);
            this.cboSprintTransbordo.LimparSelecao();
            this.cboSprintTransbordo.ClearItems();
            for (var x = 0; x <= retorno.length - 1; x++) {
                this.cboSprintTransbordo.AddItem(retorno[x].Descricao, retorno[x].Codigo, "");
            }
            this.cboSprintTransbordo.LimparSelecao();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SprintP.prototype.OnClickBotaoLinhaAtividade = function (s, e) {
        if (e.commandName == "btnTransbordo") {
            this.AbrirTelaTransbordoAtividade(CNum(e.data['Atividade']), CNum(e.data['Programador']), e.data['Programador_Nome']);
        }
    };
    C_SprintP.prototype.OnClickBotaoLinhaKanban = function (s, e) {
        if (e.commandName == "btnTransbordo") {
            this.AbrirTelaTransbordoAtividade(CNum(e.data['Codigo_Atividade']), CNum(e.data['Codigo_Programador_Responsavel']), e.data['Programador_Responsavel']);
        }
    };
    C_SprintP.prototype.AbrirTelaTransbordoAtividade = function (codAtividade, codProgramador, nomeProgramador) {
        this.PreencherComboSprintTransbordo();
        this.cboSprintTransbordo.LimparSelecao();
        var codProgramadorAtividade = CNum(codProgramador);
        if (codProgramadorAtividade > 0) {
            this.txtProgramadorTransbordo.Procurar("" + codProgramadorAtividade);
        }
        else {
            this.txtProgramadorTransbordo.Limpar();
        }
        this.chkPodeAtrasarTransbordo.Checked = false;
        this.lblAtividadeTransbordo.Text = codAtividade.toString();
        this.lblProgramadorOriginalTransbordo.Text = nomeProgramador;
        this.mdTransbordo.Show();
    };
    return C_SprintP;
}(MouraPageRelacaoAngular));
var c_SprintP = new C_SprintP();
//# sourceMappingURL=C_SprintP.js.map