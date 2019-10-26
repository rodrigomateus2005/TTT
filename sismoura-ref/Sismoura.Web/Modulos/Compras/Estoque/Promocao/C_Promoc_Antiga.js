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
var C_Promoc_Antiga = /** @class */ (function (_super) {
    __extends(C_Promoc_Antiga, _super);
    function C_Promoc_Antiga() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Promoc_Antiga.prototype, "txtProduto", {
        get: function () {
            return window["txtProduto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc_Antiga.prototype, "txtDesconto", {
        get: function () {
            return window["txtDesconto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc_Antiga.prototype, "txtPromocao", {
        get: function () {
            return window["txtPromocao_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc_Antiga.prototype, "txtPeriodoProrrogar", {
        get: function () {
            return window["txtPeriodoProrrogar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Promoc_Antiga.prototype, "cboSituacao", {
        get: function () {
            return window["cboSituacao_Object"];
        },
        enumerable: true,
        configurable: true
    });
    C_Promoc_Antiga.prototype.Init = function () {
        _super.prototype.Init.call(this);
        this.OnCboSituacao(null, null);
        if (this.txtDesconto) {
            adicionarEventoMoura(this.txtDesconto.TextChanged, this.OnTextBoxDescontoChange, this);
        }
        if (this.txtPromocao) {
            adicionarEventoMoura(this.txtPromocao.TextChanged, this.OnTextBoxPromocaoChange, this);
        }
        if (this.cboSituacao) {
            adicionarEventoDevExpress(this.cboSituacao.Combo.SelectedIndexChanged, this.OnCboSituacao, this);
        }
    };
    C_Promoc_Antiga.prototype.OnTextBoxDescontoChange = function () {
        if (this.txtDesconto.GetText().CNum() < 0 || this.txtDesconto.GetText().CNum() > 100) {
            if (this.txtDesconto.GetText().CNum() < 0) {
                MostrarAlerta("Informe uma porcentagem maior que zero");
            }
            else {
                MostrarAlerta("A porcentagem de desconto não pode ser maior que 100 %");
            }
            this.txtDesconto.Limpar();
            this.txtDesconto.Focus();
            return;
        }
        return this.Calcular_Valor();
    };
    C_Promoc_Antiga.prototype.OnTextBoxPromocaoChange = function () {
        return this.Calcular_PCento();
    };
    C_Promoc_Antiga.prototype.OnCboSituacao = function (s, e) {
        if (this.cboSituacao.GetSelectedIndex() < 1) {
            this.txtPeriodoProrrogar.Visible = false;
        }
        else {
            this.txtPeriodoProrrogar.Visible = true;
        }
    };
    C_Promoc_Antiga.prototype.Calcular_Valor = function () {
        var precoProduto;
        var parametros;
        var valor;
        parametros = {
            codProduto: this.txtProduto.GetText().CNum()
        };
        precoProduto = this.ExecutarFuncaoServerSideSynch("ObterPrecoProduto", parametros);
        if (precoProduto > 0) {
            valor = precoProduto - ((this.txtDesconto.GetText().CNum() / 100) * precoProduto);
            this.txtPromocao.SetText(valor.Format(this.txtPromocao.QuantidadeCasas));
        }
    };
    C_Promoc_Antiga.prototype.Calcular_PCento = function () {
        var precoProduto;
        var parametros;
        var valor;
        parametros = {
            codProduto: this.txtProduto.GetText().CNum()
        };
        precoProduto = this.ExecutarFuncaoServerSideSynch("ObterPrecoProduto", parametros);
        if (precoProduto > 0) {
            valor = 100 - ((this.txtPromocao.GetText().CNum() * 100) / precoProduto);
            if (valor > 100 || valor < 0) {
                MostrarAlerta("A porcentagem de desconto não pode ser maior que 100 % ou menor que 0 %");
                this.txtPromocao.Limpar();
                this.txtPromocao.Focus();
                return;
            }
            this.txtDesconto.SetText(valor.Format(this.txtDesconto.QuantidadeCasas));
        }
    };
    return C_Promoc_Antiga;
}(MouraPageCadastro));
var c_Promoc_Antiga = new C_Promoc_Antiga;
//# sourceMappingURL=C_Promoc_Antiga.js.map