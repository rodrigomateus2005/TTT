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
var C_ConfCfop_Angular = /** @class */ (function (_super) {
    __extends(C_ConfCfop_Angular, _super);
    function C_ConfCfop_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ConfCfop_Angular.prototype, "cboTipoCfop", {
        get: function () {
            return window['cboTipoCfop_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfCfop_Angular.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfCfop_Angular.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfCfop_Angular.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfCfop_Angular.prototype, "CFOPs", {
        //get CFOPs(): any[] {
        //    return this.GetScope()["CFOPs"];
        //}
        //set CFOPs(value: any[]) {
        //    this.GetScope()["CFOPs"] = value;
        //}    
        get: function () {
            return this.GetScope()["CFOPs"];
        },
        set: function (value) {
            this.GetScope()["CFOPs"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_ConfCfop_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    C_ConfCfop_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboTipoCfop) {
            adicionarEventoMoura(this.cboTipoCfop.SelectedItemChanged, this.OnTipoCfop, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnGravar, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnCancelar, this);
        }
        if (this.grid) {
            adicionarEventoMoura(this.grid.AlterandoItem, this.AlterandoItem, this);
        }
    };
    C_ConfCfop_Angular.prototype.AlterandoItem = function (s, e) {
        e.item.Mensagem_Simples;
    };
    C_ConfCfop_Angular.prototype.OnGravar = function (s, e) {
        var _this = this;
        try {
            e.processOnServer = false;
            var parametros;
            abrirEspera();
            parametros = {
                entity: this.grid.Grid.DataSource,
                Tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideAsynch("Gravar", parametros, function (d) {
                try {
                    var result = GetRetornoAJAX(d);
                    _this.QueryString;
                    fecharEspera();
                }
                catch (e) {
                    LogarException(e);
                    fecharEspera();
                }
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
            this.RefreshAngular();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_ConfCfop_Angular.prototype.OnCancelar = function (s, e) {
        try {
            e.processOnServer = false;
            this.OnTipoCfop();
        }
        catch (e) {
            LogarException(e);
        }
    };
    C_ConfCfop_Angular.prototype.OnTipoCfop = function () {
        try {
            this.CarregarCfop();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ConfCfop_Angular.prototype.CarregarCfop = function () {
        var parametros;
        try {
            parametros = {
                TipoCfop: this.cboTipoCfop.GetValue()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("RetornarCfop", parametros);
            this.CFOPs = retorno;
            this.grid.Grid.PreencherGrid(retorno);
            this.grid.Grid.Refresh();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_ConfCfop_Angular;
}(MouraPageAngular));
var c_ConfCfop_Angular = new C_ConfCfop_Angular();
//# sourceMappingURL=C_ConfCfop_Angular.js.map