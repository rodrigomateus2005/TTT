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
var C_FodPro = /** @class */ (function (_super) {
    __extends(C_FodPro, _super);
    function C_FodPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_FodPro.prototype, "Produtos", {
        get: function () {
            if (!this.GetScope()['Produtos']) {
                this.GetScope()['Produtos'] = [];
            }
            return this.GetScope()['Produtos'];
        },
        set: function (value) {
            this.GetScope()['Produtos'] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FodPro.prototype, "cboPosicao", {
        get: function () {
            return window['cboPosicao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FodPro.prototype, "cboPosicaoChapeiroFritadeira", {
        get: function () {
            return window['cboPosicaoChapeiroFritadeira_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FodPro.prototype, "txtTempoSugestao", {
        get: function () {
            return window['txtTempoSugestao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FodPro.prototype, "tab", {
        get: function () {
            return window['tab_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FodPro.prototype, "fotoProduto", {
        get: function () {
            return window['fotoProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FodPro.prototype, "fotoLateral", {
        get: function () {
            return window['fotoLateral_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FodPro.prototype, "fotoLateralFlat", {
        get: function () {
            return window['fotoLateralFlat_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FodPro.prototype, "fotoSuperior", {
        get: function () {
            return window['fotoSuperior_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FodPro.prototype, "fotoInferior", {
        get: function () {
            return window['fotoInferior_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_FodPro.prototype, "grdProdutos", {
        get: function () {
            return window['grdProdutos_Object'];
        },
        enumerable: true,
        configurable: true
    });
    C_FodPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grdProdutos) {
            adicionarEventoMoura(this.grdProdutos.Grid.SelecionouLinha, this.Selecionou, this);
        }
    };
    C_FodPro.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.OnDepoisLimpar(this.EntityTela);
        if (!this.GetScope().MudouTipoPreparo) {
            this.GetScope().MudouTipoPreparo = $.proxy(this.MudouTipoPreparo, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo_Preparo; }, this.GetScope().MudouTipoPreparo);
        }
        if (!this.GetScope().MudouTipoProduto) {
            this.GetScope().MudouTipoProduto = $.proxy(this.MudouTipoProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Tipo_Produto; }, this.GetScope().MudouTipoProduto);
        }
        if (!this.GetScope().MudouSugestao) {
            this.GetScope().MudouSugestao = $.proxy(this.MudouSugestao, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Issugestao; }, this.GetScope().MudouSugestao);
        }
        if (!this.GetScope().MudouProduto) {
            this.GetScope().MudouProduto = $.proxy(this.MudouProduto, this);
            this.GetScope().$watch(function (scope) { return scope.Entity.Produto; }, this.GetScope().MudouProduto);
        }
    };
    C_FodPro.prototype.Selecionou = function (s, e) {
        this.PreencherEntidade(e.rowKey + "");
    };
    C_FodPro.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        var foto;
        this.EntityTela.Foto = this.fotoProduto.OnConvertStringToByteArray();
        this.EntityTela.Foto_Lateral = this.fotoLateral.OnConvertStringToByteArray();
        this.EntityTela.Foto_Lateral_Flat = this.fotoLateralFlat.OnConvertStringToByteArray();
        this.EntityTela.Foto_Superior = this.fotoSuperior.OnConvertStringToByteArray();
        this.EntityTela.Foto_Inferior = this.fotoInferior.OnConvertStringToByteArray();
        this.RefreshAngular();
        return true;
    };
    C_FodPro.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.fotoProduto.Limpar();
        this.fotoLateral.Limpar();
        this.fotoLateralFlat.Limpar();
        this.fotoSuperior.Limpar();
        this.fotoInferior.Limpar();
        this.PreencherGrade();
    };
    C_FodPro.prototype.OnDepoisBuscarExistente = function (Entity) {
        _super.prototype.OnDepoisBuscarExistente.call(this, Entity);
        this.fotoProduto.Img.src = this.fotoProduto.OnConvertByteArrayToString(Entity.Foto);
        this.fotoLateral.Img.src = this.fotoLateral.OnConvertByteArrayToString(Entity.Foto_Lateral);
        this.fotoLateralFlat.Img.src = this.fotoLateralFlat.OnConvertByteArrayToString(Entity.Foto_Lateral_Flat);
        this.fotoSuperior.Img.src = this.fotoSuperior.OnConvertByteArrayToString(Entity.Foto_Superior);
        this.fotoInferior.Img.src = this.fotoInferior.OnConvertByteArrayToString(Entity.Foto_Inferior);
    };
    C_FodPro.prototype.MudouTipoPreparo = function () {
        if (this.cboPosicao && this.cboPosicaoChapeiroFritadeira) {
            this.cboPosicao.Visible = !(CNum(this.EntityTela.Tipo_Preparo) == 0);
            this.cboPosicaoChapeiroFritadeira.Visible = !(CNum(this.EntityTela.Tipo_Preparo) == 0);
        }
    };
    C_FodPro.prototype.MudouTipoProduto = function () {
        var tipo = CNum(this.EntityTela.Tipo_Produto);
        if (this.tab) {
            this.tab.Visible = !(tipo == 0);
        }
        this.AlterarVisibleAbas(tipo == 1);
    };
    C_FodPro.prototype.AlterarVisibleAbas = function (visible) {
        if (this.tab) {
            this.tab.AlterarVisibleAba("AbaFotoLateral", !visible);
            this.tab.AlterarVisibleAba("AbaFotoLateralFlat", !visible);
            this.tab.AlterarVisibleAba("AbaFotoSuperior", visible);
            this.tab.AlterarVisibleAba("AbaFotoInferior", visible);
        }
    };
    C_FodPro.prototype.MudouSugestao = function () {
        if (this.txtTempoSugestao) {
            this.txtTempoSugestao.Visible = this.EntityTela.Issugestao;
        }
    };
    C_FodPro.prototype.MudouProduto = function () {
        var prod;
        var parametros = {
            codProduto: CNum(this.EntityTela.Produto)
        };
        prod = this.ExecutarFuncaoServerSideSynch("GetByCodProduto", parametros);
        if (prod) {
            this.SetEntity(prod);
        }
        this.RefreshAngular();
    };
    C_FodPro.prototype.PreencherGrade = function () {
        this.Produtos = this.ExecutarFuncaoServerSideSynch("GetCadastrados", {});
        this.RefreshAngular();
    };
    return C_FodPro;
}(MouraPageCadastroAngular));
var c_FodPro = new C_FodPro();
//# sourceMappingURL=C_FodPro.js.map