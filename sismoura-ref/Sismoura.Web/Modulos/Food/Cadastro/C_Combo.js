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
var C_Combo = /** @class */ (function (_super) {
    __extends(C_Combo, _super);
    function C_Combo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Combo.prototype, "grdProduto", {
        get: function () {
            return window['grdProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Combo.prototype, "Produto", {
        get: function () {
            if (!this.GetScope()["Produto"]) {
                this.GetScope()["Produto"] = {};
            }
            return this.GetScope()["Produto"];
        },
        set: function (value) {
            this.GetScope()["Produto"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Combo.prototype, "Produtos", {
        get: function () {
            return this.GetScope()["Produtos"];
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Combo.prototype, "grdCombo", {
        get: function () {
            return window['grdCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Combo.prototype, "Combo", {
        get: function () {
            if (!this.GetScope()["Combo"]) {
                this.GetScope()["Combo"] = {};
            }
            return this.GetScope()["Combo"];
        },
        set: function (value) {
            this.GetScope()["Combo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Combo.prototype, "Combos", {
        get: function () {
            return this.GetScope()["Combos"];
        },
        set: function (value) {
            this.GetScope()["Combos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Combo.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Combo.prototype, "txtProdutoCombo", {
        get: function () {
            return window['txtProdutoCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Combo.prototype, "txtLinhaProduto", {
        get: function () {
            return window['txtLinhaProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Combo.prototype, "txtColunaProduto", {
        get: function () {
            return window['txtColunaProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Combo.prototype, "txtSomarValor", {
        get: function () {
            return window['txtSomarValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Combo.prototype, "lblPrecoProduto", {
        get: function () {
            return window['lblPrecoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Combo.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdCombo) {
            adicionarEventoMoura(this.grdCombo.Grid.SelecionouLinha, this.OnGrdSelecionouCombo, this);
        }
        if (this.grdProduto) {
            adicionarEventoMoura(this.grdProduto.Validando, this.OnClickIncluirProduto, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnPrecoProduto, this);
        }
        this.lblPrecoProduto.Text = "0".Format("2");
    };
    C_Combo.prototype.OnPrecoProduto = function () {
        var parametrosPrecoProduto = {
            codProduto: this.txtProduto.GetText().CNum(),
        };
        if (this.txtProduto.GetText() != "") {
            var precoProduto = this.ExecutarFuncaoServerSideSynch("GetPreco", parametrosPrecoProduto);
            this.lblPrecoProduto.Text = precoProduto.Format("2");
        }
        else {
            this.lblPrecoProduto.Text = "0".Format("2");
        }
    };
    C_Combo.prototype.OnGrdSelecionouCombo = function (s, e) {
        this.EntityTela.Codigo = e.data.Codigo;
        this.PreencherEntidade(e.data.Codigo);
        this.RefreshAngular();
    };
    C_Combo.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
    };
    C_Combo.prototype.OnClickIncluirProduto = function (s, e) {
        try {
            if (!String.IsNullOrWhiteSpace(this.txtProdutoCombo.GetText())) {
                if ((this.txtProduto.GetText() == undefined || this.txtProduto.GetText() == "") && this.Produtos.length == 0) {
                    MostrarAlerta("Preencha o campo corretamente: Produto.");
                    e.cancelar = true;
                    return false;
                }
                if ((this.txtColunaProduto.GetText() == "" || this.txtColunaProduto.GetText() == undefined) && this.Produtos.length == 0) {
                    MostrarAlerta("Preencha o campo corretamente: Coluna do Produto");
                    e.cancelar = true;
                    return false;
                }
                if ((this.txtLinhaProduto.GetText() == "" || this.txtLinhaProduto.GetText() == undefined) && this.Produtos.length == 0) {
                    MostrarAlerta("Preencha o campo corretamente: Linha do Produto");
                    e.cancelar = true;
                    return false;
                }
                var parametrosProduto = {
                    codProduto: this.txtProduto.GetText().CNum()
                };
                //if (this.txtProduto.GetText().CNum() != 0) {
                //    var retornoProduto = this.ExecutarFuncaoServerSideSynch("GetProdutoValido", parametrosProduto);
                //    if (retornoProduto == 0) {
                //        MostrarAlerta("Este produto não é um produto filho do tipo Acompanhamento, Bebida, Sobremesa");
                //        e.cancelar = true;
                //        return false;
                //    }
                //}
                //for (var x = 0; x < this.Produtos.length; x++) {
                //    if (this.txtProduto.GetText() == this.Produtos[x].Produto) {
                //        e.cancelar = true;
                //        MostrarAlerta("Este produto já foi inserido");
                //        return false;
                //    }
                //}
                if (e.index < 0) {
                    e.item.Codigo = 0;
                    var maiorContador;
                    if (this.EntityTela.Codigo == null) {
                        this.EntityTela.Codigo = 0;
                    }
                    var parametros = {
                        codCombo: this.EntityTela.Codigo
                    };
                    var count = this.Produtos.length;
                    if (e.item.Codigo == 0) {
                        var retorno = this.ExecutarFuncaoServerSideSynch("GetMaximoProduto", parametros);
                        maiorContador = retorno + 1;
                        if (this.Produtos.length == 0) {
                            e.item.Codigo = maiorContador;
                        }
                        else {
                            e.item.Codigo = (this.Produtos[count - 1].Codigo + 1);
                        }
                    }
                    e.item.Nome_Produto = this.txtProduto.GetResultado();
                    e.item.Produto = this.txtProduto.GetText();
                    e.item.Linha = this.txtLinhaProduto.GetText();
                    e.item.Coluna = this.txtColunaProduto.GetText();
                    e.item.Somar_Valor = this.txtSomarValor.GetText();
                    this.Produto = {};
                }
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Combo.prototype.PreencherGrade = function () {
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCombos", {});
            this.Combos = retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Combo.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
        this.Produtos = [];
    };
    C_Combo.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_Combo.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.Produtos.length > 0) {
            this.EntityTela.ProdutosCombo = this.Produtos;
        }
        else {
            if (!String.IsNullOrWhiteSpace(this.txtProdutoCombo.GetText())) {
                if (this.txtProduto.GetText() == undefined || this.txtProduto.GetText() == "") {
                    MostrarAlerta("Preencha o campo corretamente: Produto.");
                    return false;
                }
                if (this.txtColunaProduto.GetText() == "" || this.txtColunaProduto.GetText() == undefined) {
                    MostrarAlerta("Preencha o campo corretamente: Coluna do Produto");
                    return false;
                }
                if (this.txtLinhaProduto.GetText() == "" || this.txtLinhaProduto.GetText() == undefined) {
                    MostrarAlerta("Preencha o campo corretamente: Linha do Produto");
                    return false;
                }
                if (this.Produtos.length == 0) {
                    MostrarAlerta("Informe ao menos um Produto");
                    return false;
                }
            }
        }
        return true;
    };
    C_Combo.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        var parametros = {
            codigo: this.EntityTela.Codigo
        };
        this.PreencherGrade();
        var retornoProdutos = this.ExecutarFuncaoServerSideSynch("GetProdutosCombo", parametros);
        this.Produtos = retornoProdutos;
        this.RefreshAngular();
    };
    return C_Combo;
}(MouraPageCadastroAngular));
var c_Combo = new C_Combo();
//# sourceMappingURL=C_Combo.js.map