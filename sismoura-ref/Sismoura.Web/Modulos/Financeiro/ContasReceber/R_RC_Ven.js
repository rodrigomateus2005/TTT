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
var R_RC_Ven = /** @class */ (function (_super) {
    __extends(R_RC_Ven, _super);
    function R_RC_Ven() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RC_Ven.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Ven.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Ven.prototype, "infVenda", {
        get: function () {
            return window["infVenda_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Ven.prototype, "lstEmpresa", {
        get: function () {
            return window["lstEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Ven.prototype, "lstPosicaoTitulos", {
        get: function () {
            return window["lstPosicaoTitulos_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Ven.prototype, "lstContaCorrente", {
        get: function () {
            return window["lstContaCorrente_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RC_Ven.prototype, "optTipoVendedor", {
        get: function () {
            return window["optTipoVendedor_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_RC_Ven.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_RC_Ven.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnSelecionouLinha, this);
            adicionarEventoMoura(this.grid.ClickBotaoLinha, this.OnClickBotaDetalhe, this);
            adicionarEventoMoura(this.grid.CellPrepared, this.OnCellPrepared, this);
        }
        if (this.lstEmpresa) {
            adicionarEventoMoura(this.lstEmpresa.SelectionChanged, this.OnEmpresaChanged, this);
        }
    };
    //
    R_RC_Ven.prototype.OnEmpresaChanged = function (s, e) {
        var empresas = this.lstEmpresa.GetValuesNumber();
        empresas.length <= 0 ? this.lstContaCorrente.Lista.RemoverTodosItens() : this.PreencherContasCorrente(empresas);
        this.RefreshAngular();
    };
    R_RC_Ven.prototype.OnSelecionouLinha = function (s, e) {
        try {
            abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeContasAReceber), e.data["Codigo"]);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_RC_Ven.prototype.OnClickBotaDetalhe = function (s, e) {
        if (e.commandName == "InfVenda") {
            this.infVenda.Abrir(CNum(e.data["Venda"]));
        }
    };
    R_RC_Ven.prototype.OnCellPrepared = function (s, e) {
        if (e.data) {
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
    R_RC_Ven.prototype.PreencherContasCorrente = function (empresas) {
        try {
            this.lstContaCorrente.Preencher(empresas, !this.lstContaCorrente.CheckBox.Checked);
        }
        catch (ex) {
            LogarException(ex);
        }
        this.RefreshAngular();
    };
    //
    R_RC_Ven.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Cidade = 0;
        this.Filtro.Vendedor = 0;
        this.Filtro.ZonaVenda = 0;
        this.Filtro.SomenteFiscal = false;
        this.Filtro.ClienteInativo = true;
        this.Filtro.ClienteImpagavel = "Todos";
        this.lstContaCorrente.Lista.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.PreencherContasCorrente(this.lstEmpresa.GetValuesNumber());
        ValoresSismoura.ConfiguracoesRetaguarda.Conta_Vendedor_Cliente == true ? this.optTipoVendedor.SetValue("C") : this.optTipoVendedor.SetValue("V");
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_RC_Ven.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            abrirEspera("");
            parametros = {
                contasCorrentes: this.lstContaCorrente.Lista.GetValues().join(","),
                empresas: this.lstEmpresa.GetValues().join(","),
                codVendedor: CNum(this.Filtro.Vendedor),
                tipoVendedor: this.optTipoVendedor.GetValue(),
                codCidade: CNum(this.Filtro.Cidade),
                codZonaVenda: CNum(this.Filtro.ZonaVenda),
                somenteFiscal: this.Filtro.SomenteFiscal,
                somenteClientesAtivos: this.Filtro.ClienteInativo,
                posicoesTitulos: this.lstPosicaoTitulos.GetValues().join(","),
                impagaveis: CNum(this.Filtro.ClienteImpagavel)
            };
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
    return R_RC_Ven;
}(MouraPageRelacaoAngular));
var r_RC_Ven = new R_RC_Ven();
//# sourceMappingURL=R_RC_Ven.js.map