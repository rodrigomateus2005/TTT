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
var R_Troca = /** @class */ (function (_super) {
    __extends(R_Troca, _super);
    function R_Troca() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Troca.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Troca.prototype, "txtProduto", {
        get: function () {
            return window['txtProduto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Troca.prototype, "grdResumida", {
        get: function () {
            return window['grdResumida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Troca.prototype, "grdDiscriminada", {
        get: function () {
            return window['grdDiscriminada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Troca.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Troca.prototype, "cboPdv", {
        get: function () {
            return window['cboPdv_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Troca.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Troca.prototype, "txtVenda", {
        get: function () {
            return window['txtVenda_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Troca.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (ValoresSismoura.ConfiguracoesRetaguarda.Produto_Inativo_Pesquisa) {
            this.txtProduto.SomenteAtivos = false;
        }
        else {
            this.txtProduto.SomenteAtivos = true;
        }
    };
    R_Troca.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnMudouEmpresa, this);
        }
        if (this.txtVenda) {
            adicionarEventoMoura(this.txtVenda.Procurou, this.OnProcurouVenda, this);
        }
        if (this.grdDiscriminada) {
            adicionarEventoMoura(this.grdDiscriminada.CellPrepared, this.OnCellPrepared, this);
        }
        if (this.grdResumida) {
            adicionarEventoMoura(this.grdResumida.CellPrepared, this.OnCellPreparedResumida, this);
        }
    };
    R_Troca.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (this.ValidarCamposObrigatorios()) {
            try {
                parametros = {
                    dataInicial: this.Filtro.Periodo_Inicial,
                    dataFinal: this.Filtro.Periodo_Final,
                    codVenda: CNum(this.Filtro.Venda),
                    codCliente: CNum(this.Filtro.Cliente),
                    tipo: this.Filtro.Tipo,
                    codDeposito: CNum(this.cboDeposito.GetValue()),
                    codProduto: CNum(this.Filtro.Produto),
                    referencia: this.Filtro.Referencia,
                    codVendedor: CNum(this.Filtro.Vendedor),
                    codEmpresa: this.cboEmpresa.GetValue(),
                    codPDV: CNum(this.cboPdv.GetValue())
                };
                abrirEspera("");
                this.ExecutarFuncaoServerSideAsynch("PreencherGrids", parametros, function (d) {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    if (retorno) {
                        _this.grdDiscriminada.PreencherGrid(retorno.Discriminada);
                        _this.grdDiscriminada.GroupBy("Codigo");
                        _this.grdResumida.PreencherGrid(retorno.Resumida);
                        _this.Filtro.Itens_Devolvidos = retorno.Itens_Devolvidos;
                        _this.Filtro.Itens_Levados = retorno.Itens_Levados;
                        _this.Filtro.Total = retorno.Total;
                        _this.Filtro.Total_Trocas = retorno.Total_Trocas;
                        _this.AccordionFiltros.SetExpanded(false);
                        _this.RefreshAngular();
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
        }
    };
    R_Troca.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Cliente = 0;
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Produto = 0;
        this.Filtro.Referencia = "";
        this.Filtro.Venda = 0;
        this.Filtro.Vendedor = 0;
        this.grdDiscriminada.PreencherGrid(null);
        this.grdResumida.PreencherGrid(null);
        this.Filtro.Tipo = "0";
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.Filtro.Data_Emissao = "";
        this.Filtro.Itens_Devolvidos = "";
        this.Filtro.Itens_Levados = "";
        this.Filtro.Total = "";
        this.Filtro.Total_Trocas = "";
        this.AlteraPDV();
        this.RefreshAngular();
    };
    R_Troca.prototype.AlteraPDV = function () {
        var parametros;
        try {
            parametros = {
                codEmpresa: this.cboEmpresa.GetValue()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetDadosPDV", parametros);
            if (retorno) {
                this.cboPdv.ClearItems();
                this.cboPdv.AddItem("--Todos--", "0", "");
                for (var x = 0; x < retorno.length; x++) {
                    this.cboPdv.AddItem(retorno[x].Descricao, retorno[x].Codigo, "");
                }
                this.cboPdv.SetSelectedIndex(0);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
        this.AlteraComboDeposito();
    };
    R_Troca.prototype.AlteraComboDeposito = function () {
        var parametros;
        try {
            parametros = {
                codEmpresa: this.cboEmpresa.GetValue()
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetDadosDeposito", parametros);
            if (retorno) {
                this.cboDeposito.ClearItems();
                for (var x = 0; x < retorno.length; x++) {
                    this.cboDeposito.AddItem(retorno[x].Descricao, retorno[x].Codigo, "");
                }
                this.cboDeposito.SetSelectedIndex(0);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Troca.prototype.OnMudouEmpresa = function (s, e) {
        this.AlteraPDV();
    };
    R_Troca.prototype.OnProcurouVenda = function (s, e) {
        if (CNum(this.txtVenda.GetText())) {
            this.Filtro.Data_Emissao = this.GetDataVenda(CNum(this.txtVenda.GetText()));
        }
    };
    R_Troca.prototype.GetDataVenda = function (codVenda) {
        var parametros;
        try {
            parametros = {
                codVenda: codVenda
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetDataVenda", parametros);
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_Troca.prototype.OnCellPrepared = function (s, e) {
        if (e.rowType == "data") {
            if (e.data["Tipo"] == "E") {
                e.cellElement.css("color", "red");
            }
        }
    };
    R_Troca.prototype.OnCellPreparedResumida = function (s, e) {
        if (e.rowType == "data") {
            if (e.data["Pintar"] == "S") {
                e.cellElement.css("color", "red");
            }
        }
    };
    return R_Troca;
}(MouraPageRelacaoAngular));
var r_Troca = new R_Troca();
//# sourceMappingURL=R_Troca.js.map