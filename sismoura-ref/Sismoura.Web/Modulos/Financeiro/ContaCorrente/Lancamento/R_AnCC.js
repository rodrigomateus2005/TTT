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
var R_AnCC = /** @class */ (function (_super) {
    __extends(R_AnCC, _super);
    function R_AnCC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_AnCC.prototype, "AccordionFiltros", {
        //Mapeando o Accordion
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AnCC.prototype, "grid", {
        //Mapeando os componentes
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AnCC.prototype, "lstContaCorrente", {
        get: function () {
            return window['lstContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AnCC.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AnCC.prototype, "lstContaContabil", {
        get: function () {
            return window['lstContaContabil_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AnCC.prototype, "chkApenasComMovimentacao", {
        get: function () {
            return window['chkApenasComMovimentacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AnCC.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_AnCC.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_AnCC.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.OnCellPrepared, this);
        }
    };
    /*Func que e chamada quando clicar no botao gerar da tela*/
    R_AnCC.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        try {
            abrirEspera();
            var parametros = {};
            if (this.ValidarCamposObrigatorios()) {
                parametros = {
                    dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                    dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                    contasCorrentes: this.lstContaCorrente.Lista.GetValues().join(","),
                    empresas: this.lstEmpresa.GetValuesRelacao().join(","),
                    contasContabeis: this.lstContaContabil.GetValues().join(","),
                    apenasComMovimentacao: this.chkApenasComMovimentacao.Checked.valueOf()
                };
            }
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = "";
                    retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno.grid);
                    _this.AccordionFiltros.SetExpanded(false);
                    _this.Filtro.Total_Credito = retorno.TotalCredito;
                    _this.Filtro.Total_Debito = retorno.TotalDebito;
                    _this.Filtro.Resultado = retorno.Resultado;
                    _this.RefreshAngular();
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
                }
            }, function (error) {
                fecharEspera();
                LogarException(error);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    /*Func que e chamada quando clica no botao limpar da tela*/
    R_AnCC.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.lstContaCorrente.Lista.LimparSelecao();
        this.lstContaContabil.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.lstContaCorrente.CheckBox.Checked = false;
        this.grid.PreencherGrid(null);
        this.Filtro.Total_Debito = "0,00";
        this.Filtro.Total_Credito = "0,00";
        this.Filtro.Resultado = "0,00";
        this.RefreshAngular();
    };
    //Evento para alterar a fonte para negrito onde tiver o tipo de conta 'S'
    R_AnCC.prototype.OnCellPrepared = function (s, e) {
        if (e.rowType == "data") {
            if (e.data["Tipo_Conta"] == "S") {
                e.cellElement.css("font-weight", "bold");
            }
        }
    };
    return R_AnCC;
}(MouraPageRelacaoAngular));
var r_AnCC = new R_AnCC();
//# sourceMappingURL=R_AnCC.js.map