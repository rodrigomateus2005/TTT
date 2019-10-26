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
var R_OS_Pen = /** @class */ (function (_super) {
    __extends(R_OS_Pen, _super);
    function R_OS_Pen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_OS_Pen.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS_Pen.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS_Pen.prototype, "txtCodigoCliente", {
        get: function () {
            return window['txtCodigoCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS_Pen.prototype, "txtNomeCliente", {
        get: function () {
            return window['txtNomeCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_OS_Pen.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_OS_Pen.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().OnClientePesquisou) {
            var that = this;
            this.GetScope().OnClientePesquisou = $.proxy(this.OnClientePesquisou, this);
            this.GetScope().$watch(function () { return that.Filtro.CodigoCliente; }, this.GetScope().OnClientePesquisou);
        }
        if (!this.GetScope().OnMudouNomeCliente) {
            var that = this;
            this.GetScope().OnMudouNomeCliente = $.proxy(this.OnMudouNomeCliente, this);
            this.GetScope().$watch(function () { return that.Filtro.NomeCliente; }, this.GetScope().OnMudouNomeCliente);
        }
        if (!this.GetScope().BloquearCampos) {
            this.GetScope().BloquearCampos = $.proxy(this.BloquearCampos, this);
            var that = this;
            this.GetScope().$watch(function () { if (that.Filtro != null) {
                return that.Filtro.CodigoCliente;
            } }, this.GetScope().BloquearCampos);
        }
        this.LimparCampos();
    };
    R_OS_Pen.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_OS_Pen.prototype.BloquearCampos = function () {
        if (this.Filtro.CodigoCliente > 0) {
            this.txtNomeCliente.Enabled = false;
        }
        else {
            this.txtNomeCliente.Enabled = true;
        }
    };
    R_OS_Pen.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            var parametros;
            parametros = {
                dataRecebimento_inicial: this.Filtro.PeriodoRecebimento_Inicial,
                dataRecebimento_final: this.Filtro.PeriodoRecebimento_Final,
                vendedor: CNum(this.Filtro.Vendedor),
                codigoCliente: CNum(this.Filtro.CodigoCliente),
                situacao: CNum(this.Filtro.Situacao),
                dataEntrega_inicial: this.Filtro.PeriodoEntrega_Inicial,
                dataEntrega_final: this.Filtro.PeriodoEntrega_Final,
                nomeCliente: this.Filtro.NomeCliente
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_OS_Pen.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.PeriodoRecebimento_Inicial = this.PrimeiroDiaMes();
        this.Filtro.PeriodoRecebimento_Final = this.DataServidor();
        this.Filtro.Vendedor = 0;
        this.Filtro.CodigoCliente = 0;
        this.Filtro.NomeCliente = "";
        this.Filtro.PeriodoEntrega_Inicial = null;
        this.Filtro.PeriodoEntrega_Final = null;
        this.Filtro.Situacao = 0;
        this.accCadastro.SetExpanded(true);
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_OS_Pen.prototype.OnClientePesquisou = function () {
        if (this.Filtro.CodigoCliente) {
            var parametros;
            parametros = {
                codigo: CNum(this.Filtro.CodigoCliente)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("OnClientePesquisou", parametros);
            if (retorno == null) {
                this.Filtro.NomeCliente = "";
            }
            else {
                this.Filtro.NomeCliente = retorno.Nome;
            }
        }
        else {
            this.Filtro.NomeCliente = "";
        }
        this.RefreshAngular();
    };
    R_OS_Pen.prototype.OnMudouNomeCliente = function () {
        if ((!this.Filtro.NomeCliente || this.Filtro.NomeCliente == "") && this.Filtro.CodigoCliente) {
            var parametros;
            parametros = {
                codigo: CNum(this.Filtro.CodigoCliente)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("OnClientePesquisou", parametros);
            this.Filtro.NomeCliente = retorno.Nome;
        }
    };
    return R_OS_Pen;
}(MouraPageRelacaoAngular));
var r_OS_Pen = new R_OS_Pen();
//# sourceMappingURL=R_OS_Pen.js.map