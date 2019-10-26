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
var R_SprPro = /** @class */ (function (_super) {
    __extends(R_SprPro, _super);
    function R_SprPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_SprPro.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SprPro.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SprPro.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SprPro.prototype, "grdSprint", {
        get: function () {
            return window['grdSprint_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SprPro.prototype, "grdProgramadores", {
        get: function () {
            return window['grdProgramadores_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_SprPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnGridCellPrepared, this);
            adicionarEventoMoura(this.grid.RowValidating, this.OnEditouItemGrade, this);
        }
    };
    R_SprPro.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_SprPro.prototype.PreencherGrade = function () {
        var _this = this;
        try {
            var parametros;
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GerarRelacao", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno.Dados);
                _this.grdSprint.PreencherGrid(retorno.ResumoSprint);
                _this.grdProgramadores.PreencherGrid(retorno.ResumoProgramador);
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    R_SprPro.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtPeriodo.Iniciar();
        var dataInicial = (new Date()).addMonths(-1);
        dataInicial = new Date(dataInicial.getFullYear(), dataInicial.getMonth(), 1);
        this.txtPeriodo.textBoxCalendarioInicio.SetDate(dataInicial);
        this.txtPeriodo.textBoxCalendarioFim.SetDate(dataInicial.addMonths(1).addDays(-1));
        this.grid.PreencherGrid([]);
        this.grid.GroupBy("Sprint");
        this.grdProgramadores.PreencherGrid([]);
        this.grdSprint.PreencherGrid([]);
    };
    R_SprPro.prototype.OnEditouItemGrade = function (s, e) {
        try {
            var parametros;
            if (!e.oldData || !e.newData || !e.newData.Justificativa_Atividade_Sprint) {
                return;
            }
            var codAtividade = CNum(e.oldData.Codigo_Atividade);
            var justificativa = e.newData.Justificativa_Atividade_Sprint;
            parametros = {
                codAtividade: codAtividade,
                justificativa: justificativa,
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("AtualizarJustificativa", parametros);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_SprPro.prototype.OnGridCellPrepared = function (s, e) {
        try {
            if (e.rowType == "data" && e.data) {
                var transbordo = "" + e.data["Transbordo_Sprint_Anterior"];
                var podeAtrasar = "" + e.data["Pode_Atrasar"];
                if (podeAtrasar == "Sim") {
                    e.cellElement.css("color", "blue");
                }
                if (transbordo == "Sim") {
                    e.cellElement.css("color", "red");
                }
            }
            if (e.rowType == "data" && e.data && e.column && !String.IsNullOrWhiteSpace(e.column.dataField)) {
                var dataFieldColuna = e.column.dataField;
                switch (dataFieldColuna) {
                    case "Porcentagem_Tempo_Gasto":
                        var tempoGasto = CNum(e.data["Porcentagem_Tempo_Gasto"]);
                        if (tempoGasto > 115) {
                            e.cellElement.css("background-color", "#ff9999");
                        }
                        break;
                    case "Baixada_Programacao_Prazo":
                        var baixadaProgramacao = e.data["Baixada_Programacao_Prazo"];
                        if (baixadaProgramacao == "Não") {
                            e.cellElement.css("background-color", "#ff9999");
                        }
                        break;
                    case "Finalizada_Prazo":
                        var finalizadaPrazo = e.data["Finalizada_Prazo"];
                        if (finalizadaPrazo == "Não") {
                            e.cellElement.css("background-color", "#ff9999");
                        }
                        break;
                }
            }
        }
        catch (ex) {
        }
    };
    return R_SprPro;
}(MouraPageRelacaoAngular));
var r_SprPro = new R_SprPro();
//# sourceMappingURL=R_SprPro.js.map