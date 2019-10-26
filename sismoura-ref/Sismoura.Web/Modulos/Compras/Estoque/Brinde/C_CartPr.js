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
var C_CartPr = /** @class */ (function (_super) {
    __extends(C_CartPr, _super);
    function C_CartPr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_CartPr.prototype, "gridCartoes", {
        get: function () {
            return window['gridCartoes_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "gridFaixaNumerica", {
        get: function () {
            return window['gridFaixaNumerica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "btnFaixaNumerica", {
        get: function () {
            return window['btnFaixaNumerica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "txtCartao", {
        get: function () {
            return window['txtCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "txtValidade", {
        get: function () {
            return window['txtValidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "txtNumeroInicial", {
        get: function () {
            return window['txtNumeroInicial_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "txtNumeroFinal", {
        get: function () {
            return window['txtNumeroFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "mdFaixaNumerica", {
        get: function () {
            return window["mdFaixaNumerica_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "lblQuantidade", {
        get: function () {
            return window["lblQuantidade_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "txtModalValidade", {
        get: function () {
            return window['txtModalValidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "Cartoes", {
        get: function () {
            return this.GetScope()["Cartoes"];
        },
        set: function (value) {
            this.GetScope()["Cartoes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "CartoesFaixa", {
        get: function () {
            return this.GetScope()["CartoesFaixa"];
        },
        set: function (value) {
            this.GetScope()["CartoesFaixa"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "CartaoFaixa", {
        get: function () {
            var that = this.GetScope()["CartaoFaixa"];
            if (!that) {
                that = {};
            }
            return that;
        },
        set: function (value) {
            this.GetScope()["CartaoFaixa"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "Entity", {
        get: function () {
            return this.GetScope()["Entity"];
        },
        set: function (value) {
            this.GetScope()["Entity"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "btnLimpar", {
        get: function () {
            return window['btnLimpar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "btnGerar", {
        get: function () {
            return window["btnGerar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "btnFechar", {
        get: function () {
            return window['btnFechar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CartPr.prototype, "btnOK", {
        get: function () {
            return window['btnOK_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_CartPr.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.PreencherGridCadastrados, this);
        }
        if (this.gridCartoes) {
            adicionarEventoMoura(this.gridCartoes.Grid.ExcluiuLinhaGrade, this.OnExcluiuCartao, this);
        }
        if (this.btnFaixaNumerica) {
            adicionarEventoMoura(this.btnFaixaNumerica.Click, this.OnClickbtnFaixaNumerica, this);
        }
        if (this.btnGerar) {
            adicionarEventoMoura(this.btnGerar.Click, this.OnClickbtnGerar, this);
        }
        if (this.btnFechar) {
            adicionarEventoMoura(this.btnFechar.Click, this.OnClickbtnFechar, this);
        }
        if (this.btnOK) {
            adicionarEventoMoura(this.btnOK.Click, this.OnClickbtnOK, this);
        }
        if (this.btnLimpar) {
            adicionarEventoMoura(this.btnLimpar.Click, this.OnClickBtnLimpar, this);
        }
    };
    C_CartPr.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        this.Entity = {};
        setTimeout(function () {
            _this.LimparCampos();
        }, 100);
        if (this.cboEmpresa) {
            this.cboEmpresa.Visible = ValoresSismoura.ConfiguracoesRetaguarda.Cartao_Presente_Controlar_Por_Empresa;
            this.cboEmpresa.Obrigatorio = this.cboEmpresa.Visible;
        }
        if (this.txtValidade) {
            this.txtValidade.Visible = ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Validade_Cartao_Presente;
            this.txtValidade.Obrigatorio = this.txtValidade.Visible;
            if (!this.txtValidade.Visible) {
                this.Entity.Validade = 0;
            }
        }
    };
    C_CartPr.prototype.PreencherGridCadastrados = function () {
        try {
            if (!this.ValidarProdutoCartaoPresente()) {
                return;
            }
            var parametros;
            parametros = {
                codProduto: CNum(this.Entity.Produto)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCadastrados", parametros);
            this.Cartoes = retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CartPr.prototype.OnClickBtnAdicionar = function () {
        if (!this.ValidarCamposTela()) {
            return;
        }
        var cartao = {};
        if (this.ValidarCartaoExistente().length > 0)
            cartao.Codigo = CNum(this.ValidarCartaoExistente()[0].Codigo);
        else
            cartao.Codigo = CNum(this.Entity.Codigo);
        cartao.Cartao_Numero = CNum(this.Entity.Cartao_Numero);
        cartao.Validade = CNum(this.Entity.Validade);
        cartao.Empresa = CNum(this.Entity.Empresa);
        cartao.Produto = CNum(this.Entity.Produto);
        this.Gravar([cartao]);
        var produto = CNum(this.Entity.Produto);
        this.LimparCampos();
        this.Entity.Produto = produto;
        this.PreencherGridCadastrados();
        this.txtCartao.Focus();
        this.RefreshAngular();
    };
    C_CartPr.prototype.OnClickbtnFaixaNumerica = function (s, e) {
        e.processOnServer = false;
        if (!this.Entity.Produto) {
            MostrarAlerta("Insira o codigo do produto!");
            this.txtProduto.Focus();
            return;
        }
        this.txtNumeroInicial.Focus();
        this.txtNumeroInicial.Obrigatorio = true;
        this.txtNumeroFinal.Obrigatorio = true;
        this.txtModalValidade.Visible = ValoresSismoura.ConfiguracoesRetaguarda.Utilizar_Validade_Cartao_Presente;
        this.txtModalValidade.Obrigatorio = this.txtModalValidade.Visible;
        if (!this.txtModalValidade.Visible) {
            this.txtModalValidade.SetText("0");
        }
        this.mdFaixaNumerica.Show();
    };
    C_CartPr.prototype.OnClickBtnLimpar = function (s, e) {
        this.LimparCampos();
        this.RefreshAngular();
        this.txtProduto.Focus();
    };
    C_CartPr.prototype.OnClickbtnGerar = function (s, e) {
        e.processOnServer = false;
        if (this.ValidarCamposModal()) {
            var qtde = CNum(this.txtNumeroFinal.GetText()) - CNum(this.txtNumeroInicial.GetText()) + 1;
            this.lblQuantidade.Text = qtde.toString();
            var i = CNum(this.txtNumeroInicial.GetText());
            var j = CNum(this.txtNumeroFinal.GetText());
            while (i <= j) {
                try {
                    this.Entity.Cartao_Numero = i;
                    if (this.ValidarCartaoExistente().length == 0) {
                        var cartoesModal = {};
                        cartoesModal.Codigo = CNum(this.Entity.Codigo);
                        cartoesModal.Cartao_Numero = CNum(this.Entity.Cartao_Numero);
                        cartoesModal.Validade = CNum(this.Entity.Validade);
                        cartoesModal.Empresa = CNum(this.Entity.Empresa);
                        cartoesModal.Produto = CNum(this.Entity.Produto);
                        this.CartoesFaixa.push(cartoesModal);
                    }
                }
                catch (ex) {
                    LogarException(ex);
                }
                i++;
            }
            this.RefreshAngular();
        }
    };
    C_CartPr.prototype.OnClickbtnFechar = function (s, e) {
        e.processOnServer = false;
        this.mdFaixaNumerica.Hide();
        this.txtNumeroInicial.Obrigatorio = false;
        this.txtNumeroFinal.Obrigatorio = false;
        this.txtModalValidade.Obrigatorio = false;
        this.limparModal();
    };
    C_CartPr.prototype.OnClickbtnOK = function (s, e) {
        e.processOnServer = false;
        this.Gravar(this.CartoesFaixa);
        this.mdFaixaNumerica.Hide();
        this.limparModal();
        this.PreencherGridCadastrados();
        this.RefreshAngular();
    };
    C_CartPr.prototype.OnExcluiuCartao = function (s, e) {
        var parametros = {
            codigo: e.item.Codigo,
            tela: ValoresSismoura.NomeTela,
            codUsuario: ValoresSismoura.UsuarioLogado
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("RemoverCartao", parametros);
        (retorno == true) ? MostrarMensagem("Registro apagado com sucesso!") : MostrarAlerta("Erro ao apagar o registro!");
    };
    C_CartPr.prototype.limparModal = function () {
        this.txtNumeroInicial.SetText("");
        this.txtNumeroFinal.SetText("");
        this.lblQuantidade.Text = "";
        this.txtModalValidade.SetText("");
        this.CartoesFaixa = [];
        this.RefreshAngular();
    };
    C_CartPr.prototype.LimparCampos = function () {
        this.Entity = {};
        if (this.cboEmpresa.Visible) {
            this.Entity.Empresa = ValoresSismoura.EmpresaPadraoUsuario;
        }
        else {
            this.Entity.Empresa = null;
        }
        this.Entity.Produto = null;
        this.Cartoes = [];
        this.limparModal();
        this.RefreshAngular();
    };
    C_CartPr.prototype.Gravar = function (cartoes) {
        try {
            var parametros = {
                cartoesStr: JSON.stringify(cartoes),
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("Gravar", parametros);
            (retorno) ? MostrarMensagem("Registro gravado com sucesso!") : MostrarAlerta("Erro ao gravar o registro!");
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CartPr.prototype.ValidarProdutoCartaoPresente = function () {
        if (this.Entity.Produto <= 0) {
            return;
        }
        var parametros = {
            codProduto: CNum(this.Entity.Produto)
        };
        var isProdutoCartaoPresente = this.ExecutarFuncaoServerSideSynch("ValidaProdutoCartaoPresente", parametros);
        if (!isProdutoCartaoPresente) {
            this.Entity.Produto = 0;
            MostrarAlerta("Este produto não está marcado como cartão presente no cadastro de produtos!");
            this.txtProduto.Focus();
            return false;
        }
        return true;
    };
    C_CartPr.prototype.ValidarCartaoExistente = function () {
        var parametros;
        parametros = {
            numCartao: CNum(this.Entity.Cartao_Numero)
        };
        var valida = this.ExecutarFuncaoServerSideSynch("VerificaCartoesCadastrados", parametros);
        return valida;
    };
    C_CartPr.prototype.ValidarCamposTela = function () {
        if (!this.Entity.Produto) {
            MostrarAlerta("Informe o Produto!");
            this.txtProduto.Focus();
            return false;
        }
        if (!this.Entity.Cartao_Numero) {
            MostrarAlerta("Informe o Número do Cartão!");
            this.txtCartao.Focus();
            return false;
        }
        if (this.txtValidade.Visible && !this.Entity.Validade) {
            MostrarAlerta("Informe a Validade!");
            this.txtValidade.Focus();
            return false;
        }
        this.RefreshAngular();
        return true;
    };
    C_CartPr.prototype.ValidarCamposModal = function () {
        if (this.txtNumeroInicial.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o Numero Inicial!");
            this.txtNumeroInicial.Focus();
            return false;
        }
        if (this.txtNumeroFinal.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o Numero Final!");
            this.txtNumeroFinal.Focus();
            return false;
        }
        if (this.txtModalValidade.GetText().CNum() <= 0) {
            MostrarAlerta("Informe a Validade!");
            this.txtModalValidade.Focus();
            return false;
        }
        if (this.txtNumeroInicial.GetText().CNum() >= this.txtNumeroFinal.GetText().CNum()) {
            MostrarAlerta("Faixa numérica inválida! O Número final deve ser maior do que o número inicial.");
            this.limparModal();
            this.txtNumeroInicial.Focus();
            return false;
        }
        return true;
    };
    return C_CartPr;
}(MouraPageAngular));
var c_CartPr = new C_CartPr();
//# sourceMappingURL=C_CartPr.js.map