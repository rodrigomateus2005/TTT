var InformarCartaoVenda = /** @class */ (function () {
    function InformarCartaoVenda(telaVenda, telaPagamento) {
        this.TelaVenda = telaVenda;
        this.TelaPagamento = telaPagamento;
    }
    Object.defineProperty(InformarCartaoVenda.prototype, "TelaVenda", {
        get: function () {
            return this._telaVenda;
        },
        set: function (value) {
            this._telaVenda = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InformarCartaoVenda.prototype, "TelaPagamento", {
        get: function () {
            return this._telaPagamento;
        },
        set: function (value) {
            this._telaPagamento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InformarCartaoVenda.prototype, "dvMainCartao", {
        get: function () {
            return $("#dvMainCartao")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InformarCartaoVenda.prototype, "mdCartao", {
        get: function () {
            return window['mdCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InformarCartaoVenda.prototype, "txtInfCartao", {
        get: function () {
            return window['txtInfCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InformarCartaoVenda.prototype, "btnAddCartao", {
        get: function () {
            return window['btnAddCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InformarCartaoVenda.prototype, "grdCartao", {
        get: function () {
            return window['grdCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InformarCartaoVenda.prototype, "btnOkCartao", {
        get: function () {
            return window['btnOkCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InformarCartaoVenda.prototype, "cboCartao", {
        get: function () {
            return window['cboCartao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InformarCartaoVenda.prototype, "btnCartaoTotal", {
        get: function () {
            return window['btnCartaoTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InformarCartaoVenda.prototype, "CartoesInformados", {
        get: function () {
            return this.grdCartao.DataSource;
        },
        set: function (value) {
            this.grdCartao.PreencherGrid(value);
        },
        enumerable: true,
        configurable: true
    });
    InformarCartaoVenda.prototype.Init = function () {
        if (this.btnOkCartao) {
            adicionarEventoMoura(this.btnOkCartao.Click, this.OnClickBotaoOK, this);
        }
        if (this.btnAddCartao) {
            adicionarEventoMoura(this.btnAddCartao.Click, this.OnClickBotaoADD, this);
        }
        if (this.btnCartaoTotal) {
            adicionarEventoMoura(this.btnCartaoTotal.Click, this.OnClickBotaoCartaoTotal, this);
        }
        if (this.txtInfCartao && this.txtInfCartao.Textbox) {
            adicionarEventoJQuery(this.txtInfCartao.Textbox, "keydown", this.OnKeyDownValorCartao, this);
        }
        this.CriarAtalhosModal();
    };
    InformarCartaoVenda.prototype.LimparCamposCartao = function () {
        this.cboCartao.ClearItems();
        this.txtInfCartao.SetText((0).Format(2));
    };
    InformarCartaoVenda.prototype.AbrirModalCartao = function () {
        var retorno;
        var parametros;
        try {
            this.LimparCamposCartao();
            parametros = {
                codEmpresa: this.TelaVenda.InfVenda.Empresa
            };
            retorno = this.TelaVenda.ExecutarFuncaoServerSideSynch("GetCartoesPDV", parametros);
            if (retorno) {
                for (var x = 0; x <= retorno.length - 1; x++) {
                    this.cboCartao.AddItem(retorno[x]['Descricao'], retorno[x]['Codigo'], null);
                }
            }
            this.cboCartao.LimparSelecao();
            this.mdCartao.Show();
            this.grdCartao.Refresh();
            this.cboCartao.Focus();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    InformarCartaoVenda.prototype.OnClickBotaoOK = function (s, e) {
        e.processOnServer = false;
        this.FecharModalCadastro();
    };
    InformarCartaoVenda.prototype.FecharModalCadastro = function () {
        this.mdCartao.Hide();
    };
    InformarCartaoVenda.prototype.OnClickBotaoADD = function (s, e) {
        e.processOnServer = false;
        this.AdicionarCartao();
    };
    InformarCartaoVenda.prototype.ProximoItem = function () {
        var itens = [];
        var retorno = 0;
        for (var x = 0; x <= this.CartoesInformados.length - 1; x++) {
            itens.push(this.CartoesInformados[x].Contador);
        }
        if (itens.length > 0) {
            retorno = Math.max.apply(Math, itens);
        }
        return retorno + 1;
    };
    InformarCartaoVenda.prototype.OnClickBotaoCartaoTotal = function (s, e) {
        e.processOnServer = false;
        this.TotalNoCampovalor();
    };
    InformarCartaoVenda.prototype.TotalNoCampovalor = function () {
        this.TelaPagamento.SetValorPagamentoTotal(this.txtInfCartao);
        this.txtInfCartao.Focus();
    };
    InformarCartaoVenda.prototype.OnKeyDownValorCartao = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (!tecla) {
            return;
        }
        if (tecla == 187) {
            this.TotalNoCampovalor();
        }
        else if (tecla == 13) {
            StopPropagationJQuery(e);
            this.AdicionarCartao();
        }
    };
    InformarCartaoVenda.prototype.AdicionarCartao = function () {
        var cartao = ("" + this.cboCartao.GetValue()).CNum();
        if (cartao <= 0) {
            MostrarAlerta("Informe o cartão");
            this.cboCartao.Focus();
            return;
        }
        if (this.txtInfCartao.GetText().CNum() <= 0) {
            MostrarAlerta("Informe o valor do cartão");
            this.txtInfCartao.Focus();
            return;
        }
        var lista = this.CartoesInformados;
        var item = {};
        item.Contador = this.ProximoItem();
        item.Cartao = cartao;
        item.Descricao = this.cboCartao.GetText();
        item.Valor = this.txtInfCartao.GetText().CNum();
        lista.push(item);
        this.CartoesInformados = lista;
        this.txtInfCartao.SetText((0).Format(2));
        this.cboCartao.LimparSelecao();
        this.cboCartao.Focus();
    };
    InformarCartaoVenda.prototype.CriarAtalhosModal = function () {
        adicionarEventoJQuery(this.dvMainCartao, "keydown", this.KeyESC, this);
        adicionarEventoJQuery(this.dvMainCartao, "keydown", this.KeyF5, this);
    };
    InformarCartaoVenda.prototype.KeyESC = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (tecla != enmKeyCode.ESC) {
            return;
        }
        StopPropagationJQuery(e);
        this.FecharModalCadastro();
    };
    InformarCartaoVenda.prototype.KeyF5 = function (e) {
        var tecla = getTeclaCodeEvent(e);
        if (tecla != enmKeyCode.F5) {
            return;
        }
        if (e.ctrlKey || e.altKey) {
            return;
        }
        StopPropagationJQuery(e);
        this.FecharModalCadastro();
    };
    return InformarCartaoVenda;
}());
//# sourceMappingURL=InformarCartaoVenda.js.map