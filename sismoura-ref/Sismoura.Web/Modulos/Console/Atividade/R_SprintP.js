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
var R_SprintP = /** @class */ (function (_super) {
    __extends(R_SprintP, _super);
    function R_SprintP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_SprintP.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SprintP.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SprintP.prototype, "chkFreelancer", {
        get: function () {
            return window['chkFreelancer_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SprintP.prototype, "cboStaus", {
        get: function () {
            return window['cboStaus_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SprintP.prototype, "grdProgramadores", {
        get: function () {
            return window['grdProgramadores_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SprintP.prototype, "grdAtividades", {
        get: function () {
            return window['grdAtividades_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SprintP.prototype, "tabSprint", {
        get: function () {
            return window['tabSprint_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SprintP.prototype, "mdDetalharSprint", {
        get: function () {
            return window['mdDetalharSprint_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SprintP.prototype, "mdInf", {
        get: function () {
            return window['mdInf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SprintP.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_SprintP.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_SprintP.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.SelecionouLinha, this);
            adicionarEventoMoura(this.grid.CellPrepared, this.CellPrepared, this);
        }
        if (this.grdAtividades) {
            adicionarEventoMoura(this.grdAtividades.SelecionouLinha, this.SelecionouLinhaGrdAtividade, this);
        }
    };
    R_SprintP.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Status = 0;
        this.Filtro.Freelancer = 0;
        this.Filtro.NaoConcluidas = false;
        this.grid.PreencherGrid(null);
        this.LimparCamposModalSprint();
        this.LimparCamposModalAtividade();
        this.RefreshAngular();
    };
    R_SprintP.prototype.LimparCamposModalSprint = function () {
        this.cboStaus.Enabled = false;
        this.Filtro.Descricao = "";
        this.Filtro.ChkFreelancer = false;
        this.Filtro.StatusModal = 1;
        this.Filtro.PeriodoAnalise_Inicial = this.DataServidor();
        this.Filtro.PeriodoAnalise_Final = this.DataServidor();
        this.Filtro.PeriodoSprint_Inicial = this.DataServidor();
        this.Filtro.PeriodoSprint_Final = this.DataServidor();
        this.Filtro.PeriodoDesenvolvimento_Inicial = this.DataServidor();
        this.Filtro.PeriodoDesenvolvimento_Final = this.DataServidor();
        this.grdProgramadores.PreencherGrid(null);
        this.mdDetalharSprint.Hide();
        this.RefreshAngular();
    };
    R_SprintP.prototype.LimparCamposModalAtividade = function () {
        this.Filtro.lblAtividade = "";
        this.Filtro.lblClienteInf = "";
        this.Filtro.lblUsuarioCadastroInf = "";
        this.Filtro.lblUsuarioAtual = "";
        this.Filtro.lblSituacaoAtual = "";
        this.Filtro.lblModuloInf = "";
        this.Filtro.lblDataCadInf = "";
        this.Filtro.txtHistoricoAtividade = "";
        this.grdAtividades.PreencherGrid(null);
        this.mdInf.Hide();
        this.RefreshAngular();
    };
    R_SprintP.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        var parametros;
        try {
            parametros = {
                dataInicio: this.Filtro.Periodo_Inicial,
                dataFim: this.Filtro.Periodo_Final,
                status: CNum(this.Filtro.Status),
                freelancer: CNum(this.Filtro.Freelancer),
                naoConcluida: this.Filtro.NaoConcluidas
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_SprintP.prototype.SelecionouLinha = function (s, e) {
        try {
            this.Filtro.Descricao = e.data["Descricao"];
            if (e.data["Projeto_Freelancer"] == "Interno") {
                this.chkFreelancer.Checked = false;
            }
            else {
                this.chkFreelancer.Checked = true;
            }
            this.Filtro.StatusModal = this.ProcuraValorComboStaus(e.data["Status"]);
            this.Filtro.PeriodoAnalise_Inicial = new Date(e.data["Data_Inicio_Analise"]);
            this.Filtro.PeriodoAnalise_Final = new Date(e.data["Data_Fim_Analise"]);
            this.Filtro.PeriodoSprint_Inicial = new Date(e.data["Data_Inicio_Sprint"]);
            this.Filtro.PeriodoSprint_Final = new Date(e.data["Data_Fim_Sprint"]);
            this.Filtro.PeriodoDesenvolvimento_Inicial = new Date(e.data["Data_Inicio_Desenvolvimento"]);
            this.Filtro.PeriodoDesenvolvimento_Final = new Date(e.data["Data_Fim_Desenvolvimento"]);
            var parametros = void 0;
            parametros = {
                codigo: CNum(e.data["Codigo"])
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGridAtividade", parametros);
            this.grdAtividades.PreencherGrid(retorno);
            retorno = this.ExecutarFuncaoServerSideSynch("PreencherGridProgramadores", parametros);
            this.grdProgramadores.PreencherGrid(retorno);
            this.tabSprint.SetActiveTabIndex(0);
            this.RefreshAngular();
            this.mdDetalharSprint.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_SprintP.prototype.SelecionouLinhaGrdAtividade = function (s, e) {
        try {
            this.Filtro.lblAtividadeInf = e.data["Atividade"];
            this.Filtro.lblClienteInf = e.data["Cliente"];
            var parametros = void 0;
            parametros = {
                codAtividade: CNum(e.data["Atividade"]),
                retornarHistorico: true
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetDadosAtividade", parametros);
            this.Filtro.lblUsuarioCadastrado = retorno.Usuario_Cadastro_Nome;
            this.Filtro.lblUsuarioAtual = retorno.Usuario_Atual_Nome;
            this.Filtro.lblSituacaoAtual = retorno.Situacao_Atividade_Descricao;
            this.Filtro.lblModuloInf = retorno.Modulo;
            this.Filtro.lblDataCadInf = ConvertToDate(retorno.Data_Cadastro).FormataDataHora();
            this.Filtro.HistoricoAtividade = retorno.Historico;
            this.RefreshAngular();
            this.mdInf.Show();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_SprintP.prototype.ClickBotaoFecharSprint = function () {
        this.LimparCamposModalAtividade();
        this.LimparCamposModalSprint();
        this.mdDetalharSprint.Hide();
    };
    R_SprintP.prototype.ClickBotaoFecharInf = function () {
        this.mdInf.Hide();
    };
    R_SprintP.prototype.CellPrepared = function (s, e) {
        if (e.rowType == "data") {
            if (e.columnIndex > 1) {
                var data;
                var dataCompare;
                var status;
                data = e.data["Data_Fim_Sprint"];
                dataCompare = data.ToDate();
                status = e.data["Status"];
                if (dataCompare != null) {
                    if (dataCompare < this.DataServidor() && status != "Concluída") {
                        e.cellElement.css("color", "red");
                    }
                }
            }
        }
    };
    R_SprintP.prototype.ProcuraValorComboStaus = function (item) {
        var retorno;
        switch (item) {
            case "Todos": {
                retorno = 0;
            }
            case "Cadastrado": {
                retorno = 1;
                break;
            }
            case "Liberado para Planejamento": {
                retorno = 2;
                break;
            }
            case "Em Andamento": {
                retorno = 3;
                break;
            }
            case "Concluída": {
                retorno = 4;
                break;
            }
            default: {
                retorno = -1;
                break;
            }
        }
        return retorno;
    };
    return R_SprintP;
}(MouraPageRelacaoAngular));
var r_SprintP = new R_SprintP();
//# sourceMappingURL=R_SprintP.js.map