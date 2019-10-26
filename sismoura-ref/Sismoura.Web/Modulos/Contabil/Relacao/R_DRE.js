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
var R_DRE = /** @class */ (function (_super) {
    __extends(R_DRE, _super);
    function R_DRE() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_DRE.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_DRE.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_DRE.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_DRE.prototype, "lstConsolidacao", {
        get: function () {
            return window['lstConsolidacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_DRE.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_DRE.prototype, "btnImprimir", {
        get: function () {
            return window['btnImprimir_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_DRE.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.cboEmpresa) {
            adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.OnAlterouEmpresa, this);
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.CellPrepared, this.OnGerouLinhaTipo, this);
        }
        if (this.btnImprimir) {
            adicionarEventoMoura(this.btnImprimir.Click, this.OnClickImprimir, this);
        }
    };
    R_DRE.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_DRE.prototype.OnAlterouEmpresa = function () {
        this.lstConsolidacao.LimparSelecao();
        this.validarEmpresaMatriz();
        this.grd.PreencherGrid([]);
    };
    R_DRE.prototype.LimparCampos = function () {
        this.validarEmpresaMatriz();
        this.txtPeriodo.IniciarDataAtual();
        this.lstConsolidacao.LimparSelecao();
        this.grd.PreencherGrid([]);
    };
    R_DRE.prototype.validarEmpresaMatriz = function () {
        var parametros = {
            codEmpresa: this.cboEmpresa.GetValue()
        };
        if (!this.ExecutarFuncaoServerSideSynch("ValidarMatrizEmpresa", parametros)) {
            this.lstConsolidacao.Enabled = false;
        }
        else {
            this.lstConsolidacao.Enabled = true;
        }
    };
    R_DRE.prototype.OnGerouLinhaTipo = function (s, e) {
        if (e.rowType == "data") {
            if (e.row.data['Tipo'] == "S") {
                e.cellElement.css("font-weight", "bold");
            }
        }
    };
    R_DRE.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        if (!ValidarPeriodo(this.txtPeriodo.textBoxCalendarioInicio.GetDate(), this.txtPeriodo.textBoxCalendarioFim.GetDate())) {
            MostrarAlerta("Informe corretamente o período do DRE.");
            return;
        }
        try {
            abrirEspera("Carregando registros, isto pode demorar um pouco...");
            var parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                empresa: this.cboEmpresa.GetValue(),
                consolidacao: this.lstConsolidacao.GetValue()
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    fecharEspera();
                    _this.grd.PreencherGrid(GetRetornoAJAX(d));
                }
                catch (ex) {
                    fecharEspera();
                    LogarException(ex);
                }
            }, function (erro) {
                fecharEspera();
                LogarExceptionAjax(erro);
            }, this);
        }
        catch (ex) {
            this.grd.PreencherGrid([]);
            LogarException(ex);
            fecharEspera();
        }
    };
    R_DRE.prototype.OnClickImprimir = function (s, e) {
        e.processOnServer = false;
        try {
            if (this.grd.DataSource.length < 1) {
                MostrarAlerta("Não há itens para serem impressos!");
                return;
            }
            var arrayDRE_1 = [];
            this.grd.DataSource.forEach(function (q) {
                var novoDRE = {
                    Codigo_Contabil: q.Codigo_Contabil,
                    Conta_Contabil: q.Conta_Contabil,
                    Descricao: q.Descricao,
                    Saldo_Atual: q.Saldo_Atual
                };
                arrayDRE_1.push(q);
            });
            var parametros = {
                arrayDRE: JSON.stringify(arrayDRE_1),
                codEmpresa: this.cboEmpresa.GetValue(),
                qtdePaginas: Math.ceil((this.grd.DataSource.length / 46)),
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                consolidacao: (this.lstConsolidacao.GetValue() == null) ? "" : this.lstConsolidacao.GetValue(),
                codUsuario: ValoresSismoura.UsuarioLogado,
                tela: ValoresSismoura.NomeTela
            };
            this.ExecutarFuncaoServerSideSynch("PreencherImpressao", parametros);
            var urlTela = "ReportView.aspx?relatorio=~/Report/Fixos/DRE.REPX";
            abrirTelaNovaAbaParametros(formataURLRelativa(urlTela), []);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return R_DRE;
}(MouraPageRelacaoAngular));
var r_DRE = new R_DRE();
//# sourceMappingURL=R_DRE.js.map