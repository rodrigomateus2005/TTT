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
var R_Consig = /** @class */ (function (_super) {
    __extends(R_Consig, _super);
    function R_Consig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Consig.prototype, "gridDiscriminada", {
        get: function () {
            return window['gridDiscriminada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Consig.prototype, "gridAgrupada", {
        get: function () {
            return window['gridAgrupada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Consig.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Consig.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_Consig.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_Consig.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        this.PreencherGridDiscriminada();
        this.PreencherGridAgrupada();
    };
    R_Consig.prototype.PreencherGridDiscriminada = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                codMarca: CNum(this.Filtro.Marca),
                codVendedor: CNum(this.Filtro.Vendedor),
                codConsig: CNum(this.Filtro.Codigo),
                codProduto: CNum(this.Filtro.Produto),
                codCliente: CNum(this.Filtro.Cliente),
                codGrupo: CNum(this.Filtro.Grupo),
                vencimento: CNum(this.Filtro.Vencimento),
                referencia: this.Filtro.Referencia,
                dataServidor: ConvertToDate(this.DataServidor().FormataData()),
                verificaTela: false
            };
            this.AccordionFiltros.SetExpanded(false);
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGridGradeDiscriminada", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.gridDiscriminada.PreencherGrid(retorno);
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
    R_Consig.prototype.PreencherGridAgrupada = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                codMarca: CNum(this.Filtro.Marca),
                codVendedor: CNum(this.Filtro.Vendedor),
                codConsig: CNum(this.Filtro.Codigo),
                codProduto: CNum(this.Filtro.Produto),
                codCliente: CNum(this.Filtro.Cliente),
                codGrupo: CNum(this.Filtro.Grupo),
                vencimento: CNum(this.Filtro.Vencimento),
                referencia: this.Filtro.Referencia,
                dataServidor: ConvertToDate(this.DataServidor().FormataData()),
                verificaTela: true
            };
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGridGradeAgrupada", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.gridAgrupada.PreencherGrid(retorno);
                _this.gridAgrupada.GroupBy("Cliente_Completo");
                _this.gridAgrupada.ExpandAll(0);
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
    R_Consig.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Vencimento = "0";
        this.Filtro.Referencia = "";
        this.gridDiscriminada.PreencherGrid(null);
        this.gridAgrupada.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_Consig;
}(MouraPageRelacaoAngular));
var r_Consig = new R_Consig();
//# sourceMappingURL=R_Consig.js.map