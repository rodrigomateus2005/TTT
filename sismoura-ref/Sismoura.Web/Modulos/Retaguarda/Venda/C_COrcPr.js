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
var C_COrcPr = /** @class */ (function (_super) {
    __extends(C_COrcPr, _super);
    function C_COrcPr() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.verificar = true;
        return _this;
    }
    Object.defineProperty(C_COrcPr.prototype, "gridProduto", {
        get: function () {
            return window['gridProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_COrcPr.prototype, "lblQtdeItens", {
        get: function () {
            return window['lblQtdeItens_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_COrcPr.prototype, "lblQtdeConf", {
        get: function () {
            return window['lblQtdeConf_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_COrcPr.prototype, "chkLancar", {
        get: function () {
            return window['chkLancar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_COrcPr.prototype, "txtQtde", {
        get: function () {
            return window['txtQtde_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_COrcPr.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_COrcPr.prototype, "txtOrcamento", {
        get: function () {
            return window['txtOrcamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_COrcPr.prototype, "Produto", {
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
    Object.defineProperty(C_COrcPr.prototype, "Produtos", {
        get: function () {
            if (!this.GetScope()["Produtos"]) {
                this.GetScope()["Produtos"] = [];
            }
            return this.GetScope()["Produtos"];
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_COrcPr.prototype, "fotoProduto", {
        get: function () {
            return window['fotoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_COrcPr.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.chkLancar.Checked = true;
        this.txtQtde.Visible = false;
        this.gridProduto.btnAdiconar.Visible = false;
        //if (!(<any>this.GetScope()).OnDepoisBuscouorcamento) {
        //    (<any>this.GetScope()).OnDepoisBuscouorcamento = $.proxy(this.OnDepoisBuscouorcamento, this);
        //    this.GetScope().$watch(function (scope: IMouraScope<SiSMoura.Core.Entity.orcamento_Produto_Conferencia>) { return scope.Entity.orcamento.orcamento; }, (<any>this.GetScope()).OnDepoisBuscouorcamento);
        //}
    };
    C_COrcPr.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.chkLancar) {
            adicionarEventoMoura(this.chkLancar.CheckChanged, this.OnCheckLancar, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Pesquisando, this.OnDepoisProcurouProduto, this);
        }
        if (this.gridProduto && this.gridProduto.Grid) {
            adicionarEventoMoura(this.gridProduto.Validando, this.AlterouQuantidadeConferida, this);
            adicionarEventoMoura(this.gridProduto.ClicouAdicionar, this.AdicionandoProduto, this);
            adicionarEventoMoura(this.gridProduto.Grid.SelecionouLinha, this.OnSelecionouProduto, this);
            adicionarEventoMoura(this.gridProduto.AlterandoItem, this.OnDepoisSelecionar, this);
            adicionarEventoMoura(this.gridProduto.Grid.CellPrepared, this.OnGerouCelulaGrade, this);
            adicionarEventoMoura(this.gridProduto.ItemAlterado, this.OnAlterandoItemGrade, this);
        }
        if (this.txtOrcamento) {
            adicionarEventoMoura(this.txtOrcamento.Procurou, this.OnDepoisBuscouOrcamento, this);
        }
    };
    C_COrcPr.prototype.OnAlterandoItemGrade = function () {
        debugger;
    };
    C_COrcPr.prototype.OnGerouCelulaGrade = function (s, e) {
        if (e.rowType == "data" && e.data) {
            var qtdeOrcamento = e.data['Qtde_Orcamento'];
            var qtdeConferida = e.data['Qtde_Conferida'];
            var coluna = e.column;
            var corCelula;
            if (parseFloat(qtdeOrcamento) > parseFloat(qtdeConferida) && parseFloat(qtdeConferida) > 0) {
                corCelula = "Tomato";
            }
            else if (parseFloat(qtdeConferida) == 0) {
                corCelula = "orange";
            }
            if (!String.IsNullOrWhiteSpace(corCelula)) {
                e.cellElement.css("background-color", corCelula);
                e.cellElement.css("color", "black");
            }
        }
    };
    C_COrcPr.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.Produtos = [];
        this.Produto = {};
        this.chkLancar.Checked = true;
        this.txtQtde.Visible = true;
        this.AtualizaValorQtdeEntrada(0);
        this.AtualizaValorQtdeConferida(0);
        this.txtQtde.Visible = false;
        this.gridProduto.btnAdiconar.Visible = false;
        this.verificar = true;
        this.registroNovo = true;
        Entity.Data = this.DataServidor();
        debugger;
        this.fotoProduto.Limpar();
        this.fotoProduto.SetEnabled(false);
        this.RefreshAngular();
    };
    C_COrcPr.prototype.AtualizaValorQtdeEntrada = function (valor) {
        this.lblQtdeItens.Text = valor.toString();
    };
    C_COrcPr.prototype.AtualizaValorQtdeConferida = function (valor) {
        this.lblQtdeConf.Text = valor.toString();
    };
    C_COrcPr.prototype.OnAntesGravar = function () {
        var _this = this;
        _super.prototype.OnAntesGravar.call(this);
        if (this.Produtos.length <= 0) {
            MostrarAlerta("Não há itens para gravar na conferência!");
            return false;
        }
        if (this.verificar) {
            if (!ValoresSismoura.ConfiguracoesRetaguarda.Bloquear_Qtde_Divergente) {
                for (var x = 0; x < this.Produtos.length; x++) {
                    if (this.Produtos[x].Qtde_Conferida < this.Produtos[x].Qtde_Orcamento || this.Produtos[x].Qtde_Conferida > this.Produtos[x].Qtde_Orcamento) {
                        MostrarAlerta("Essa conferência não poderá ser gravada, pois existem produtos com quantidades vendidas diferentes das quantidades conferidas: <br />" +
                            "Produto: " + this.Produtos[x].Nome_Produto + "<br />Qtde. Vendida: " + this.Produtos[x].Qtde_Orcamento + "<br />Qtde. Conferida: " + this.Produtos[x].Qtde_Conferida +
                            "<br />Diferença: " + this.Produtos[x].Diferenca);
                        return false;
                    }
                }
            }
        }
        if (this.verificar) {
            var produtosNaoConferidos = this.Produtos.FindAll("Qtde_Conferida", 0);
            if (produtosNaoConferidos.length > 0) {
                MsgBoxJS("Existem produtos que faltam ser conferidos!<br />Deseja inserir assim mesmo?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (r) {
                    if (r.Resultado == MsgBoxResult.Yes) {
                        _this.verificar = false;
                        _this.ClicarGravar();
                    }
                });
                return false;
            }
        }
        this.EntityTela.Produtos = this.Produtos;
        return true;
    };
    C_COrcPr.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.verificar = true;
        return true;
    };
    C_COrcPr.prototype.PreencherEntidade = function (codigo) {
        _super.prototype.PreencherEntidade.call(this, codigo);
        this.verificar = true;
    };
    C_COrcPr.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.Produtos = this.GetDadosProduto(Entity.Codigo);
        Entity.Produtos = this.Produtos;
        Entity.Orcamento = this.GetOrcamentoByConferencia(Entity.Codigo);
        this.AtualizaValorQtdeEntrada(Entity.Produtos.Sum("Qtde_Orcamento"));
        this.AtualizaValorQtdeConferida(Entity.Produtos.Sum("Qtde_Conferida"));
        this.registroNovo = false;
        this.RefreshAngular();
    };
    C_COrcPr.prototype.GetOrcamentoByConferencia = function (codigo) {
        var parametros;
        try {
            parametros = {
                codConferencia: codigo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetOrcamentoByConferencia", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_COrcPr.prototype.GetDadosProduto = function (codigo) {
        var parametros;
        try {
            parametros = {
                codConferencia: codigo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherProdutoRetorno", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_COrcPr.prototype.OnCheckLancar = function (s, e) {
        if (this.chkLancar.Checked) {
            this.txtQtde.Visible = false;
            this.gridProduto.btnAdiconar.Visible = false;
            this.txtProduto.Limpar();
        }
        else {
            this.txtQtde.Visible = true;
            this.gridProduto.btnAdiconar.Visible = true;
        }
    };
    C_COrcPr.prototype.OnDepoisProcurouProduto = function (s, e) {
        var _this = this;
        if (e.Valido) {
            setTimeout(function () {
                _this.fotoProduto.SetEnabled(true);
                _this.fotoProduto.Pasta = ("~/Fotos/Produtos/" + e.Retorno.Codigo);
                _this.fotoProduto.Atualizar();
                if ((e.Retorno.Codigo != e.Valor) && (parseFloat(e.Valor).toString().length == 14)) {
                    //Verifico se é DUN14
                    var parametros = {
                        codigoBarra: e.Valor,
                        codigoProduto: parseInt(e.Retorno.Codigo)
                    };
                    var retornoDun14 = _this.ExecutarFuncaoServerSideSynch("RetornaDun14", parametros);
                    if (retornoDun14 && retornoDun14 > 0) {
                        _this.txtQtde.SetText("" + retornoDun14);
                    }
                }
                _this.RefreshAngular();
                if (_this.chkLancar.Checked) {
                    if (_this.txtQtde.GetText().CNum() == 0) {
                        _this.txtQtde.SetText("1");
                    }
                    if (_this.ValidarCamposProduto()) {
                        _this.gridProduto.btnAdiconar.DoClick();
                        _this.txtProduto.Focus();
                    }
                }
            }, 100);
        }
    };
    C_COrcPr.prototype.AlterouQuantidadeConferida = function (s, e) {
        var _this = this;
        debugger;
        if (CNum(e.item.Qtde_Conferida) >= 0) {
            if (CNum(e.item.Qtde_Conferida) <= CNum(e.item.Qtde_Orcamento)) {
                e.item.Diferenca = CNum(e.item.Qtde_Orcamento) - CNum(e.item.Qtde_Conferida);
                setTimeout(function () { _this.AtualizaValorQtdeConferida(_this.Produtos.Sum("Qtde_Conferida")); }, 100);
            }
            else {
                MostrarAlerta("Informe a quantidade menor ou igual que a quantidade do item!");
                e.item.Qtde_Conferida = e.oldRowValue.Qtde_Conferida;
            }
        }
        else {
            MostrarAlerta("Não é possível adicionar valores negativos!");
            e.item.Qtde_Conferida = e.oldRowValue.Qtde_Conferida;
        }
    };
    C_COrcPr.prototype.ValidarCamposProduto = function () {
        var retorno = true;
        if (this.txtProduto.GetText().CNum() > 0) {
            if (this.txtQtde.Visible) {
                if (this.txtQtde.GetText() != "") {
                    if (this.Produtos.FindAll("Produto", this.txtProduto.GetText().CNum()).length <= 0) {
                        MostrarAlerta("Produto não encontrado na grade!");
                        retorno = false;
                        this.txtProduto.Limpar();
                        this.txtQtde.SetText("");
                    }
                }
                else {
                    MostrarAlerta("Informe a Quantidade!");
                    retorno = false;
                }
            }
            else if (this.Produtos.FindAll("Produto", this.txtProduto.GetText().CNum()).length <= 0) {
                MostrarAlerta("Produto não encontrado na grade!");
                retorno = false;
                this.txtProduto.Limpar();
                this.txtQtde.SetText("");
            }
        }
        else {
            retorno = false;
        }
        this.RefreshAngular();
        return retorno;
    };
    C_COrcPr.prototype.AdicionandoProduto = function (s, e) {
        var _this = this;
        debugger;
        if (this.ValidarCamposProduto()) {
            if (!this.chkLancar.Checked) {
                if (this.txtQtde.GetText().CNum() >= 0) {
                    var qtdeItens = this.Produtos.FindAll("Produto", this.txtProduto.GetText().CNum())[0].Qtde_Orcamento;
                    if (CNum(this.txtQtde.GetText().CNum()) <= qtdeItens) {
                        this.Produtos.FindAll("Produto", this.txtProduto.GetText().CNum())[0].Qtde_Conferida =
                            CNum(this.Produtos.FindAll("Produto", this.txtProduto.GetText().CNum())[0].Qtde_Conferida) +
                                (this.txtQtde.GetText().CNum() > 0 ? this.txtQtde.GetText().CNum() : 1);
                        var qtdeItens = this.Produtos.FindAll("Produto", this.txtProduto.GetText().CNum())[0].Qtde_Orcamento;
                        var qtdeConferida = this.Produtos.FindAll("Produto", this.txtProduto.GetText().CNum())[0].Qtde_Conferida;
                        this.Produtos.FindAll("Produto", this.txtProduto.GetText().CNum())[0].Diferenca = qtdeItens - qtdeConferida;
                    }
                    else {
                        e.cancelar = true;
                        MostrarAlerta("Informe a quantidade menor ou igual que a quantidade do item!");
                        return;
                    }
                }
                else {
                    MostrarAlerta("Não é possível adicionar valores negativos!");
                    e.cancelar = true;
                    return;
                }
            }
            else {
                if (this.txtQtde.GetText().CNum() >= 0) {
                    var qtdeItens = this.Produtos.FindAll("Produto", this.txtProduto.GetText().CNum())[0].Qtde_Orcamento;
                    if (CNum(this.txtQtde.GetText().CNum()) <= qtdeItens) {
                        this.Produtos.FindAll("Produto", this.txtProduto.GetText().CNum())[0].Qtde_Conferida =
                            CNum(this.Produtos.FindAll("Produto", this.txtProduto.GetText().CNum())[0].Qtde_Conferida) +
                                (this.txtQtde.GetText().CNum() > 0 ? this.txtQtde.GetText().CNum() : 1);
                        var qtdeItens = this.Produtos.FindAll("Produto", this.txtProduto.GetText().CNum())[0].Qtde_Orcamento;
                        var qtdeConferida = this.Produtos.FindAll("Produto", this.txtProduto.GetText().CNum())[0].Qtde_Conferida;
                        this.Produtos.FindAll("Produto", this.txtProduto.GetText().CNum())[0].Diferenca = qtdeItens - qtdeConferida;
                    }
                    else {
                        e.cancelar = true;
                        MostrarAlerta("Informe a quantidade menor ou igual que a quantidade do item!");
                        return;
                    }
                }
                else {
                    MostrarAlerta("Não é possível adicionar valores negativos!");
                    e.cancelar = true;
                    return;
                }
            }
            this.RefreshAngular();
            this.AtualizaValorQtdeConferida(this.Produtos.Sum("Qtde_Conferida"));
            setTimeout(function () {
                _this.gridProduto.Grid.Refresh();
                _this.txtProduto.Limpar();
                _this.txtQtde.SetText("0");
            }, 100);
        }
        e.cancelar = true;
    };
    C_COrcPr.prototype.OnSelecionouProduto = function (s, e) {
        this.chkLancar.Checked = false;
        this.gridProduto.btnAdiconar.Visible = true;
        this.txtQtde.Visible = true;
    };
    C_COrcPr.prototype.OnDepoisSelecionar = function (s, e) {
        var _this = this;
        debugger;
        if (e.fieldNameAlterado != "Qtde_Conferida") {
            e.cancelar = true;
            if (!this.ValidarCamposProduto()) {
                return;
            }
            if (!this.chkLancar.Checked) {
                var qtdeItens = this.Produtos.FindAll("Produto", this.Produto.Produto)[0].Qtde_Orcamento;
                if (CNum(this.Produto.Qtde_Conferida) <= qtdeItens) {
                    this.Produtos.FindAll("Produto", this.Produto.Produto)[0].Qtde_Conferida = CNum(this.Produto.Qtde_Conferida);
                    this.Produtos.FindAll("Produto", this.Produto.Produto)[0].Diferenca = qtdeItens - CNum(this.Produto.Qtde_Conferida);
                }
                else {
                    e.cancelar = true;
                    MostrarAlerta("Informe a quantidade menor ou igual que a quantidade do item!");
                    return;
                }
            }
            else {
                this.Produtos.FindAll("Produto", this.Produto.Produto)[0].Qtde_Conferida = CNum(this.Produtos.FindAll("Produto", this.Produto.Produto)[0].Qtde_Conferida) + 1;
                var qtdeEntrada = this.Produtos.FindAll("Produto", this.Produto.Produto)[0].Qtde_Orcamento;
                var qtdeConferida = this.Produtos.FindAll("Produto", this.Produto.Produto)[0].Qtde_Conferida;
                this.Produtos.FindAll("Produto", this.Produto.Produto)[0].Diferenca = qtdeEntrada - qtdeConferida;
            }
            this.RefreshAngular();
            this.Produto.Produto = 0;
            this.Produto.Qtde_Conferida = 0;
            this.AtualizaValorQtdeConferida(this.Produtos.Sum("Qtde_Conferida"));
            setTimeout(function () { _this.gridProduto.Grid.Refresh(); }, 100);
        }
    };
    C_COrcPr.prototype.OnDepoisBuscouOrcamento = function (s, e) {
        if (this.registroNovo) {
            if (CNum(this.EntityTela.Orcamento.Orcamento) > 0) {
                if (!this.VerificarConferenciaExistente(CNum(this.EntityTela.Orcamento.Orcamento))) {
                    var produtos = this.GetProdutosOrcamento(CNum(this.EntityTela.Orcamento.Orcamento));
                    if (produtos) {
                        if (produtos.length > 0) {
                            this.Produtos = produtos;
                            this.AtualizaValorQtdeEntrada(this.Produtos.Sum("Qtde_orcamento"));
                            this.AtualizaValorQtdeConferida(this.Produtos.Sum("Qtde_Conferida"));
                        }
                        else {
                            MostrarAlerta("Essa orçamento não possui produtos!");
                            this.EntityTela.Orcamento.Orcamento = 0;
                            this.Produtos = [];
                            this.AtualizaValorQtdeEntrada(0);
                            this.AtualizaValorQtdeConferida(0);
                            this.RefreshAngular();
                        }
                    }
                    else {
                        MostrarAlerta("Essa orçamento não possui produtos!");
                        this.EntityTela.Orcamento.Orcamento = 0;
                        this.Produtos = [];
                        this.AtualizaValorQtdeEntrada(0);
                        this.AtualizaValorQtdeConferida(0);
                        this.RefreshAngular();
                    }
                }
                else {
                    this.EntityTela.Orcamento.Orcamento = 0;
                }
            }
            else {
                this.Produtos = [];
                this.AtualizaValorQtdeEntrada(0);
                this.AtualizaValorQtdeConferida(0);
                this.RefreshAngular();
            }
        }
    };
    C_COrcPr.prototype.GetProdutosOrcamento = function (Orcamento) {
        var parametros;
        try {
            parametros = {
                Orcamento: Orcamento
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetProdutosByOrcamento", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_COrcPr.prototype.VerificarConferenciaExistente = function (codOrcamento) {
        var retorno = true;
        var parametros;
        try {
            parametros = {
                codOrcamento: codOrcamento
            };
            var cad = this.ExecutarFuncaoServerSideSynch("VerificarConferenciaExistente", parametros);
            if (String.IsNullOrWhiteSpace(cad)) {
                retorno = false;
            }
            else {
                MostrarAlerta(cad);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        return retorno;
    };
    return C_COrcPr;
}(MouraPageCadastroAngular));
var c_COrcPr = new C_COrcPr();
//# sourceMappingURL=C_COrcPr.js.map