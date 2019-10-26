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
var G_Analis = /** @class */ (function (_super) {
    __extends(G_Analis, _super);
    function G_Analis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(G_Analis.prototype, "Filtro", {
        get: function () {
            if (!this.GetScope()["Filtro"]) {
                this.GetScope()["Filtro"] = {};
            }
            return this.GetScope()["Filtro"];
        },
        set: function (value) {
            this.GetScope()["Filtro"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Analis.prototype, "txtDataAnalise", {
        get: function () {
            return window['txtDataAnalise_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Analis.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(G_Analis.prototype, "btnGerar", {
        get: function () {
            return window['btnGerar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    G_Analis.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.InicializarLabels();
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.txtDataAnalise.Date = this.DataServidor();
    };
    G_Analis.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickGerar, this);
        }
    };
    G_Analis.prototype.InicializarLabels = function () {
        this.Filtro.Venda_Produto = "Gera a análise de vendas por cidade";
        this.Filtro.Venda_Produto_Vendedor = "Gera a análise de vendas por cliente";
        this.Filtro.Compra_Produto = "Gera a análise de vendas de produtos";
        this.Filtro.Venda_Grupo = "Gera a análise de vendas por grupo";
        this.Filtro.Venda_Produto_Cidade = "Gera a análise de vendas por vendedor";
        this.Filtro.Venda_Produto_Cliente = "Gera a análise de período médio de produto no estoque";
        this.Filtro.Venda_Mensal = "Gera a análise de período médio de contas a receber";
        this.Filtro.Venda_Receber = "Gera a análise de período médio de contas a pagar";
        this.Filtro.Compra_Pagamento = "Gera a análise de compras por produto";
        this.RefreshAngular();
    };
    G_Analis.prototype.OnClickGerar = function (s, e) {
        e.processOnServer = false;
        if (this.ValidarCamposObrigatorios()) {
            this.GerarAnaliseVendas();
        }
    };
    G_Analis.prototype.GerarAnaliseVendas = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                data: this.txtDataAnalise.GetDate(),
                empresa: this.cboEmpresa.GetValue()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarAnaliseVendas", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.Filtro.Venda_Produto = retorno.Venda_Produto;
                _this.Filtro.Venda_Produto_Vendedor = retorno.Venda_Produto_Vendedor;
                _this.Filtro.Compra_Produto = retorno.Compra_Produto;
                _this.Filtro.Venda_Grupo = retorno.Venda_Grupo;
                _this.Filtro.Venda_Produto_Cidade = retorno.Venda_Produto_Cidade;
                _this.Filtro.Venda_Produto_Cliente = retorno.Venda_Produto_Cliente;
                _this.Filtro.Venda_Mensal = retorno.Venda_Mensal;
                _this.Filtro.Venda_Receber = retorno.Venda_Receber;
                _this.Filtro.Compra_Pagamento = retorno.Compra_Pagamento;
                _this.RefreshAngular();
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    return G_Analis;
}(MouraPageAngular));
var g_Analis = new G_Analis();
//# sourceMappingURL=G_Analis.js.map