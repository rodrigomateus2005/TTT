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
var R_RecProg = /** @class */ (function (_super) {
    __extends(R_RecProg, _super);
    function R_RecProg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RecProg.prototype, "AccordionFiltros", {
        get: function () {
            return window["accCadastro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RecProg.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RecProg.prototype, "mdDetalhe", {
        get: function () {
            return window['mdDetalhe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RecProg.prototype, "grdDetalhe", {
        get: function () {
            return window['grdDetalhe_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RecProg.prototype, "lblInfProgramador", {
        get: function () {
            return window['lblInfProgramador_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_RecProg.prototype.OnPageLoad = function () {
        this.LimparCampos();
    };
    R_RecProg.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grd) {
            adicionarEventoMoura(this.grd.CellPrepared, this.OnGridCellPrepared, this);
            adicionarEventoMoura(this.grd.ClickBotaoLinha, this.OnGridClicouBotao, this);
            //Exibir linhas
            if (this.grd.Grid) {
                this.grd.Grid.option("showRowLines", true);
            }
        }
    };
    R_RecProg.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        var dataDia = this.DataServidor();
        this.Filtro.Data_Inicial = dataDia;
        this.Filtro.Data_Final = dataDia.addMonths(3);
        this.Filtro.Equipe = 0;
        this.Filtro.Tipo = "1";
        this.RefreshAngular();
    };
    R_RecProg.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!ValidarPeriodo(this.Filtro.Data_Inicial, this.Filtro.Data_Final)) {
            return;
        }
        this.GetDadosRelacao(ConvertToDate(this.Filtro.Data_Inicial), ConvertToDate(this.Filtro.Data_Final), CNum(this.Filtro.Equipe), CNum(this.Filtro.Tipo));
    };
    R_RecProg.prototype.GetDadosRelacao = function (dataInicial, dataFinal, codEquipe, tipo) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: dataInicial,
                dataFinal: dataFinal,
                codEquipe: codEquipe,
                tipo: tipo
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetRelatorio", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grd.Colunas = retorno.ColunasGrade;
                    _this.grd.iniciarGrid();
                    _this.grd.FixarColuna("Codigo", true);
                    _this.grd.FixarColuna("Nome", true);
                    _this.AccordionFiltros.SetExpanded(false);
                    _this.ConfigurarGrade();
                    _this.grd.PreencherGrid(retorno.Dados);
                    _this.RefreshAngular();
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
            LogarException(ex);
            fecharEspera();
        }
    };
    R_RecProg.prototype.ConfigurarGrade = function () {
        this.grd.GroupBy("Equipe");
        // this.Grid.FixarColuna("Nome_Profissional", true);
        var opt = this.grd.Grid.option("paging");
        opt.pageSize = 50;
        this.grd.Grid.option("paging", opt);
        this.grd.FuncaoCustomText("Fantasia", this.FuncaoCustomText, this);
        //this.Grid.OrderBy("Distancia_Empresa", "asc");
    };
    R_RecProg.prototype.OnGridCellPrepared = function (s, e) {
        try {
            var name = "";
            if (e.column && e.column) {
                name = e.column.name;
            }
            if (e.rowType == "data" && e.data) {
                if (name.substring(0, 18).toLowerCase() == "botaotemplate_data") {
                    var dados = e.data[replaceAllNoCase(name, "botaotemplate_", "")];
                    var cor = dados.split("|")[0];
                    var toolTip = dados.split("|")[2];
                    if (!String.IsNullOrWhiteSpace(cor)) {
                        e.cellElement.css("background-color", cor);
                        e.cellElement.css("color", cor);
                        e.cellElement.addClass("botaoFull");
                    }
                    if (!String.IsNullOrWhiteSpace(toolTip)) {
                        $(e.cellElement).find("input").attr("title", toolTip);
                    }
                }
            }
        }
        catch (ex) {
        }
    };
    R_RecProg.prototype.OnGridClicouBotao = function (s, e) {
        try {
            if (String.IsNullOrWhiteSpace(e.commandName)) {
                return;
            }
            var codProgramador = CNum(e.data['Codigo']);
            if (e.commandName.substring(0, 5).toLowerCase() == "data-") {
                var datas = e.commandName.split('-')[1];
                var dataInicial = replaceAll(datas.split("#")[0], "_", "/");
                var dataFinal = replaceAll(datas.split("#")[1], "_", "/");
                this.AbriDetalhamentoProgramador(dataInicial, dataFinal, codProgramador);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_RecProg.prototype.FuncaoCustomText = function (data) {
        var valor = data.valueText;
        if (!String.IsNullOrWhiteSpace(valor)) {
            return ("" + valor).split("|")[1];
        }
        else {
            return "";
        }
    };
    R_RecProg.prototype.AbriDetalhamentoProgramador = function (dataInicial, dataFinal, codProgramador) {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: dataInicial,
                dataFinal: dataFinal,
                codProgramador: codProgramador
            };
            this.lblInfProgramador.Text = "";
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetDetalhamentoProgramador", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (retorno.Dados && retorno.Dados.length > 0) {
                        var programador = retorno.Programador;
                        _this.lblInfProgramador.Text = programador;
                        _this.mdDetalhe.Show();
                        _this.grdDetalhe.PreencherGrid(retorno.Dados);
                        setTimeout(function () {
                            _this.grdDetalhe.Refresh();
                        }, 200);
                    }
                    else {
                        MostrarAlerta("Programador sem tarefas neste dia");
                    }
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
            LogarException(ex);
            fecharEspera();
        }
    };
    R_RecProg.prototype.FecharModal = function () {
        this.mdDetalhe.Hide();
    };
    return R_RecProg;
}(MouraPageRelacaoAngular));
var r_RecProg = new R_RecProg();
//# sourceMappingURL=R_RecProg.js.map