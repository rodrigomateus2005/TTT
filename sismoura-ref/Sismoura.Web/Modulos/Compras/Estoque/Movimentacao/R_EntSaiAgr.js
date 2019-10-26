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
var R_EntSaiAgr = /** @class */ (function (_super) {
    __extends(R_EntSaiAgr, _super);
    function R_EntSaiAgr() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_EntSaiAgr.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiAgr.prototype, "gridAgrupada", {
        get: function () {
            return window['gridAgrupada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiAgr.prototype, "cboDepositoAgrupada", {
        get: function () {
            return window['cboDepositoAgrupada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiAgr.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiAgr.prototype, "cboMovimentoAgrupada", {
        get: function () {
            return window['cboMovimentoAgrupada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiAgr.prototype, "cboMotivoAgrupada", {
        get: function () {
            return window['cboMotivoAgrupada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntSaiAgr.prototype, "txtMarcaAgrupada", {
        get: function () {
            return window['txtMarcaAgrupada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_EntSaiAgr.prototype.OnPageLoad = function () {
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
        this.PreencherComboDeposito(empresaString + "");
        if (ValoresSismoura.ConfiguracoesRetaguarda.Estabelecimento == 2 || ValoresSismoura.ConfiguracoesRetaguarda.Mostrar_Marca) {
            this.txtMarcaAgrupada.Visible = true;
        }
        else {
            this.txtMarcaAgrupada.Visible = false;
        }
        if (!this.GetScope().SelectedIndexChanged) {
            var that = this;
            this.GetScope().SelectedIndexChanged = $.proxy(this.SelectedIndexChanged, this);
            this.GetScope().$watch(function () { return that.Filtro.Movimento; }, this.GetScope().SelectedIndexChanged);
        }
        this.LimparCampos();
    };
    R_EntSaiAgr.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.gridAgrupada) {
            adicionarEventoMoura(this.gridAgrupada.CellPrepared, this.CellPrepared, this);
        }
    };
    R_EntSaiAgr.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var lnDeposito;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            if (this.cboDepositoAgrupada.GetValue() != "-1") {
                lnDeposito = this.cboDepositoAgrupada.GetValue();
            }
            else if (this.cboDepositoAgrupada.GetItemCount() > 0) {
                for (var x = 0; x < this.cboDepositoAgrupada.GetItemCount(); x++) {
                    this.cboDepositoAgrupada.SetSelectedIndex(x);
                    lnDeposito += this.cboDepositoAgrupada.GetValue() + ",";
                }
                lnDeposito = lnDeposito.substring(0, lnDeposito.length - 1);
                this.cboDepositoAgrupada.SetValue("-1");
            }
            var parametros;
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                movimento: this.Filtro.Movimento + "",
                motivo: CNum(this.Filtro.Motivo),
                deposito: this.Filtro.Deposito + "",
                responsavel: CNum(this.Filtro.Responsavel),
                grupo: CNum(this.Filtro.Grupo),
                subgrupo: CNum(this.Filtro.Subgrupo)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.gridAgrupada.PreencherGrid(retorno);
            this.gridAgrupada.GroupBy("Grupo");
            this.gridAgrupada.OrderBy("Grupo", "asc");
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_EntSaiAgr.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Movimento = -1;
        this.Filtro.Motivo = -1;
        this.Filtro.Deposito = -1;
        this.Filtro.Marca = "";
        this.Filtro.Grupo = "";
        this.Filtro.Subgrupo = "";
        this.Filtro.Responsavel = "";
        this.gridAgrupada.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_EntSaiAgr.prototype.SelectedIndexChanged = function () {
        if (this.cboMovimentoAgrupada && this.cboMovimentoAgrupada.Combo) {
            var parametros;
            parametros = {
                movimento: this.cboMovimentoAgrupada.GetValue() + ""
            };
            if (this.cboMovimentoAgrupada.GetValue() == "E" || this.cboMovimentoAgrupada.GetValue() == "S") {
                var itens;
                itens = this.ExecutarFuncaoServerSideSynch("PreencherComboMovimento", parametros);
                this.cboMotivoAgrupada.ClearItems();
                this.cboMotivoAgrupada.AddItem("--Todos--", "-1", "");
                for (var x = 0; x < itens.length; x++) {
                    this.cboMotivoAgrupada.Combo.AddItem(itens[x].Descricao, itens[x].Codigo, "");
                }
                if (this.cboMotivoAgrupada.Combo.GetItemCount() == 1) {
                    this.cboMotivoAgrupada.Combo.SetValue("-1");
                }
            }
            else {
                if (this.cboMovimentoAgrupada.GetValue() == "C" || CNum(this.cboMovimentoAgrupada.GetValue()) == -1) {
                    this.cboMotivoAgrupada.ClearItems();
                    this.cboMotivoAgrupada.AddItem("--Todos--", "-1", "");
                    this.cboMotivoAgrupada.SetValue("-1");
                }
            }
        }
    };
    R_EntSaiAgr.prototype.CellPrepared = function (s, e) {
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
    R_EntSaiAgr.prototype.PreencherComboDeposito = function (empresaString) {
        var parametros;
        parametros = {
            empresaString: empresaString
        };
        var itens;
        itens = this.ExecutarFuncaoServerSideSynch("PreencherComboDeposito", parametros);
        //
        if (this.cboDepositoAgrupada && this.cboDepositoAgrupada.Combo) {
            for (var x = 0; x < itens.length; x++) {
                this.cboDepositoAgrupada.Combo.AddItem(itens[x].Descricao, itens[x].Codigo, "");
            }
            this.cboDepositoAgrupada.SetSelectedIndex(0);
        }
    };
    return R_EntSaiAgr;
}(MouraPageRelacaoAngular));
var r_EntSaiAgr = new R_EntSaiAgr();
//# sourceMappingURL=R_EntSaiAgr.js.map