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
var C_BonRes = /** @class */ (function (_super) {
    __extends(C_BonRes, _super);
    function C_BonRes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_BonRes.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_BonRes.prototype, "txtFuncionario", {
        get: function () {
            return window['txtFuncionario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_BonRes.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_BonRes.prototype, "txtBonificacao", {
        get: function () {
            return window['txtBonificacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_BonRes.prototype, "txtMetaMax", {
        get: function () {
            return window['txtMetaMax_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_BonRes.prototype, "txtMetaMin", {
        get: function () {
            return window['txtMetaMin_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_BonRes.prototype, "cboTipoBonificacao", {
        get: function () {
            return window['cboTipoBonificacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_BonRes.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.txtFuncionario) {
            adicionarEventoMoura(this.txtFuncionario.Procurou, this.OnProcurouFuncionario, this);
        }
    };
    C_BonRes.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
        //this.GetScope().$applyAsync();
    };
    C_BonRes.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade(this.EntityTela);
    };
    C_BonRes.prototype.OnProcurouFuncionario = function (s, e) {
        var entity = this.GetScope().Entity;
        this.PreencherGrade(entity);
    };
    C_BonRes.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.PreencherGrade(Entity);
    };
    C_BonRes.prototype.OnAntesDeletar = function () {
        this.auxFuncionarioDeletando = this.EntityTela.Funcionario;
        return _super.prototype.OnAntesDeletar.call(this);
    };
    C_BonRes.prototype.OnDepoisLimpar = function (Entidade) {
        if (this.auxFuncionarioDeletando != 0) {
            Entidade.Funcionario = this.auxFuncionarioDeletando;
            this.auxFuncionarioDeletando = 0;
            this.PreencherGrade(Entidade);
        }
        Entidade.Tipo_Bonificacao = 0;
    };
    C_BonRes.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.EntityTela.Meta_Minima >= this.EntityTela.Meta_Maxima) {
            MostrarAlerta("O valor para meta mínima não pode ser maior ou igual a meta máxima");
            return false;
        }
        if (this.EntityTela.Tipo_Bonificacao == 1 && this.EntityTela.Bonificacao > 100) {
            MostrarAlerta("O tipo de comissão selecionado é %Venda, para esse tipo o valor de comissão não pode ser maior que 100%");
            return false;
        }
        return true;
    };
    C_BonRes.prototype.OnDepoisGravar = function () {
        this.PreencherGrade(this.EntityTela);
        return true;
    };
    C_BonRes.prototype.PreencherGrade = function (Entity) {
        var codFuncionario = 0;
        if (Entity.Funcionario != null || Entity.Funcionario != undefined) {
            codFuncionario = Entity.Funcionario;
        }
        try {
            var parametros;
            parametros = {
                codFuncionario: codFuncionario
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Grid.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_BonRes;
}(MouraPageCadastroAngular));
var c_BonRes = new C_BonRes();
//# sourceMappingURL=C_BonRes.js.map