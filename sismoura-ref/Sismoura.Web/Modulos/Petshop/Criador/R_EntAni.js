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
var R_EntAni = /** @class */ (function (_super) {
    __extends(R_EntAni, _super);
    function R_EntAni() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_EntAni.prototype, "AccordionFiltros", {
        //Mapeamento
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntAni.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntAni.prototype, "txtPeriodo", {
        get: function () {
            return window['txtPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntAni.prototype, "txtProprietario", {
        get: function () {
            return window['txtProprietario_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntAni.prototype, "txtCriador", {
        get: function () {
            return window['txtCriador_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_EntAni.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_EntAni.prototype.init = function () {
        _super.prototype.Init.call(this);
    };
    R_EntAni.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_EntAni.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        try {
            abrirEspera();
            var parametros = {};
            if (this.ValidarCamposObrigatorios) {
                parametros = {
                    dataInicial: this.Filtro.Data_Inicial,
                    dataFinal: this.Filtro.Data_Final,
                    proprietario: CNum(this.Filtro.Proprietario),
                    criador: CNum(this.Filtro.Criador),
                    empresas: this.lstEmpresa.GetValuesRelacao().join(",")
                };
            }
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = {};
                    retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno.grid);
                    _this.AccordionFiltros.SetExpanded(false);
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
                }
            }, function (error) {
                LogarException(error);
                fecharEspera();
            }, this);
        }
        catch (ex) {
            LogarException(ex);
            fecharEspera();
        }
    };
    R_EntAni.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.txtProprietario.Limpar();
        this.txtCriador.Limpar();
        this.lstEmpresa.Limpar();
        this.lstEmpresa.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_EntAni;
}(MouraPageRelacaoAngular));
var r_EntAni = new R_EntAni();
//# sourceMappingURL=R_EntAni.js.map