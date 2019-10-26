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
var C_Cidade = /** @class */ (function (_super) {
    __extends(C_Cidade, _super);
    function C_Cidade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Cidade.prototype, "txtEstado", {
        get: function () {
            return window['txtEstado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cidade.prototype, "txtCodPais", {
        get: function () {
            return window['txtCodPais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cidade.prototype, "txtDescPais", {
        get: function () {
            return window['txtDescPais_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cidade.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Cidade.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouLinha, this);
        }
    };
    C_Cidade.prototype.OnGridSelecionouLinha = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_Cidade.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.OnDepoisLimpar(this.EntityTela);
        if (!this.GetScope().CidadeIbgeOnChange) {
            this.GetScope().CidadeIbgeOnChange = $.proxy(this.CidadeIbgeOnChange, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Codigo_Cidade_IBGE; }, this.GetScope().CidadeIbgeOnChange);
        }
        if (!this.GetScope().EstadoOnChange) {
            this.GetScope().EstadoOnChange = $.proxy(this.EstadoOnChange, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Estado; }, this.GetScope().EstadoOnChange);
        }
    };
    C_Cidade.prototype.PreencherGrade = function () {
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
    C_Cidade.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
        return true;
    };
    C_Cidade.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Cidade.prototype.CidadeIbgeOnChange = function () {
        if (this.EntityTela.Codigo_Cidade_IBGE && this.EntityTela.Codigo_Cidade_IBGE != 9999999) {
            this.EntityTela.Codigo_UF_IBGE = (("" + this.EntityTela.Codigo_Cidade_IBGE).substr(0, 2)).CNum(); //(txtCidade_IBGE.Text.CNum, 1, 2);
            this.txtEstado.Enabled = true; //this.txtEstado.Enabled = true;
            if (this.EntityTela.Estado == "EX") {
                this.EntityTela.Estado = "";
            }
        }
        else if (this.EntityTela.Codigo_Cidade_IBGE == 999999) { //ElseIf txtCidade_IBGE.Text = 9999999 Then
            this.EntityTela.Codigo_UF_IBGE = null;
            this.EntityTela.Estado = "EX";
            this.txtEstado.Enabled = false; //this.txtEstado.Enabled = false;
        }
        else {
            this.EntityTela.Codigo_UF_IBGE = null;
            this.txtEstado.Enabled = true; //this.txtEstado.Enabled = true
        }
        this.RefreshAngular();
    };
    C_Cidade.prototype.EstadoOnChange = function () {
        if (!(String.IsNullOrWhiteSpace(this.EntityTela.Estado)) && (this.EntityTela.Estado.toUpperCase() != "EX")) {
            this.EntityTela.Codigo_Pais = 1058;
            this.EntityTela.Nome_Pais = "Brasil";
            this.txtCodPais.ReadOnly = true;
            this.txtDescPais.ReadOnly = true;
        }
        else {
            this.EntityTela.Codigo_Pais = null;
            this.EntityTela.Nome_Pais = null;
            this.txtCodPais.ReadOnly = false;
            this.txtDescPais.ReadOnly = false;
        }
    };
    return C_Cidade;
}(MouraPageCadastroAngular));
var c_Cidade = new C_Cidade();
//# sourceMappingURL=C_Cidade.js.map