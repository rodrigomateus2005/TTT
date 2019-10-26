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
var R_C_Dia = /** @class */ (function (_super) {
    __extends(R_C_Dia, _super);
    function R_C_Dia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_C_Dia.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_C_Dia.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_C_Dia.prototype, "txtCombustivel", {
        get: function () {
            return window['txtCombustivel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_C_Dia.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_C_Dia.prototype, "lstTanque", {
        get: function () {
            return window['lstTanque_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_C_Dia.prototype, "grdRelacaoComprasPeriodo", {
        get: function () {
            return window['grdRelacaoComprasPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_C_Dia.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_C_Dia.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.txtCombustivel.AddParametro("combustivel", "S");
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.LimparCampos();
    };
    R_C_Dia.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_C_Dia.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            parametros = {
                dataInicial: ConvertToDate(this.txtPeriodo.textBoxCalendarioInicio.GetDate()),
                dataFinal: ConvertToDate(this.txtPeriodo.textBoxCalendarioFim.GetDate()),
                combustivel: this.txtCombustivel.GetText().CNum(),
                tanques: this.lstTanque.GetValues().join(","),
                empresas: this.lstEmpresa.GetValues().join(",")
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("GetRelacaoComprasPeriodo", parametros);
            this.grdRelacaoComprasPeriodo.PreencherGrid(retorno);
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_C_Dia.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtPeriodo.Iniciar();
        this.txtPeriodo.textBoxCalendarioFim.SetDate(this.DataServidor());
        this.txtCombustivel.Limpar();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.lstTanque.LimparSelecao();
        this.grdRelacaoComprasPeriodo.PreencherGrid(null);
    };
    return R_C_Dia;
}(MouraPageRelacaoAngular));
var r_C_Dia = new R_C_Dia();
//# sourceMappingURL=R_C_Dia.js.map