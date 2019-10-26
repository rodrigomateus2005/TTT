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
var R_ComiOS = /** @class */ (function (_super) {
    __extends(R_ComiOS, _super);
    function R_ComiOS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_ComiOS.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComiOS.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComiOS.prototype, "txtVendedor", {
        get: function () {
            return window['txtVendedor_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComiOS.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComiOS.prototype, "txtResponsavel", {
        get: function () {
            return window['txtResponsavel_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComiOS.prototype, "accCadastro", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComiOS.prototype, "rblPeriodo", {
        get: function () {
            return window['rblPeriodo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComiOS.prototype, "rblTipo", {
        get: function () {
            return window['rblTipo_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComiOS.prototype, "lblDesconto", {
        get: function () {
            return window['lblDesconto_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComiOS.prototype, "lblTotalFinal", {
        get: function () {
            return window['lblTotalFinal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComiOS.prototype, "lblTotal", {
        get: function () {
            return window['lblTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_ComiOS.prototype, "rblComissao", {
        get: function () {
            return window['rblComissao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_ComiOS.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        if (!this.GetScope().SelectedIndexChanged) {
            var that = this;
            this.GetScope().SelectedIndexChanged = $.proxy(this.SelectedIndexChanged, this);
            this.GetScope().$watch(function () { return that.Filtro.Tipo; }, this.GetScope().SelectedIndexChanged);
        }
        this.LimparCampos();
    };
    R_ComiOS.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    R_ComiOS.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Responsavel = "";
        this.Filtro.Vendedor = "";
        this.Filtro.Situacao = 0;
        this.Filtro.Servico = "";
        this.Filtro.TipoOS = "";
        this.Filtro.Periodo = "R";
        this.Filtro.Tipo = "S";
        this.Filtro.Comissao = "P";
        this.lblDesconto.Text = "";
        this.lblTotal.Text = "";
        this.lblTotalFinal.Text = "";
        this.grid.PreencherGrid(null);
        this.accCadastro.SetExpanded(true);
        this.RefreshAngular();
    };
    R_ComiOS.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        if ((this.rblTipo.GetValue() == "P" || this.rblTipo.GetValue() == "S") && CNum(this.Filtro.Responsavel) <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Responsável");
            return;
        }
        if ((this.rblTipo.GetValue() == "V") && CNum(this.Filtro.Vendedor) <= 0) {
            MostrarAlerta("Preencha o campo corretamente: Vendedor");
            return;
        }
        var parametros;
        try {
            parametros = {
                tipo: this.Filtro.Tipo + "",
                periodo_inicial: this.Filtro.Periodo_Inicial,
                periodo_final: this.Filtro.Periodo_Final,
                situacao: CNum(this.Filtro.Situacao),
                servico: CNum(this.Filtro.Servico),
                tipoOS: CNum(this.Filtro.TipoOS),
                responsavel: CNum(this.Filtro.Responsavel),
                vendedor: CNum(this.Filtro.Vendedor),
                periodo: this.Filtro.Periodo + "",
                comissao: this.Filtro.Comissao
            };
            var retorno = this.ExecutarFuncaoServerSideSynch("PreencherGrid", parametros);
            this.grid.PreencherGrid(retorno.lista);
            this.lblDesconto.Text = retorno.Desconto;
            this.lblTotal.Text = retorno.Total;
            this.lblTotalFinal.Text = retorno.TotalFinal;
            this.grid.GroupBy("Codigo");
            this.accCadastro.SetExpanded(false);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    R_ComiOS.prototype.SelectedIndexChanged = function () {
        this.Filtro.Vendedor = "";
        this.Filtro.Servico = "";
        this.Filtro.Responsavel = "";
        if (this.rblTipo.GetValue() == "V") {
            this.txtVendedor.Visible = true;
            this.txtVendedor.Obrigatorio = true;
            this.txtResponsavel.Visible = false;
            this.txtResponsavel.Obrigatorio = false;
        }
        else {
            this.txtVendedor.Visible = false;
            this.txtVendedor.Obrigatorio = false;
            this.txtResponsavel.Visible = true;
            this.txtResponsavel.Obrigatorio = true;
        }
        if (this.rblTipo.GetValue() == "P") {
            this.txtServico.Visible = false;
        }
        else {
            this.txtServico.Visible = true;
        }
        this.RefreshAngular();
    };
    return R_ComiOS;
}(MouraPageRelacaoAngular));
var r_ComiOS = new R_ComiOS();
//# sourceMappingURL=R_ComiOS.js.map