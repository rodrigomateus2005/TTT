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
var C_Subst = /** @class */ (function (_super) {
    __extends(C_Subst, _super);
    function C_Subst() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.respostaExcluir = false;
        return _this;
    }
    Object.defineProperty(C_Subst.prototype, "GridVinculoProduto", {
        get: function () {
            return window['GridVinculoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Subst.prototype, "Entity", {
        get: function () {
            if (!this.GetScope()['Entity']) {
                this.GetScope()['Entity'] = {};
            }
            return this.GetScope()['Entity'];
        },
        set: function (value) {
            this.GetScope()['Entity'] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_Subst.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.GridVinculoProduto) {
            adicionarEventoMoura(this.GridVinculoProduto.SelecionouLinha, this.OnSelecionouLinha, this);
        }
    };
    C_Subst.prototype.OnSelecionouLinha = function (e, s) {
        this.Entity.Produto = s.rowKey;
        this.RefreshAngular();
    };
    C_Subst.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        if (!this.GetScope().PesquisouProduto) {
            this.GetScope().PesquisouProduto = $.proxy(this.PesquisouProduto, this);
            var that = this.Entity;
            this.GetScope().$watch(function () { return that.Produto; }, this.GetScope().PesquisouProduto);
        }
    };
    C_Subst.prototype.PesquisouProduto = function () {
        var produto;
        var parametros;
        parametros = {
            codProduto: CNum(this.Entity.Produto)
        };
        produto = this.ExecutarFuncaoServerSideSynch("GetProdutoByCodigo", parametros);
        if (produto) {
            this.Entity.ONU = produto.Onu;
            this.Entity.Classe_Risco = produto.Classe_Risco;
        }
        this.RefreshAngular();
    };
    C_Subst.prototype.LimparCampos = function () {
        this.Entity.Produto = 0;
        this.Entity.ONU = 0;
        this.Entity.Classe_Risco = 0;
        this.PreencherGrade();
        this.RefreshAngular();
    };
    C_Subst.prototype.PreencherGrade = function () {
        try {
            var parametros;
            parametros = {};
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.GridVinculoProduto.PreencherGrid(cad);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Subst.prototype.Gravar = function (codProduto, codOnu, codClasse) {
        var parametros;
        var retorno;
        var gravar;
        parametros = {
            codProduto: codProduto,
            codOnu: codOnu,
            codClasse: codClasse
        };
        retorno = this.OnAntesGravar(codProduto, codOnu, codClasse);
        if (retorno) {
            gravar = this.ExecutarFuncaoServerSideSynch("Gravar", parametros);
            if (gravar) {
                MostrarMensagem("Registro gravado com sucesso!");
            }
        }
        this.PreencherGrade();
    };
    C_Subst.prototype.OnClickBtnExcluir = function () {
        if (this.Entity.Produto <= 0) {
            MostrarAlerta("Selecione um registro na grade para excluí-lo!");
            return;
        }
        MsgBoxJS("Deseja realmente excluir o registro?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRespostaExcluirRegistro, this));
    };
    C_Subst.prototype.OnRespostaExcluirRegistro = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.Excluir(this.Entity.Produto);
        }
    };
    C_Subst.prototype.Excluir = function (codProduto) {
        var parametros;
        var retorno;
        parametros = {
            codProduto: codProduto,
            codOnu: null,
            codClasse: null
        };
        retorno = this.ExecutarFuncaoServerSideSynch("Gravar", parametros);
        if (retorno) {
            MostrarMensagem("Registro excluído com sucesso!");
        }
        this.LimparCampos();
    };
    C_Subst.prototype.OnAntesGravar = function (codProduto, codOnu, codClasse) {
        if (codProduto <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Produto");
            return;
        }
        else if (codOnu <= 0) {
            MostrarAlerta("Preencha o campo corretamente: ONU");
            return;
        }
        else if (codClasse <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Classe Risco");
            return;
        }
        else {
            return true;
        }
    };
    return C_Subst;
}(MouraPageAngular));
var c_Subst = new C_Subst();
//# sourceMappingURL=C_Subst.js.map