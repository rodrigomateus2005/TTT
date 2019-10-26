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
var R_HisCli_Angular = /** @class */ (function (_super) {
    __extends(R_HisCli_Angular, _super);
    function R_HisCli_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_HisCli_Angular.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCli_Angular.prototype, "infVenda", {
        get: function () {
            return window['infVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCli_Angular.prototype, "gridHistoricoCliente", {
        get: function () {
            return window['gridHistoricoCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCli_Angular.prototype, "gridHistoricoResumido", {
        get: function () {
            return window['gridHistoricoResumido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCli_Angular.prototype, "lstEmpresa_RE", {
        get: function () {
            return window['lstEmpresa_RE_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCli_Angular.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HisCli_Angular.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_HisCli_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_HisCli_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.gridHistoricoCliente) {
            adicionarEventoMoura(this.gridHistoricoCliente.ClickBotaoLinha, this.OnClickItem, this);
        }
    };
    R_HisCli_Angular.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (this.tab.GetActiveTabIndex() == 0) {
            this.PreencherGridHistoricoCliente();
        }
        else if (this.tab.GetActiveTabIndex() == 1) {
            this.PreencherGridHistoricoResumido();
        }
    };
    R_HisCli_Angular.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.DataServidor();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Cliente = 0;
        this.Filtro.Cliente_RE = 0;
        this.Filtro.SaldoAtualCliente = "";
        this.Filtro.ValorCredito = "";
        this.gridHistoricoCliente.PreencherGrid(null);
        this.gridHistoricoResumido.PreencherGrid(null);
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.lstEmpresa_RE.SelecionarEmpresaPadraoUsuario();
        this.RefreshAngular();
    };
    R_HisCli_Angular.prototype.PreencherGridHistoricoCliente = function () {
        var _this = this;
        var parametros;
        if (!ValidarPeriodo(this.Filtro.Periodo_Inicial, this.Filtro.Periodo_Final)) {
            return;
        }
        if (CNum(this.Filtro.Cliente) <= 0) {
            MostrarMensagemCampoObrigatorio("Cliente");
            return;
        }
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                codCliente: CNum(this.Filtro.Cliente),
                empresas: this.lstEmpresa.GetValues().join(",")
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGridHistoricoCliente", parametros, function (d) {
                var retorno = GetRetornoAJAX(d);
                _this.gridHistoricoCliente.PreencherGrid(retorno.Tabela);
                _this.gridHistoricoCliente.GroupBy("Tipo");
                _this.Filtro.ValorCredito = retorno.ValorCredito;
                _this.Filtro.SaldoAtualCliente = retorno.SaldoAtualCliente;
                _this.RefreshAngular();
                fecharEspera();
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
    R_HisCli_Angular.prototype.PreencherGridHistoricoResumido = function () {
        var _this = this;
        var parametros;
        if (CNum(this.Filtro.Cliente_RE) <= 0) {
            MostrarMensagemCampoObrigatorio("Cliente");
            return;
        }
        try {
            parametros = {
                codCliente: this.Filtro.Cliente_RE,
                empresas: this.lstEmpresa_RE.GetValues().join(",")
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGridHistoricoResumido", parametros, function (d) {
                var retorno = GetRetornoAJAX(d);
                _this.gridHistoricoResumido.PreencherGrid(retorno);
                _this.RefreshAngular();
                fecharEspera();
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
    R_HisCli_Angular.prototype.OnClickItem = function (s, e) {
        this.infVenda.Abrir(e.rowKey);
    };
    return R_HisCli_Angular;
}(MouraPageRelacaoAngular));
var r_HisCli_Angular = new R_HisCli_Angular();
//# sourceMappingURL=R_HisCli_Angular.js.map