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
var R_LotAlt = /** @class */ (function (_super) {
    __extends(R_LotAlt, _super);
    function R_LotAlt() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_LotAlt.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LotAlt.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_LotAlt.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_LotAlt.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad;
        this.LimparCampos();
    };
    R_LotAlt.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_LotAlt.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.DataServidor();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Produto = 0;
        this.Filtro.Fornecedor = 0;
        this.Filtro.Usuario = 0;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_LotAlt.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios() || !this.ValidarDatas()) {
            return;
        }
        try {
            parametros = {
                dataInicial: this.Filtro.Periodo_Inicial,
                dataFinal: this.Filtro.Periodo_Final,
                codProduto: CNum(this.Filtro.Produto),
                codFornecedor: CNum(this.Filtro.Fornecedor),
                codUsuario: CNum(this.Filtro.Usuario)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_LotAlt.prototype.ValidarDatas = function () {
        if (this.Filtro.Periodo_Inicial == null || this.Filtro.Periodo_Final == null) {
            MostrarAlerta("Preencha o campo Periodo de Modificação corretamente.");
            return false;
        }
        return true;
    };
    return R_LotAlt;
}(MouraPageRelacaoAngular));
var r_LotAlt = new R_LotAlt();
//# sourceMappingURL=R_LotAlt.js.map