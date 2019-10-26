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
var C_TipoRe = /** @class */ (function (_super) {
    __extends(C_TipoRe, _super);
    function C_TipoRe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_TipoRe.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_TipoRe.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_TipoRe.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_TipoRe.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_TipoRe.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
        Entity.Tipo = "ICMS";
        this.RefreshAngular();
    };
    C_TipoRe.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_TipoRe.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.VerificarConfiguracaoImendes()) {
            return false;
        }
        return true;
    };
    C_TipoRe.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        if (this.VerificarConfiguracaoImendes()) {
            return false;
        }
        return true;
    };
    C_TipoRe.prototype.VerificarConfiguracaoImendes = function () {
        try {
            var parametros;
            parametros = {};
            var utilizaImendes = this.ExecutarFuncaoServerSideSynch("VerificaConfiguracaoImendes", parametros);
            if (utilizaImendes) {
                MostrarAlerta("O sistema esta com a Integração do iMendes habilitada! Não será permitido alterar as regras de imposto do sistema.");
                return true;
            }
            return false;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_TipoRe.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_TipoRe;
}(MouraPageCadastroAngular));
var c_TipoRe = new C_TipoRe();
//# sourceMappingURL=C_TipoRe.js.map