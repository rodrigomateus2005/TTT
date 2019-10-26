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
var C_Empres = /** @class */ (function (_super) {
    __extends(C_Empres, _super);
    function C_Empres() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Empres.prototype, "EmprestimoItem", {
        //NgItem - Emprestimo_Item
        get: function () {
            if (!this.GetScope()["Emprestimo_Item"]) {
                this.GetScope()["Emprestimo_Item"] = {};
            }
            return this.GetScope()["Emprestimo_Item"];
        },
        set: function (value) {
            this.GetScope()["Emprestimo_Item"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Empres.prototype, "Farmacia_Emprestimo_Itens", {
        //NgItens - Farmacia_Emprestimo_Item
        get: function () {
            if (!this.GetScope()["Farmacia_Emprestimo_Item"]) {
                this.GetScope()["Farmacia_Emprestimo_Item"] = [];
            }
            return this.GetScope()["Farmacia_Emprestimo_Item"];
        },
        set: function (value) {
            this.GetScope()["Farmacia_Emprestimo_Item"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Empres.prototype, "Item", {
        //NgItem Intermediario
        get: function () {
            if (!this.GetScope()["Item"]) {
                this.GetScope()["Item"] = {};
            }
            return this.GetScope()["Item"];
        },
        set: function (value) {
            this.GetScope()["Item"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Empres.prototype, "Itens", {
        //NgItens Intermediario
        get: function () {
            if (!this.GetScope()["Itens"]) {
                this.GetScope()["Itens"] = [];
            }
            return this.GetScope()["Itens"];
        },
        set: function (value) {
            this.GetScope()["Itens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Empres.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Empres.prototype, "txtProduto", {
        get: function () {
            return window["txtProduto_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Empres.prototype, "txtCodigo", {
        get: function () {
            return window["txtCodigo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Empres.prototype, "cboTipo", {
        get: function () {
            return window["cboTipo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    C_Empres.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.Limpar();
    };
    C_Empres.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtCodigo)
            adicionarEventoMoura(this.txtCodigo.Procurou, this.OnProcurouEntidade, this);
        if (this.txtProduto)
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnProcurouProduto, this);
        if (this.grid)
            adicionarEventoMoura(this.grid.Validando, this.OnValidandoItem, this);
    };
    //
    C_Empres.prototype.OnProcurouEntidade = function (s, e) {
        this.GetCadastrados(CNum(this.txtCodigo.GetText()));
        (this.EntityTela.Tipo == false) ?
            this.cboTipo.SetSelectedIndex(0) :
            this.cboTipo.SetSelectedIndex(1);
        this.RefreshAngular();
    };
    C_Empres.prototype.OnProcurouProduto = function (s, e) {
        this.Item.DescProduto = this.txtProduto.GetResultado();
        this.RefreshAngular();
    };
    C_Empres.prototype.OnValidandoItem = function (s, e) {
        var _this = this;
        if (this.ValidarCampos()) {
            e.cancelar = true;
        }
        else {
            if (this.grid) {
                var data = [];
                data = this.grid.Grid.GetUnselectedRowsData;
                if (data.length > 0) {
                    for (var x in data) {
                        if (data[x].CodProduto == this.Item.CodProduto) {
                            MsgBoxJS("O produto já se encontra na grade, deseja substituir pelo novo lançamento?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                                try {
                                    if (result.Argument == "lancamento") {
                                        if (result.Resultado == MsgBoxResult.Yes) {
                                            for (var i = 0; i < _this.Itens.length; i++) {
                                                if (_this.Itens[i].CodProduto == _this.Item.CodProduto) {
                                                    _this.Itens[i].Quantidade = _this.Item.Quantidade;
                                                    _this.RefreshAngular();
                                                    _this.grid.AtualizarGrid();
                                                }
                                            }
                                        }
                                    }
                                }
                                catch (ex) {
                                    LogarException(ex);
                                }
                            }, "lancamento");
                            e.cancelar = true;
                        }
                    }
                }
            }
        }
    };
    C_Empres.prototype.ValidarCampos = function () {
        if (this.Item.CodProduto <= 0) {
            MostrarMensagemCampoObrigatorio("Produto");
            return true;
        }
        if (CNum(this.Item.Quantidade) <= 0) {
            MostrarMensagemCampoObrigatorio("Quantidade");
            return true;
        }
        if (this.GetIsControlado(this.Item.CodProduto)) {
            MostrarAlerta("O produto informado é um controlado. Não é possível efetuar o empréstimo, para isso, faça uma transferência.");
            return true;
        }
    };
    C_Empres.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        (this.cboTipo.GetValue() == "true") ?
            this.EntityTela.Tipo = true :
            this.EntityTela.Tipo = false;
        var entidadeFilha = [];
        entidadeFilha = this.PreencherFilho(this.Itens);
        this.EntityTela.EmprestimoItem = entidadeFilha;
        return true;
    };
    C_Empres.prototype.PreencherFilho = function (Entidade) {
        try {
            for (var x = 0; x < Entidade.length; x++) {
                this.EmprestimoItem = {};
                this.EmprestimoItem.Produto = Entidade[x].CodProduto;
                this.EmprestimoItem.Quantidade = Entidade[x].Quantidade;
                this.Farmacia_Emprestimo_Itens.push(this.EmprestimoItem);
            }
            return this.Farmacia_Emprestimo_Itens;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Empres.prototype.Limpar = function () {
        _super.prototype.Limpar.call(this);
        this.EntityTela.Codigo = 0;
        this.EntityTela.Farmacia = -1;
        this.EntityTela.Tipo = true;
        this.cboTipo.SetSelectedIndex(0);
        this.EntityTela.Data = this.DataServidor();
        this.EntityTela.Hora = this.DataServidor();
        this.txtProduto.SetText("0");
        //
        this.EmprestimoItem.Produto = 0;
        this.EmprestimoItem.Quantidade = 0;
        this.Farmacia_Emprestimo_Itens = [];
        //
        this.Item.CodProduto = 0;
        this.Item.DescProduto = "";
        this.Item.Quantidade = 0;
        this.Itens = [];
        this.grid.Grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    // WebMethods
    C_Empres.prototype.GetIsControlado = function (codProduto) {
        try {
            var parametros = {};
            parametros = { codProduto: codProduto };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetIsControlado", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Empres.prototype.GetCadastrados = function (codEmprestimo) {
        var _this = this;
        try {
            abrirEspera();
            var parametros = {};
            parametros = { codigo: codEmprestimo };
            this.ExecutarFuncaoServerSideAsynch("GetCadastrados", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.Itens = retorno;
                    _this.RefreshAngular();
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
                }
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
    return C_Empres;
}(MouraPageCadastroAngular));
var c_Empres = new C_Empres();
//# sourceMappingURL=C_Empres.js.map