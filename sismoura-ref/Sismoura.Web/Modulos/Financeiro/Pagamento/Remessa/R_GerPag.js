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
var R_GerPag = /** @class */ (function (_super) {
    __extends(R_GerPag, _super);
    function R_GerPag() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_GerPag.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerPag.prototype, "gridRelacao", {
        get: function () {
            return window["gridRelacao_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerPag.prototype, "cboConfiguracao", {
        get: function () {
            return window['cboConfiguracao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerPag.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerPag.prototype, "accFiltro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerPag.prototype, "optTipoData", {
        get: function () {
            return window['optTipoData_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerPag.prototype, "txtFornecedor", {
        get: function () {
            return window['txtFornecedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_GerPag.prototype, "btnTransmitir", {
        get: function () {
            return window['btnTransmitir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_GerPag.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtPeriodo.Iniciar();
        if (this.accFiltro) {
            this.accFiltro.SetExpanded(true);
        }
        this.gridRelacao.PreencherGrid(null);
        this.optTipoData.SetValue("V");
    };
    R_GerPag.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_GerPag.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.btnTransmitir) {
            adicionarEventoMoura(this.btnTransmitir.Click, this.OnClickDownload, this);
        }
    };
    R_GerPag.prototype.OnClickDownload = function (s, e) {
        var _this = this;
        e.processOnServer = false;
        var lista = [];
        for (var i = 0; i < this.gridRelacao.GetSelectedRowsData.length; i++) {
            lista.push(this.gridRelacao.GetSelectedRowsData[i].Codigo_Pagar);
        }
        var parametros = {
            codigoPagar: lista,
            configuracao: this.cboConfiguracao.GetValue()
        };
        abrirEspera("");
        this.ExecutarFuncaoServerSideAsynch("TransmitirPagamentos", parametros, function (d) {
            fecharEspera();
            var retorno = GetRetornoAJAX(d);
            if (retorno) {
                _this.FazerDownload();
                MostrarMensagem("Contas transmitidas com sucesso");
                _this.PreencherGrade();
            }
            else {
                MostrarAlerta("Não foi possível exportar o arquivo de pagamento");
            }
        }, this.TratarErroFuncaoAsync, this);
    };
    R_GerPag.prototype.FazerDownload = function () {
        var parametrosTela = [];
        abrirTelaNovaAbaParametros(formataURLRelativa("Modulos/Geral/AbrirArquivo.aspx"), parametrosTela);
    };
    R_GerPag.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        this.GerarGrade();
        if (this.accFiltro) {
            this.accFiltro.SetExpanded(false);
        }
    };
    R_GerPag.prototype.GerarGrade = function () {
        var _this = this;
        try {
            var parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                configuracao: this.cboConfiguracao.GetValue(),
                codFornecedor: this.txtFornecedor.GetText().CNum(),
                tipo: this.optTipoData.GetValue()
            };
            abrirEspera("");
            this.gridRelacao.PreencherGrid(null);
            this.gridRelacao.Grid.clearSelection();
            this.ExecutarFuncaoServerSideAsynch("Relacao", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    fecharEspera();
                    _this.gridRelacao.PreencherGrid(retorno);
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_GerPag;
}(MouraPageRelacaoAngular));
var r_GerPag = new R_GerPag();
//# sourceMappingURL=R_GerPag.js.map