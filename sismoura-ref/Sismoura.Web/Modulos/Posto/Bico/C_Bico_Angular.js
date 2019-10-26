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
var C_Bico_Angular = /** @class */ (function (_super) {
    __extends(C_Bico_Angular, _super);
    function C_Bico_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Bico_Angular.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Bico_Angular.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Bico_Angular.prototype, "txtBico", {
        get: function () {
            return window['txtBico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Bico_Angular.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Bico_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.EntityTela.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.PreencherGrade();
    };
    C_Bico_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.txtBico) {
            adicionarEventoMoura(this.txtBico.LostFocus, this.BicoPerdeuFoco, this);
        }
    };
    C_Bico_Angular.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.data["Id"]);
    };
    C_Bico_Angular.prototype.PreencherGrade = function () {
        try {
            var parametros = {};
            this.Grid.PreencherGrid(this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros));
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Bico_Angular.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        this.RefreshAngular();
        return true;
    };
    C_Bico_Angular.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        this.RefreshAngular();
        return true;
    };
    C_Bico_Angular.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.EntityTela.Empresa = Entity.Empresa;
        this.cboEmpresa.Enabled = false;
        return true;
    };
    C_Bico_Angular.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        this.cboEmpresa.Enabled = true;
    };
    C_Bico_Angular.prototype.OnClickBtnLimpar = function () {
        this.Limpar();
        this.OnDepoisLimpar(this.GetScope().Entity);
        this.RefreshAngular();
    };
    C_Bico_Angular.prototype.BicoPerdeuFoco = function () {
        var parametros = {
            codBico: this.EntityTela.Bico,
            codEmpresa: this.EntityTela.Empresa
        };
        var entidade = {};
        entidade = this.ExecutarFuncaoServerSideSynch("GetByBicoEmpresa", parametros);
        if (entidade) {
            this.GetScope().Entity = entidade;
            this.RefreshAngular();
        }
    };
    return C_Bico_Angular;
}(MouraPageCadastroAngular));
var c_Bico_Angular = new C_Bico_Angular();
//# sourceMappingURL=C_Bico_Angular.js.map