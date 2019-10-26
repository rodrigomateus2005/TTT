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
var FrmP_Fid = /** @class */ (function (_super) {
    __extends(FrmP_Fid, _super);
    function FrmP_Fid() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(FrmP_Fid.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmP_Fid.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FrmP_Fid.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    FrmP_Fid.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    FrmP_Fid.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.CellPrepared, this.CellPrepared, this);
        }
    };
    FrmP_Fid.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Tipo = "T";
        this.Filtro.Cliente = 0;
        this.Filtro.PontoInicial = 0;
        this.Filtro.PontoFinal = 0;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    FrmP_Fid.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            parametros = {
                dataInicio: this.Filtro.Periodo_Inicial,
                dataFim: this.Filtro.Periodo_Final,
                cliente: CNum(this.Filtro.Cliente),
                tipo: this.Filtro.Tipo,
                pontoInicial: CNum(this.Filtro.PontoInicial),
                pontoFinal: CNum(this.Filtro.PontoFinal)
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno);
            this.grid.GroupBy("NomeCliente");
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    FrmP_Fid.prototype.CellPrepared = function (s, e) {
        var tipo;
        if (e.columnIndex >= 0) {
            if (e.rowType == "data") {
                tipo = e.data["EntradaSaida"];
                if (tipo != null && tipo != "") {
                    if (tipo == "Entrada") {
                        e.cellElement.css("color", "blue");
                    }
                    else if (tipo == "Saída") {
                        e.cellElement.css("color", "red");
                    }
                }
            }
        }
    };
    return FrmP_Fid;
}(MouraPageRelacaoAngular));
var frmP_Fid = new FrmP_Fid();
//# sourceMappingURL=FrmP_Fid.js.map