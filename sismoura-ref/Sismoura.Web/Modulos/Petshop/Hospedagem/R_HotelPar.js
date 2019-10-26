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
var R_HotelPar = /** @class */ (function (_super) {
    __extends(R_HotelPar, _super);
    function R_HotelPar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_HotelPar.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HotelPar.prototype, "grid", {
        get: function () { return window['grid_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HotelPar.prototype, "cboTipoHospedagem", {
        get: function () { return window['cboTipoHospedagem_Object']; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_HotelPar.prototype, "cboEmpresa", {
        get: function () { return window['cboEmpresa_Object']; },
        enumerable: true,
        configurable: true
    });
    R_HotelPar.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_HotelPar.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_HotelPar.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        if (this.grid) {
            this.grid.PreencherGrid(null);
        }
        if (this.cboEmpresa) {
            this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        }
        if (this.cboTipoHospedagem) {
            this.cboTipoHospedagem.SetValue(-1);
        }
    };
    R_HotelPar.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (this.cboEmpresa.GetValue() == 0) {
            MostrarAlerta("Informe a empresa");
            return;
        }
        if (this.cboTipoHospedagem.GetText() == "") {
            MostrarAlerta("Informe o tipo da hospedagem");
            return;
        }
        this.GetDadosRelacao();
    };
    R_HotelPar.prototype.GetDadosRelacao = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                codEmpresa: this.cboEmpresa.GetValue(),
                tipoHospedagem: this.cboTipoHospedagem.GetValue()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("GetRelacaoHoteisParceiros", parametros, function (d) {
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
    return R_HotelPar;
}(MouraPageRelacaoAngular));
var r_HotelPar = new R_HotelPar;
//# sourceMappingURL=R_HotelPar.js.map