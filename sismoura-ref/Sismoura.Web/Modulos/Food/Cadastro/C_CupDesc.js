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
var C_CupDesc = /** @class */ (function (_super) {
    __extends(C_CupDesc, _super);
    function C_CupDesc() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.codigos = [];
        return _this;
    }
    Object.defineProperty(C_CupDesc.prototype, "grdProduto", {
        get: function () {
            return window['grdProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "Produto", {
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
    Object.defineProperty(C_CupDesc.prototype, "Produtos", {
        get: function () {
            return this.GetScope()["Produtos"];
        },
        set: function (value) {
            this.GetScope()["Produtos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "Combo", {
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
    Object.defineProperty(C_CupDesc.prototype, "Combos", {
        get: function () {
            return this.GetScope()["Combos"];
        },
        set: function (value) {
            this.GetScope()["Combos"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "Lanche", {
        get: function () {
            if (!this.GetScope()["Lanche"]) {
                this.GetScope()["Lanche"] = {};
            }
            return this.GetScope()["Lanche"];
        },
        set: function (value) {
            this.GetScope()["Lanche"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "Lanches", {
        get: function () {
            return this.GetScope()["Lanches"];
        },
        set: function (value) {
            this.GetScope()["Lanches"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "grdProdutoValorDiferenciado", {
        get: function () {
            return window['grdProdutoValorDiferenciado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "ProdutoValorDiferenciado", {
        get: function () {
            if (!this.GetScope()["ProdutoValorDiferenciado"]) {
                this.GetScope()["ProdutoValorDiferenciado"] = {};
            }
            return this.GetScope()["ProdutoValorDiferenciado"];
        },
        set: function (value) {
            this.GetScope()["ProdutoValorDiferenciado"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "ProdutosValorDiferenciado", {
        get: function () {
            return this.GetScope()["ProdutosValorDiferenciado"];
        },
        set: function (value) {
            this.GetScope()["ProdutosValorDiferenciado"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "grdCupom", {
        get: function () {
            return window['grdCupom_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "Cupom", {
        get: function () {
            if (!this.GetScope()["Cupom"]) {
                this.GetScope()["Cupom"] = {};
            }
            return this.GetScope()["Cupom"];
        },
        set: function (value) {
            this.GetScope()["Cupom"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "Cupons", {
        get: function () {
            return this.GetScope()["Cupons"];
        },
        set: function (value) {
            this.GetScope()["Cupons"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "cboTipoIngredienteDobro", {
        get: function () {
            return window['cboTipoIngredienteDobro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "txtPrecoValorDiferenciado", {
        get: function () {
            return window['txtPrecoValorDiferenciado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "txtPrecoLanche", {
        get: function () {
            return window['txtPrecoLanche_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "txtPrecoCombo", {
        get: function () {
            return window['txtPrecoCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "txtPorcentagem", {
        get: function () {
            return window['txtPorcentagem_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "txtProdutoValorDiferenciado", {
        get: function () {
            return window['txtProdutoValorDiferenciado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "txtLanche", {
        get: function () {
            return window['txtLanche_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "txtCombo", {
        get: function () {
            return window['txtCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "btnCarregarQR", {
        get: function () {
            return window['btnCarregarQR_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "QR", {
        get: function () {
            return window['qrCode_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "DivGanhaLanche", {
        get: function () {
            return $("#DivGanhaLanche")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "DivGanhaCombo", {
        get: function () {
            return $("#DivGanhaCombo")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "DivIngredienteDobro", {
        get: function () {
            return $("#DivIngredienteDobro")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "DivDescontoFinal", {
        get: function () {
            return $("#DivDescontoFinal")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "DivGanhaIngrediente", {
        get: function () {
            return $("#DivGanhaIngrediente")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "DivQRCode", {
        get: function () {
            return $("#DivQRCode")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "DivIngredienteValorDiferenciado", {
        get: function () {
            return $("#DivIngredienteValorDiferenciado")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "lblPrecoCombo", {
        get: function () {
            return window['lblPrecoCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "lblPrecoLanche", {
        get: function () {
            return window['lblPrecoLanche_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "lblPrecoProduto", {
        get: function () {
            return window['lblPrecoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "lblPrecoProdutoValorDiferenciado", {
        get: function () {
            return window['lblPrecoProdutoValorDiferenciado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "grdLanche", {
        get: function () {
            return window['grdLanche_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "grdCombo", {
        get: function () {
            return window['grdCombo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "fotoFundoCupomDesconto", {
        get: function () {
            return window['fotoFundoCupomDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "grdTipo", {
        get: function () {
            return window['grdTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "IngredienteDobro", {
        get: function () {
            if (!this.GetScope()["IngredienteDobro"]) {
                this.GetScope()["IngredienteDobro"] = {};
            }
            return this.GetScope()["IngredienteDobro"];
        },
        set: function (value) {
            this.GetScope()["IngredienteDobro"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_CupDesc.prototype, "IngredientesDobro", {
        get: function () {
            return this.GetScope()["IngredientesDobro"];
        },
        set: function (value) {
            this.GetScope()["IngredientesDobro"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_CupDesc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdCupom) {
            adicionarEventoMoura(this.grdCupom.Grid.SelecionouLinha, this.OnGrdSelecionouCupom, this);
        }
        if (this.grdProduto) {
            adicionarEventoMoura(this.grdProduto.Validando, this.OnClickIncluirProduto, this);
        }
        if (this.grdProdutoValorDiferenciado) {
            adicionarEventoMoura(this.grdProdutoValorDiferenciado.Validando, this.OnClickIncluirProdutoValorDiferenciado, this);
        }
        if (this.grdLanche) {
            adicionarEventoMoura(this.grdLanche.Validando, this.OnClickIncluirLanche, this);
        }
        if (this.grdCombo) {
            adicionarEventoMoura(this.grdCombo.Validando, this.OnClickIncluirCombo, this);
        }
        if (this.grdTipo) {
            adicionarEventoMoura(this.grdTipo.Validando, this.OnClickIncluirIngredienteDobro, this);
        }
        if (this.btnCarregarQR) {
            adicionarEventoMoura(this.btnCarregarQR.Click, this.OnClickCarregarQR, this);
        }
        if (this.txtProduto) {
            adicionarEventoMoura(this.txtProduto.Procurou, this.OnPrecoProduto, this);
        }
        if (this.txtProdutoValorDiferenciado) {
            adicionarEventoMoura(this.txtProdutoValorDiferenciado.Procurou, this.OnPrecoProdutoProdutoValorDiferenciado, this);
        }
        if (this.txtLanche) {
            adicionarEventoMoura(this.txtLanche.Procurou, this.OnPrecoLanche, this);
        }
        if (this.txtCombo) {
            adicionarEventoMoura(this.txtCombo.Procurou, this.OnPrecoCombo, this);
        }
        this.lblPrecoLanche.Text = "0".Format("2");
        this.lblPrecoProdutoValorDiferenciado.Text = "0".Format("2");
        this.lblPrecoCombo.Text = "0".Format("2");
        this.lblPrecoProduto.Text = "0".Format("2");
    };
    C_CupDesc.prototype.OnPrecoLanche = function () {
        debugger;
        var parametrosPrecoLanche = {
            codProduto: this.txtLanche.GetText().CNum(),
        };
        if (this.txtLanche.GetText() != "") {
            var precoLanche = this.ExecutarFuncaoServerSideSynch("GetPreco", parametrosPrecoLanche);
            this.lblPrecoLanche.Text = precoLanche.Format("2");
        }
        else {
            this.lblPrecoLanche.Text = "0".Format("2");
        }
    };
    C_CupDesc.prototype.OnPrecoProdutoProdutoValorDiferenciado = function () {
        var parametrosProdutoValorDiferenciado = {
            codProduto: this.txtProdutoValorDiferenciado.GetText().CNum(),
        };
        if (this.txtProdutoValorDiferenciado.GetText() != "") {
            var precoProdutoValorDiferenciado = this.ExecutarFuncaoServerSideSynch("GetPreco", parametrosProdutoValorDiferenciado);
            this.lblPrecoProdutoValorDiferenciado.Text = precoProdutoValorDiferenciado.Format("2");
            ;
        }
        else {
            this.lblPrecoProdutoValorDiferenciado.Text = "0".Format("2");
        }
    };
    C_CupDesc.prototype.OnPrecoCombo = function () {
        var parametrosPrecoCombo = {
            codCombo: this.txtCombo.GetText().CNum(),
        };
        if (this.txtCombo.GetText() != "") {
            var precoCombo = this.ExecutarFuncaoServerSideSynch("GetPrecoCombo", parametrosPrecoCombo);
            this.lblPrecoCombo.Text = precoCombo.Format("2");
        }
        else {
            this.lblPrecoCombo.Text = "0".Format("2");
        }
    };
    C_CupDesc.prototype.OnPrecoProduto = function () {
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
    C_CupDesc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.PreencherGrade();
        this.tab.AlterarVisibleAba("Aba", false);
        if (!this.GetScope().MudouTipo) {
            this.GetScope().MudouTipo = $.proxy(this.MudouTipo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo_Cupom_Desconto; }, this.GetScope().MudouTipo);
        }
        this.CamposInvisiveis();
    };
    C_CupDesc.prototype.CamposInvisiveis = function () {
        this.tab.AlterarVisibleAba("Aba", false);
        $(this.DivDescontoFinal).css("display", "none");
        $(this.DivGanhaIngrediente).css("display", "none");
        $(this.DivIngredienteValorDiferenciado).css("display", "none");
        $(this.DivGanhaCombo).css("display", "none");
        $(this.DivGanhaLanche).css("display", "none");
        $(this.DivIngredienteDobro).css("display", "none");
    };
    C_CupDesc.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        debugger;
        var retorno = this.ValidarCampos();
        if (retorno == false) {
            return retorno;
        }
        if (this.EntityTela.Tipo_Cupom_Desconto == 2 && this.Produtos.length > 0) {
            this.EntityTela.Produtos = this.Produtos;
        }
        else if (this.EntityTela.Tipo_Cupom_Desconto == 2 && this.Produtos.length == 0) {
            MostrarAlerta("Preencha o campo corretamente: Adicione um Produto.");
            return false;
        }
        if (this.EntityTela.Tipo_Cupom_Desconto == 3 && this.ProdutosValorDiferenciado.length > 0) {
            this.EntityTela.Produtos = this.ProdutosValorDiferenciado;
        }
        else if (this.EntityTela.Tipo_Cupom_Desconto == 3 && this.ProdutosValorDiferenciado.length == 0) {
            MostrarAlerta("Preencha o campo corretamente: Adicione um Produto");
            return false;
        }
        if (this.txtPorcentagem.GetText() == "0,00" && this.EntityTela.Tipo_Cupom_Desconto != 0) {
            this.EntityTela.Porcentagem_Desconto_Final = 0;
        }
        if (this.EntityTela.Tipo_Cupom_Desconto == 4 && this.Lanches.length > 0) {
            this.EntityTela.Produtos = this.Lanches;
        }
        else if (this.EntityTela.Tipo_Cupom_Desconto == 4 && this.Lanches.length == 0) {
            MostrarAlerta("Preencha o campo corretamente: Adicione uma Sugestão.");
            return false;
        }
        if (this.EntityTela.Tipo_Cupom_Desconto == 5 && this.Combos.length > 0) {
            this.EntityTela.Produtos = this.Combos;
        }
        else if (this.EntityTela.Tipo_Cupom_Desconto == 5 && this.Combos.length == 0) {
            MostrarAlerta("Preencha o campo corretamente: Adicione um Combo.");
            return false;
        }
        if (this.EntityTela.Tipo_Cupom_Desconto == 6 && this.IngredientesDobro.length > 0) {
            this.EntityTela.IngredientesDobro = this.IngredientesDobro;
        }
        else if (this.EntityTela.Tipo_Cupom_Desconto == 6 && this.IngredientesDobro.length == 0) {
            MostrarAlerta("Preencha o campo corretamente: Adicione um Ingredientes em dobro.");
            return false;
        }
        this.EntityTela.Data_Inicio_Cupom = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
        this.EntityTela.Data_Final_Cupom = this.txtPeriodo.textBoxCalendarioFim.GetDate();
        this.EntityTela.Data_Cadastro = new Date;
        this.EntityTela.Usuario_Cadastro = ValoresSismoura.UsuarioLogado;
        this.GetScope().Entity.Empresas = [];
        for (var x = 0; x < this.lstEmpresa.GetValues().length; x++) {
            var empresa = {};
            empresa.Empresa = +this.lstEmpresa.GetValues()[x];
            this.GetScope().Entity.Empresas.push(empresa);
        }
        /* var fotoCupomDesconto = this.fotoFundoCupomDesconto.FormatImg();
         if (fotoCupomDesconto == undefined) {
             MostrarAlerta("Preencha o campo corretamente: Imagem de Fundo do Modal do Cupom de Desconto.");
             return false;
         }*/
        this.EntityTela.Foto_Fundo_Cupom = this.fotoFundoCupomDesconto.OnConvertStringToByteArray();
        return true;
    };
    C_CupDesc.prototype.MudouTipo = function (newValue, oldValue) {
        if (this.EntityTela.Tipo_Cupom_Desconto == 1) {
            if (this.EntityTela.Tipo_Cupom_Desconto != this.cboTipo.GetValue()) {
                this.LimparCampos();
            }
            this.tab.AlterarVisibleAba("Aba", true);
            $(this.DivDescontoFinal).css("display", "block");
            $(this.DivGanhaIngrediente).css("display", "none");
            $(this.DivIngredienteValorDiferenciado).css("display", "none");
            $(this.DivGanhaCombo).css("display", "none");
            $(this.DivGanhaLanche).css("display", "none");
            $(this.DivIngredienteDobro).css("display", "none");
        }
        else if (this.EntityTela.Tipo_Cupom_Desconto == 2) {
            if (this.EntityTela.Tipo_Cupom_Desconto != this.cboTipo.GetValue()) {
                this.LimparCampos();
            }
            this.tab.AlterarVisibleAba("Aba", true);
            $(this.DivDescontoFinal).css("display", "none");
            $(this.DivGanhaIngrediente).css("display", "block");
            $(this.DivIngredienteValorDiferenciado).css("display", "none");
            $(this.DivGanhaCombo).css("display", "none");
            $(this.DivGanhaLanche).css("display", "none");
            $(this.DivIngredienteDobro).css("display", "none");
        }
        else if (this.EntityTela.Tipo_Cupom_Desconto == 4) {
            if (this.EntityTela.Tipo_Cupom_Desconto != this.cboTipo.GetValue()) {
                this.LimparCampos();
            }
            this.tab.AlterarVisibleAba("Aba", true);
            $(this.DivDescontoFinal).css("display", "none");
            $(this.DivGanhaIngrediente).css("display", "none");
            $(this.DivIngredienteValorDiferenciado).css("display", "none");
            $(this.DivGanhaCombo).css("display", "none");
            $(this.DivGanhaLanche).css("display", "block");
            $(this.DivIngredienteDobro).css("display", "none");
        }
        else if (this.EntityTela.Tipo_Cupom_Desconto == 5) {
            if (this.EntityTela.Tipo_Cupom_Desconto != this.cboTipo.GetValue()) {
                this.LimparCampos();
            }
            this.tab.AlterarVisibleAba("Aba", true);
            $(this.DivDescontoFinal).css("display", "none");
            $(this.DivGanhaIngrediente).css("display", "none");
            $(this.DivIngredienteValorDiferenciado).css("display", "none");
            $(this.DivGanhaCombo).css("display", "block");
            $(this.DivGanhaLanche).css("display", "none");
            $(this.DivIngredienteDobro).css("display", "none");
        }
        else if (this.EntityTela.Tipo_Cupom_Desconto == 3) {
            if (this.EntityTela.Tipo_Cupom_Desconto != this.cboTipo.GetValue()) {
                this.LimparCampos();
            }
            this.tab.AlterarVisibleAba("Aba", true);
            $(this.DivDescontoFinal).css("display", "none");
            $(this.DivGanhaIngrediente).css("display", "none");
            $(this.DivIngredienteValorDiferenciado).css("display", "block");
            $(this.DivGanhaCombo).css("display", "none");
            $(this.DivGanhaLanche).css("display", "none");
            $(this.DivIngredienteDobro).css("display", "none");
        }
        else if (this.EntityTela.Tipo_Cupom_Desconto == 6) {
            if (this.EntityTela.Tipo_Cupom_Desconto != this.cboTipo.GetValue()) {
                this.LimparCampos();
            }
            this.tab.AlterarVisibleAba("Aba", true);
            $(this.DivDescontoFinal).css("display", "none");
            $(this.DivGanhaIngrediente).css("display", "none");
            $(this.DivIngredienteValorDiferenciado).css("display", "none");
            $(this.DivGanhaCombo).css("display", "none");
            $(this.DivGanhaLanche).css("display", "none");
            $(this.DivIngredienteDobro).css("display", "block");
        }
        this.PreencherGrade();
    };
    C_CupDesc.prototype.OnDepoisGravar = function () {
        _super.prototype.OnDepoisGravar.call(this);
        this.PreencherGrade();
        return true;
    };
    C_CupDesc.prototype.PreencherGrade = function () {
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("GetCupomDesconto", {});
            for (var x = 0; x < retorno.length; x++) {
                retorno[x].Data_Inicio_Promocao = retorno[x].Data_Inicio_Cupom.FormataData();
                retorno[x].Data_Final_Promocao = retorno[x].Data_Final_Cupom.FormataData();
            }
            this.Cupons = retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CupDesc.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.PreencherGrade();
        this.PreencherEmpresas(Entity.Empresas);
        this.LimparCampos();
        this.CamposInvisiveis();
        this.fotoFundoCupomDesconto.Limpar();
    };
    C_CupDesc.prototype.OnDepoisBuscarExistente = function (Entidade) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
        debugger;
        var parametros = {
            codCupom: Entidade.Codigo,
            tipo: 2
        };
        var parametrosEmpresa = {
            codCupom: Entidade.Codigo
        };
        var parametrosProdutosValorDiferenciado = {
            codCupom: Entidade.Codigo,
            tipo: 3
        };
        this.PreencherGrade();
        var retornoProdutos = this.ExecutarFuncaoServerSideSynch("GetProdutosCupomDesconto", parametros);
        this.Produtos = retornoProdutos;
        var retornoProdutosValorDiferenciado = this.ExecutarFuncaoServerSideSynch("GetProdutosCupomDesconto", parametrosProdutosValorDiferenciado);
        this.ProdutosValorDiferenciado = retornoProdutosValorDiferenciado;
        var parametrosLanche = {
            codCupom: Entidade.Codigo,
            tipo: 4
        };
        var retornoLanches = this.ExecutarFuncaoServerSideSynch("GetProdutosCupomDesconto", parametrosLanche);
        this.Lanches = retornoLanches;
        var parametrosCombo = {
            codCupom: Entidade.Codigo,
            tipo: 5
        };
        var retornoCombos = this.ExecutarFuncaoServerSideSynch("GetProdutosCupomDesconto", parametrosCombo);
        this.Combos = retornoCombos;
        var parametrosIngredienteDobro = {
            codCupom: Entidade.Codigo,
            tipo: 6
        };
        var retornoIngredientes = this.ExecutarFuncaoServerSideSynch("GetTipoIngredienteDobro", parametrosIngredienteDobro);
        this.IngredientesDobro = retornoIngredientes;
        var retornoEmpresas = this.ExecutarFuncaoServerSideSynch("GetEmpresas", parametrosEmpresa);
        this.EntityTela.Empresas = retornoEmpresas;
        this.PreencherEmpresas(Entidade.Empresas);
        this.EntityTela.N_Cupom = Entidade.N_Cupom;
        this.OnClickCarregarQR({}, {});
        this.fotoFundoCupomDesconto.Img.src = this.fotoFundoCupomDesconto.OnConvertByteArrayToString(Entidade.Foto_Fundo_Cupom);
        this.RefreshAngular();
    };
    C_CupDesc.prototype.OnGrdSelecionouCupom = function (s, e) {
        this.EntityTela.Codigo = e.data.Codigo;
        this.PreencherEntidade(e.data.Codigo);
        this.RefreshAngular();
    };
    C_CupDesc.prototype.OnClickIncluirIngredienteDobro = function (s, e) {
        try {
            debugger;
            if (this.cboTipoIngredienteDobro.GetText() == "" || this.cboTipoIngredienteDobro.GetText() == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Tipo do Lanche.");
                e.cancelar = true;
                return false;
            }
            for (var x = 0; x < this.IngredientesDobro.length; x++) {
                if (this.cboTipoIngredienteDobro.GetValue() == this.IngredientesDobro[x].Tipo) {
                    e.cancelar = true;
                    MostrarAlerta("Este Tipo já foi inserido");
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
                var count = this.IngredientesDobro.length;
                if (e.item.Codigo == 0) {
                    var retorno = this.ExecutarFuncaoServerSideSynch("GetMaximoTipoIngredienteDobro", parametros);
                    maiorContador = retorno + 1;
                    if (this.IngredientesDobro.length == 0) {
                        e.item.Codigo = maiorContador;
                    }
                    else {
                        e.item.Codigo = (this.IngredientesDobro[count - 1].Codigo + 1);
                    }
                }
                e.item.Tipo_Nome = this.cboTipoIngredienteDobro.GetText();
                e.item.Tipo = this.cboTipoIngredienteDobro.GetValue();
                this.IngredienteDobro = {};
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CupDesc.prototype.OnClickIncluirProduto = function (s, e) {
        try {
            debugger;
            if (this.txtProduto.GetText() == "" || this.txtProduto.GetText() == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Produto.");
                e.cancelar = true;
                return false;
            }
            var parametros = {
                codProdutoNovo: e.item.Produto,
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetTipoProduto", parametros);
            if (retorno == false && this.EntityTela.Tipo_Cupom_Desconto == 2) {
                MostrarAlerta("Não é possível informar uma Sugestão ou Combo");
                e.cancelar = true;
                return false;
            }
            for (var x = 0; x < this.Produtos.length; x++) {
                if (this.txtProduto.GetText() == this.Produtos[x].Produto) {
                    e.cancelar = true;
                    MostrarAlerta("Este produto já foi inserido");
                    return false;
                }
                var parametros = {
                    codProdutoNovo: e.item.Produto,
                    codProduto: this.Produtos[x].Produto
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetTipoProdutoIgual", parametros);
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
                this.Produto = {};
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CupDesc.prototype.OnClickIncluirLanche = function (s, e) {
        try {
            debugger;
            if (this.txtLanche.GetText() == "" || this.txtLanche.GetText() == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Produto.");
                e.cancelar = true;
                return false;
            }
            if (this.txtPrecoLanche.GetText() == undefined || this.txtPrecoLanche.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Valor Lanche.");
                e.cancelar = true;
                return false;
            }
            var parametros = {
                codProdutoNovo: e.item.Produto,
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetTipoProduto", parametros);
            if (retorno && this.EntityTela.Tipo_Cupom_Desconto == 4) {
                MostrarAlerta("Informe uma Sugestão");
                e.cancelar = true;
                return false;
            }
            for (var x = 0; x < this.Lanches.length; x++) {
                if (this.txtLanche.GetText() == this.Lanches[x].Produto) {
                    e.cancelar = true;
                    MostrarAlerta("Este produto já foi inserido");
                    return false;
                }
                var parametros = {
                    codProdutoNovo: e.item.Produto,
                    codProduto: this.Lanches[x].Produto
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetTipoProdutoIgual", parametros);
                if (retorno && this.EntityTela.Tipo_Cupom_Desconto == 4) {
                    MostrarAlerta("Já existe um produto Sugestão");
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
                var count = this.Lanches.length;
                if (e.item.Codigo == 0) {
                    var retorno = this.ExecutarFuncaoServerSideSynch("GetMaximoProduto", parametros);
                    maiorContador = retorno + 1;
                    if (this.Lanches.length == 0) {
                        e.item.Codigo = maiorContador;
                    }
                    else {
                        e.item.Codigo = (this.Lanches[count - 1].Codigo + 1);
                    }
                }
                e.item.Nome_Produto = this.txtLanche.GetResultado();
                e.item.Produto = this.txtLanche.GetText();
                this.Lanches = {};
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CupDesc.prototype.OnClickIncluirCombo = function (s, e) {
        try {
            if (this.txtCombo.GetText() == "" || this.txtCombo.GetText() == undefined) {
                MostrarAlerta("Preencha o campo corretamente: Produto.");
                e.cancelar = true;
                return false;
            }
            if (this.txtPrecoCombo.GetText() == undefined || this.txtPrecoCombo.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Valor Combo.");
                e.cancelar = true;
                return false;
            }
            for (var x = 0; x < this.Combos.length; x++) {
                if (this.txtCombo.GetText() == this.Combos[x].Produto) {
                    e.cancelar = true;
                    MostrarAlerta("Este produto já foi inserido");
                    return false;
                }
                if (this.Combos.length == 1) {
                    e.cancelar = true;
                    MostrarAlerta("Já foi informado um Combo");
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
                var count = this.Combos.length;
                if (e.item.Codigo == 0) {
                    var retorno = this.ExecutarFuncaoServerSideSynch("GetMaximoProduto", parametros);
                    maiorContador = retorno + 1;
                    if (this.Combos.length == 0) {
                        e.item.Codigo = maiorContador;
                    }
                    else {
                        e.item.Codigo = (this.Combos[count - 1].Codigo + 1);
                    }
                }
                e.item.Nome_Produto_Combo = this.txtCombo.GetResultado();
                e.item.Codigo_Combo = this.txtCombo.GetText();
                this.Combo = {};
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CupDesc.prototype.OnClickIncluirProdutoValorDiferenciado = function (s, e) {
        try {
            debugger;
            if (this.txtProdutoValorDiferenciado.GetText() == undefined || this.txtProdutoValorDiferenciado.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Produto com Valor Difernciado.");
                e.cancelar = true;
                return false;
            }
            if (this.txtPrecoValorDiferenciado.GetText() == undefined || this.txtPrecoValorDiferenciado.GetText() == "0,00" || this.txtPrecoValorDiferenciado.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Valor Diferenciado.");
                e.cancelar = true;
                return false;
            }
            var parametros = {
                codProdutoNovo: e.item.Produto,
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetTipoProduto", parametros);
            if (retorno == false && this.EntityTela.Tipo_Cupom_Desconto == 3) {
                MostrarAlerta("Não é possível informar uma Sugestão ou Combo");
                e.cancelar = true;
                return false;
            }
            for (var x = 0; x < this.ProdutosValorDiferenciado.length; x++) {
                if (this.txtPrecoValorDiferenciado.GetText() == this.ProdutosValorDiferenciado[x].Produto) {
                    MostrarAlerta("Este produto já foi inserido no retorno");
                    e.cancelar = true;
                    return false;
                }
                var parametros = {
                    codProdutoNovo: e.item.Produto,
                    codProduto: this.ProdutosValorDiferenciado[x].Produto
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetTipoProdutoIgual", parametros);
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
                var count = this.ProdutosValorDiferenciado.length;
                if (e.item.Codigo == 0) {
                    var retorno = this.ExecutarFuncaoServerSideSynch("GetMaximoProduto", parametros);
                    maiorContador = retorno + 1;
                    if (this.ProdutosValorDiferenciado.length == 0) {
                        e.item.Codigo = maiorContador;
                    }
                    else {
                        e.item.Codigo = (this.ProdutosValorDiferenciado[count - 1].Codigo + 1);
                    }
                }
                e.item.Nome_Produto = this.txtProdutoValorDiferenciado.GetResultado();
                e.item.Produto = this.txtProdutoValorDiferenciado.GetText();
                e.item.Preco = this.txtPrecoValorDiferenciado.GetText();
                this.ProdutoValorDiferenciado = {};
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_CupDesc.prototype.LimparCampos = function () {
        if (this.EntityTela != undefined) {
            this.txtPrecoValorDiferenciado.Limpar();
            this.txtProduto.Limpar();
            this.txtProdutoValorDiferenciado.Limpar();
            this.txtLanche.Limpar();
            this.txtCombo.Limpar();
            this.txtPorcentagem.Limpar();
            this.EntityTela.Porcentagem_Desconto_Final = 0;
            this.cboTipoIngredienteDobro.LimparSelecao();
            this.EntityTela.Produtos = [];
            this.Combos = [];
            this.Produtos = [];
            this.IngredientesDobro = [];
            this.ProdutosValorDiferenciado = [];
            this.Lanches = [];
            this.QR.Limpar();
        }
    };
    C_CupDesc.prototype.PreencherEmpresas = function (empresas) {
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
    C_CupDesc.prototype.OnClickCarregarQR = function (s, e) {
        e.processOnServer = false;
        this.QR.Limpar();
        if (this.EntityTela.N_Cupom == undefined || this.EntityTela.N_Cupom == "" || this.EntityTela.N_Cupom == null) {
            MostrarAlerta("Informe o Número do Cupom");
            return false;
        }
        this.QR.Data = this.EntityTela.N_Cupom;
    };
    C_CupDesc.prototype.ValidarCampos = function () {
        if (this.EntityTela.Tipo_Cupom_Desconto == 1) {
            if (this.txtPorcentagem.GetText() == undefined || this.txtPorcentagem.GetText() == "0,00" || this.txtPorcentagem.GetText() == "") {
                MostrarAlerta("Preencha o campo corretamente: Desconto Final Pedido em Porcentagem.");
                return false;
            }
        }
        if (this.EntityTela.Tipo_Cupom_Desconto == 2) {
            if ((this.txtProduto.GetText() == "" || this.txtProduto.GetText() == undefined) && (this.Produtos.length == 0)) {
                MostrarAlerta("Preencha o campo corretamente: Produto.");
                return false;
            }
        }
        if (this.EntityTela.Tipo_Cupom_Desconto == 4) {
            if ((this.txtLanche.GetText() == "" || this.txtLanche.GetText() == undefined) && (this.Lanches.length == 0)) {
                MostrarAlerta("Preencha o campo corretamente: Produto.");
                return false;
            }
        }
        if (this.EntityTela.Tipo_Cupom_Desconto == 5) {
            if ((this.txtCombo.GetText() == "" || this.txtCombo.GetText() == undefined) && (this.Combos.length == 0)) {
                MostrarAlerta("Preencha o campo corretamente: Produto.");
                return false;
            }
        }
        if (this.EntityTela.Tipo_Cupom_Desconto == 3) {
            if ((this.txtProdutoValorDiferenciado.GetText() == "" || this.txtProdutoValorDiferenciado.GetText() == undefined) && (this.ProdutosValorDiferenciado.length == 0)) {
                MostrarAlerta("Preencha o campo corretamente: Produto com Valor Diferenciado.");
                return false;
            }
            if ((this.txtPrecoValorDiferenciado == undefined || this.txtPrecoValorDiferenciado.GetText() == "0,00" || this.txtPrecoValorDiferenciado.GetText() == "") && (this.ProdutosValorDiferenciado.length == 0)) {
                MostrarAlerta("Preencha o campo corretamente: Valor Diferenciado.");
                return false;
            }
        }
    };
    return C_CupDesc;
}(MouraPageCadastroAngular));
var c_CupDesc = new C_CupDesc();
//# sourceMappingURL=C_CupDesc.js.map