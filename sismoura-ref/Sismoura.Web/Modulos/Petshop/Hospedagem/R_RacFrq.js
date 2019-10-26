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
var R_RacFrq = /** @class */ (function (_super) {
    __extends(R_RacFrq, _super);
    function R_RacFrq() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RacFrq.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RacFrq.prototype, "grid", {
        get: function () { return window['grid_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RacFrq.prototype, "txtPeriodo", {
        get: function () { return window['txtPeriodo_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RacFrq.prototype, "cboTipoHospedagem", {
        get: function () { return window['cboTipoHospedagem_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RacFrq.prototype, "lstEmpresa", {
        get: function () { return window['lstEmpresa_Object']; },
        enumerable: true,
        configurable: true
    });
    R_RacFrq.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_RacFrq.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_RacFrq.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (this.grid) {
            this.grid.PreencherGrid(null);
        }
        if (this.txtPeriodo) {
            this.txtPeriodo.Iniciar();
        }
        //if (this.cboEmpresa) {
        //    this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        //}
        if (this.cboTipoHospedagem) {
            this.cboTipoHospedagem.SetValue(0);
        }
    };
    R_RacFrq.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.txtPeriodo.IsValido()) {
            MostrarAlerta("Informe o período corretamente.");
            return;
        }
        var empresas = this.lstEmpresa.GetValuesRelacaoNumber();
        if (!empresas || empresas.length == 0) {
            MostrarAlerta("Informe uma empresa");
            return;
        }
        if (this.cboTipoHospedagem.GetText() == "") {
            MostrarAlerta("Informe o tipo da hospedagem");
            return;
        }
        this.GetDadosRelacao();
    };
    R_RacFrq.prototype.GetDadosRelacao = function () {
        var _this = this;
        var parametros;
        if (!this.ValidadarFiltros()) {
            return;
        }
        var empresas = this.lstEmpresa.GetValuesRelacaoNumber();
        try {
            parametros = {
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate().ToDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate().ToDate(),
                empresas: empresas,
                tipoHospedagem: this.cboTipoHospedagem.GetValue()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetRelacaoRacasMaisFrequentes", parametros, function (d) {
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
    R_RacFrq.prototype.ValidadarFiltros = function () {
        try {
            if (!this.txtPeriodo.IsValido()) {
                MostrarAlerta("Informe o período.");
                return false;
            }
            var empresas = this.lstEmpresa.GetValuesRelacaoNumber();
            if (!empresas || empresas.length == 0) {
                MostrarAlerta("Informe uma empresa");
                return;
            }
            return true;
        }
        catch (e) {
            LogarException(e);
        }
    };
    return R_RacFrq;
}(MouraPageRelacaoAngular));
var r_RacFrq = new R_RacFrq;
//# sourceMappingURL=R_RacFrq.js.map