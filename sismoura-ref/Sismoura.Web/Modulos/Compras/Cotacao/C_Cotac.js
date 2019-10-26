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
var C_Cotac = /** @class */ (function (_super) {
    __extends(C_Cotac, _super);
    function C_Cotac() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.digitouProcura = false;
        return _this;
    }
    Object.defineProperty(C_Cotac.prototype, "Produto", {
        get: function () {
            var that = this.GetScope()["Produto"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["Produto"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "Produtos", {
        get: function () {
            return this.GetScope()["Produtos"];
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "txtPrazo", {
        get: function () {
            return window['txtPrazo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "txtQtde", {
        get: function () {
            return window['txtQtde_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "txtValorUnitario", {
        get: function () {
            return window['txtValorUnitario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "txtMensagem", {
        get: function () {
            return window['txtMensagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "txtEmail", {
        get: function () {
            return window['txtEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "btnEnviarEmail", {
        get: function () {
            return window['btnEnviarEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "btnEnviar", {
        get: function () {
            return window['btnEnviar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "btnCancelar", {
        get: function () {
            return window['btnCancelar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "txtFornecedorEmail", {
        get: function () {
            return window['txtFornecedorEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "mdEmail", {
        get: function () {
            return window['mdEmail_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "cboRemetente", {
        get: function () {
            return window['cboRemetente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "chkSemValores", {
        get: function () {
            return window['chkSemValores_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cotac.prototype, "txtSolicitacao", {
        get: function () {
            return window['txtSolicitacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_Cotac.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.Validando, this.OnValidando, this);
            adicionarEventoMoura(this.Grid.LimpouItem, this.LimparProduto, this);
            adicionarEventoMoura(this.Grid.SelecionandoItem, this.OnSelecionouItem, this);
        }
        if (this.btnEnviarEmail) {
            adicionarEventoMoura(this.btnEnviarEmail.Click, this.OnClickEnviarEmail, this);
        }
        if (this.btnEnviar) {
            adicionarEventoMoura(this.btnEnviar.Click, this.OnClickEnviar, this);
        }
        if (this.btnCancelar) {
            adicionarEventoMoura(this.btnCancelar.Click, this.OnClickCancelar, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnProcurouProduto, this);
            adicionarEventoMoura(this.txtProduto.KeyPressProcura, this.OnKeyPressProduto, this);
        }
        if (this.txtSolicitacao) {
            adicionarEventoMoura(this.txtSolicitacao.Procurou, this.OnProcurouSolicitacao, this);
        }
    };
    C_Cotac.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.OnDepoisLimpar(this.EntityTela);
    };
    C_Cotac.prototype.OnProcurouSolicitacao = function () {
        var parametros;
        parametros = {
            codSolicitacao: this.txtSolicitacao.GetText().CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("GetSolicitacao", parametros);
        if (retorno) {
            this.Produtos = retorno;
            this.RefreshAngular();
        }
        return;
    };
    C_Cotac.prototype.OnSelecionouItem = function (s, e) {
        this.digitouProcura = false;
        this.Produto.Valor = e.item.Valor;
    };
    C_Cotac.prototype.OnKeyPressProduto = function () {
        this.digitouProcura = true;
    };
    C_Cotac.prototype.OnProcurouProduto = function () {
        if (!this.digitouProcura)
            return;
        var parametros;
        parametros = {
            codProduto: this.txtProduto.GetText().CNum()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("ProcurandoProduto", parametros);
        this.Produto.Valor = retorno;
        this.RefreshAngular();
    };
    C_Cotac.prototype.OnClickEnviar = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var visibleValor;
        if (this.Grid.Grid.GetColunaByFieldName("Valor")) {
            visibleValor = this.Grid.Grid.GetColunaByFieldName("Valor").visible;
        }
        if (this.chkSemValores) {
            if (this.chkSemValores.Checked) {
                this.Grid.Grid.ColunaVisible("Valor", false);
            }
        }
        abrirEspera("");
        var dataSTR = this.Grid.Grid.ExportarExcelData(false);
        dataSTR.then(function (dataSTR) {
            var parametros;
            fecharEspera();
            parametros = {
                codEmpresa: ValoresSismoura.EmpresaPadraoUsuario,
                lstEmails: _this.txtEmail.GetText(),
                mensagem: _this.txtMensagem.GetText(),
                codRemetente: _this.cboRemetente.GetValue().CNum(),
                conteudoExcel: dataSTR
            };
            var retorno = _this.ExecutarFuncaoServerSideSynch("EnviarEmail", parametros);
            if (retorno) {
                MostrarMensagem("E-mail enviado com sucesso!");
            }
            else {
                MostrarAlerta("Falha no envio do e-mail!");
            }
            _this.Grid.Grid.ColunaVisible("Valor", visibleValor);
            _this.LimparModal();
            _this.mdEmail.Hide();
        }).catch(function (erro) {
            fecharEspera();
            LogarException(erro);
        });
    };
    C_Cotac.prototype.OnClickCancelar = function (s, e) {
        e.processOnServer = false;
        this.LimparModal();
        this.mdEmail.Hide();
        return;
    };
    C_Cotac.prototype.OnClickEnviarEmail = function (s, e) {
        e.processOnServer = false;
        if (this.txtCodigo.GetText().CNum() > 0) {
            var parametros;
            parametros = {
                codFornecedor: this.txtFornecedor.GetText().CNum()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetEmail", parametros);
            if (retorno.Fornecedor != 0) {
                if (this.txtFornecedorEmail) {
                    this.txtFornecedorEmail.Procurar("" + retorno.Fornecedor);
                }
            }
            if (retorno.Email != "") {
                if (this.txtEmail) {
                    this.txtEmail.SetText(retorno.Email);
                }
            }
            if (this.txtMensagem) {
                this.txtMensagem.SetText("");
            }
            this.mdEmail.Show();
        }
        else {
            MostrarAlerta("Para enviar e-mail é necessário selecionar uma cotação");
            this.txtCodigo.Focus();
            return;
        }
    };
    C_Cotac.prototype.OnValidando = function (s, e) {
        if (e.item.Produto <= 0) {
            MostrarAlerta("Informe um produto para ser adicionado");
            e.cancelar = true;
            this.txtProduto.Focus();
            return;
        }
        if (e.item.Qtde <= 0) {
            MostrarAlerta("Informe a quantidade");
            e.cancelar = true;
            this.txtQtde.Focus();
            return;
        }
        if (e.item.Valor <= 0) {
            MostrarAlerta("Informe o valor do produto para ser adicionado");
            e.cancelar = true;
            this.txtValorUnitario.Focus();
            return;
        }
        if (this.Produtos) {
            for (var i = 0; i < this.Produtos.length; i++) {
                if (this.Produtos[i].Produto == this.Produto.Produto) {
                    MsgBoxJS("Deseja SOMAR a quantidade ja existente pela digitada?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, $.proxy(this.OnRepostaQuantidade, this), i);
                    e.cancelar = true;
                    return;
                }
            }
        }
        if (e.index < 0) {
            e.item.Produto_Nome = this.txtProduto.GetResultado();
        }
        this.RefreshAngular();
    };
    C_Cotac.prototype.OnRepostaQuantidade = function (result) {
        if (result.Resultado == MsgBoxResult.Yes) {
            this.Produtos[result.Argument].Qtde += this.Produto.Qtde;
        }
        else {
            this.Produtos[result.Argument].Qtde = this.Produto.Qtde;
        }
        this.Produtos[result.Argument].Valor = this.Produto.Valor;
        this.Produtos[result.Argument].Prazo_Entrega = this.Produto.Prazo_Entrega;
        this.Grid.Grid.Refresh();
        this.LimparProduto();
        this.RefreshAngular();
    };
    C_Cotac.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        Entity.Codigo = 0;
        Entity.Solicitacao = 0;
        Entity.Fornecedor = 0;
        Entity.Contato = "";
        Entity.Data = this.DataServidor();
        Entity.Condicao = "";
        Entity.Finalizada = false;
        this.Produtos = [];
        this.LimparProduto();
        this.LimparModal();
        this.digitouProcura = false;
    };
    C_Cotac.prototype.LimparProduto = function () {
        this.Produto.Produto = 0;
        this.Produto.Prazo_Entrega = 0;
        this.Produto.Qtde = 0;
        this.Produto.Valor = 0;
        this.RefreshAngular();
    };
    C_Cotac.prototype.LimparModal = function () {
        this.cboRemetente.SetSelectedIndex(-1);
        this.txtFornecedor.Limpar();
        this.txtEmail.Limpar();
        this.txtMensagem.Limpar();
        this.chkSemValores.Checked = false;
    };
    C_Cotac.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.GetCadastrados();
    };
    C_Cotac.prototype.GetCadastrados = function () {
        try {
            var parametros;
            parametros = {
                codCotacao: this.EntityTela.Codigo
            };
            var cad = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Produtos = cad;
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Cotac.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        this.EntityTela.Itens = this.Produtos;
        return true;
    };
    C_Cotac.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.GetCadastrados();
        return true;
    };
    return C_Cotac;
}(MouraPageCadastroAngular));
var c_Cotac = new C_Cotac();
//# sourceMappingURL=C_Cotac.js.map