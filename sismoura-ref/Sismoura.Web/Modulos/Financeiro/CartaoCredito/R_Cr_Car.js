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
var R_Cr_Car = /** @class */ (function (_super) {
    __extends(R_Cr_Car, _super);
    function R_Cr_Car() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Cr_Car.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Cr_Car.prototype, "gridAnalitica", {
        get: function () {
            return window['gridAnalitica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Cr_Car.prototype, "gridSintetica", {
        get: function () {
            return window['gridSintetica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Cr_Car.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Cr_Car.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Cr_Car.prototype, "lstCartao", {
        get: function () {
            return window['lstCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Cr_Car.prototype, "optSelecao", {
        get: function () {
            return window['optSelecao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Cr_Car.prototype, "cboCartao", {
        get: function () {
            return window['cboCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Cr_Car.prototype, "tabResultado", {
        get: function () {
            return window['tabResultado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Cr_Car.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Cr_Car.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.cboCartao.Visible = false;
        this.LimparCampos();
    };
    R_Cr_Car.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.SelectionChanged, this);
        }
        if (this.optSelecao) {
            adicionarEventoMoura(this.optSelecao.SelectionChanged, this.TipoChanged, this);
        }
    };
    R_Cr_Car.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (this.tabResultado.GetActiveTabIndex() == 0) {
            this.PreencherGridAnalitica();
        }
        else {
            this.PreencherGridSintetica();
        }
        this.accCadastro.SetExpanded(false);
    };
    R_Cr_Car.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.TipoData = "V";
        this.Filtro.Situacao = "T";
        this.Filtro.CartaoCBO = "C";
        this.Filtro.Tipo = "C";
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        if (this.ParametrosTela["dataInicial"]) {
            this.txtPeriodo.textBoxCalendarioInicio.SetDate((this.ParametrosTela["dataInicial"]).ToDate());
            this.Filtro.Periodo_Inicial = (this.ParametrosTela["dataInicial"]).ToDate();
        }
        if (this.ParametrosTela["dataFinal"]) {
            this.txtPeriodo.textBoxCalendarioFim.SetDate((this.ParametrosTela["dataFinal"]).ToDate());
            this.Filtro.Periodo_Final = (this.ParametrosTela["dataFinal"]).ToDate();
        }
        if (this.ParametrosTela["empresas"]) {
            var listaEmpresa = this.ParametrosTela["empresas"].split(",");
            var codigos = [];
            for (var x = 0; x < listaEmpresa.length; x++) {
                codigos.push(listaEmpresa[x].toString());
            }
            if (this.lstEmpresa) {
                this.lstEmpresa.SetValues(codigos);
            }
        }
        this.PreencherListaCartao();
        this.gridAnalitica.PreencherGrid(null);
        this.gridSintetica.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_Cr_Car.prototype.SelectionChanged = function (s, e) {
        if (this.optSelecao.GetValue() == "C") {
            this.PreencherListaCartao();
        }
    };
    R_Cr_Car.prototype.PreencherListaCartao = function () {
        var parametros;
        try {
            parametros = {
                empresas: this.lstEmpresa.GetValues().join(",")
            };
            var itens = this.ExecutarFuncaoServerSideSynch("PreencheListaCartao", parametros);
            if (this.lstEmpresa) {
                this.lstCartao.RemoverTodosItens();
                for (var x = 0; x < itens.length; x++) {
                    this.lstCartao.AdicionarItem(itens[x].Descricao, itens[x].Codigo);
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Cr_Car.prototype.PreencherGridAnalitica = function () {
        var _this = this;
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                tipoPeriodo: this.Filtro.TipoData,
                situacao: this.Filtro.Situacao,
                empresas: this.lstEmpresa.GetValues().join(","),
                tipocartao: this.Filtro.CartaoCBO,
                cartao: this.lstCartao.GetValues().join(","),
                formaPesquisaCartao: this.Filtro.Tipo
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGridAnalitica", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.gridAnalitica.PreencherGrid(retorno);
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
    R_Cr_Car.prototype.PreencherGridSintetica = function () {
        var _this = this;
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                tipoPeriodo: this.Filtro.TipoData,
                situacao: this.Filtro.Situacao,
                empresas: this.lstEmpresa.GetValues().join(","),
                tipo: this.Filtro.CartaoCBO,
                cartao: this.lstCartao.GetValues().join(","),
                formaPesquisaCartao: this.Filtro.Tipo
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGridSintetica", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.gridSintetica.PreencherGrid(retorno);
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
    R_Cr_Car.prototype.TipoChanged = function (s, e) {
        if (this.optSelecao.GetValue() == "C") {
            this.lstCartao.Visible = true;
            this.cboCartao.Visible = false;
        }
        else {
            this.lstCartao.Visible = false;
            this.cboCartao.Visible = true;
        }
    };
    return R_Cr_Car;
}(MouraPageRelacaoAngular));
var r_Cr_Car = new R_Cr_Car();
//# sourceMappingURL=R_Cr_Car.js.map