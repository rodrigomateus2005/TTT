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
var C_CumQue = /** @class */ (function (_super) {
    __extends(C_CumQue, _super);
    function C_CumQue() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CumQue.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CumQue.prototype, "optTipoProcura", {
        get: function () {
            return window["optTipoProcura_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CumQue.prototype, "grdProdutos", {
        get: function () {
            return window['grdProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CumQue.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CumQue.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.optTipoProcura) {
            adicionarEventoMoura(this.optTipoProcura.SelectionChanged, this.OnOptTipoProcuraSelectionChanged, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickBtnGravar, this);
        }
        if (this.grdProdutos) {
            adicionarEventoMoura(this.grdProdutos.ExcluiuLinhaGrade, this.OnExcluiuProduto, this);
        }
    };
    C_CumQue.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        var parametros = {};
        var retorno = this.ExecutarFuncaoServerSideSynch("RetornarProdutosQuest", parametros);
        this.preencherGrid(retorno);
        this.optTipoProcura.SetValue("G");
        this.grdProdutos.Grid.columnOption("Codigo", "alignment", "left");
        this.grdProdutos.Grid.columnOption("Nome", "alignment", "right");
    };
    C_CumQue.prototype.OnOptTipoProcuraSelectionChanged = function (s, e) {
        switch (this.optTipoProcura.GetValue()) {
            case 'P':
                this.txtCodigo.Engine = "Sismoura.Web.View.ProdutoProcura";
                break;
            case 'G':
                this.txtCodigo.Engine = "Sismoura.Web.View.Grupo_ProdutoProcura";
                break;
            case 'S':
                this.txtCodigo.Engine = "Sismoura.Web.View.SubgrupoProcura";
                break;
        }
        this.txtCodigo.Limpar();
    };
    C_CumQue.prototype.OnClickBtnGravar = function (s, e) {
        e.processOnServer = false;
        if (String.IsNullOrWhiteSpace(this.txtCodigo.GetText())) {
            MostrarAlerta("Informe um código");
            return;
        }
        var parametros = {
            tipoProcura: this.optTipoProcura.GetValue(),
            codigo: this.txtCodigo.GetText().CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GravarProdutos", parametros);
        this.preencherGrid(retorno);
    };
    C_CumQue.prototype.preencherGrid = function (retorno) {
        this.grdProdutos.PreencherGrid(retorno);
    };
    C_CumQue.prototype.OnExcluiuProduto = function (s, e) {
        var parametros = {
            codigo: e.item.Codigo
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("RemoverProdutosQuest", parametros);
    };
    return C_CumQue;
}(MouraPageAngular));
var c_CumQue = new C_CumQue;
//# sourceMappingURL=C_CumQue.js.map