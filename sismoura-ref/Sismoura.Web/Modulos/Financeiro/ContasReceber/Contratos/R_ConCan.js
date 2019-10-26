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
var R_ConCan = /** @class */ (function (_super) {
    __extends(R_ConCan, _super);
    function R_ConCan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ConCan.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCan.prototype, "grid", {
        get: function () {
            return window["grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCan.prototype, "chkAgruparData", {
        get: function () {
            return window["chkAgruparData_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ConCan.prototype, "chkAgruparMotivo", {
        get: function () {
            return window["chkAgruparMotivo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    //
    R_ConCan.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_ConCan.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.chkAgruparData.CheckChanged)
            adicionarEventoMoura(this.chkAgruparData.CheckChanged, this.OnCheckedChanged_Data, this);
        if (this.chkAgruparMotivo.CheckChanged)
            adicionarEventoMoura(this.chkAgruparMotivo.CheckChanged, this.OnCheckedChanged_Motivo, this);
    };
    //
    R_ConCan.prototype.OnCheckedChanged_Data = function () {
        if (this.chkAgruparData.CheckChanged)
            if (this.chkAgruparMotivo.Checked)
                this.chkAgruparMotivo.Checked = false;
    };
    R_ConCan.prototype.OnCheckedChanged_Motivo = function () {
        if (this.chkAgruparMotivo.CheckChanged)
            if (this.chkAgruparData.Checked)
                this.chkAgruparData.Checked = false;
    };
    //
    R_ConCan.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.grid.iniciarGrid();
        this.Filtro.Data_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Data_Final = this.DataServidor();
        this.Filtro.Cliente = "";
        this.Filtro.Motivo = "";
        this.Filtro.Servico = "";
        this.Filtro.Vendedor = "";
        this.Filtro.ZonaVenda = "";
        this.Filtro.AgruparData = false;
        this.Filtro.AgruparMotivo = false;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_ConCan.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        try {
            this.grid.iniciarGrid();
            abrirEspera();
            parametros = {
                dataInicial: this.Filtro.Data_Inicial,
                dataFinal: this.Filtro.Data_Final,
                motivo: CNum(this.Filtro.Motivo),
                cliente: CNum(this.Filtro.Cliente),
                vendedor: CNum(this.Filtro.Vendedor),
                zonaVenda: CNum(this.Filtro.Zona_Venda),
                servico: CNum(this.Filtro.Servico)
            };
            this.ExecutarFuncaoServerSideAsynch("PreencherGrade", parametros, function (d) {
                try {
                    var retorno = GetRetornoAJAX(d);
                    _this.grid.PreencherGrid(retorno);
                    if (_this.chkAgruparData.Checked) {
                        _this.grid.GroupBy("Data_Cancelado");
                    }
                    else if (_this.chkAgruparMotivo.Checked) {
                        _this.grid.GroupBy("Motivo");
                    }
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
    return R_ConCan;
}(MouraPageRelacaoAngular));
var r_ConCan = new R_ConCan();
//# sourceMappingURL=R_ConCan.js.map