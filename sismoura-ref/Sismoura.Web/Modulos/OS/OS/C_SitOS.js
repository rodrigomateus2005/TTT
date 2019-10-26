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
var C_SitOS = /** @class */ (function (_super) {
    __extends(C_SitOS, _super);
    function C_SitOS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SitOS.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SitOS.prototype, "chkBaixarEstoque", {
        get: function () {
            return window['chkBaixarEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SitOS.prototype, "cboDepositoOrigem", {
        get: function () {
            return window['cboDepositoOrigem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SitOS.prototype, "cboDepositoDestino", {
        get: function () {
            return window['cboDepositoDestino_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SitOS.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_SitOS.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_SitOS.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
        if (!this.GetScope().MudouTransferenciaEstoque) {
            this.GetScope().MudouTransferenciaEstoque = $.proxy(this.MudouTransferenciaEstoque, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Transferencia_Estoque; }, this.GetScope().MudouTransferenciaEstoque);
        }
        if (!this.GetScope().MudouGerarVenda) {
            this.GetScope().MudouGerarVenda = $.proxy(this.MudouGerarVenda, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Gerar_Venda; }, this.GetScope().MudouGerarVenda);
        }
    };
    C_SitOS.prototype.MudouGerarVenda = function () {
        if (this.EntityTela.Gerar_Venda) {
            this.EntityTela.Baixar_Estoque = true;
            this.chkBaixarEstoque.Enabled = false;
        }
        else {
            this.chkBaixarEstoque.Enabled = true;
        }
        this.RefreshAngular();
    };
    C_SitOS.prototype.MudouTransferenciaEstoque = function () {
        if (this.EntityTela.Transferencia_Estoque) {
            this.cboDepositoOrigem.Visible = true;
            this.cboDepositoOrigem.Obrigatorio = true;
            this.cboDepositoDestino.Visible = true;
            this.cboDepositoDestino.Obrigatorio = true;
        }
        else {
            this.cboDepositoOrigem.Visible = false;
            this.cboDepositoDestino.Visible = false;
            this.cboDepositoOrigem.Obrigatorio = false;
            this.cboDepositoDestino.Obrigatorio = false;
            this.EntityTela.Deposito_Destino = 0;
            this.EntityTela.Deposito_Origem = 0;
        }
        this.GetScope().$applyAsync();
    };
    C_SitOS.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
        Entity.Deposito_Destino = 0;
        Entity.Deposito_Origem = 0;
        this.cboDepositoDestino.Visible = false;
        this.cboDepositoOrigem.Visible = false;
    };
    C_SitOS.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_SitOS.prototype.PreencherGrade = function () {
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
    return C_SitOS;
}(MouraPageCadastroAngular));
var c_SitOS = new C_SitOS();
//# sourceMappingURL=C_SitOS.js.map