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
var R_LogTra = /** @class */ (function (_super) {
    __extends(R_LogTra, _super);
    function R_LogTra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_LogTra.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LogTra.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LogTra.prototype, "grdModal", {
        get: function () {
            return window['grdModal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LogTra.prototype, "accRelacao", {
        get: function () {
            return window['accRelacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LogTra.prototype, "mdLog", {
        get: function () {
            return window['mdLog_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LogTra.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LogTra.prototype, "btnFechar", {
        get: function () {
            return window['btnFechar_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LogTra.prototype, "cboTela", {
        get: function () {
            return window['cboTela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LogTra.prototype, "cboTipo", {
        get: function () {
            return window['cboTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LogTra.prototype, "txtCampoCodigo", {
        get: function () {
            return window['txtCampoCodigo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LogTra.prototype, "txtUsuario", {
        get: function () {
            return window['txtUsuario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LogTra.prototype, "cboTabela", {
        get: function () {
            return window['cboTabela_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_LogTra.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_LogTra.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
        if (this.btnFechar) {
            adicionarEventoMoura(this.btnFechar.Click, this.OnClickFechar, this);
        }
    };
    R_LogTra.prototype.OnGridSelecionouItem = function (s, e) {
        this.CarregarLogHistoricoCampo(e.data.Codigo);
        this.mdLog.Show();
    };
    R_LogTra.prototype.OnClickFechar = function (s, e) {
        e.processOnServer = false;
        this.mdLog.Hide();
    };
    //Grade inicial
    R_LogTra.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        //try {
        //    var parametros: any;
        //    //var logHistorico: SiSMoura.Core.Entity.Log_Historico[];
        //    parametros = {
        //        dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
        //        dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
        //        tela: this.cboTela.GetValue(),
        //        tabela: this.cboTabela.GetValue(),
        //        campoCodigo: this.txtCampoCodigo.GetText().CNum(),
        //        codUsuario: this.txtUsuario.GetText().CNum(),
        //        tipo: this.cboTipo.GetValue()
        //    }
        //    var logHistorico = this.ExecutarFuncaoServerSideSynch("getLogHistorico", parametros);
        //    this.grid.PreencherGrid(logHistorico);
        //    this.accRelacao.SetExpanded(false);
        //} catch (ex) {
        //    fecharEspera(); 
        //    LogarException(ex);
        //}
        var parametros;
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate(),
                tela: this.cboTela.GetValue(),
                tabela: this.cboTabela.GetValue(),
                campoCodigo: this.txtCampoCodigo.GetText().CNum(),
                codUsuario: this.txtUsuario.GetText().CNum(),
                tipo: this.cboTipo.GetValue()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("getLogHistorico", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
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
            LogarException(ex);
            fecharEspera();
        }
    };
    //Grade modal
    R_LogTra.prototype.CarregarLogHistoricoCampo = function (codigo) {
        try {
            var parametros;
            parametros = {
                codigo: codigo
            };
            var historicoCampo = this.ExecutarFuncaoServerSideSynch("getLogHistoricoCampo", parametros);
            this.grdModal.PreencherGrid(historicoCampo);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_LogTra.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtPeriodo.Iniciar();
        this.cboTela.SetSelectedIndex(0);
        this.cboTabela.SetSelectedIndex(0);
        this.cboTipo.SetSelectedIndex(0);
        this.txtCampoCodigo.Limpar();
        this.txtUsuario.Limpar();
        this.grid.PreencherGrid(null);
    };
    return R_LogTra;
}(MouraPageRelacaoAngular));
var r_LogTra = new R_LogTra();
//# sourceMappingURL=R_LogTra.js.map