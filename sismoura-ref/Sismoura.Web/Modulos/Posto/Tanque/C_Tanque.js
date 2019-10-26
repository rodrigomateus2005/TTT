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
var C_Tanque = /** @class */ (function (_super) {
    __extends(C_Tanque, _super);
    function C_Tanque() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Tanque.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tanque.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tanque.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tanque.prototype, "txtCapacidade", {
        get: function () {
            return window['txtCapacidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tanque.prototype, "cboCombustivel", {
        get: function () {
            return window['cboCombustivel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Tanque.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa'];
        },
        enumerable: true,
        configurable: true
    });
    C_Tanque.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.EntityTela.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.cboCombustivel.Combo.SetSelectedIndex(0);
        this.EntityTela.Combustivel = this.cboCombustivel.GetValue();
        if (!this.GetScope().AlterouCombustivel) {
            this.GetScope().AlterouCombustivel = $.proxy(this.AlterouCombustivel, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Combustivel; }, this.GetScope().AlterouCombustivel);
        }
        this.PreencherGrade();
        //this.RefreshAngular();
    };
    C_Tanque.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_Tanque.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_Tanque.prototype.PreencherGrade = function () {
        try {
            var parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Tanque.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        this.RefreshAngular();
        return true;
    };
    C_Tanque.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        this.RefreshAngular();
        return true;
    };
    C_Tanque.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        //this.cboCombustivel.Combo.SetSelectedIndex(0);
        //this.RefreshAngular();
    };
    C_Tanque.prototype.AlterouCombustivel = function () {
        var combustivel = this.cboCombustivel.GetSelectedIndex();
        if (combustivel == -1) {
            if (this.EntityTela.Combustivel == undefined) {
                this.cboCombustivel.SetSelectedIndex(0);
                this.EntityTela.Combustivel = this.cboCombustivel.GetValue();
            }
        }
    };
    return C_Tanque;
}(MouraPageCadastroAngular));
var c_Tanque = new C_Tanque();
//# sourceMappingURL=C_Tanque.js.map