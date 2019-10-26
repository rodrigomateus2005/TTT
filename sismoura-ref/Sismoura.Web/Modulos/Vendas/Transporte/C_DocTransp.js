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
var C_DocTransp = /** @class */ (function (_super) {
    __extends(C_DocTransp, _super);
    function C_DocTransp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_DocTransp.prototype, "Produtos", {
        get: function () {
            if (!this.GetScope()["Produtos"]) {
                return [];
            }
            else {
                return this.GetScope()["Produtos"];
            }
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocTransp.prototype, "Produto", {
        get: function () {
            if (!this.GetScope()["Produto"]) {
                return null;
            }
            else {
                return this.GetScope()["Produto"];
            }
        },
        set: function (value) {
            this.GetScope()["Produto"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocTransp.prototype, "grdProduto", {
        get: function () {
            return window['grdProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocTransp.prototype, "lstTipo", {
        get: function () {
            return window['lstTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocTransp.prototype, "lstDocumento", {
        get: function () {
            return window['lstDocumento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocTransp.prototype, "cboLocalCarga", {
        get: function () {
            return window['cboLocalCarga_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocTransp.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocTransp.prototype, "txtQuantidade", {
        get: function () {
            return window['txtQuantidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocTransp.prototype, "txtValor", {
        get: function () {
            return window['txtValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocTransp.prototype, "txtDescontoPorc", {
        get: function () {
            return window['txtDescontoPorc_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocTransp.prototype, "txtMorada", {
        get: function () {
            return window['txtMorada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocTransp.prototype, "txtCodigoPostal", {
        get: function () {
            return window['txtCodigoPostal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocTransp.prototype, "txtPorto", {
        get: function () {
            return window['txtPorto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocTransp.prototype, "txtDescontoValor", {
        get: function () {
            return window['txtDescontoValor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_DocTransp.prototype, "btnImprimir", {
        get: function () {
            return window["btnImprimir_Object"];
        },
        enumerable: true,
        configurable: true
    });
    C_DocTransp.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickBotaoImprimir, this);
        }
        if (this.grdProduto) {
            adicionarEventoMoura(this.grdProduto.Validando, this.OnValidandoProdutoGrade, this);
            adicionarEventoMoura(this.grdProduto.AdicionandoItem, this.OnAdicionandoProdutoGrade, this);
            adicionarEventoMoura(this.grdProduto.ItemAdicionado, this.OnAdicionouProdutoGrade, this);
            adicionarEventoMoura(this.grdProduto.LimpandoItem, this.OnLimpandoItemProduto, this);
            adicionarEventoMoura(this.grdProduto.ClicouAdicionar, this.OnClickAdicionar, this);
            adicionarEventoMoura(this.grdProduto.Grid.ExcluiuLinhaGrade, this.ValidarTipo, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnPesquisouProduto, this);
        }
        if (this.txtQuantidade) {
            adicionarEventoMoura(this.txtQuantidade.TextChanged, this.CalcularTotal, this);
        }
        if (this.txtValor) {
            adicionarEventoMoura(this.txtValor.TextChanged, this.CalcularTotal, this);
        }
        if (this.txtDescontoValor) {
            adicionarEventoMoura(this.txtDescontoValor.LostFocus, this.CalcularDescontoPorcentagem, this);
        }
        if (this.txtDescontoPorc) {
            adicionarEventoMoura(this.txtDescontoPorc.LostFocus, this.CalcularDescontoValor, this);
        }
        if (this.lstTipo) {
            adicionarEventoMoura(this.lstTipo.SelectionChanged, this.HabilitarCampos, this);
        }
        if (this.cboLocalCarga) {
            adicionarEventoDevExpress(this.cboLocalCarga.Combo.SelectedIndexChanged, this.HabilitarMorada, this);
        }
    };
    C_DocTransp.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.Limpar();
    };
    C_DocTransp.prototype.OnClickAdicionar = function (s, e) {
        var _this = this;
        var prod = this.grdProduto.Grid.DataSource.FirstOrDefault("Produto", this.txtProduto.GetText().CNum());
        if (prod) {
            e.cancelar = true;
            MsgBoxJS("Este produto já foi adicionado e a sua quantidade será substituída. Deseja continuar?", MsgBoxOptions.YesNo, MsgBoxIcon.Question, function (result) {
                if (result.Resultado == MsgBoxResult.No) {
                    return;
                }
                else {
                    var lista = _this.grdProduto.Grid.DataSource;
                    lista.FirstOrDefault("Produto", _this.txtProduto.GetText().CNum()).Quantidade = _this.Produto.Quantidade;
                    lista.FirstOrDefault("Produto", _this.txtProduto.GetText().CNum()).Valor = _this.Produto.Valor;
                    lista.FirstOrDefault("Produto", _this.txtProduto.GetText().CNum()).SubTotal = _this.Produto.SubTotal;
                    lista.FirstOrDefault("Produto", _this.txtProduto.GetText().CNum()).Desconto = _this.Produto.Desconto;
                    lista.FirstOrDefault("Produto", _this.txtProduto.GetText().CNum()).Total = _this.Produto.Total;
                    lista.FirstOrDefault("Produto", _this.txtProduto.GetText().CNum()).IVA = _this.Produto.IVA;
                    _this.Produto = null;
                    _this.txtDescontoPorc.SetText("0,000");
                    _this.RefreshAngular();
                    _this.grdProduto.Grid.PreencherGrid(lista);
                }
            }, null);
        }
    };
    C_DocTransp.prototype.HabilitarMorada = function () {
        if (this.cboLocalCarga.GetValue() == "S") {
            this.txtMorada.ReadOnly = true;
            this.txtPorto.ReadOnly = true;
            this.txtCodigoPostal.ReadOnly = true;
            this.EntityTela.Morada = "";
            this.EntityTela.Porto = "";
            this.EntityTela.Codigo_Postal = "";
        }
        else {
            this.txtMorada.ReadOnly = false;
            this.txtPorto.ReadOnly = false;
            this.txtCodigoPostal.ReadOnly = false;
        }
    };
    C_DocTransp.prototype.OnDepoisLimpar = function (Entity) {
        try {
            Entity.Produtos = [];
            this.Produtos = [];
            Entity.Tipo = "0";
            Entity.Documento = "GR";
            this.txtDescontoPorc.SetText("0,000");
            Entity.Local_Carga = "S";
            this.txtMorada.ReadOnly = true;
            this.txtPorto.ReadOnly = true;
            this.txtCodigoPostal.ReadOnly = true;
            this.grdProduto.Limpar();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_DocTransp.prototype.OnAntesGravar = function () {
        try {
            _super.prototype.OnAntesGravar.call(this);
            var parametros = {
                Tipo_Documento: this.lstDocumento.GetValue(),
                empresa: this.EntityTela.Empresa
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("Fatura_Serie", parametros);
            if (retorno == "") {
                var documento;
                if (this.lstDocumento.GetValue() === "GR") {
                    documento = "Guia de Remessa";
                }
                else {
                    documento = "Guia de Transporte";
                }
                MostrarAlerta("Não existe série cadastrada para o documento " + documento);
                return false;
            }
            this.PreencherProdutosEntity(this.EntityTela);
            this.EntityTela.Documento = this.lstDocumento.GetValue();
            this.EntityTela.Tipo = this.lstTipo.GetValue();
            this.EntityTela.Serie = retorno;
            this.EntityTela.Impressao_Realizada = false;
            this.EntityTela.Anulado = false;
            this.EntityTela.Data_Emissao = this.DataServidor();
            return true;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_DocTransp.prototype.PreencherProdutosEntity = function (Entity) {
        var listaBKP = cloneArray(Entity.Produtos);
        if (!listaBKP)
            listaBKP = [];
        Entity.Produtos = [];
        for (var x = 0; x <= this.Produtos.length - 1; x++) {
            var prod = null;
            var item = this.Produtos[x];
            if (CNum(item.Produto) > 0) {
                prod = listaBKP.FirstOrDefault("Produto", item.Produto);
            }
            if (!prod) {
                prod = {};
            }
            prod.Produto = item.Produto;
            prod.Qtde = item.Quantidade;
            prod.Desconto = item.Desconto;
            prod.Valor = item.Valor;
            prod.Iva_Valor = item.IVA;
            Entity.Produtos.push(prod);
        }
    };
    C_DocTransp.prototype.OnDepoisGravar = function () {
        try {
            _super.prototype.OnDepoisGravar.call(this);
            return true;
        }
        catch (ex) {
            LogarException(ex);
            return false;
        }
    };
    C_DocTransp.prototype.OnAntesDeletar = function () {
        return _super.prototype.OnAntesDeletar.call(this);
    };
    C_DocTransp.prototype.OnPesquisouProduto = function (s, e) {
        try {
            if (this.txtProduto.GetText().CNum() > 0) {
                this.produto = this.ObterDadosProduto(this.txtProduto.GetText().CNum());
                this.Produto.Preco_Custo = this.produto.Preco_Custo;
                this.Produto.Nome_Produto = this.produto.Nome;
                this.Produto.Quantidade = 1;
                this.Produto.Desconto = 0;
                this.txtDescontoPorc.SetText("0,000");
                if (this.EntityTela.Tipo === "0") {
                    this.Produto.Valor = this.produto.Preco_Produto;
                    this.Produto.SubTotal = this.Produto.Quantidade * this.Produto.Valor;
                    this.Produto.IVA = ((this.produto.IVA / 100 * this.Produto.Valor) * this.Produto.Quantidade);
                    this.Produto.Total = this.Produto.Quantidade * this.Produto.Valor + this.Produto.IVA;
                }
                else {
                    this.Produto.Valor = 0;
                    this.Produto.SubTotal = 0;
                    this.Produto.Total = 0;
                }
            }
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_DocTransp.prototype.OnClickAdicionarProdutoGrid = function () {
        try {
            this.grdProduto.AdicionarOuAlterarItemAtual();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_DocTransp.prototype.OnValidandoProdutoGrade = function (s, e) {
        try {
            var entity = e.item;
            var parametros = {
                entidadeSTR: JSON.stringify(entity)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("ValidarItemGradeProduto", parametros);
            if (!String.IsNullOrWhiteSpace(retorno.Alerta)) {
                MostrarAlerta(retorno.Alerta);
                e.cancelar = true;
                return;
            }
            e.item = retorno.Item;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_DocTransp.prototype.OnAdicionandoProdutoGrade = function (s, e) {
        try {
            var entity = e.item;
            var parametros = {
                entidadeSTR: JSON.stringify(entity)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("AdicionandoItemGradeProduto", parametros);
            if (!String.IsNullOrWhiteSpace(retorno.Alerta)) {
                MostrarAlerta(retorno.Alerta);
                e.cancelar = true;
                return;
            }
            if (this.EntityTela.Tipo === "1") {
                retorno.Item.Valor = 0;
                retorno.Item.SubTotal = 0;
                retorno.Item.Total = 0;
                retorno.Item.Desconto = 0;
            }
            e.item = retorno.Item;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_DocTransp.prototype.OnLimpandoItemProduto = function (s, e) {
        try {
            var item = e.item;
            item.Nome_Produto = "";
            item.Quantidade = 1;
            item.SubTotal = 0;
            item.Total = 0;
            this.txtDescontoPorc.SetText("0,000");
            e.item = item;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_DocTransp.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            var parametros = {
                codigo: ("" + Entidade.Codigo).CNum(),
            };
            var InformacoesAdicionais = this.ExecutarFuncaoServerSideSynch("GetInformacoesAdicionais", parametros);
            this.Produtos = InformacoesAdicionais.Produtos;
            this.ValidarTipo();
            this.RefreshAngular();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_DocTransp.prototype.ValidarTipo = function () {
        if (this.Produtos.length == 0) {
            this.lstTipo.Enabled = true;
        }
        else {
            this.lstTipo.Enabled = false;
        }
    };
    C_DocTransp.prototype.OnAdicionouProdutoGrade = function (s, e) {
        this.txtProduto.Focus();
        this.ValidarTipo();
    };
    C_DocTransp.prototype.CalcularDescontoValor = function () {
        var desconto;
        desconto = this.Produto.SubTotal / 100 * this.txtDescontoPorc.GetText().CNum();
        if (this.txtDescontoPorc.GetText().CNum() >= 100) {
            desconto = 0;
            this.txtDescontoPorc.SetText("0,000");
            MostrarAlerta("O desconto não pode ser maior ou igual a 100%");
        }
        this.Produto.Desconto = desconto;
        this.CalcularTotal();
    };
    C_DocTransp.prototype.CalcularDescontoPorcentagem = function () {
        var porcentagem;
        if (this.txtDescontoValor.GetText().CNum() > 0) {
            porcentagem = (100 * this.txtDescontoValor.GetText().CNum());
            porcentagem = porcentagem / this.Produto.SubTotal;
        }
        else {
            porcentagem = 0;
        }
        if (porcentagem >= 100) {
            porcentagem = 0;
            this.Produto.Desconto = 0;
            MostrarAlerta("O desconto não pode ser maior ou igual a 100%");
        }
        this.txtDescontoPorc.SetText(porcentagem.Format(3));
        this.CalcularTotal();
    };
    C_DocTransp.prototype.CalcularTotal = function () {
        if (this.EntityTela.Tipo === "0") {
            this.Produto.SubTotal = this.txtQuantidade.GetText().CNum() * this.txtValor.GetText().CNum();
            this.Produto.IVA = (this.produto.IVA / 100 * this.txtValor.GetText().CNum() * this.txtQuantidade.GetText().CNum());
            this.Produto.Total = this.Produto.SubTotal - this.Produto.Desconto + this.Produto.IVA;
        }
        else {
            this.Produto.SubTotal = 0;
            this.Produto.Total = 0;
        }
    };
    C_DocTransp.prototype.HabilitarCampos = function () {
        var flag;
        if (this.EntityTela.Tipo === "0") {
            flag = true;
        }
        else {
            flag = false;
        }
        this.Produto = null;
        this.txtDescontoPorc.ReadOnly = !flag;
        this.txtDescontoValor.ReadOnly = !flag;
        this.txtValor.ReadOnly = !flag;
    };
    C_DocTransp.prototype.OnClickBotaoImprimir = function (s, e) {
        try {
            e.processOnServer = false;
            if (!this.EntityTela || this.EntityTela.Codigo === 0) {
                MostrarAlerta("Informe um documento para ser impresso!");
                return false;
            }
            var parametrosImpressao = {
                entidadeSTR: JSON.stringify(this.EntityTela)
            };
            var parametros = {
                Tipo_Documento: this.lstDocumento.GetValue(),
                entidadeSTR: JSON.stringify(this.EntityTela)
            };
            this.ExecutarFuncaoServerSideSynch("PreencherParametros", parametros);
            if (this.lstDocumento.GetValue() == "GR") {
                var urlTela = "ReportView.aspx?relatorio=~/Report/Fixos/Guia_Remessa.REPX";
                //var urlTela = "ReportDesign.aspx?caminho=~/Report/Fixos&nome=Guia_Remessa.REPX";
            }
            else {
                var urlTela = "ReportView.aspx?relatorio=~/Report/Fixos/Guia_Transporte.REPX";
                //var urlTela = "ReportDesign.aspx?caminho=~/Report/Fixos&nome=Guia_Transporte.REPX";
            }
            this.ExecutarFuncaoServerSideSynch("Atualizar", parametrosImpressao);
            abrirTelaNovaAbaParametros(formataURLRelativa(urlTela), []);
            return false;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_DocTransp;
}(MouraPageCadastroAngular));
var c_DocTransp = new C_DocTransp();
//# sourceMappingURL=C_DocTransp.js.map