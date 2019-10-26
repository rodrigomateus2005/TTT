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
var C_DocBan = /** @class */ (function (_super) {
    __extends(C_DocBan, _super);
    function C_DocBan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_DocBan.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocBan.prototype, "chkDadosCheque", {
        get: function () {
            return window['chkDadosCheque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocBan.prototype, "chkBandeiraCartao", {
        get: function () {
            return window['chkBandeiraCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_DocBan.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_DocBan.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_DocBan.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
        if (!this.GetScope().MudouCheque) {
            this.GetScope().MudouCheque = $.proxy(this.MudouCheque, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Pedir_Dados_Cheque; }, this.GetScope().MudouCheque);
        }
        if (!this.GetScope().MudouCartao) {
            this.GetScope().MudouCartao = $.proxy(this.MudouCartao, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Pedir_Bandeira_Cartao; }, this.GetScope().MudouCartao);
        }
    };
    C_DocBan.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
    };
    C_DocBan.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_DocBan.prototype.PreencherGrade = function () {
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
    C_DocBan.prototype.MudouCartao = function () {
        if (this.EntityTela.Pedir_Bandeira_Cartao) {
            this.EntityTela.Pedir_Dados_Cheque = false;
        }
        this.RefreshAngular();
    };
    C_DocBan.prototype.MudouCheque = function () {
        if (this.EntityTela.Pedir_Dados_Cheque) {
            this.EntityTela.Pedir_Bandeira_Cartao = false;
        }
        this.RefreshAngular();
    };
    return C_DocBan;
}(MouraPageCadastroAngular));
var c_DocBan = new C_DocBan();
//# sourceMappingURL=C_DocBan.js.map