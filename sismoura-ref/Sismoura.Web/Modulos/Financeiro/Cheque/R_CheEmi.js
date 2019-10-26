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
var R_CheEmi = /** @class */ (function (_super) {
    __extends(R_CheEmi, _super);
    function R_CheEmi() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_CheEmi.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CheEmi.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_CheEmi.prototype, "lstContaCorrente", {
        get: function () {
            return window['lstContaCorrente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_CheEmi.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_CheEmi.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_CheEmi.prototype.PreencherGrade = function () {
        var _this = this;
        var parametros;
        try {
            var contasCorrentes = (this.lstContaCorrente.Lista.GetValues()).join(",");
            parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                contasCorrentes: contasCorrentes
            };
            this.AccordionFiltros.SetExpanded(false);
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno);
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
    R_CheEmi.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.DataServidor();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.lstContaCorrente.Lista.LimparSelecao();
        this.lstContaCorrente.CheckBox.Checked = false;
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_CheEmi;
}(MouraPageRelacaoAngular));
var r_CheEmi = new R_CheEmi();
//# sourceMappingURL=R_CheEmi.js.map