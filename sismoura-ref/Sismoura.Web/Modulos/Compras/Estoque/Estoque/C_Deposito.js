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
var C_Deposito = /** @class */ (function (_super) {
    __extends(C_Deposito, _super);
    function C_Deposito() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Deposito.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Deposito.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_Deposito.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_Deposito.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_Deposito.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.RefreshAngular;
    };
    C_Deposito.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        try {
            if (this.EntityTela.Padrao) {
                var parametros;
                var codDeposito = this.EntityTela.Codigo;
                if (!codDeposito) {
                    codDeposito = 0;
                }
                parametros = {
                    codDeposito: codDeposito,
                    codEmpresa: this.EntityTela.Empresa
                };
                var dep = this.ExecutarFuncaoServerSideSynch("GetPadrao", parametros);
                if (dep) {
                    MsgBoxJS("Existe outro depósito marcado como padrão. Deseja realmente alterar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespondeuMensagemExistente, this));
                    return false;
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return true;
    };
    C_Deposito.prototype.OnRespondeuMensagemExistente = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            try {
                var parametros;
                parametros = {
                    codDeposito: this.EntityTela.Codigo,
                    codEmpresa: this.EntityTela.Empresa
                };
                var verifica = this.ExecutarFuncaoServerSideSynch("GetResposta", parametros);
                this.ClicarGravar();
            }
            catch (ex) {
                LogarException(ex);
            }
        }
    };
    C_Deposito.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Deposito.prototype.PreencherGrade = function () {
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
    return C_Deposito;
}(MouraPageCadastroAngular));
var c_Deposito = new C_Deposito();
//# sourceMappingURL=C_Deposito.js.map