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
var CC_Funci = /** @class */ (function (_super) {
    __extends(CC_Funci, _super);
    function CC_Funci() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(CC_Funci.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CC_Funci.prototype, "txtFuncionario", {
        get: function () {
            return window['txtFuncionario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CC_Funci.prototype, "txtDesconto_Maximo_Produto", {
        get: function () {
            return window['txtDesconto_Maximo_Produto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CC_Funci.prototype, "txtDesconto_Maximo_Os", {
        get: function () {
            return window['txtDesconto_Maximo_Os_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CC_Funci.prototype, "Funcionario", {
        get: function () {
            return this.GetScope()["Funcionario"];
        },
        set: function (value) {
            this.GetScope()["Funcionario"] = value;
        },
        enumerable: true,
        configurable: true
    });
    CC_Funci.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    CC_Funci.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.txtFuncionario && this.txtFuncionario.Textbox) {
            adicionarEventoJQuery(this.txtFuncionario.Textbox, "blur", this.OnProcurou, this);
            //adicionarEventoMoura(this.txtFuncionario.AntesAbrirProcura, this.OnProcurou, this);
            adicionarEventoMoura(this.txtFuncionario.Procurou, this.OnProcurou, this);
        }
    };
    CC_Funci.prototype.OnGridSelecionouItem = function (s, e) {
        this.Funcionario = {};
        this.Funcionario.Codigo = e.data["Funcionario"];
        this.PreencherEntidade(e.data["Funcionario"]);
    };
    CC_Funci.prototype.PreencherGrade = function () {
        try {
            var parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("PreencherGradeRegistrosCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    CC_Funci.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.Funcionario = {};
        Entity.Desconto_Maximo_Produto = 0;
        Entity.Desconto_Maximo_Os = 0;
        this.Funcionario.Codigo = 0;
        this.RefreshAngular();
    };
    CC_Funci.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Funcionario = this.Funcionario.Codigo;
        return true;
    };
    CC_Funci.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        this.RefreshAngular();
        return true;
    };
    CC_Funci.prototype.OnAntesDeletar = function () {
        _super.prototype.OnAntesDeletar.call(this);
        this.EntityTela.Funcionario = this.Funcionario.Codigo;
        return true;
    };
    CC_Funci.prototype.OnDepoisDeletar = function () {
        _super.prototype.OnDepoisDeletar.call(this);
        this.PreencherGrade();
        this.RefreshAngular();
        return true;
    };
    CC_Funci.prototype.OnProcurou = function () {
        if (this.Funcionario.Codigo != null) {
            var parametros = {
                codUsuario: this.Funcionario.Codigo
            };
            var entidade = {};
            entidade = this.ExecutarFuncaoServerSideSynch("ObterConfiguracaoFuncionarioPorCodigo", parametros);
            if (entidade != null) {
                this.EntityTela.Funcionario = this.Funcionario.Codigo;
            }
        }
    };
    return CC_Funci;
}(MouraPageCadastroAngular));
var cC_Funci = new CC_Funci();
//# sourceMappingURL=CC_Funci.js.map