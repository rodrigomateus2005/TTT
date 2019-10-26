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
var R_ProdImpo = /** @class */ (function (_super) {
    __extends(R_ProdImpo, _super);
    function R_ProdImpo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ProdImpo.prototype, "grdRel", {
        get: function () {
            return window['grdRel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ProdImpo.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ProdImpo.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ProdImpo.prototype, "btnBaixarExcel", {
        get: function () {
            return window['btnBaixarExcel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ProdImpo.prototype, "hdnCodigo", {
        get: function () {
            return $("#hdnCodigo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ProdImpo.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ProdImpo.prototype, "txtUsuario", {
        get: function () {
            return window['txtUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ProdImpo.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickBotaoGerar, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickBotaoLimpar, this);
        }
        if (this.grdRel) {
            adicionarEventoMoura(this.grdRel.ClickBotaoLinha, this.OnClickBotaoLinha, this);
        }
    };
    R_ProdImpo.prototype.OnClickBotaoLimpar = function (s, e) {
        e.processOnServer = false;
        this.txtPeriodo.Iniciar();
        this.txtUsuario.Limpar();
        this.grdRel.PreencherGrid(null);
    };
    R_ProdImpo.prototype.OnClickBotaoGerar = function (s, e) {
        e.processOnServer = false;
        var parametros;
        var resultado;
        parametros = {
            dataInicio: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            dataFim: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
            codUsuario: this.txtUsuario.GetText().CNum()
        };
        resultado = this.ExecutarFuncaoServerSideSynch("PreencherGrade", parametros);
        this.grdRel.PreencherGrid(resultado);
    };
    R_ProdImpo.prototype.OnClickBotaoLinha = function (s, e) {
        if (e.commandName == "Baixar") {
            this.hdnCodigo.value = "" + e.rowKey;
            this.btnBaixarExcel.DoClick();
        }
    };
    return R_ProdImpo;
}(MouraPage));
var r_ProdImpo = new R_ProdImpo();
//# sourceMappingURL=R_ProdImpo.js.map