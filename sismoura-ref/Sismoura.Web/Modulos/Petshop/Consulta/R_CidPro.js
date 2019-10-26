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
var R_CidPro = /** @class */ (function (_super) {
    __extends(R_CidPro, _super);
    function R_CidPro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_CidPro.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CidPro.prototype, "Grid", {
        get: function () {
            return window["Grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CidPro.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CidPro.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CidPro.prototype, "accFiltro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CidPro.prototype, "txtAssunto", {
        get: function () {
            return window['txtAssunto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_CidPro.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.lstEmpresa.LimparSelecao();
        if (ValoresSismoura && ValoresSismoura.EmpresaPadraoUsuario > 0) {
            this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        }
        this.txtPeriodo.Iniciar();
        if (this.accFiltro) {
            this.accFiltro.SetExpanded(true);
        }
        this.Grid.PreencherGrid(null);
    };
    R_CidPro.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_CidPro.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_CidPro.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        this.GerarGrade();
        if (this.accFiltro) {
            this.accFiltro.SetExpanded(false);
        }
    };
    R_CidPro.prototype.GerarGrade = function () {
        var _this = this;
        var empresas = this.lstEmpresa.GetValuesRelacao();
        try {
            var parametros = {
                arrEmpresas: empresas,
                dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
                dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate()
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("RelacaoConsultasCid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    fecharEspera();
                    _this.Grid.PreencherGrid(retorno);
                    _this.Grid.LimparFiltros();
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
    return R_CidPro;
}(MouraPageRelacaoAngular));
var r_CidPro = new R_CidPro();
//# sourceMappingURL=R_CidPro.js.map