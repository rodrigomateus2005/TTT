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
var R_MovExc = /** @class */ (function (_super) {
    __extends(R_MovExc, _super);
    function R_MovExc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_MovExc.prototype, "AccordionFiltros", {
        get: function () {
            return window['accFiltros_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovExc.prototype, "cboCaixa", {
        get: function () {
            return window['cboCaixa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovExc.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_MovExc.prototype, "lblTotExcl", {
        get: function () {
            return window['lblTotExcl_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_MovExc.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.cboCaixa.btnConsulta.DoClick();
        this.LimparCampos();
    };
    R_MovExc.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_MovExc.prototype.PreencherGrade = function () {
        var _this = this;
        this.grid.PreencherGrid(null);
        var parametros;
        try {
            var lista = void 0, cboCaixaValue = void 0;
            lista = this.cboCaixa.lstEmpresa.GetValues().join(",");
            if (this.cboCaixa.cboCaixa.GetValue() < 0 || this.cboCaixa.cboCaixa.GetValue() == null)
                cboCaixaValue = "0";
            else
                cboCaixaValue = this.cboCaixa.cboCaixa.GetValue();
            parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                periodo: CNum(this.Filtro.Periodo),
                caixa: CNum(cboCaixaValue),
                pdv: CNum(this.cboCaixa.cboPdv.GetValue()),
                empresas: lista
            };
            this.AccordionFiltros.SetExpanded(false);
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                var apoio = 0;
                _this.lblTotExcl.Text = "Total Excluído: 0,00";
                for (var i = 0; i < retorno.length; i++) {
                    apoio += retorno[i].Valor;
                }
                _this.lblTotExcl.Text = "Total Excluído: " + apoio.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                });
                if (retorno.length > 0) {
                    _this.grid.PreencherGrid(retorno);
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
    R_MovExc.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        var now = this.DataServidor();
        this.Filtro.Periodo_Inicial = now;
        this.Filtro.Periodo_Final = now;
        this.Filtro.Periodo = "0";
        this.cboCaixa.lstEmpresa.LimparSelecao();
        this.cboCaixa.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.cboCaixa.cboCaixa.SetSelectedIndex(0);
        this.cboCaixa.cboPdv.SetSelectedIndex(0);
        this.lblTotExcl.Text = "Total Excluído: 0,00";
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    return R_MovExc;
}(MouraPageRelacaoAngular));
var r_MovExc = new R_MovExc();
//# sourceMappingURL=R_MovExc.js.map