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
var C_SAT = /** @class */ (function (_super) {
    __extends(C_SAT, _super);
    function C_SAT() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_SAT.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SAT.prototype, "txtNumero_Serie", {
        get: function () {
            return window['txtNumero_Serie_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SAT.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SAT.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SAT.prototype, "cboPDV", {
        get: function () {
            return window['cboPDV_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_SAT.prototype, "chkInativo", {
        get: function () {
            return window['chkInativo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_SAT.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    C_SAT.prototype.OnGridSelecionouItem = function (s, e) {
        this.PreencherEntidade(e.rowKey);
    };
    C_SAT.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        this.txtNumero_Serie.ReadOnly = false;
        try {
            var parametros;
            parametros = { codSat: Entidade.Codigo };
            var qtdVenda = this.ExecutarFuncaoServerSideSynch("GetQuantVendas", parametros);
            if (qtdVenda) {
                if (this.txtNumero_Serie) {
                    this.txtNumero_Serie.ReadOnly = true;
                    MostrarAlerta("O Número de Série não poderá ser alterado, pois já existem vendas cadastradas ou canceladas.");
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_SAT.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_SAT.prototype.OnDepoisLimpar = function (Entity) {
        this.PreencherGrade();
        this.txtNumero_Serie.ReadOnly = false;
    };
    C_SAT.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_SAT.prototype.PreencherGrade = function () {
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
    C_SAT.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var SATs;
        var entidade = this.EntityTela;
        var x;
        try {
            var parametros;
            parametros = {};
            SATs = this.ExecutarFuncaoServerSideSynch("GetSATs", parametros);
            for (x = 0; x < SATs.length; ++x) {
                if (SATs[x].Pdv_Instalacao == entidade.Pdv_Instalacao && SATs[x].Codigo != entidade.Codigo) {
                    MostrarAlerta("Já existe SAT cadastrado vinculado ao PDV informado. Não será possível continuar!");
                    return false;
                }
                if (SATs[x].Numero_Serie == entidade.Numero_Serie && SATs[x].Codigo != entidade.Codigo) {
                    MostrarAlerta("Já exite um SAT cadastrado com o mesmo Número de Série, verifique para que não haja inconsistências no sistema.");
                    return false;
                }
            }
            return true;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_SAT;
}(MouraPageCadastroAngular));
var c_SAT = new C_SAT();
//# sourceMappingURL=C_SAT.js.map