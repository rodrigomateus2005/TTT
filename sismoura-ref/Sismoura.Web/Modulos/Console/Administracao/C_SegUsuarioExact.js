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
var C_SegUsuarioExact = /** @class */ (function (_super) {
    __extends(C_SegUsuarioExact, _super);
    function C_SegUsuarioExact() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SegUsuarioExact.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SegUsuarioExact.prototype, "btnAtualizar", {
        get: function () {
            return window['btnAtualizar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SegUsuarioExact.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_SegUsuarioExact.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
        }
        if (this.btnAtualizar) {
            adicionarEventoMoura(this.btnAtualizar.Click, this.OnClickAtualizar, this);
        }
    };
    C_SegUsuarioExact.prototype.Limpar = function () {
        _super.prototype.Limpar.call(this);
    };
    C_SegUsuarioExact.prototype.PreencherGrade = function () {
        var parametros;
        try {
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SegUsuarioExact.prototype.OnSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.data["Codigo"]);
    };
    C_SegUsuarioExact.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_SegUsuarioExact.prototype.OnClickAtualizar = function (s, e) {
        e.processOnServer = false;
        var parametros;
        try {
            parametros = {
                nomeTela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("SincronizarSegmentos", parametros, function (d) {
                fecharEspera();
                MostrarMensagem("Segmentos Sincronizados!");
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
    C_SegUsuarioExact.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        return true;
    };
    return C_SegUsuarioExact;
}(MouraPageCadastroAngular));
var c_SegUsuarioExact = new C_SegUsuarioExact();
//# sourceMappingURL=C_SegUsuarioExact.js.map