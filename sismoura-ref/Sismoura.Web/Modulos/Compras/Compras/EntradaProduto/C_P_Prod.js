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
var C_P_Prod = /** @class */ (function (_super) {
    __extends(C_P_Prod, _super);
    function C_P_Prod() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_P_Prod.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_P_Prod.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_P_Prod.prototype, "lstEmpresa", {
        get: function () {
            return window["lstEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    C_P_Prod.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    C_P_Prod.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    C_P_Prod.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        try {
            abrirEspera();
            var parametro = {};
            if (this.Filtro.Tipo == null)
                this.Filtro.Tipo = -1;
            parametro = {
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final,
                produto: CNum(this.Filtro.Produto),
                tipo: CNum(this.Filtro.Tipo),
                tipoEntrada: CNum(this.Filtro.TipoEntrada),
                empresas: this.lstEmpresa.GetValuesNumber().join(","),
                marca: CNum(this.Filtro.Marca)
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametro, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno.PreencherGrid);
                    _this.Filtro.Media = retorno.Media;
                    _this.AccordionFiltros.SetExpanded(false);
                    _this.RefreshAngular();
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
    //
    C_P_Prod.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.Filtro.TipoEntrada = 0;
        this.Filtro.Produto = 0;
        this.Filtro.Marca = 0;
        this.Filtro.Tipo = 0;
        this.lstEmpresa.Limpar();
        this.lstEmpresa.LimparSelecao();
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.Filtro.Media = "0,00";
        this.grid.PreencherGrid(null);
        this.AccordionFiltros.SetExpanded(true);
        this.RefreshAngular();
    };
    return C_P_Prod;
}(MouraPageRelacaoAngular));
var c_P_Prod = new C_P_Prod();
//# sourceMappingURL=C_P_Prod.js.map