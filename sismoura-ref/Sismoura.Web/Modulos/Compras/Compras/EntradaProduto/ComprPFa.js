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
var ComprPFa = /** @class */ (function (_super) {
    __extends(ComprPFa, _super);
    function ComprPFa() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ComprPFa.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComprPFa.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ComprPFa.prototype, "lstEmpresas", {
        get: function () {
            return window["lstEmpresas_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    ComprPFa.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    ComprPFa.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    //
    ComprPFa.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.lstEmpresas.SelecionarEmpresaPadraoUsuario();
        this.Filtro.Tipo = "En";
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    ComprPFa.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            abrirEspera("");
            parametros = {
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final,
                tipo: this.Filtro.Tipo,
                empresas: this.lstEmpresas.GetValues().join(",")
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    _this.AccordionFiltros.SetExpanded(false);
                }
                catch (ex) {
                    LogarException(ex);
                }
                finally {
                    fecharEspera();
                }
            }, function (erro) {
                fecharEspera();
                LogarException(erro);
            }, this);
        }
        catch (ex) {
            fecharEspera();
            LogarException(ex);
        }
    };
    return ComprPFa;
}(MouraPageRelacaoAngular));
var comprPFa = new ComprPFa();
//# sourceMappingURL=ComprPFa.js.map