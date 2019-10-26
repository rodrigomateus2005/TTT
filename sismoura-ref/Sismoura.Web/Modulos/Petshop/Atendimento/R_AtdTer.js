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
var R_AtdTer = /** @class */ (function (_super) {
    __extends(R_AtdTer, _super);
    function R_AtdTer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_AtdTer.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AtdTer.prototype, "txtPeriodo", {
        //Filtros
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AtdTer.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AtdTer.prototype, "txtProfissionalTerceirizado", {
        get: function () {
            return window['txtProfissionalTerceirizado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AtdTer.prototype, "chkRecusados", {
        get: function () {
            return window['chkRecusados_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_AtdTer.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_AtdTer.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.txtProfissionalTerceirizado) {
            adicionarEventoMoura(this.txtProfissionalTerceirizado.AntesAbrirProcura, this.OnAntesAbrirProcuraProfissional, this);
            adicionarEventoMoura(this.txtProfissionalTerceirizado.Procurou, this.OnTxtProfissionalProcurou, this);
        }
        if (this.grd)
            adicionarEventoMoura(this.grd.CellPrepared, this.OnGrdCellPrepared, this);
    };
    R_AtdTer.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_AtdTer.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario;
        }
        this.txtPeriodo.Iniciar();
        this.txtProfissionalTerceirizado.Limpar();
        this.chkRecusados.Checked = false;
        this.grd.PreencherGrid([]);
    };
    R_AtdTer.prototype.OnAntesAbrirProcuraProfissional = function (s, e) {
        e.Cancelar = false;
        this.txtProfissionalTerceirizado.AddParametro("isTerceirizado", "1");
    };
    R_AtdTer.prototype.OnTxtProfissionalProcurou = function (s, e) {
        try {
            if (this.txtProfissionalTerceirizado.GetText().CNum() <= 0)
                return;
            var param = {
                codProfissional: this.txtProfissionalTerceirizado.GetText().CNum()
            };
            if (!this.ExecutarFuncaoServerSideSynch("isProfissionalTerceirizado", param)) {
                MostrarAlerta("Profissional informado não é um Prestador de Serviço.");
                this.txtProfissionalTerceirizado.Limpar();
                this.txtProfissionalTerceirizado.Focus();
                return;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_AtdTer.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var dataInicio = this.txtPeriodo.textBoxCalendarioInicio.GetDate();
        var dataFim = this.txtPeriodo.textBoxCalendarioFim.GetDate();
        if (!this.ValidarPeriodo(dataInicio, dataFim)) {
            MostrarAlerta("Informe um período correto.");
            return;
        }
        try {
            var parametros = {
                dataInicial: dataInicio,
                dataFinal: dataFim,
                empresas: this.lstEmpresa.GetValuesRelacaoNumber(),
                codProfissional: this.txtProfissionalTerceirizado.GetText().CNum(),
                recusados: this.chkRecusados.Checked
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGrid", parametros, function (d) {
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
    R_AtdTer.prototype.ValidarPeriodo = function (dataInicio, dataFim) {
        if (!dataInicio)
            return false;
        if (!dataFim)
            return false;
        return true;
    };
    R_AtdTer.prototype.OnGrdCellPrepared = function (s, e) {
        if (e.rowType == "data" && e.data) {
            var motivoRecusa = ("" + e.data['Motivo_Recusa']);
            if (!String.IsNullOrWhiteSpace(motivoRecusa)) {
                e.cellElement.css("color", "blue");
            }
        }
    };
    return R_AtdTer;
}(MouraPageRelacaoAngular));
var r_AtdTer = new R_AtdTer();
//# sourceMappingURL=R_AtdTer.js.map