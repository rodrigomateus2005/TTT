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
var C_SerRegEsc = /** @class */ (function (_super) {
    __extends(C_SerRegEsc, _super);
    function C_SerRegEsc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SerRegEsc.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SerRegEsc.prototype, "Servicos", {
        get: function () {
            return this.GetScope()["Servicos"];
        },
        set: function (value) {
            this.GetScope()["Servicos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SerRegEsc.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SerRegEsc.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SerRegEsc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickGravar, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickLimpar, this);
        }
    };
    C_SerRegEsc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_SerRegEsc.prototype.PreencherGrade = function () {
        var _this = this;
        try {
            this.Servicos = [];
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GerarGrid", {}, function (d) {
                try {
                    fecharEspera();
                    _this.Servicos = GetRetornoAJAX(d);
                    _this.GetScope().$applyAsync();
                    _this.grd.Grid.Refresh();
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (err) {
                fecharEspera();
                LogarExceptionAjax(err);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SerRegEsc.prototype.OnClickGravar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        try {
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GravarValores", { servicos: this.Servicos }, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (retorno) {
                        MostrarMensagem("Serviços gravados com sucesso");
                        _this.PreencherGrade();
                    }
                    else {
                        MostrarError("Ocorreu um erro no sistema");
                    }
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (err) {
                fecharEspera();
                LogarExceptionAjax(err);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SerRegEsc.prototype.OnClickLimpar = function (s, e) {
        e.processOnServer = false;
        try {
            this.PreencherGrade();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_SerRegEsc;
}(MouraPageAngular));
var c_SerRegEsc = new C_SerRegEsc();
//# sourceMappingURL=C_SerRegEsc.js.map