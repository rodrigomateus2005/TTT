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
var C_PlCoSP = /** @class */ (function (_super) {
    __extends(C_PlCoSP, _super);
    function C_PlCoSP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_PlCoSP.prototype, "txtConta_Contabil_RFB", {
        get: function () {
            return window['txtConta_Contabil_RFB_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoSP.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_PlCoSP.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_PlCoSP.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.GravouSucesso, this.OnGravouSucesso, this);
        adicionarEventoMoura(this.ExcluiuSucesso, this.OnExcluiuSucesso, this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_PlCoSP.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().MudouConta) {
            this.GetScope().MudouConta = $.proxy(this.MudouConta, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Conta_Contabil; }, this.GetScope().MudouConta);
        }
        if (this.txtConta_Contabil_RFB) {
            var parametros = {};
            var codEmpresa = this.ExecutarFuncaoServerSideSynch("GetByEmpresaPadrao", parametros);
            this.txtConta_Contabil_RFB.hdnEmpresaContabil.value = codEmpresa;
            this.txtConta_Contabil_RFB.ComponenteEmpresaContabil = this.cboEmpresa.ID;
        }
    };
    C_PlCoSP.prototype.MudouConta = function () {
        var parametros = {
            codigoContabil: this.EntityTela.Conta_Contabil
        };
        var Nivel = this.ExecutarFuncaoServerSideSynch("retornaNivelConta", parametros);
        this.EntityTela.Nivel = Nivel;
        this.RefreshAngular();
    };
    C_PlCoSP.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var codEntidade = 0;
        if (this.EntityTela.Codigo != null && this.EntityTela.Codigo != undefined) {
            codEntidade = this.EntityTela.Codigo;
        }
        var parametros = {
            Empresa: this.EntityTela.Empresa,
            Conta_Contabil: this.EntityTela.Conta_Contabil,
            codEntidade: codEntidade
        };
        var existentes = this.ExecutarFuncaoServerSideSynch("CarregarVerificarExistentes", parametros);
        if (existentes == true) {
            MostrarAlerta("Empresa e Conta Contábil já existem !");
            return false;
        }
        return true;
    };
    C_PlCoSP.prototype.OnGravouSucesso = function (s, e) {
        this.GetCadastrados();
    };
    C_PlCoSP.prototype.OnExcluiuSucesso = function (s, e) {
        this.GetCadastrados();
    };
    C_PlCoSP.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        Entity.Conta_Contabil = "";
        Entity.Data = new Date();
        this.GetCadastrados();
    };
    C_PlCoSP.prototype.GetCadastrados = function () {
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
    C_PlCoSP.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    return C_PlCoSP;
}(MouraPageCadastroAngular));
var c_PlCoSP = new C_PlCoSP();
//# sourceMappingURL=C_PlCoSP.js.map