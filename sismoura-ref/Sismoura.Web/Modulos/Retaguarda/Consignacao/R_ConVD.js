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
var R_ConVD_Angular = /** @class */ (function (_super) {
    __extends(R_ConVD_Angular, _super);
    function R_ConVD_Angular() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ConVD_Angular.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConVD_Angular.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConVD_Angular.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ConVD_Angular.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_ConVD_Angular.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_ConVD_Angular.prototype.PreencherGrade = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                origem: this.Filtro.Origem,
                cliente: CNum(this.Filtro.Cliente),
                consig: CNum(this.Filtro.Consig),
                produto: CNum(this.Filtro.Produto),
                vendedor: CNum(this.Filtro.Vendedor),
                tipo: this.Filtro.Tipo
            };
            this.AccordionFiltros.SetExpanded(false);
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("GetCadastrados", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.Grid.PreencherGrid(retorno);
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
    R_ConVD_Angular.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.DataServidor();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Origem = "0";
        this.Filtro.Tipo = "0";
        this.Grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_ConVD_Angular;
}(MouraPageRelacaoAngular));
var r_ConVD_Angular = new R_ConVD_Angular();
//# sourceMappingURL=R_ConVD.js.map