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
var C_FoodPromo = /** @class */ (function (_super) {
    __extends(C_FoodPromo, _super);
    function C_FoodPromo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.codigos = [];
        _this.codigosDiaSemana = [];
        return _this;
    }
    Object.defineProperty(C_FoodPromo.prototype, "grdProduto", {
        get: function () {
            return window['grdProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "Produto", {
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
    Object.defineProperty(C_FoodPromo.prototype, "Produtos", {
        get: function () {
            return this.GetScope()["Produtos"];
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "grdTipo", {
        get: function () {
            return window['grdTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "Tipo", {
        get: function () {
            if (!this.GetScope()["Tipo"]) {
                this.GetScope()["Tipo"] = {};
            }
            return this.GetScope()["Tipo"];
        },
        set: function (value) {
            this.GetScope()["Tipo"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "Tipos", {
        get: function () {
            return this.GetScope()["Tipos"];
        },
        set: function (value) {
            this.GetScope()["Tipos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "grdProdutoRetorno", {
        get: function () {
            return window['grdProdutoRetorno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "ProdutoRetorno", {
        get: function () {
            if (!this.GetScope()["ProdutoRetorno"]) {
                this.GetScope()["ProdutoRetorno"] = {};
            }
            return this.GetScope()["ProdutoRetorno"];
        },
        set: function (value) {
            this.GetScope()["ProdutoRetorno"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "ProdutosRetorno", {
        get: function () {
            return this.GetScope()["ProdutosRetorno"];
        },
        set: function (value) {
            this.GetScope()["ProdutosRetorno"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "grdProdutoPrecoDiferenciado", {
        get: function () {
            return window['grdProdutoPrecoDiferenciado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "ProdutoPrecoDiferenciado", {
        get: function () {
            if (!this.GetScope()["ProdutoPrecoDiferenciado"]) {
                this.GetScope()["ProdutoPrecoDiferenciado"] = {};
            }
            return this.GetScope()["ProdutoPrecoDiferenciado"];
        },
        set: function (value) {
            this.GetScope()["ProdutoPrecoDiferenciado"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "ProdutosPrecoDiferenciado", {
        get: function () {
            return this.GetScope()["ProdutosPrecoDiferenciado"];
        },
        set: function (value) {
            this.GetScope()["ProdutosPrecoDiferenciado"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "grdTipoRetorno", {
        get: function () {
            return window['grdTipoRetorno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "TipoRetorno", {
        get: function () {
            if (!this.GetScope()["TipoRetorno"]) {
                this.GetScope()["TipoRetorno"] = {};
            }
            return this.GetScope()["TipoRetorno"];
        },
        set: function (value) {
            this.GetScope()["TipoRetorno"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "TiposRetorno", {
        get: function () {
            return this.GetScope()["TiposRetorno"];
        },
        set: function (value) {
            this.GetScope()["TiposRetorno"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "grdPromocao", {
        get: function () {
            return window['grdPromocao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "Promocao", {
        get: function () {
            if (!this.GetScope()["Promocao"]) {
                this.GetScope()["Promocao"] = {};
            }
            return this.GetScope()["Promocao"];
        },
        set: function (value) {
            this.GetScope()["Promocao"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "Promocoes", {
        get: function () {
            return this.GetScope()["Promocoes"];
        },
        set: function (value) {
            this.GetScope()["Promocoes"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "ImgUploadInformativo", {
        get: function () {
            return window['ImgUploadInformativo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "ImgUploadRetorno", {
        get: function () {
            return window['ImgUploadRetorno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "cboRequisito", {
        get: function () {
            return window['cboRequisito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "cboRetorno", {
        get: function () {
            return window['cboRetorno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "txtQuantidade", {
        get: function () {
            return window['txtQuantidade_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "txtPreco", {
        get: function () {
            return window['txtPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "txtPorcentagem", {
        get: function () {
            return window['txtPorcentagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "txtProdutoRetorno", {
        get: function () {
            return window['txtProdutoRetorno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "txtAlturaBotaoRetornoPromocao", {
        get: function () {
            return window['txtAlturaBotaoRetornoPromocao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "txtLarguraBotaoRetornoPromocao", {
        get: function () {
            return window['txtLarguraBotaoRetornoPromocao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "txtProdutoPrecoDiferenciado", {
        get: function () {
            return window['txtProdutoPrecoDiferenciado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "txtProdutoSelecionouItem", {
        get: function () {
            return window['txtProdutoSelecionouItem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "cboTipoRetorno", {
        get: function () {
            return window['cboTipoRetorno_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "lstDiaSemana", {
        get: function () {
            return window['lstDiaSemana_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "cboTipoEscolha", {
        get: function () {
            return window['cboTipoEscolha_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "txtValorMinimoPedido", {
        get: function () {
            return window['txtValorMinimoPedido_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "txtValorMinimoItem", {
        get: function () {
            return window['txtValorMinimoItem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "txtValorMinimoPedidoTipo", {
        get: function () {
            return window['txtValorMinimoPedidoTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "DivAtingirValor", {
        get: function () {
            return $("#DivAtingirValor")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "DivSelecionouItem", {
        get: function () {
            return $("#DivSelecionouItem")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "DivSelecionouTipo", {
        get: function () {
            return $("#DivSelecionouTipo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "DivGanhaItem", {
        get: function () {
            return $("#DivGanhaItem")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "DivDescontoPedido", {
        get: function () {
            return $("#DivDescontoPedido")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "DivPrecoDiferenciado", {
        get: function () {
            return $("#DivPrecoDiferenciado")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FoodPromo.prototype, "DivSelecionouTipoRetorno", {
        get: function () {
            return $("#DivSelecionouTipoRetorno")[0];
        },
        enumerable: true,
        configurable: true
    });
    C_FoodPromo.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdPromocao) {
            adicionarEventoMoura(this.grdPromocao.Grid.SelecionouLinha, this.OnGrdSelecionouPromocao, this);
        }
        if (this.grdProduto) {
            adicionarEventoMoura(this.grdProduto.Validando, this.OnClickIncluirProdutoRequisito, this);
        }
        if (this.grdProdutoRetorno) {
            adicionarEventoMoura(this.grdProdutoRetorno.Validando, this.OnClickIncluirProdutoRetorno, this);
        }
        if (this.grdProdutoPrecoDiferenciado) {
            adicionarEventoMoura(this.grdProdutoPrecoDiferenciado.Validando, this.OnClickIncluirProdutoPrecoDiferenciado, this);
        }
        if (this.grdTipo) {
            adicionarEventoMoura(this.grdTipo.Validando, this.OnClickIncluirTipoRequisito, this);
        }
        if (this.grdTipoRetorno) {
            adicionarEventoMoura(this.grdTipoRetorno.Validando, this.OnClickIncluirTipoRetorno, this);
        }
        if (this.cboRequisito) {
            adicionarEventoMoura(this.cboRequisito.SelectedItemChanged, this.LimparCamposRequisito, this);
        }
        if (this.cboRetorno) {
            adicionarEventoMoura(this.cboRetorno.SelectedItemChanged, this.LimparCamposRetorno, this);
        }
    };
    C_FoodPromo.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
        if (!this.GetScope().MudouRequisito) {
            this.GetScope().MudouRequisito = $.proxy(this.MudouRequisito, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Requisito_Promocao; }, this.GetScope().MudouRequisito);
        }
        if (!this.GetScope().MudouRetorno) {
            this.GetScope().MudouRetorno = $.proxy(this.MudouRetorno, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Retorno_Promocao; }, this.GetScope().MudouRetorno);
        }
        this.CamposInvisiveis();
        var dateNow = new Date();
        var month = "";
        if (dateNow.getMonth() < 10) {
            month = ("0" + dateNow.getMonth().toString()).toString();
        }
        else {
            month = dateNow.getMonth().toString();
        }
        var date = "01/" + month + "/" + dateNow.getFullYear();
        this.txtPeriodo.textBoxCalendarioInicio.SetDate(date.ToDate());
        this.txtPeriodo.textBoxCalendarioFim.SetDate(dateNow.FormataData().ToDate());
    };
    C_FoodPromo.prototype.CamposInvisiveis = function () {
        $(this.DivAtingirValor).css("display", "none");
        $(this.DivSelecionouItem).css("display", "none");
        $(this.DivSelecionouTipo).css("display", "none");
        $(this.DivGanhaItem).css("display", "none");
        $(this.DivPrecoDiferenciado).css("display", "none");
        $(this.DivSelecionouTipoRetorno).css("display", "none");
        $(this.DivDescontoPedido).css("display", "none");
        this.cboTipoEscolha.Visible = false;
    };
    C_FoodPromo.prototype.OnAntesGravar = function () {
        debugger;
        _super.prototype.OnAntesGravar.call(this);
        var retorno = this.ValidarCampos();
        if (retorno == false) {
            return retorno;
        }
        if (this.Produtos.length > 0) {
            this.EntityTela.ProdutosRequisito = this.Produtos;
        }
        else if (this.EntityTela.Requisito_Promocao == 2 && this.Produtos.length == 0) {
            MostrarAlerta("Preencha o campo corretamente: Adicione um Produto.");
            return false;
        }
        if (this.Produtos.length == 0) {
            this.EntityTela.ProdutosRequisito = [];
        }
        if (this.ProdutosRetorno.length > 0) {
            this.EntityTela.ProdutosRetorno = this.ProdutosRetorno;
        }
        else if (this.EntityTela.Retorno_Promocao == 1 && this.ProdutosRetorno.length == 0) {
            MostrarAlerta("Preencha o campo corretamente: Adicione um Produto");
            return false;
        }
        if (this.ProdutosRetorno.length == 0) {
            this.EntityTela.ProdutosRetorno = [];
        }
        if (this.ProdutosPrecoDiferenciado.length > 0) {
            this.EntityTela.ProdutosRetornoPrecoDiferenciado = this.ProdutosPrecoDiferenciado;
        }
        else if (this.EntityTela.Retorno_Promocao == 3 && this.ProdutoPrecoDiferenciado.length == 0) {
            MostrarAlerta("Preencha o campo corretamente: Adicione um Produto com preço diferenciado");
            return false;
        }
        if (this.ProdutosPrecoDiferenciado.length == 0) {
            this.EntityTela.ProdutosRetornoPrecoDiferenciado = [];
        }
        if (this.TiposRetorno.length > 0) {
            this.EntityTela.TiposRetorno = this.TiposRetorno;
        }
        else if (this.EntityTela.Retorno_Promocao == 4 && this.TiposRetorno.length == 0) {
            MostrarAlerta("Preencha o campo corretamente: Adicione um Tipo para dobrar o pedido");
            return false;
        }
        if (this.TiposRetorno.length == 0) {
            this.EntityTela.TiposRetorno = [];
        }
        if (this.Tipos.length > 0) {
            this.EntityTela.TiposRequisito = this.Tipos;
        }
        else if (this.EntityTela.Requisito_Promocao == 3 && this.Tipos.length == 0) {
            MostrarAlerta("Preencha o campo corretamente: Adicione um Tipo");
            return false;
        }
        if (this.Tipos.length == 0) {
            this.EntityTela.TiposRequisito = [];
        }
        this.EntityTela.Data_Inicio_Promocao = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
        this.EntityTela.Data_Final_Promocao = this.txtPeriodo.textBoxCalendarioFim.GetDate();
        this.EntityTela.Data_Cadastro = new Date;
        this.GetScope().Entity.Empresas = [];
        for (var x = 0; x < this.lstEmpresa.GetValues().length; x++) {
            var empresa = {};
            empresa.Empresa = +this.lstEmpresa.GetValues()[x];
            this.GetScope().Entity.Empresas.push(empresa);
        }
        this.GetScope().Entity.DiasSemana = [];
        for (var x = 0; x < this.lstDiaSemana.GetValues().length; x++) {
            var diaSemana = {};
            diaSemana.Dia_Semana = +this.lstDiaSemana.GetValues()[x];
            this.GetScope().Entity.DiasSemana.push(diaSemana);
        }
        this.EntityTela.Img_Informativo = this.ImgUploadInformativo.OnConvertStringToByteArray();
        this.EntityTela.Img_Retorno = this.ImgUploadRetorno.OnConvertStringToByteArray();
        return true;
    };
    C_FoodPromo.prototype.MudouRequisito = function (newValue, oldValue) {
        if (this.EntityTela.Requisito_Promocao == 1) {
            $(this.DivAtingirValor).css("display", "block");
            $(this.DivSelecionouItem).css("display", "none");
            $(this.DivSelecionouTipo).css("display", "none");
        }
        else if (this.EntityTela.Requisito_Promocao == 2) {
            $(this.DivAtingirValor).css("display", "none");
            $(this.DivSelecionouItem).css("display", "block");
            $(this.DivSelecionouTipo).css("display", "none");
        }
        else if (this.EntityTela.Requisito_Promocao == 3) {
            $(this.DivAtingirValor).css("display", "none");
            $(this.DivSelecionouItem).css("display", "none");
            $(this.DivSelecionouTipo).css("display", "block");
        }
        else if (this.EntityTela.Requisito_Promocao == 0) {
            $(this.DivAtingirValor).css("display", "none");
            $(this.DivSelecionouItem).css("display", "none");
            $(this.DivSelecionouTipo).css("display", "none");
        }
        this.PreencherGrade();
    };
    C_FoodPromo.prototype.MudouRetorno = function (newValue, oldValue) {
        if (this.EntityTela.Retorno_Promocao == 1) {
            $(this.DivGanhaItem).css("display", "block");
            $(this.DivPrecoDiferenciado).css("display", "none");
            $(this.DivSelecionouTipoRetorno).css("display", "none");
            $(this.DivDescontoPedido).css("display", "none");
            this.cboTipoEscolha.Visible = true;
        }
        else if (this.EntityTela.Retorno_Promocao == 2) {
            $(this.DivGanhaItem).css("display", "none");
            $(this.DivPrecoDiferenciado).css("display", "none");
            $(this.DivSelecionouTipoRetorno).css("display", "none");
            $(this.DivDescontoPedido).css("display", "block");
            this.cboTipoEscolha.Visible = false;
        }
        else if (this.EntityTela.Retorno_Promocao == 3) {
            $(this.DivGanhaItem).css("display", "none");
            $(this.DivPrecoDiferenciado).css("display", "block");
            $(this.DivSelecionouTipoRetorno).css("display", "none");
            $(this.DivDescontoPedido).css("display", "none");
            this.cboTipoEscolha.Visible = false;
        }
        else if (this.EntityTela.Retorno_Promocao == 4) {
            $(this.DivGanhaItem).css("display", "none");
            $(this.DivPrecoDiferenciado).css("display", "none");
            $(this.DivSelecionouTipoRetorno).css("display", "block");
            $(this.DivDescontoPedido).css("display", "none");
            this.cboTipoEscolha.Visible = false;
        }
        this.PreencherGrade();
    };
    C_FoodPromo.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_FoodPromo.prototype.PreencherGrade = function () {
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("GetPromocao", {});
            for (var x = 0; x < retorno.length; x++) {
                retorno[x].Data_Inicio_Promocao = retorno[x].Data_Inicio_Promocao.FormataData();
                retorno[x].Data_Final_Promocao = retorno[x].Data_Final_Promocao.FormataData();
            }
            this.Promocoes = retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FoodPromo.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
        this.ImgUploadRetorno.Limpar();
        this.ImgUploadInformativo.Limpar();
        this.PreencherEmpresas(Entity.Empresas);
        this.lstDiaSemana.LimparSelecao();
        this.LimparCamposRequisito();
        this.LimparCamposRetorno();
        Entity.DiasSemana = [];
        this.CamposInvisiveis();
    };
    C_FoodPromo.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        var parametros = {
            codPromocao: this.EntityTela.Codigo
        };
        var parametrosProdutosRetornoPrecoDiferenciado = {
            codPromocao: this.EntityTela.Codigo,
            tipo: 3
        };
        var parametrosProdutosRetorno = {
            codPromocao: this.EntityTela.Codigo,
            tipo: 1
        };
        this.PreencherGrade();
        var retornoProdutos = this.ExecutarFuncaoServerSideSynch("GetProdutosRequisito", parametros);
        this.Produtos = retornoProdutos;
        var retornoProdutosRetorno = this.ExecutarFuncaoServerSideSynch("GetProdutosRetorno", parametrosProdutosRetorno);
        this.ProdutosRetorno = retornoProdutosRetorno;
        var retornoProdutosRetornoPrecoDiferenciado = this.ExecutarFuncaoServerSideSynch("GetProdutosRetornoPrecoDiferenciado", parametrosProdutosRetornoPrecoDiferenciado);
        this.ProdutosPrecoDiferenciado = retornoProdutosRetornoPrecoDiferenciado;
        var retornoTipoRetorno = this.ExecutarFuncaoServerSideSynch("GetTipoRetorno", parametros);
        this.TiposRetorno = retornoTipoRetorno;
        var retornoTipoRequisito = this.ExecutarFuncaoServerSideSynch("GetTipoRequisito", parametros);
        this.Tipos = retornoTipoRequisito;
        var retornoEmpresas = this.ExecutarFuncaoServerSideSynch("GetEmpresas", parametros);
        this.EntityTela.Empresas = retornoEmpresas;
        this.PreencherEmpresas(Entidade.Empresas);
        var retornoDiasSemana = this.ExecutarFuncaoServerSideSynch("GetDiasSemana", parametros);
        this.EntityTela.DiasSemana = retornoDiasSemana;
        this.PreencherDiasSemna(Entidade.DiasSemana);
        this.ImgUploadRetorno.Img.src = this.ImgUploadRetorno.OnConvertByteArrayToString(Entidade.Img_Retorno);
        this.ImgUploadInformativo.Img.src = this.ImgUploadInformativo.OnConvertByteArrayToString(Entidade.Img_Informativo);
        this.RefreshAngular();
    };
    C_FoodPromo.prototype.OnGrdSelecionouPromocao = function (s, e) {
        this.EntityTela.Codigo = e.data.Codigo;
        this.PreencherEntidade(e.data.Codigo);
        this.RefreshAngular();
    };
    C_FoodPromo.prototype.ValidarCampos = function () {
        if (this.EntityTela.Requisito_Promocao == 1) {
            if (this.txtValorMinimoPedido.GetText() == undefined || this.txtValorMinimoPedido.GetText() == "0,00" || this.txtValorMinimoPedido.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Valor Mínimo do Pedido dentro da Aba Requisito.");
                return false;
            }
        }
        if (this.EntityTela.Requisito_Promocao == 2) {
            if (this.txtValorMinimoItem.GetText() == undefined || this.txtValorMinimoItem.GetText() == "0,00" || this.txtValorMinimoItem.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Valor Mínimo do Pedido dentro da Aba Requisito.");
                return false;
            }
            if ((this.txtProdutoSelecionouItem.GetText() == "" || this.txtProdutoSelecionouItem.GetText() == undefined) && (this.Produtos.length == 0)) {
                MostrarAlerta("Preencha o campo corretamente:Produto dentro da Aba Requisito.");
                return false;
            }
        }
        if (this.EntityTela.Requisito_Promocao == 3) {
            if (this.txtValorMinimoPedidoTipo == undefined || this.txtValorMinimoPedidoTipo.GetText() == "0,00" || this.txtValorMinimoPedidoTipo.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Valor Mínimo do Pedido dentro da Aba Requisito.");
                return false;
            }
            if ((this.cboTipo.GetValue() == -1 || this.cboTipo.GetValue() == undefined || this.cboTipo.GetValue() == null) && this.Tipos.length == 0) {
                MostrarAlerta("Preencha o campo corretamente: Tipo dentro da Aba Requisito.");
                return false;
            }
        }
        if (this.EntityTela.Retorno_Promocao == 1) {
            if (this.cboTipoEscolha.GetValue() == null) {
                MostrarAlerta("Preencha o campo corretamente:Tipo de Escolha.");
                return false;
            }
            if (this.ProdutoRetorno.length == 0) {
                if (this.txtProdutoRetorno.GetText() == undefined || this.txtProdutoRetorno.GetText() == "") {
                    MostrarAlerta("Preencha o campo corretamente: Produto de Retorno dentro da Aba Retorno.");
                    return false;
                }
                if (this.txtQuantidade.GetText() == null || this.txtQuantidade.GetText() == "" || this.txtQuantidade.GetText() == "0") {
                    MostrarAlerta("Preencha o campo corretamente: Quantidade de Produto do Retorno dentro da Aba Retorno.");
                    return false;
                }
            }
        }
        if (this.EntityTela.Retorno_Promocao == 2) {
            if (this.txtPorcentagem.GetText() == null || this.txtPorcentagem.GetText() == "" || this.txtPorcentagem.GetText() == "0,00") {
                MostrarAlerta("Preencha o campo corretamente: Desconto do Pedido do Retorno dentro da Aba Retorno.");
                return false;
            }
        }
        if (this.EntityTela.Retorno_Promocao == 3) {
            if (this.ProdutosPrecoDiferenciado.length == 0) {
                if (this.txtProdutoPrecoDiferenciado.GetText() == undefined || this.txtProdutoPrecoDiferenciado.GetText() == "") {
                    MostrarAlerta("Preencha o campo corretamente: Produto com Preço Diferenciado do Retorno dentro da Aba Retorno.");
                    return false;
                }
                if (this.txtPreco.GetText() == null || this.txtPreco.GetText() == "" || this.txtPreco.GetText() == "0") {
                    MostrarAlerta("Preencha o campo corretamente: Preço do Produto com Preço Diferenciado do Retorno dentro da Aba Retorno.");
                    return false;
                }
            }
        }
        if (this.EntityTela.Retorno_Promocao == 4) {
            if ((this.cboTipoRetorno.GetValue() == undefined || this.cboTipoRetorno.GetValue() == -1 || this.cboTipoRetorno.GetValue() == null) && this.TiposRetorno.length == 0) {
                MostrarAlerta("Preencha o campo corretamente: Tipo de Retorno para Dobrar o Pedido dentro da Aba Retorno.");
                return false;
            }
        }
        var imgInformativo = this.ImgUploadInformativo.FormatImg();
        if (imgInformativo == undefined) {
            MostrarAlerta("Preencha o campo corretamente: Imagem do Informativo.");
            return false;
        }
        var imgRetorno = this.ImgUploadRetorno.FormatImg();
        if (imgRetorno == undefined) {
            MostrarAlerta("Preencha o campo corretamente: Imagem do Informativo de Retorno.");
            return false;
        }
    };
    C_FoodPromo.prototype.OnClickIncluirProdutoRequisito = function (s, e) {
        try {
            var parametros = {
                codProduto: this.txtProdutoSelecionouItem.GetText()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetProdutoFormula", parametros);
            if (retorno) {
                MostrarAlerta("Selecione outro produto, pois este é um produto pai de um kit");
                e.cancelar = true;
                return false;
            }
            if (this.txtValorMinimoItem.GetText() == undefined || this.txtValorMinimoItem.GetText() == "0,00") {
                MostrarAlerta("Preencha o campo corretamente: Valor Mínimo do Pedido dentro da Aba Requisito.");
                e.cancelar = true;
                return false;
            }
            if (this.txtProdutoSelecionouItem.GetText() == "" || this.txtProdutoSelecionouItem.GetText() == undefined) {
                MostrarAlerta("Preencha o campo corretamente:Produto dentro da Aba Requisito.");
                e.cancelar = true;
                return false;
            }
            for (var x = 0; x < this.Produtos.length; x++) {
                if (this.txtProdutoSelecionouItem.GetText() == this.Produtos[x].Produto) {
                    e.cancelar = true;
                    MostrarAlerta("Este produto já foi inserido");
                    return false;
                }
            }
            if (e.index < 0) {
                e.item.Codigo = 0;
                var maiorContador;
                if (this.EntityTela.Codigo == null) {
                    this.EntityTela.Codigo = 0;
                }
                var parametros = {
                    codPromocao: this.EntityTela.Codigo
                };
                var count = this.Produtos.length;
                if (e.item.Codigo == 0) {
                    var retorno = this.ExecutarFuncaoServerSideSynch("GetMaximoProdutoRequisito", parametros);
                    maiorContador = retorno + 1;
                    if (this.Produtos.length == 0) {
                        e.item.Codigo = maiorContador;
                    }
                    else {
                        e.item.Codigo = (this.Produtos[count - 1].Codigo + 1);
                    }
                }
                e.item.Nome_Produto = this.txtProdutoSelecionouItem.GetResultado();
                e.item.Produto = this.txtProdutoSelecionouItem.GetText();
                this.Produto = {};
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FoodPromo.prototype.OnClickIncluirProdutoRetorno = function (s, e) {
        try {
            var parametros = {
                codProduto: this.txtProdutoRetorno.GetText()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetProdutoFormula", parametros);
            if (retorno) {
                MostrarAlerta("Selecione outro produto, pois este é um produto pai de um kit");
                e.cancelar = true;
                return false;
            }
            if (this.txtProdutoRetorno.GetText() == undefined || this.txtProdutoRetorno.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Produto de Retorno dentro da Aba Retorno.");
                e.cancelar = true;
                return false;
            }
            if (this.txtQuantidade.GetText() == null || this.txtQuantidade.GetText() == "" || this.txtQuantidade.GetText() == "0,00" || this.txtQuantidade.GetText() == "0") {
                MostrarAlerta("Preencha o campo corretamente: Quantidade de Produto do Retorno dentro da Aba Retorno.");
                e.cancelar = true;
                return false;
            }
            if (this.txtAlturaBotaoRetornoPromocao.GetText() == undefined || this.txtAlturaBotaoRetornoPromocao.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Altura em px do Botão do Modal de Retorno da Promoção dentro da Aba Retorno.");
                e.cancelar = true;
                return false;
            }
            if (this.txtLarguraBotaoRetornoPromocao.GetText() == undefined || this.txtLarguraBotaoRetornoPromocao.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Largura em px do Botão do Modal de Retorno da Promoção dentro da Aba Retorno.");
                e.cancelar = true;
                return false;
            }
            for (var x = 0; x < this.ProdutosRetorno.length; x++) {
                if (this.txtProdutoSelecionouItem.GetText() == this.ProdutosRetorno[x].Produto) {
                    MostrarAlerta("Este produto já foi inserido no retorno");
                    e.cancelar = true;
                    return false;
                }
            }
            if (e.index < 0) {
                e.item.Codigo = 0;
                var maiorContador;
                if (this.EntityTela.Codigo == null) {
                    this.EntityTela.Codigo = 0;
                }
                var parametros = {
                    codPromocao: this.EntityTela.Codigo
                };
                var count = this.ProdutosRetorno.length;
                if (e.item.Codigo == 0) {
                    var retorno = this.ExecutarFuncaoServerSideSynch("GetMaximoProdutoRetorno", parametros);
                    maiorContador = retorno + 1;
                    if (this.ProdutosRetorno.length == 0) {
                        e.item.Codigo = maiorContador;
                    }
                    else {
                        e.item.Codigo = (this.ProdutosRetorno[count - 1].Codigo + 1);
                    }
                }
                e.item.Nome_Produto = this.txtProdutoRetorno.GetResultado();
                e.item.Produto = this.txtProdutoRetorno.GetText();
                e.item.Quantidade = this.txtQuantidade.GetText();
                e.item.Altura_Botao_Modal_Retorno_Promocao = this.txtAlturaBotaoRetornoPromocao.GetText();
                e.item.Largura_Botao_Modal_Retorno_Promocao = this.txtLarguraBotaoRetornoPromocao.GetText();
                this.ProdutoRetorno = {};
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FoodPromo.prototype.OnClickIncluirProdutoPrecoDiferenciado = function (s, e) {
        try {
            var parametros = {
                codProduto: this.txtProdutoPrecoDiferenciado.GetText()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetProdutoFormula", parametros);
            if (retorno) {
                MostrarAlerta("Selecione outro produto, pois este é um produto pai de um kit");
                e.cancelar = true;
                return false;
            }
            if (this.txtProdutoPrecoDiferenciado.GetText() == undefined || this.txtProdutoPrecoDiferenciado.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Produto com Preço Diferenciado do Retorno dentro da Aba Retorno.");
                e.cancelar = true;
                return false;
            }
            if (this.txtPreco.GetText() == null || this.txtPreco.GetText() == "" || this.txtPreco.GetText() == "0,00") {
                MostrarAlerta("Preencha o campo corretamente: Preço do Produto com Preço Diferenciado do Retorno dentro da Aba Retorno.");
                e.cancelar = true;
                return false;
            }
            for (var x = 0; x < this.ProdutosPrecoDiferenciado.length; x++) {
                if (this.txtProdutoSelecionouItem.GetText() == this.ProdutosPrecoDiferenciado[x].Produto) {
                    MostrarAlerta("Este produto já foi inserido no retorno");
                    e.cancelar = true;
                    return false;
                }
            }
            if (e.index < 0) {
                e.item.Codigo = 0;
                var maiorContador;
                if (this.EntityTela.Codigo == null) {
                    this.EntityTela.Codigo = 0;
                }
                var parametros = {
                    codPromocao: this.EntityTela.Codigo
                };
                var count = this.ProdutosPrecoDiferenciado.length;
                if (e.item.Codigo == 0) {
                    var retorno = this.ExecutarFuncaoServerSideSynch("GetMaximoProdutoRetorno", parametros);
                    maiorContador = retorno + 1;
                    if (this.ProdutosPrecoDiferenciado.length == 0) {
                        e.item.Codigo = maiorContador;
                    }
                    else {
                        e.item.Codigo = (this.ProdutosPrecoDiferenciado[count - 1].Codigo + 1);
                    }
                }
                e.item.Nome_Produto = this.txtProdutoPrecoDiferenciado.GetResultado();
                e.item.Produto = this.txtProdutoPrecoDiferenciado.GetText();
                e.item.Preco = this.txtPreco.GetText();
                this.ProdutoPrecoDiferenciado = {};
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FoodPromo.prototype.OnClickIncluirTipoRequisito = function (s, e) {
        try {
            if (this.Tipos.length == 0) {
                if (this.txtValorMinimoPedidoTipo.GetText() == undefined || this.txtValorMinimoPedidoTipo.GetText() == "0,00") {
                    MostrarAlerta("Preencha o campo corretamente: Valor Mínimo do Pedido dentro da Aba Requisito.");
                    e.cancelar = true;
                    return false;
                }
                if (this.cboTipo.GetValue() == -1 || this.cboTipo.GetValue() == undefined || this.cboTipo.GetValue() == null) {
                    MostrarAlerta("Preencha o campo corretamente: Tipo dentro da Aba Requisito.");
                    e.cancelar = true;
                    return false;
                }
            }
            for (var x = 0; x < this.Tipos.length; x++) {
                if (this.cboTipo.GetValue() == this.Tipos[x].Tipo) {
                    MostrarAlerta("Este Tipo já foi inserido no requisito");
                    e.cancelar = true;
                    return false;
                }
            }
            if (e.index < 0) {
                e.item.Codigo = 0;
                var maiorContador;
                if (this.EntityTela.Codigo == null) {
                    this.EntityTela.Codigo = 0;
                }
                var parametros = {
                    codPromocao: this.EntityTela.Codigo
                };
                var count = this.Tipos.length;
                if (e.item.Codigo == 0) {
                    var retorno = this.ExecutarFuncaoServerSideSynch("GetMaximoTipoRequisito", parametros);
                    maiorContador = retorno + 1;
                    if (this.Tipos.length == 0) {
                        e.item.Codigo = maiorContador;
                    }
                    else {
                        e.item.Codigo = (this.Tipos[count - 1].Codigo + 1);
                    }
                }
                e.item.Descricao_Tipo = this.cboTipo.GetText();
                e.item.Tipo = this.cboTipo.GetValue();
                this.cboTipo.LimparSelecao();
                this.Tipo = {};
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FoodPromo.prototype.OnClickIncluirTipoRetorno = function (s, e) {
        try {
            if (this.TiposRetorno.length == 0) {
                if (this.cboTipoRetorno.GetValue() == -1 || this.cboTipoRetorno.GetValue() == undefined || this.cboTipoRetorno.GetValue() == null) {
                    MostrarAlerta("Preencha o campo corretamente: Tipo de Retorno para Dobrar o Pedido dentro da Aba Retorno.");
                    e.cancelar = true;
                    return false;
                }
            }
            for (var x = 0; x < this.TiposRetorno.length; x++) {
                if (this.cboTipoRetorno.GetValue() == this.TiposRetorno[x].Tipo) {
                    MostrarAlerta("Este Tipo já foi inserido no retorno");
                    e.cancelar = true;
                    return false;
                }
            }
            if (e.index < 0) {
                e.item.Codigo = 0;
                var maiorContador;
                if (this.EntityTela.Codigo == null) {
                    this.EntityTela.Codigo = 0;
                }
                var parametros = {
                    codPromocao: this.EntityTela.Codigo
                };
                var count = this.TiposRetorno.length;
                if (e.item.Codigo == 0) {
                    var retorno = this.ExecutarFuncaoServerSideSynch("GetMaximoTipoRetorno", parametros);
                    maiorContador = retorno + 1;
                    if (this.TiposRetorno.length == 0) {
                        e.item.Codigo = maiorContador;
                    }
                    else {
                        e.item.Codigo = (this.TiposRetorno[count - 1].Codigo + 1);
                    }
                }
                e.item.Descricao_Tipo = this.cboTipoRetorno.GetText();
                e.item.Tipo = this.cboTipoRetorno.GetValue();
                this.cboTipoRetorno.LimparSelecao();
                this.TipoRetorno = {};
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_FoodPromo.prototype.LimparCamposRequisito = function () {
        if (this.EntityTela != undefined) {
            if (this.EntityTela.Requisito_Promocao) {
                this.txtProdutoSelecionouItem.Limpar();
                this.Produtos = [];
                this.Tipos = [];
                this.Produto = {};
                this.Tipo = {};
                this.txtValorMinimoItem.Limpar();
                this.txtValorMinimoPedido.Limpar();
                this.txtValorMinimoPedidoTipo.Limpar();
                this.cboTipo.LimparSelecao();
                this.EntityTela.ProdutosRequisito = [];
                this.EntityTela.TiposRequisito = [];
                this.EntityTela.Valor_Minimo_Pedido = 0;
            }
        }
    };
    C_FoodPromo.prototype.LimparCamposRetorno = function () {
        if (this.EntityTela != undefined) {
            if (this.EntityTela.Retorno_Promocao) {
                this.txtPreco.Limpar();
                this.txtPorcentagem.Limpar();
                this.txtProdutoPrecoDiferenciado.Limpar();
                this.txtProdutoRetorno.Limpar();
                this.txtQuantidade.Limpar();
                this.txtAlturaBotaoRetornoPromocao.Limpar();
                this.txtLarguraBotaoRetornoPromocao.Limpar();
                this.ProdutosRetorno = [];
                this.TiposRetorno = [];
                this.ProdutoRetorno = {};
                this.TipoRetorno = {};
                this.txtPorcentagem.Limpar();
                this.cboTipoRetorno.LimparSelecao();
                this.ProdutoPrecoDiferenciado = {};
                this.ProdutosPrecoDiferenciado = {};
                this.EntityTela.ProdutosRetorno = [];
                this.EntityTela.ProdutosRetornoPrecoDiferenciado = [];
                this.EntityTela.TiposRetorno = [];
                this.EntityTela.Porcentagem_Desconto = 0;
            }
        }
    };
    C_FoodPromo.prototype.PreencherEmpresas = function (empresas) {
        if (empresas) {
            for (var x = 0; x < empresas.length; x++) {
                this.codigos.push(empresas[x].Empresa.toString());
            }
            if (this.lstEmpresa) {
                this.lstEmpresa.SetValues(this.codigos);
            }
        }
        else {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        }
    };
    C_FoodPromo.prototype.PreencherDiasSemna = function (diasSemana) {
        this.EntityTela.DiasSemana = [];
        this.codigosDiaSemana = [];
        this.lstDiaSemana.LimparSelecao();
        if (diasSemana) {
            for (var x = 0; x < diasSemana.length; x++) {
                this.codigosDiaSemana.push(diasSemana[x].Dia_Semana.toString());
            }
            if (this.lstDiaSemana) {
                this.lstDiaSemana.SetValues(this.codigosDiaSemana);
            }
        }
        else {
            this.lstDiaSemana.SelecionarEmpresaPadraoUsuario();
        }
    };
    return C_FoodPromo;
}(MouraPageCadastroAngular));
var c_FoodPromo = new C_FoodPromo();
//# sourceMappingURL=C_FoodPromo.js.map