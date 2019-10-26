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
var R_RC_Exc = /** @class */ (function (_super) {
    __extends(R_RC_Exc, _super);
    function R_RC_Exc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RC_Exc.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Exc.prototype, "lstContaCorrente", {
        get: function () {
            return window["lstContaCorrente_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Exc.prototype, "lstEmpresa", {
        get: function () {
            return window["lstEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Exc.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Exc.prototype, "infVenda", {
        get: function () {
            return window["infVenda_Object"];
        },
        enumerable: true,
        configurable: true
    });
    R_RC_Exc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_RC_Exc.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.OnClickBotaDetalhe, this);
            adicionarEventoMoura(this.grid.CellPrepared, this.OnCellPrepared, this);
        }
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.OnEmpresaChanged, this);
        }
    };
    R_RC_Exc.prototype.OnClickBotaDetalhe = function (s, e) {
        if (e.commandName == "InfVenda") {
            this.infVenda.Abrir(CNum(e.data["Venda"]));
        }
    };
    R_RC_Exc.prototype.OnCellPrepared = function (s, e) {
        if (e.rowType == "data") {
            var venda = 0;
            var coluna = {};
            coluna = e.column;
            venda = CNum(e.data["Venda"]);
            if (venda <= 0) {
                if (coluna.dataField == "InfVenda") {
                    e.cellElement.find("input").attr("disabled", "true");
                }
            }
        }
    };
    R_RC_Exc.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Cliente = 0;
        this.Filtro.Motivo = "TODOS";
        this.Filtro.Cliente_Inativo = true;
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.lstContaCorrente.Lista.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.PreencherContasCorrente(this.lstEmpresa.GetValuesNumber());
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_RC_Exc.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            parametros = {
                dataInicio: this.Filtro.Data_Inicial,
                dataFim: this.Filtro.Data_Final,
                codCliente: CNum(this.Filtro.Cliente),
                contasCorrente: this.lstContaCorrente.Lista.GetValues().join(","),
                motivo: this.Filtro.Motivo,
                empresas: this.lstEmpresa.GetValues().join(","),
                clienteInativo: this.Filtro.Cliente_Inativo
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.AccordionFiltros.SetExpanded(false);
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
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
    R_RC_Exc.prototype.OnEmpresaChanged = function (s, e) {
        var empresas = this.lstEmpresa.GetValuesNumber();
        if (empresas.length <= 0) {
            this.lstContaCorrente.Lista.RemoverTodosItens();
        }
        else {
            this.PreencherContasCorrente(empresas);
        }
    };
    R_RC_Exc.prototype.PreencherContasCorrente = function (empresas) {
        try {
            this.lstContaCorrente.Preencher(empresas, !this.lstContaCorrente.CheckBox.Checked);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_RC_Exc;
}(MouraPageRelacaoAngular));
var r_RC_Exc = new R_RC_Exc();
//# sourceMappingURL=R_RC_Exc.js.map