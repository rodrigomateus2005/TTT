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
var R_Compra = /** @class */ (function (_super) {
    __extends(R_Compra, _super);
    function R_Compra() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Compra.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Compra.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Compra.prototype, "lstEmpresa", {
        get: function () {
            return window["lstEmpresa_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_Compra.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
    };
    R_Compra.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    //
    R_Compra.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.Filtro.Marca = 0;
        this.Filtro.Linha = 0;
        this.Filtro.Grupo = 0;
        this.Filtro.TipoEntrada = 0;
        this.Filtro.SubGrupo = 0;
        this.Filtro.Tipo = " ";
        this.Filtro.Media = "0,00";
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_Compra.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            abrirEspera("");
            parametros = {
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final,
                marca: CNum(this.Filtro.Marca),
                linha: CNum(this.Filtro.Linha),
                grupo: CNum(this.Filtro.Grupo),
                subGrupo: CNum(this.Filtro.SubGrupo),
                tipoNF: this.Filtro.Tipo,
                tipoEntrada: CNum(this.Filtro.TipoEntrada),
                empresas: this.lstEmpresa.GetValues().join(",")
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno.Retorno_Grade);
                    _this.Filtro.Media = retorno.Retorno_Label;
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
    return R_Compra;
}(MouraPageRelacaoAngular));
var r_Compra = new R_Compra();
//# sourceMappingURL=R_Compra.js.map