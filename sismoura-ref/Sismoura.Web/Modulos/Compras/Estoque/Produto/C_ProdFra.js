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
var C_ProdFra = /** @class */ (function (_super) {
    __extends(C_ProdFra, _super);
    function C_ProdFra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ProdFra.prototype, "Fracionados", {
        get: function () {
            if (!this.GetScope()["Fracionados"]) {
                this.GetScope()["Fracionados"] = [];
            }
            return this.GetScope()["Fracionados"];
        },
        set: function (value) {
            this.GetScope()["Fracionados"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "Fracionado", {
        get: function () {
            if (!this.GetScope()["Fracionado"]) {
                this.GetScope()["Fracionado"] = {};
            }
            return this.GetScope()["Fracionado"];
        },
        set: function (value) {
            this.GetScope()["Fracionado"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "Produto", {
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
    Object.defineProperty(C_ProdFra.prototype, "lblProduto", {
        //Dados do produto que será fracionado
        get: function () {
            return window['lblProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "lblUnidade", {
        get: function () {
            return window['lblUnidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "lblEstoque", {
        get: function () {
            return window['lblEstoque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "lblPrecoCusto", {
        get: function () {
            return window['lblPrecoCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "lblPrecoVenda", {
        get: function () {
            return window['lblPrecoVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "txtPrecodeCusto", {
        //Dados do produto fracionado
        get: function () {
            return window['txtPrecodeCusto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "txtPrecodeVenda", {
        get: function () {
            return window['txtPrecodeVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "txtAdicionalValor", {
        get: function () {
            return window['txtAdicionalValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "txtQtdeTransAuto", {
        get: function () {
            return window['txtQtdeTransAuto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "txtQtdeAposFracionamento", {
        get: function () {
            return window['txtQtdeAposFracionamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "txtDescricao", {
        get: function () {
            return window['txtDescricao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "chkInativo", {
        get: function () {
            return window['chkInativo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "txtCodigo", {
        get: function () {
            return window['txtCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "cboUnidadeFracionamento", {
        get: function () {
            return window['cboUnidadeFracionamento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "rdTipoRateio", {
        get: function () {
            return window['rdTipoRateio_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "txtCodBarras", {
        get: function () {
            return window['txtCodBarras_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "btnGravar", {
        get: function () {
            return window['btnGravar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ProdFra.prototype, "btnNovo", {
        get: function () {
            return window['btnNovo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_ProdFra.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtQtdeAposFracionamento) {
            adicionarEventoMoura(this.txtQtdeAposFracionamento.TextChanged, this.OnDigitouQtdeFracioinamento, this);
        }
        if (this.txtAdicionalValor) {
            adicionarEventoMoura(this.txtAdicionalValor.TextChanged, this.OnDigitouValorAdicional, this);
        }
        if (this.rdTipoRateio) {
            adicionarEventoMoura(this.rdTipoRateio.SelectionChanged, this.OnAlterouTipoAdicional, this);
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.Validando, this.OnAdicionandoGrade, this);
            adicionarEventoMoura(this.grd.SelecionouItem, this.OnSelecionouLinhaGrade, this);
        }
        if (this.btnGravar) {
            adicionarEventoMoura(this.btnGravar.Click, this.OnClickBtnGravar, this);
        }
        if (this.btnNovo) {
            adicionarEventoMoura(this.btnNovo.Click, this.OnClickBtnNovo, this);
        }
    };
    C_ProdFra.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.carregarDadosProduto();
        if (ValoresSismoura.ConfiguracoesRetaguarda.Modo_Fracionado == 0) {
            this.txtQtdeTransAuto.Enabled = false;
        }
        else {
            this.txtQtdeTransAuto.Visible = true;
        }
        this.PreencherGrade();
    };
    C_ProdFra.prototype.carregarDadosProduto = function () {
        var parametros = {
            codProduto: this.ParametrosTela.codigo,
            Empresa: this.ParametrosTela.empresa
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("getProdutoFracionado", parametros);
        if (retorno.length > 0) {
            this.lblProduto.Text = retorno[0].Produto;
            this.lblEstoque.Text = retorno[0].Estoque;
            this.lblUnidade.Text = retorno[0].Unidade;
            this.lblPrecoCusto.Text = retorno[0].Preco_Custo.Format(2);
            this.lblPrecoVenda.Text = retorno[0].Preco_Venda.Format(2);
            this.txtPrecodeCusto.SetText(retorno[0].Preco_Custo.Format(2));
            this.txtPrecodeVenda.SetText(retorno[0].Preco_Venda.Format(2));
        }
    };
    C_ProdFra.prototype.OnSelecionouLinhaGrade = function (s, e) {
        this.Fracionado.ProdutoEntity = {};
        this.Fracionado = e.item;
        this.Fracionado.Cod_Produto_Fracionado = e.item.Cod_Produto_Fracionado;
        //this.Fracionado.ProdutoEntity.Nome = e.item.Produto;
        this.Produto.Nome = e.item.Produto;
        this.Produto.Codigo_Barra = e.item.Codigo_Barra;
        this.Produto.Preco_Custo = e.item.Preco_Custo;
        this.Produto.Preco_Produto = e.item.Preco_Venda;
        this.Fracionado.Inativo = e.item.Inativo;
        this.Fracionado.Adicional_Valor = e.item.Adicional_Valor;
        this.RefreshAngular();
    };
    C_ProdFra.prototype.PreencherGrade = function () {
        try {
            this.Fracionados = [];
            var parametros = {
                codProduto: this.ParametrosTela.codigo,
                Empresa: this.ParametrosTela.empresa
            };
            var parametroProduto = {
                codProduto: this.ParametrosTela.codigo
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGradeFracionados", parametros);
            if (retorno) {
                this.Fracionados = retorno;
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdFra.prototype.OnDigitouQtdeFracioinamento = function () {
        var calculoCusto;
        var calculoVenda;
        var precoCusto = this.txtPrecodeCusto.GetText().CNum();
        var precoVenda = this.txtPrecodeVenda.GetText().CNum();
        if (this.lblPrecoCusto.Text.CNum() == precoCusto) {
            calculoCusto = precoCusto / this.txtQtdeAposFracionamento.GetText().CNum();
            this.txtPrecodeCusto.SetText(calculoCusto.Format(2));
        }
        else {
            this.txtPrecodeCusto.SetText(this.lblPrecoCusto.Text);
        }
        if (this.lblPrecoVenda.Text.CNum() == precoVenda) {
            calculoVenda = precoVenda / this.txtQtdeAposFracionamento.GetText().CNum();
            this.txtPrecodeVenda.SetText(calculoVenda.Format(2));
        }
        else {
            this.txtPrecodeVenda.SetText((this.lblPrecoVenda.Text.CNum() + this.txtAdicionalValor.GetText().CNum()).Format(2));
        }
    };
    C_ProdFra.prototype.OnDigitouValorAdicional = function () {
        var precoVendaFracionado = this.lblPrecoVenda.Text.CNum();
        precoVendaFracionado = precoVendaFracionado / this.txtQtdeAposFracionamento.GetText().CNum();
        if (this.txtAdicionalValor.GetText() == "" && this.txtQtdeAposFracionamento.GetText() == "") {
            this.txtPrecodeVenda.SetText(this.lblPrecoVenda.Text);
            MostrarAlerta("Preencha corretamente o campo 'Qtde após Fracionamento' para obter o valor final da venda.");
            this.txtQtdeAposFracionamento.Focus();
            return;
        }
        if (this.txtQtdeAposFracionamento.GetText() == "") {
            MostrarAlerta("Preencha corretamente o campo 'Qtde após Fracionamento' para obter o valor final da venda.");
            this.txtQtdeAposFracionamento.Focus();
            return;
        }
        else if (this.txtAdicionalValor.GetText() == "" && this.txtQtdeAposFracionamento.GetText().CNum() > 0) {
            this.txtPrecodeVenda.SetText(precoVendaFracionado.Format(2));
        }
        else {
            if (this.rdTipoRateio.GetValue() == "V") {
                precoVendaFracionado = precoVendaFracionado + this.txtAdicionalValor.GetText().CNum();
                this.txtPrecodeVenda.SetText(precoVendaFracionado.Format(2));
            }
            else {
                precoVendaFracionado = precoVendaFracionado + (precoVendaFracionado * this.txtAdicionalValor.GetText().CNum().Format(2).CNum() / 100);
                this.txtPrecodeVenda.SetText(precoVendaFracionado.Format(2));
            }
        }
    };
    C_ProdFra.prototype.OnAlterouTipoAdicional = function () {
        this.OnDigitouValorAdicional();
    };
    C_ProdFra.prototype.OnDepoisLimpar = function (Entity) {
        this.LimparCampos();
        return true;
    };
    C_ProdFra.prototype.OnClickBtnGravar = function (s, e) {
        try {
            debugger;
            e.processOnServer = false;
            var Entity = this.GetScope()["Fracionados"];
            var parametros = {
                produtoFracionado: Entity,
                tela: ValoresSismoura.NomeTela,
                codUsuario: ValoresSismoura.UsuarioLogado
            };
            abrirEspera("Aguarde. Gravando os registros");
            var retorno = this.ExecutarFuncaoServerSideSynch("GravarProduto", parametros);
            (retorno == "Sucesso") ? MostrarMensagem("Registro gravado com sucesso!") : MostrarAlerta("Erro ao gravar o registro!");
            fecharEspera();
            this.PreencherGrade();
            this.RefreshAngular();
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    C_ProdFra.prototype.OnClickBtnNovo = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
        this.RefreshAngular();
    };
    C_ProdFra.prototype.OnAdicionandoGrade = function (s, e) {
        try {
            this.Fracionado.ProdutoEntity = {};
            if (this.txtDescricao.GetText() == "") {
                e.cancelar = true;
                MostrarAlerta("Informe uma descrição para o Produto Fracionado!");
                this.txtDescricao.Focus();
                return;
            }
            if (this.txtQtdeAposFracionamento.GetText().CNum() <= 0) {
                e.cancelar = true;
                MostrarAlerta("Informe a quantidade após o fracionamento!");
                this.txtQtdeAposFracionamento.Focus();
                return;
            }
            if (this.cboUnidadeFracionamento.GetText() == "") {
                e.cancelar = true;
                MostrarAlerta("Informe o tipo de unidade!");
                this.cboUnidadeFracionamento.Focus();
                return;
            }
            e.item.Produto = this.txtDescricao.GetText();
            e.item.Qtde_Apos_Fracionado = this.txtQtdeAposFracionamento.GetText().CNum();
            e.item.Un_Apos_Fracionado = this.cboUnidadeFracionamento.GetText();
            e.item.Adicional_Valor = this.txtAdicionalValor.GetText().CNum();
            e.item.Qtde_Transf_Automaticamente = this.txtQtdeTransAuto.GetText().CNum();
            e.item.Preco_Custo = this.Produto.Preco_Custo;
            e.item.Preco_Venda = this.Produto.Preco_Produto;
            e.item.Codigo_Barra = this.Produto.Codigo_Barra;
            e.item.Cod_Produto_Pai = this.ParametrosTela.codigo.CNum();
            this.Fracionado.ProdutoEntity.Nome = this.Produto.Nome;
            this.Fracionado.ProdutoEntity.Codigo_Barra = this.Produto.Codigo_Barra;
            this.Fracionado.Cod_Produto_Pai = this.ParametrosTela.codigo.CNum();
            this.Fracionado.ProdutoEntity.Preco_Custo = this.Produto.Preco_Custo;
            this.Fracionado.ProdutoEntity.Preco_Produto = this.Produto.Preco_Produto;
            this.Fracionado.ProdutoEntity.Inativo = this.Fracionado.Inativo;
            this.Fracionado.ProdutoEntity.Codigo = e.item.Cod_Produto_Fracionado;
            this.LimparCampos();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_ProdFra.prototype.LimparCampos = function () {
        this.txtDescricao.Limpar();
        this.txtAdicionalValor.Limpar();
        this.txtQtdeAposFracionamento.Limpar();
        this.txtCodBarras.Limpar();
        this.txtQtdeTransAuto.Limpar();
        this.txtPrecodeCusto.SetText(this.lblPrecoCusto.Text);
        this.txtPrecodeVenda.SetText(this.lblPrecoVenda.Text);
        this.txtCodigo.Limpar();
        this.chkInativo.Checked = false;
        this.RefreshAngular();
    };
    return C_ProdFra;
}(MouraPageAngular));
var c_ProdFra = new C_ProdFra();
//# sourceMappingURL=C_ProdFra.js.map