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
var R_O_Kit = /** @class */ (function (_super) {
    __extends(R_O_Kit, _super);
    function R_O_Kit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_O_Kit.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_O_Kit.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_O_Kit.prototype, "gridDetalhado", {
        get: function () {
            return window['gridDetalhado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_O_Kit.prototype, "gridDetalhadoModal", {
        get: function () {
            return window['gridDetalhadoModal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_O_Kit.prototype, "gridAgrupado", {
        get: function () {
            return window['gridAgrupado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_O_Kit.prototype, "mdDetalhado", {
        get: function () {
            return window['mdDetalhado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_O_Kit.prototype, "btnFechar", {
        get: function () {
            return window['btnFechar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_O_Kit.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_O_Kit.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.gridDetalhado) {
            adicionarEventoMoura(this.gridDetalhado.CellPrepared, this.CellPrepared, this);
            adicionarEventoMoura(this.gridDetalhado.ClickBotaoLinha, this.OnClickBotaoLinha, this);
            adicionarEventoMoura(this.gridDetalhado.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.btnFechar) {
            adicionarEventoMoura(this.btnFechar.Click, this.OnbtnFechecharClick, this);
        }
    };
    R_O_Kit.prototype.PreencherGrade = function () {
        this.PreencherGradeDetalhado();
        this.PreencherGradeAgrupado();
    };
    R_O_Kit.prototype.PreencherGradeDetalhado = function () {
        var _this = this;
        try {
            var parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                cliente: CNum(this.Filtro.Cliente),
                orcamento: CNum(this.Filtro.Orcamento)
            };
            //this.AccordionFiltros.SetExpanded(false)
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGridDetalhado", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (!retorno) {
                    MsgBoxJS("Nenhum orçamento com Kit", MsgBoxOptions.OkOnly, MsgBoxIcon.Info);
                }
                _this.gridDetalhado.PreencherGrid(retorno);
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
    R_O_Kit.prototype.PreencherGradeAgrupado = function () {
        var _this = this;
        try {
            var parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                cliente: CNum(this.Filtro.Cliente),
                orcamento: CNum(this.Filtro.Orcamento)
            };
            //this.AccordionFiltros.SetExpanded(false)
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGridAgrupado", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.gridAgrupado.PreencherGrid(retorno);
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
    R_O_Kit.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        var now = this.DataServidor();
        this.Filtro.Periodo_Inicial = now;
        this.Filtro.Periodo_Final = now;
        this.gridDetalhado.PreencherGrid(null);
        this.gridAgrupado.PreencherGrid(null);
        this.gridDetalhadoModal.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_O_Kit.prototype.OnSelecionouLinha = function (s, e) {
        abrirTelaNovaAbaCodigo(formataURLRelativa("/Modulos/Vendas/Orcamento/C_Orcame.aspx"), e.data["Codigo"]);
    };
    R_O_Kit.prototype.OnbtnFechecharClick = function () {
        this.mdDetalhado.Hide();
        this.gridDetalhadoModal.PreencherGrid(null);
    };
    R_O_Kit.prototype.CellPrepared = function (s, e) {
        if (e.rowType == "data") {
            e.cellElement.css("color", "grey");
        }
    };
    R_O_Kit.prototype.OnClickBotaoLinha = function (s, e) {
        if (e.commandName == "MATERIA_PRIMA") {
            var codProduto = CNum(e.data["Codigo_Produto_Formula"]);
            this.PreencherGridModal(codProduto);
        }
    };
    R_O_Kit.prototype.PreencherGridModal = function (codProduto) {
        var parametros;
        try {
            parametros = {
                codProduto: codProduto
            };
            var dados = this.ExecutarFuncaoServerSideSynch("GetMateriaPrimaProduto", parametros);
            if (dados) {
                if (dados.length <= 0) {
                    MostrarAlerta("Este produto não possui nenhuma matéria-prima cadastrada!");
                }
                else {
                    this.gridDetalhadoModal.PreencherGrid(dados);
                    this.mdDetalhado.Show();
                }
            }
            else {
                MostrarAlerta("Este produto não possui nenhuma matéria-prima cadastrada!");
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_O_Kit;
}(MouraPageRelacaoAngular));
var r_O_Kit = new R_O_Kit();
//# sourceMappingURL=R_O_Kit.js.map