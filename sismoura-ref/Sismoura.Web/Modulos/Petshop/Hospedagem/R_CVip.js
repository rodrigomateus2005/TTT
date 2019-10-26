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
var R_CVip = /** @class */ (function (_super) {
    __extends(R_CVip, _super);
    function R_CVip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_CVip.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CVip.prototype, "grid", {
        get: function () { return window['grid_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CVip.prototype, "txtPeriodo", {
        get: function () { return window['txtPeriodo_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CVip.prototype, "cboTipoHospedagem", {
        get: function () { return window['cboTipoHospedagem_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CVip.prototype, "lstEmpresa", {
        get: function () { return window['lstEmpresa_Object']; },
        enumerable: true,
        configurable: true
    });
    R_CVip.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_CVip.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_CVip.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (this.grid) {
            this.grid.PreencherGrid(null);
        }
        if (this.txtPeriodo) {
            this.txtPeriodo.Iniciar();
        }
        if (this.lstEmpresa) {
            this.lstEmpresa.SetValues(['' + ValoresSismoura.EmpresaPadraoUsuario]);
        }
        if (this.cboTipoHospedagem) {
            this.cboTipoHospedagem.SetValue(0);
        }
    };
    R_CVip.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var empresas = this.lstEmpresa.GetValuesRelacaoNumber();
        if (!empresas || empresas.length == 0) {
            MostrarAlerta("Informe uma empresa");
            return;
        }
        this.GetDadosRelacao();
    };
    R_CVip.prototype.GetDadosRelacao = function () {
        var _this = this;
        var parametros;
        var empresas = this.lstEmpresa.GetValuesRelacaoNumber();
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                empresas: empresas,
                tipoHospedagem: this.cboTipoHospedagem.GetValue()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetRelacaoClientesVips", parametros, function (d) {
                try {
                    fecharEspera();
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.grid.GroupBy("Tipo_Hospedagem");
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
    return R_CVip;
}(MouraPageRelacaoAngular));
var r_CVip = new R_CVip;
//# sourceMappingURL=R_CVip.js.map