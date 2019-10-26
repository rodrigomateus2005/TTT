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
var R_SerPro = /** @class */ (function (_super) {
    __extends(R_SerPro, _super);
    function R_SerPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_SerPro.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerPro.prototype, "txtPeriodo", {
        //Filtros
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerPro.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_SerPro.prototype, "grd", {
        get: function () {
            return window['grd_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_SerPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_SerPro.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_SerPro.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario;
        }
        this.txtPeriodo.Iniciar();
        this.grd.PreencherGrid([]);
    };
    R_SerPro.prototype.PreencherGrade = function () {
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
                empresas: this.lstEmpresa.GetValuesRelacaoNumber()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GerarGrid", parametros, function (d) {
                try {
                    fecharEspera();
                    if (GetRetornoAJAX(d).length == 0) {
                        MostrarAlerta("Nenhum registro encontrado.");
                    }
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
    R_SerPro.prototype.ValidarPeriodo = function (dataInicio, dataFim) {
        if (!dataInicio)
            return false;
        if (!dataFim)
            return false;
        return true;
    };
    return R_SerPro;
}(MouraPageRelacaoAngular));
var r_SerPro = new R_SerPro();
//# sourceMappingURL=R_SerPro.js.map