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
var C_InfAna = /** @class */ (function (_super) {
    __extends(C_InfAna, _super);
    function C_InfAna() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_InfAna.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_InfAna.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_InfAna.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_InfAna.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_InfAna.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_InfAna.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.EntityTela.Ativar) {
            try {
                var codAnalise = 0;
                var parametros;
                if (this.EntityTela.Codigo != null || this.EntityTela.Codigo != undefined) {
                    codAnalise = this.EntityTela.Codigo;
                }
                parametros = {
                    codAnalise: codAnalise
                };
                var verificarAtivo = this.ExecutarFuncaoServerSideSynch("VerificarAnaliseAtiva", parametros);
                if (verificarAtivo) {
                    MostrarAlerta("Já existe uma informação para análise marcada como ativa!");
                    this.EntityTela.Ativar = false;
                    this.RefreshAngular();
                    return false;
                }
            }
            catch (ex) {
                LogarException(ex);
            }
        }
        return true;
    };
    C_InfAna.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_InfAna.prototype.PreencherGrade = function () {
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
    return C_InfAna;
}(MouraPageCadastroAngular));
var c_InfAna = new C_InfAna();
//# sourceMappingURL=C_InfAna.js.map