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
var C_PlaCon = /** @class */ (function (_super) {
    __extends(C_PlaCon, _super);
    function C_PlaCon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PlaCon.prototype, "GridPlacas", {
        get: function () {
            return window['GridPlacas_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlaCon.prototype, "txtId", {
        get: function () {
            return window['txtId_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlaCon.prototype, "txtPlaca", {
        get: function () {
            return window['txtPlaca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlaCon.prototype, "txtData_Cadastro", {
        get: function () {
            return window['txtData_Cadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlaCon.prototype, "txtObservacao", {
        get: function () {
            return window['txtObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlaCon.prototype, "lstSituacao", {
        get: function () {
            return window['lstSituacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_PlaCon.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
        this.lstSituacao.SetValue("0");
        if (!this.GetScope().AlterouSituacao) {
            this.GetScope().AlterouSituacao = $.proxy(this.AlterouSituacao, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Situacao; }, this.GetScope().AlterouSituacao);
        }
        //this.OnDepoisLimpar(this.EntityTela);
    };
    C_PlaCon.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridPlacas) {
            adicionarEventoMoura(this.GridPlacas.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.txtPlaca) {
            adicionarEventoMoura(this.txtPlaca.LostFocus, this.PlacaPerdeuFoco, this);
        }
    };
    C_PlaCon.prototype.PlacaPerdeuFoco = function () {
        if (this.EntityTela.Placa.split("_").length > 1) {
            MostrarAlerta("Digite uma placa válida");
        }
        else {
            var parametros = {
                codPlaca: this.EntityTela.Placa
            };
            var entidade = {};
            entidade = this.ExecutarFuncaoServerSideSynch("GetByPlaca", parametros);
            if (entidade) {
                this.GetScope().Entity = entidade;
                this.RefreshAngular();
            }
        }
    };
    C_PlaCon.prototype.OnGridSelecionouItem = function (s, e) {
        this.GetScope().Entity = e.data;
        this.RefreshAngular();
    };
    C_PlaCon.prototype.PreencherGrade = function () {
        try {
            var parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.GridPlacas.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_PlaCon.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Data_Cadastro = this.DataServidor();
        //Entity.Situacao = 0;
        //this.lstSituacao.SetValue("0");
        this.RefreshAngular();
    };
    C_PlaCon.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        //this.EntityTela.Situacao = this.lstSituacao.GetValue().CNum();
        return true;
    };
    C_PlaCon.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        this.RefreshAngular();
        return true;
    };
    C_PlaCon.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        this.RefreshAngular();
        return true;
    };
    C_PlaCon.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        //this.lstSituacao.SetValue(Entity.Situacao.toString());
    };
    C_PlaCon.prototype.AlterouSituacao = function () {
        var situacao = this.lstSituacao.GetValue();
        if (situacao == null) {
            if (this.EntityTela.Situacao == undefined) {
                this.EntityTela.Situacao = 0;
            }
            this.lstSituacao.SetValue(this.EntityTela.Situacao.toString());
        }
    };
    return C_PlaCon;
}(MouraPageCadastroAngular));
var c_PlaCon = new C_PlaCon();
//# sourceMappingURL=C_PlaCon.js.map