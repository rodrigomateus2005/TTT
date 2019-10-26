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
var R_MovProRes = /** @class */ (function (_super) {
    __extends(R_MovProRes, _super);
    function R_MovProRes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_MovProRes.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovProRes.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovProRes.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovProRes.prototype, "lstGrupo", {
        get: function () {
            return window['lstGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovProRes.prototype, "lstSubGrupo", {
        get: function () {
            return window['lstSubGrupo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovProRes.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovProRes.prototype, "chkAgruparMarca", {
        get: function () {
            return window['chkAgruparMarca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovProRes.prototype, "chkTamanho", {
        get: function () {
            return window['chkTamanho_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_MovProRes.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (ValoresSismoura.ConfiguracoesRetaguarda.EstabelecimentoEnum == 2 /* LojaRoupa */) {
            this.grid.ColunaVisible("Produto_Tamanho", true);
        }
        else {
            this.grid.ColunaVisible("Produto_Tamanho", false);
        }
        this.LimparCampos();
    };
    R_MovProRes.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.chkAgruparMarca) {
            adicionarEventoMoura(this.chkAgruparMarca.CheckChanged, this.CheckChanged, this);
        }
        this.chkTamanho.Visible = false;
    };
    R_MovProRes.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        var parametros = {};
        var retorno;
        if (ValoresSismoura.ConfiguracoesRetaguarda.Bloquear_Cliente_Empresa && ValoresSismoura.EmpresaPadraoUsuario > 0) {
            parametros = {
                empresaPadrao: false
            };
            retorno = this.ExecutarFuncaoServerSideSynch("VerificaDepositos", parametros);
        }
        else {
            parametros = {
                empresaPadrao: true
            };
            retorno = this.ExecutarFuncaoServerSideSynch("VerificaDepositos", parametros);
        }
        if (retorno > 0) {
            this.cboDeposito.SetSelectedIndex(retorno);
        }
        else if (this.cboDeposito.Combo.GetItemCount() > 0) {
            this.cboDeposito.SetSelectedIndex(0);
        }
        else {
            this.cboDeposito.LimparSelecao();
        }
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Deposito = 0;
        this.Filtro.Produto = 0;
        this.Filtro.Linha = 0;
        this.Filtro.Fornecedor = 0;
        this.Filtro.Marca = 0;
        this.Filtro.Grupo = "";
        this.Filtro.Subgrupo = "";
        this.Filtro.SomenteComCompras = false;
        this.Filtro.ProdutosSemMovimento = false;
        this.Filtro.AgruparMarca = false;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_MovProRes.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            var grupos = void 0;
            var subgrupos = void 0;
            var variosCodBarra = ValoresSismoura.ConfiguracoesRetaguarda.Varios_CodBarra;
            grupos = this.lstGrupo.SelectedValues.join(",");
            subgrupos = this.lstSubGrupo.SelectedValues.join(",");
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                codDeposito: CNum(this.Filtro.Deposito),
                codProduto: CNum(this.Filtro.Produto),
                codLinhas: CNum(this.Filtro.Linha),
                codFornecedor: CNum(this.Filtro.Fornecedor),
                codMarca: CNum(this.Filtro.Marca),
                grupos: grupos,
                subgrupos: subgrupos,
                somenteComCompras: this.Filtro.SomenteComCompras,
                produtosSemMovimento: this.Filtro.ProdutosSemMovimento,
                agruparMarca: this.Filtro.AgruparMarca,
                variosCodBarra: variosCodBarra
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
            if (this.chkAgruparMarca.Checked) {
                this.grid.GroupBy("Descricao_Marca");
            }
            else {
                this.grid.Grid.clearGrouping();
            }
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_MovProRes.prototype.CheckChanged = function () {
        if (this.chkAgruparMarca.Checked) {
            this.chkTamanho.Visible = true;
        }
        else {
            this.chkTamanho.Visible = false;
        }
    };
    return R_MovProRes;
}(MouraPageRelacaoAngular));
var r_MovProRes = new R_MovProRes();
//# sourceMappingURL=R_MovProRes.js.map