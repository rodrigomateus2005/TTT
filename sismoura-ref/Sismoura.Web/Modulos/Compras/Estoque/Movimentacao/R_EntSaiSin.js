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
var R_EntSaiSin = /** @class */ (function (_super) {
    __extends(R_EntSaiSin, _super);
    function R_EntSaiSin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_EntSaiSin.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiSin.prototype, "gridSintetica", {
        get: function () {
            return window["gridSintetica_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiSin.prototype, "gridAgrupMovSintetica", {
        get: function () {
            return window["gridAgrupMovSintetica_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiSin.prototype, "lstDescricao", {
        get: function () {
            return window["lstDescricao_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiSin.prototype, "lstOrigem", {
        get: function () {
            return window["lstOrigem_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiSin.prototype, "lstDestino", {
        get: function () {
            return window["lstDestino_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiSin.prototype, "cboMovimento", {
        get: function () {
            return window["cboMovimento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiSin.prototype, "AbaSinteticaAgrup", {
        get: function () {
            return window["AbaSinteticaAgrup_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_EntSaiSin.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_EntSaiSin.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboMovimento)
            adicionarEventoMoura(this.cboMovimento.SelectedItemChanged, this.OnPreencheDescricao, this);
    };
    //
    R_EntSaiSin.prototype.OnPreencheDescricao = function () {
        try {
            var tipoMovimento = this.cboMovimento.GetValue();
            if (tipoMovimento === "0") {
                this.lstDescricao.RemoverTodosItens();
                this.lstDescricao.Visible = false;
            }
            else {
                this.lstDescricao.Visible = true;
                this.lstDescricao.RemoverTodosItens();
                var parametros = { tipoMovimento: tipoMovimento };
                var retorno = this.ExecutarFuncaoServerSideSynch("PreencheMovimento", parametros);
                for (var item in retorno) {
                    this.lstDescricao.AdicionarItem(retorno[item].Descricao, retorno[item].Codigo);
                }
                this.lstDescricao.LimparSelecao();
                this.RefreshAngular();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    //
    R_EntSaiSin.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.lstOrigem.LimparSelecao();
        this.lstDestino.LimparSelecao();
        this.lstOrigem.SelecionarEmpresaPadraoUsuario();
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.Filtro.TipoMovimento = 0;
        this.Filtro.Responsavel = 0;
        this.Filtro.Deposito = 0;
        this.gridSintetica.PreencherGrid(null);
        this.gridAgrupMovSintetica.PreencherGrid(null);
        this.gridAgrupMovSintetica.GroupBy("Codigo");
        this.Filtro.TotalAgrup = "0,00";
        this.Filtro.TotalSintetica = "0,00";
        this.cboMovimento.SetSelectedIndex("0");
        this.OnPreencheDescricao();
        this.lstDescricao.LimparSelecao();
        this.AccordionFiltros.SetExpanded(true);
        this.RefreshAngular();
    };
    R_EntSaiSin.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        try {
            abrirEspera();
            if (this.AbaSinteticaAgrup.MouraTabPanel.ActiveTabIndex == 1) {
                this.PreencherGradeAgrupada();
            }
            else {
                this.PreencherGradeSintetica();
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        finally {
            fecharEspera();
        }
    };
    R_EntSaiSin.prototype.PreencherGradeAgrupada = function () {
        var _this = this;
        try {
            var parametros = {};
            var empresaVisivel = false;
            if (this.lstOrigem.Visible)
                empresaVisivel = true;
            parametros = {
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final,
                movimento: this.cboMovimento.GetValue(),
                descricao: this.lstDescricao.GetValues().join(","),
                deposito: CNum(this.Filtro.Deposito),
                responsavel: CNum(this.Filtro.Responsavel),
                empresasOrigem: this.lstOrigem.GetValuesNumber().join(","),
                empresasDestino: this.lstDestino.GetValuesNumber().join(","),
                empresaVisivel: empresaVisivel,
                agrupada: true
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.gridAgrupMovSintetica.PreencherGrid(retorno.GgridAgrupMovSintetica);
                    _this.gridAgrupMovSintetica.GroupBy("Codigo");
                    _this.Filtro.TotalAgrup = retorno.TotalAgrup;
                    _this.AccordionFiltros.SetExpanded(false);
                    _this.RefreshAngular();
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
    R_EntSaiSin.prototype.PreencherGradeSintetica = function () {
        var _this = this;
        try {
            var parametros = {};
            var empresaVisivel = false;
            if (this.lstOrigem.Visible)
                empresaVisivel = true;
            parametros = {
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final,
                movimento: this.cboMovimento.GetValue(),
                descricao: this.lstDescricao.GetValues().join(","),
                deposito: CNum(this.Filtro.Deposito),
                responsavel: CNum(this.Filtro.Responsavel),
                empresasOrigem: this.lstOrigem.GetValuesNumber().join(","),
                empresasDestino: this.lstDestino.GetValuesNumber().join(","),
                empresaVisivel: empresaVisivel,
                agrupada: false
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.gridSintetica.PreencherGrid(retorno.GridSintetica);
                    _this.Filtro.TotalSintetica = retorno.TotalSintetica;
                    _this.AccordionFiltros.SetExpanded(false);
                    _this.RefreshAngular();
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
    return R_EntSaiSin;
}(MouraPageRelacaoAngular));
var r_EntSaiSin = new R_EntSaiSin();
//# sourceMappingURL=R_EntSaiSin.js.map