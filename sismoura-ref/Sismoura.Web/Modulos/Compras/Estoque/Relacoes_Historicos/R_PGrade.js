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
var R_PGrade = /** @class */ (function (_super) {
    __extends(R_PGrade, _super);
    function R_PGrade() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_PGrade.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PGrade.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PGrade.prototype, "gridColuna", {
        get: function () {
            return window['gridColuna_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PGrade.prototype, "txtModelo", {
        get: function () {
            return window['txtModelo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PGrade.prototype, "accRelacao", {
        get: function () {
            return window['accRelacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PGrade.prototype, "txtReferencia", {
        get: function () {
            return window['txtReferencia_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PGrade.prototype, "chkDeposito", {
        get: function () {
            return window['chkDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_PGrade.prototype, "cboAgrupar", {
        get: function () {
            return window['cboAgrupar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_PGrade.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnGridCellPrepared, this);
        }
    };
    R_PGrade.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!ValoresSismoura.ConfiguracoesRetaguarda.Usar_Modelo) {
            this.txtModelo.Visible = false;
        }
        this.LimparCampos();
    };
    R_PGrade.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Linha = 0;
        this.Filtro.Tamanho = 0;
        this.Filtro.Agrupar = 0;
        this.chkDeposito.CheckBoxList.prop("checked", false);
        this.LimparColunas();
        this.grid.PreencherGrid(null);
        this.gridColuna.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_PGrade.prototype.ConfigurarGrade = function (grid) {
        grid.FixarColuna("NomeProduto", true);
        var opt = this.grid.Grid.option("paging");
        opt.pageSize = 50;
        grid.Grid.option("paging", opt);
    };
    R_PGrade.prototype.LimparColunas = function () {
        this.LimparColunasGridColuna();
        this.LimparColunasGridLinha();
    };
    R_PGrade.prototype.LimparColunasGridLinha = function () {
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("LimparColunasGridLinha", {});
            this.grid.Colunas = retorno.ColunasGrade;
            this.grid.iniciarGrid();
            this.ConfigurarGrade(this.grid);
            this.grid.Grid.clearGrouping();
            this.grid.Refresh();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_PGrade.prototype.LimparColunasGridColuna = function () {
        try {
            var retorno = this.ExecutarFuncaoServerSideSynch("LimparColunasGridColuna", {});
            //this.gridColuna.Colunas = <any>[];
            this.gridColuna.Colunas = retorno.ColunasGrade;
            this.gridColuna.Grid.clearGrouping();
            this.gridColuna.iniciarGrid();
            this.ConfigurarGrade(this.gridColuna);
            this.gridColuna.TotalizacoesColunas = retorno.Totalizacoes;
            this.gridColuna.Refresh();
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_PGrade.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (this.accRelacao.GetActiveTabIndex() == 0) {
            this.PreencherGridLinha();
        }
        else if (this.accRelacao.GetActiveTabIndex() == 1) {
            this.PreencherGridColunas();
        }
    };
    R_PGrade.prototype.PreencherGridLinha = function () {
        var _this = this;
        var parametros;
        if (this.chkDeposito.GetValues().length <= 0) {
            this.chkDeposito.btnMarcar.DoClick();
        }
        try {
            parametros = {
                fornecedor: CNum(this.Filtro.Fornecedor),
                grupo: CNum(this.Filtro.Grupo),
                subgrupo: CNum(this.Filtro.Subgrupo),
                agrupar: CNum(this.Filtro.Agrupar),
                depositos: this.chkDeposito.GetValues(),
                cor: CNum(this.Filtro.Cor),
                linha: CNum(this.Filtro.Linha),
                tamanho: this.Filtro.Tamanho + "",
                modelo: CNum(this.Filtro.Modelo),
                localizacao: CNum(this.Filtro.Localizacao),
                referencia: this.txtReferencia.GetText() + "",
                marca: CNum(this.Filtro.Marca)
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGridLinhas", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (retorno) {
                    _this.grid.Colunas = retorno.ColunasGrade;
                    _this.grid.TotalizacoesColunas = retorno.Totalizacoes;
                    _this.grid.iniciarGrid();
                    _this.ConfigurarGrade(_this.grid);
                    _this.grid.PreencherGrid(retorno.Dados);
                    _this.grid.GroupBy("Tipo");
                    _this.AccordionFiltros.SetExpanded(false);
                }
                else {
                    MostrarAlerta("Nenhum produto encontrado!");
                    _this.grid.PreencherGrid(null);
                }
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    R_PGrade.prototype.PreencherGridColunas = function () {
        var _this = this;
        var parametros;
        if (this.chkDeposito.GetValues().length <= 0) {
            this.chkDeposito.btnMarcar.DoClick();
        }
        try {
            parametros = {
                agrupar: CNum(this.Filtro.Agrupar),
                fornecedor: CNum(this.Filtro.Fornecedor),
                grupo: CNum(this.Filtro.Grupo),
                subgrupo: CNum(this.Filtro.Subgrupo),
                depositos: this.chkDeposito.GetValues(),
                cor: CNum(this.Filtro.Cor),
                linha: CNum(this.Filtro.Linha),
                tamanho: this.Filtro.Tamanho + "",
                modelo: CNum(this.Filtro.Modelo),
                localizacao: CNum(this.Filtro.Localizacao),
                referencia: this.txtReferencia.GetText() + "",
                marca: CNum(this.Filtro.Marca)
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGridColunas", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                if (retorno) {
                    _this.gridColuna.Colunas = retorno.ColunasGrade;
                    _this.gridColuna.TotalizacoesColunas = retorno.Totalizacoes;
                    _this.gridColuna.iniciarGrid();
                    _this.ConfigurarGrade(_this.gridColuna);
                    _this.gridColuna.PreencherGrid(retorno.Dados);
                    _this.gridColuna.GroupBy("Tipo");
                    _this.AccordionFiltros.SetExpanded(false);
                }
                else {
                    MostrarAlerta("Nenhum produto encontrado!");
                    _this.grid.PreencherGrid(null);
                }
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    R_PGrade.prototype.OnGridCellPrepared = function (s, e) {
        if (e.rowType == "group") {
            if (e.column["dataField"] == "Tipo") {
                e.cellElement.css("color", "black");
                e.cellElement.css("font-weight", "bold");
            }
        }
    };
    return R_PGrade;
}(MouraPageRelacaoAngular));
var r_PGrade = new R_PGrade();
//# sourceMappingURL=R_PGrade.js.map