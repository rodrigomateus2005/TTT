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
var R_ComAbe = /** @class */ (function (_super) {
    __extends(R_ComAbe, _super);
    function R_ComAbe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ComAbe.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComAbe.prototype, "grdComandas", {
        get: function () {
            return window['grdComandas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComAbe.prototype, "grdDiscriminadas", {
        get: function () {
            return window['grdDiscriminadas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComAbe.prototype, "cboComanda", {
        get: function () {
            return window['cboComanda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComAbe.prototype, "hdnURLComandasDiscriminadas", {
        get: function () {
            return $('#hdnURLConsultaVenda')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComAbe.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ComAbe.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdComandas) {
            adicionarEventoMoura(this.grdComandas.SelecionouLinha, this.OnSelecionouLinhaResumida, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnGerarResumida, this);
        }
    };
    R_ComAbe.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        var comandas = this.ExecutarFuncaoServerSideSynch("GetComandas", {});
        this.grdComandas.PreencherGrid(comandas);
    };
    R_ComAbe.prototype.OnSelecionouLinhaResumida = function (s, e) {
        var parametros = {
            comanda: e.data["Comanda"]
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetComandasDiscriminadas", parametros);
        if (retorno <= 0) {
            MostrarAlerta("Comanda inexistente");
            return;
        }
        if (this.tab) {
            this.tab.SetActiveTabIndex(1);
        }
        this.grdDiscriminadas.PreencherGrid(retorno);
        this.cboComanda.SetValue(e.data["Comanda"]);
    };
    R_ComAbe.prototype.OnGerarResumida = function (s, e) {
        var parametros = {
            comanda: this.cboComanda.GetValue()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetComandasDiscriminadas", parametros);
        if (retorno <= 0) {
            MostrarAlerta("Comanda inexistente");
            return;
        }
        this.grdDiscriminadas.PreencherGrid(retorno);
    };
    return R_ComAbe;
}(MouraPageAngular));
var r_ComAbe = new R_ComAbe();
//# sourceMappingURL=R_ComAbe.js.map