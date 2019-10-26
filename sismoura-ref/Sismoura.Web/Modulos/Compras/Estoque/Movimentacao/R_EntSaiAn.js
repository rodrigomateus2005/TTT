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
var R_EntSaiAn = /** @class */ (function (_super) {
    __extends(R_EntSaiAn, _super);
    function R_EntSaiAn() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_EntSaiAn.prototype, "AccordionFiltros", {
        get: function () {
            return window["accCadastro_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiAn.prototype, "gridAnalitica", {
        get: function () {
            return window['gridAnalitica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiAn.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiAn.prototype, "lstOrigemAn", {
        get: function () {
            return window['lstOrigemAn_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiAn.prototype, "lstDestinoAn", {
        get: function () {
            return window['lstDestinoAn_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiAn.prototype, "txtMarca", {
        get: function () {
            return window['txtMarca_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiAn.prototype, "lblTotalAnalitica", {
        get: function () {
            return window['lblTotalAnalitica_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiAn.prototype, "cboMovimento", {
        get: function () {
            return window['cboMovimento_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiAn.prototype, "cboMotivo", {
        get: function () {
            return window['cboMotivo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiAn.prototype, "cboDeposito", {
        get: function () {
            return window['cboDeposito_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_EntSaiAn.prototype.OnPageLoad = function () {
        var _this = this;
        _super.prototype.OnPageLoad.call(this);
        var empresas;
        var parametros = {};
        var empresaString = "";
        empresas = this.ExecutarFuncaoServerSideSynch("GetEmpresasUsuario", parametros);
        if (ValoresSismoura.ConfiguracoesRetaguarda.Bloquear_Cliente_Empresa) {
            if ((empresas != null) && empresas.length > 0) {
                empresaString = empresas.join(",");
            }
        }
        setTimeout(function () {
            _this.PreencherComboDeposito(empresaString + "");
        }, 500);
        if (this.lstDestinoAn.CheckBoxList.length == 1) {
            this.lstDestinoAn.Visible = false;
        }
        if (this.lstOrigemAn.CheckBoxList.length == 1) {
            this.lstOrigemAn.Visible = false;
        }
        if (ValoresSismoura.ConfiguracoesRetaguarda.Estabelecimento == 2 || ValoresSismoura.ConfiguracoesRetaguarda.Mostrar_Marca) {
            this.txtMarca.Visible = true;
        }
        else {
            this.txtMarca.Visible = false;
        }
        if (!this.GetScope().SelectedIndexChanged) {
            var that = this;
            this.GetScope().SelectedIndexChanged = $.proxy(this.SelectedIndexChanged, this);
            this.GetScope().$watch(function () { return that.Filtro.Movimento; }, this.GetScope().SelectedIndexChanged);
        }
        this.LimparCampos();
    };
    R_EntSaiAn.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.gridAnalitica) {
            adicionarEventoMoura(this.gridAnalitica.CellPrepared, this.CellPrepared, this);
        }
    };
    R_EntSaiAn.prototype.PreencherComboDeposito = function (empresaString) {
        var parametros;
        parametros = {
            empresaString: empresaString
        };
        var itens;
        itens = this.ExecutarFuncaoServerSideSynch("PreencherComboDeposito", parametros);
        //
        if (this.cboDeposito && this.cboDeposito.Combo) {
            for (var x = 0; x < itens.length; x++) {
                this.cboDeposito.Combo.AddItem(itens[x].Descricao, itens[x].Codigo, "");
            }
            this.cboDeposito.SetSelectedIndex(0);
        }
    };
    R_EntSaiAn.prototype.SelectedIndexChanged = function () {
        if (this.cboMovimento && this.cboMovimento.Combo) {
            var parametros;
            parametros = {
                movimento: this.cboMovimento.GetValue() + ""
            };
            if (this.cboMovimento.GetValue() == "E" || this.cboMovimento.GetValue() == "S") {
                var itens;
                itens = this.ExecutarFuncaoServerSideSynch("PreencherComboMovimento", parametros);
                this.cboMotivo.ClearItems();
                this.cboMotivo.AddItem("--Todos--", "0", "");
                for (var x = 0; x < itens.length; x++) {
                    this.cboMotivo.Combo.AddItem(itens[x].Descricao, itens[x].Codigo, "");
                }
                if (this.cboMotivo.Combo.GetItemCount() == 1) {
                    this.cboMotivo.Combo.SetSelectedIndex(0);
                }
            }
            else {
                if (this.cboMovimento.GetValue() == "C" || CNum(this.cboMovimento.GetValue()) == 0) {
                    this.cboMotivo.ClearItems();
                    this.cboMotivo.AddItem("--Todos--", "0", "");
                    this.cboMotivo.SetSelectedIndex(0);
                }
                ;
            }
        }
    };
    R_EntSaiAn.prototype.CellPrepared = function (s, e) {
        if (e.columnIndex >= 0) {
            if (e.column["dataField"] == "TipoT") {
                var tipo = e.value;
                if (tipo != null || tipo != "") {
                    if (tipo == "E") {
                        e.cellElement.css("color", "blue");
                    }
                    else if (tipo == "S") {
                        e.cellElement.css("color", "red");
                    }
                    else if (tipo == "C") {
                        e.cellElement.css("color", "black");
                    }
                }
            }
        }
    };
    R_EntSaiAn.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Movimento = 0;
        this.Filtro.Motivo = 0;
        this.Filtro.Deposito = 0;
        this.Filtro.Produto = "";
        this.Filtro.Marca = "";
        this.Filtro.Grupo = "";
        this.Filtro.Subgrupo = "";
        this.Filtro.Fornecedor = "";
        this.Filtro.Responsavel = "";
        this.lstDestinoAn.LimparSelecao();
        this.lstOrigemAn.LimparSelecao();
        this.gridAnalitica.PreencherGrid(null);
        this.lblTotalAnalitica.Text = "";
        this.RefreshAngular();
    };
    R_EntSaiAn.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var listaOrigemAnalitica;
        var empresasOrigemAnalitica;
        var listaDestinosAnalitica;
        var empresasDestinoAnalitica;
        var empresaVisivel;
        var existeDeposito;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            listaOrigemAnalitica = this.lstOrigemAn.GetAllValues();
            if (listaOrigemAnalitica != null) {
                empresasOrigemAnalitica = listaOrigemAnalitica.join(",");
            }
            listaDestinosAnalitica = this.lstDestinoAn.GetAllValues();
            if (listaDestinosAnalitica != null) {
                empresasDestinoAnalitica = listaDestinosAnalitica.join(",");
            }
            if (this.lstOrigemAn.Visible) {
                empresaVisivel = true;
            }
            else {
                empresaVisivel = false;
            }
            if (this.cboDeposito.GetItemCount() > 1) {
                existeDeposito = true;
            }
            else {
                existeDeposito = false;
            }
            var parametros;
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                movimento: this.Filtro.Movimento + "",
                motivo: this.Filtro.Motivo + "",
                deposito: CNum(this.Filtro.Deposito),
                produto: CNum(this.Filtro.Produto),
                marca: CNum(this.Filtro.Marca),
                Fornecedor: CNum(this.Filtro.Fornecedor),
                grupo: CNum(this.Filtro.Grupo),
                subgrupo: CNum(this.Filtro.Subgrupo),
                responsavel: CNum(this.Filtro.Responsavel),
                empresaOrigem: empresasOrigemAnalitica + "",
                empresaDestino: empresasDestinoAnalitica + "",
                empresaVisivel: empresaVisivel,
                existeDeposito: existeDeposito
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.gridAnalitica.PreencherGrid(retorno.lista);
            this.lblTotalAnalitica.Text = retorno.Movimentacao;
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_EntSaiAn;
}(MouraPageRelacaoAngular));
var r_EntSaiAn = new R_EntSaiAn();
//# sourceMappingURL=R_EntSaiAn.js.map