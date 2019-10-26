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
var R_RecPer = /** @class */ (function (_super) {
    __extends(R_RecPer, _super);
    function R_RecPer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RecPer.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RecPer.prototype, "chkPagamento", {
        get: function () {
            return window["chkPagamento_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RecPer.prototype, "txtPeriodo", {
        get: function () {
            return window["txtPeriodo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RecPer.prototype, "Grid", {
        get: function () {
            return window["Grid_Object"];
        },
        enumerable: true,
        configurable: true
    });
    R_RecPer.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_RecPer.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
        if (this.Grid) {
            adicionarEventoMoura(this.Grid.SelecionouLinha, this.OnGridSelecionouItem, this);
        }
    };
    R_RecPer.prototype.OnGridSelecionouItem = function (s, e) {
        var codigo = "" + e.data['Codigo'];
        var parametros = [];
        if (!String.IsNullOrWhiteSpace(codigo)) {
            parametros.push("codigo=" + codigo);
        }
        abrirTelaNovaAbaParametros(formataURLRelativa(URLTela.CadastroDeRecibo), parametros);
    };
    R_RecPer.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        var parametros;
        parametros = {
            pagamento: this.chkPagamento.Checked,
            dataInicial: this.txtPeriodo.textBoxCalendarioInicio.GetDate(),
            dataFinal: this.txtPeriodo.textBoxCalendarioFim.GetDate()
        };
        var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
        if (retorno.length > 0) {
            this.Grid.PreencherGrid(retorno);
        }
        else {
            this.Grid.PreencherGrid(null);
        }
    };
    R_RecPer.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Grid.PreencherGrid(null);
        this.txtPeriodo.Iniciar();
        this.chkPagamento.Checked = false;
    };
    return R_RecPer;
}(MouraPageRelacaoAngular));
var r_RecPer = new R_RecPer();
//# sourceMappingURL=R_RecPer.js.map