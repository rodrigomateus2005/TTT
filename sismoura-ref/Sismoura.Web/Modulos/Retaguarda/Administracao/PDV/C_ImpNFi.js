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
var C_ImpNFi = /** @class */ (function (_super) {
    __extends(C_ImpNFi, _super);
    function C_ImpNFi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ImpNFi.prototype, "cboAmbiente", {
        get: function () {
            return window['cboAmbiente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpNFi.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpNFi.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpNFi.prototype, "txtCaminho", {
        get: function () {
            return window['txtCaminho_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpNFi.prototype, "txtSaltos", {
        get: function () {
            return window['txtSaltos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpNFi.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ImpNFi.prototype, "Entity", {
        get: function () {
            return this.GetScope()["Entity"];
        },
        set: function (value) {
            this.GetScope()["Entity"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_ImpNFi.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnGridSelecionouLinha, this);
        }
    };
    C_ImpNFi.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().PreencherCaminho) {
            this.GetScope().PreencherCaminho = $.proxy(this.PreencherCaminho, this);
            var that = this;
            this.GetScope().$watch(function () { return that.Entity.Ambiente; }, this.GetScope().PreencherCaminho);
        }
    };
    C_ImpNFi.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
        return true;
    };
    C_ImpNFi.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_ImpNFi.prototype.OnGridSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_ImpNFi.prototype.PreencherGrade = function () {
        try {
            var parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ImpNFi.prototype.PreencherCaminho = function () {
        try {
            var parametros = {
                ambiente: CNum(this.Entity.Ambiente)
            };
            var ambiente = this.ExecutarFuncaoServerSideSynch("GetAmbiente", parametros);
            if (ambiente.length > 0) {
                this.Entity.Caminho = "\\" + "\\" + ambiente[0].Micro_Resp;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_ImpNFi;
}(MouraPageCadastroAngular));
var c_ImpNFi = new C_ImpNFi();
//# sourceMappingURL=C_ImpNFi.js.map