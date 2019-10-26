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
var C_IntCad = /** @class */ (function (_super) {
    __extends(C_IntCad, _super);
    function C_IntCad() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_IntCad.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IntCad.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IntCad.prototype, "txtValorUnitario", {
        get: function () {
            return window['txtValorUnitario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IntCad.prototype, "txtValorUnitarioProduto", {
        get: function () {
            return window['txtValorUnitarioProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IntCad.prototype, "txtQuantidade", {
        get: function () {
            return window['txtQuantidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IntCad.prototype, "txtQuantidadeProduto", {
        get: function () {
            return window['txtQuantidadeProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IntCad.prototype, "txtDesconto", {
        get: function () {
            return window['txtDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IntCad.prototype, "txtDescontoProduto", {
        get: function () {
            return window['txtDescontoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IntCad.prototype, "txtDescontoPorcent", {
        get: function () {
            return window['txtDescontoPorcent_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IntCad.prototype, "txtDescontoPorcentProduto", {
        get: function () {
            return window['txtDescontoPorcentProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IntCad.prototype, "lblTotal", {
        get: function () {
            return window['lblTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IntCad.prototype, "lblTotalProduto", {
        get: function () {
            return window['lblTotalProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IntCad.prototype, "cboListaPreco", {
        get: function () {
            return window['cboListaPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IntCad.prototype, "cboListaPrecoProduto", {
        get: function () {
            return window['cboListaPrecoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_IntCad.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_IntCad.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.txtServico.Procurou, this.OnTxtServicoProcurou, this);
        adicionarEventoMoura(this.txtProduto.Procurou, this.OnTxtProdutoProcurou, this);
        if (this.cboListaPreco && this.cboListaPreco.Combo) {
            adicionarEventoDevExpress(this.cboListaPreco.Combo.SelectedIndexChanged, this.OnCboListaPreco_comboBoxChange, this);
            adicionarEventoDevExpress(this.cboListaPreco.Combo.GotFocus, this.OnCboListaPrecoGotFocus, this);
        }
        if (this.cboListaPrecoProduto && this.cboListaPrecoProduto.Combo) {
            adicionarEventoDevExpress(this.cboListaPrecoProduto.Combo.SelectedIndexChanged, this.OnCboListaPrecoProduto_comboBoxChange, this);
            adicionarEventoDevExpress(this.cboListaPrecoProduto.Combo.GotFocus, this.OnCboListaPrecoProdutoGotFocus, this);
        }
        if (this.txtValorUnitarioProduto) {
            adicionarEventoMoura(this.txtValorUnitarioProduto.TextChanged, this.CalcularTotalProduto, this);
        }
        if (this.txtValorUnitario) {
            adicionarEventoMoura(this.txtValorUnitario.TextChanged, this.CalcularTotalServico, this);
        }
        if (this.txtQuantidadeProduto) {
            adicionarEventoMoura(this.txtQuantidadeProduto.TextChanged, this.CalcularTotalProduto, this);
        }
        if (this.txtQuantidade) {
            adicionarEventoMoura(this.txtQuantidade.TextChanged, this.CalcularTotalServico, this);
        }
        if (this.txtDescontoProduto) {
            adicionarEventoMoura(this.txtDescontoProduto.TextChanged, this.OnTxtDescontoProdutoChange, this);
        }
        if (this.txtDesconto) {
            adicionarEventoMoura(this.txtDesconto.TextChanged, this.OnTxtDescontoServicoChange, this);
        }
        if (this.txtDescontoPorcentProduto) {
            adicionarEventoMoura(this.txtDescontoPorcentProduto.TextChanged, this.OnTxtDescontoPorcentProdutoChange, this);
        }
        if (this.txtDescontoPorcent) {
            adicionarEventoMoura(this.txtDescontoPorcent.TextChanged, this.OnTxtDescontoPorcentServicoChange, this);
        }
    };
    C_IntCad.prototype.OnCboListaPreco_comboBoxChange = function (s, e) {
        try {
            if (this.cboListaPreco && this.cboListaPreco.Combo && this.listaPrecos) {
                if (this.cboListaPreco.Combo.GetSelectedIndex() >= 0 && this.cboListaPreco.Combo.GetSelectedIndex() < this.listaPrecos.length) {
                    //this.txtValorUnitario.SetText(this.listaPrecos[this.cboListaPreco.Combo.GetSelectedIndex()].Preco.Format(2));
                    this.txtValorUnitario.SetText(this.listaPrecos[this.cboListaPreco.Combo.GetSelectedIndex()].Preco.Format(ValoresSismoura.CasasDecimaisValor));
                    this.CalcularTotalServico();
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_IntCad.prototype.OnCboListaPrecoProduto_comboBoxChange = function (s, e) {
        try {
            if (this.cboListaPrecoProduto && this.cboListaPrecoProduto.Combo && this.listaPrecosProduto) {
                if (this.cboListaPrecoProduto.Combo.GetSelectedIndex() >= 0 && this.cboListaPrecoProduto.Combo.GetSelectedIndex() < this.listaPrecosProduto.length) {
                    //this.txtValorUnitario.SetText(this.listaPrecos[this.cboListaPreco.Combo.GetSelectedIndex()].Preco.Format(2));
                    this.txtValorUnitarioProduto.SetText(this.listaPrecosProduto[this.cboListaPrecoProduto.Combo.GetSelectedIndex()].Preco.Format(ValoresSismoura.CasasDecimaisValor));
                    this.CalcularTotalProduto();
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_IntCad.prototype.OnCboListaPrecoGotFocus = function (s, e) {
        if (this.cboListaPreco && this.cboListaPreco.Combo) {
            this.cboListaPreco.Combo.ShowDropDown();
        }
    };
    C_IntCad.prototype.OnCboListaPrecoProdutoGotFocus = function (s, e) {
        if (this.cboListaPrecoProduto && this.cboListaPrecoProduto.Combo) {
            this.cboListaPrecoProduto.Combo.ShowDropDown();
        }
    };
    C_IntCad.prototype.OnTxtServicoProcurou = function (s, e) {
        try {
            var parametros;
            parametros = {
                codProduto: this.txtServico.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue()
            };
            this.listaPrecos = this.ExecutarFuncaoServerSideSynch("GetListasPrecos", parametros);
            if (this.cboListaPreco && this.cboListaPreco.Combo) {
                this.cboListaPreco.Combo.ClearItems();
                for (var x = 0; x < this.listaPrecos.length; x++) {
                    this.cboListaPreco.Combo.AddItem(this.listaPrecos[x].Descricao, this.listaPrecos[x].Codigo, "");
                }
                if (this.cboListaPreco.Combo.GetItemCount() == 1) {
                    this.cboListaPreco.Combo.SetSelectedIndex(0);
                    this.txtValorUnitario.SetText(this.listaPrecos[0].Preco.Format(ValoresSismoura.CasasDecimaisValor));
                }
                else {
                    this.cboListaPreco.Combo.SetText("");
                    this.txtValorUnitario.SetText("0".CNum().Format(ValoresSismoura.CasasDecimaisValor));
                }
            }
            else {
                if (this.listaPrecos.length > 0) {
                    this.txtValorUnitario.SetText(this.listaPrecos[0].Preco.Format(ValoresSismoura.CasasDecimaisValor));
                }
                else {
                    this.txtValorUnitario.SetText("0".CNum().Format(ValoresSismoura.CasasDecimaisValor));
                }
            }
            this.CalcularTotalServico();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_IntCad.prototype.OnTxtProdutoProcurou = function (s, e) {
        try {
            var parametros;
            parametros = {
                codProduto: this.txtProduto.GetText().CNum()
            };
            var isProduto = this.ExecutarFuncaoServerSideSynch("ValidarProduto", parametros);
            if (!isProduto) {
                MostrarAlerta("Este é um serviço do Pet Shop e não pode ser adicionado na aba Produtos, adicione na aba Serviços");
                this.txtProduto.Focus();
                this.txtProduto.Limpar();
                return;
            }
            parametros = {
                codProduto: this.txtProduto.GetText().CNum(),
                codEmpresa: this.cboEmpresa.GetValue()
            };
            this.listaPrecosProduto = this.ExecutarFuncaoServerSideSynch("GetListasPrecos", parametros);
            if (this.cboListaPrecoProduto && this.cboListaPrecoProduto.Combo) {
                this.cboListaPrecoProduto.Combo.ClearItems();
                for (var x = 0; x < this.listaPrecosProduto.length; x++) {
                    this.cboListaPrecoProduto.Combo.AddItem(this.listaPrecosProduto[x].Descricao, this.listaPrecosProduto[x].Codigo, "");
                }
                if (this.cboListaPrecoProduto.Combo.GetItemCount() == 1) {
                    this.cboListaPrecoProduto.Combo.SetSelectedIndex(0);
                    this.txtValorUnitarioProduto.SetText(this.listaPrecosProduto[0].Preco.Format(ValoresSismoura.CasasDecimaisValor));
                }
                else {
                    this.cboListaPrecoProduto.Combo.SetText("");
                    this.txtValorUnitarioProduto.SetText("0".CNum().Format(ValoresSismoura.CasasDecimaisValor));
                }
            }
            else {
                if (this.listaPrecosProduto.length > 0) {
                    this.txtValorUnitarioProduto.SetText(this.listaPrecosProduto[0].Preco.Format(ValoresSismoura.CasasDecimaisValor));
                }
                else {
                    this.txtValorUnitarioProduto.SetText("0".CNum().Format(ValoresSismoura.CasasDecimaisValor));
                }
            }
            this.CalcularTotalProduto();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_IntCad.prototype.CalcularTotalProduto = function () {
        try {
            var total = ((this.txtQuantidadeProduto.GetText().CNum() * this.txtValorUnitarioProduto.GetText().CNum()) - this.txtDescontoProduto.GetText().CNum()).Format(ValoresSismoura.CasasDecimaisValor);
            this.lblTotalProduto.SetText(total);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_IntCad.prototype.CalcularTotalServico = function () {
        try {
            var total = ((this.txtQuantidade.GetText().CNum() * this.txtValorUnitario.GetText().CNum()) - this.txtDesconto.GetText().CNum()).Format(ValoresSismoura.CasasDecimaisValor);
            this.lblTotal.SetText(total);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_IntCad.prototype.OnTxtDescontoProdutoChange = function () {
        var descontoPorc;
        if ((this.txtQuantidadeProduto.GetText().CNum() * this.txtValorUnitarioProduto.GetText().CNum()) != 0) {
            descontoPorc = ((this.txtDescontoProduto.GetText().CNum() / (this.txtValorUnitarioProduto.GetText().CNum() * this.txtQuantidadeProduto.GetText().CNum())) * 100).Format(2);
            this.txtDescontoPorcentProduto.SetText(descontoPorc);
        }
        this.CalcularTotalProduto();
    };
    C_IntCad.prototype.OnTxtDescontoServicoChange = function () {
        var descontoPorc;
        if ((this.txtQuantidade.GetText().CNum() * this.txtValorUnitario.GetText().CNum()) != 0) {
            descontoPorc = ((this.txtDesconto.GetText().CNum() / (this.txtValorUnitario.GetText().CNum() * this.txtQuantidade.GetText().CNum())) * 100).Format(2);
            this.txtDescontoPorcent.SetText(descontoPorc);
        }
        this.CalcularTotalServico();
    };
    C_IntCad.prototype.OnTxtDescontoPorcentProdutoChange = function () {
        var desconto = ((this.txtDescontoPorcentProduto.GetText().CNum() / 100) * this.lblTotalProduto.GetText().CNum()).Format(ValoresSismoura.CasasDecimaisValor);
        this.txtDescontoProduto.SetText(desconto);
        this.CalcularTotalProduto();
    };
    C_IntCad.prototype.OnTxtDescontoPorcentServicoChange = function () {
        var desconto = ((this.txtDescontoPorcent.GetText().CNum() / 100) * this.lblTotal.GetText().CNum()).Format(ValoresSismoura.CasasDecimaisValor);
        this.txtDesconto.SetText(desconto);
        this.CalcularTotalServico();
    };
    return C_IntCad;
}(MouraPageCadastro));
var c_IntCad = new C_IntCad();
//# sourceMappingURL=C_IntCad.js.map