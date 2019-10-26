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
var R_Comiss = /** @class */ (function (_super) {
    __extends(R_Comiss, _super);
    function R_Comiss() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_Comiss.prototype, "gridDiscriminada", {
        get: function () {
            return window['gridDiscriminada_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Comiss.prototype, "gridResumida", {
        get: function () {
            return window['gridResumida_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Comiss.prototype, "AccordionFiltros", {
        get: function () {
            return window['accCadastro_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Comiss.prototype, "tabResultado", {
        get: function () {
            return window['tabResultado_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_Comiss.prototype, "lblTotalComissao", {
        get: function () {
            return window['lblTotalComissao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_Comiss.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_Comiss.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.tabResultado) {
            adicionarEventoMoura(this.tabResultado.ActiveTabChanged, this.LimparTotalComissao, this);
        }
    };
    R_Comiss.prototype.LimparTotalComissao = function () {
        this.gridDiscriminada.PreencherGrid(null);
        this.gridResumida.PreencherGrid(null);
        this.lblTotalComissao.Text = "";
    };
    R_Comiss.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        debugger;
        if (this.tabResultado.GetActiveTabIndex() == 0) {
            this.lblTotalComissao.Text = "";
            this.PreencherGridDiscriminada();
        }
        else {
            this.lblTotalComissao.Text = "";
            this.PreencherGridResumida();
        }
    };
    R_Comiss.prototype.PreencherGridDiscriminada = function () {
        var _this = this;
        this.lblTotalComissao.Text = "";
        var parametros;
        try {
            parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                comissao: CNum(this.Filtro.Comissao),
                codVendedor: CNum(this.Filtro.Vendedor),
                codRepresentante: CNum(this.Filtro.Representante),
                codConvenio: CNum(this.Filtro.Convenio),
                codZona: CNum(this.Filtro.Zona_Venda),
                utilizarCreditoRecebimento: this.Filtro.Utilizar_Credito_Recebimento,
                chequePrazo: this.Filtro.Cheque_Prazo,
                utilizarCreditoVenda: this.Filtro.Utilizar_Credito_Venda,
            };
            this.AccordionFiltros.SetExpanded(false);
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGridDiscriminada", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.gridDiscriminada.PreencherGrid(retorno);
                var total = 0;
                var grupo = _this.groupBy(retorno, "Tipo");
                for (var venda in grupo) {
                    total += grupo[venda].Sum("Comissao").Format(2).CNum();
                }
                _this.lblTotalComissao.Text = total.Format(2);
                _this.gridDiscriminada.GroupBy("Tipo");
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
    R_Comiss.prototype.PreencherGridResumida = function () {
        var _this = this;
        debugger;
        this.lblTotalComissao.Text = "";
        var parametros;
        try {
            parametros = {
                dataInicial: ConvertToDate(this.Filtro.Periodo_Inicial),
                dataFinal: ConvertToDate(this.Filtro.Periodo_Final),
                comissao: CNum(this.Filtro.Comissao),
                codVendedor: CNum(this.Filtro.Vendedor),
                codRepresentante: CNum(this.Filtro.Representante),
                codConvenio: CNum(this.Filtro.Convenio),
                codZona: CNum(this.Filtro.Zona_Venda),
                utilizarCreditoRecebimento: this.Filtro.Utilizar_Credito_Recebimento,
                chequePrazo: this.Filtro.Cheque_Prazo,
                utilizarCreditoVenda: this.Filtro.Utilizar_Credito_Venda
            };
            this.AccordionFiltros.SetExpanded(false);
            abrirEspera();
            this.ExecutarFuncaoServerSideAsynch("PreencherGridResumida", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.gridResumida.PreencherGrid(retorno);
                var total = 0;
                for (var venda = 0; venda < retorno.length; venda++) {
                    total += retorno[venda].Comissao.Format(2).CNum();
                }
                _this.lblTotalComissao.Text = total.Format(2);
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
    R_Comiss.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Periodo_Inicial = this.PrimeiroDiaMes();
        this.Filtro.Periodo_Final = this.DataServidor();
        this.Filtro.Vendedor = "";
        this.Filtro.Comissao = "";
        this.Filtro.Comissao = "0";
        this.Filtro.Representante = "";
        this.Filtro.Convenio = "";
        this.Filtro.Zona_Venda = "";
        this.Filtro.Utilizar_Credito_Recebimento = true;
        this.Filtro.Cheque_Prazo = true;
        this.Filtro.Utilizar_Credito_Venda = true;
        this.lblTotalComissao.Text = "";
        this.gridDiscriminada.PreencherGrid(null);
        this.gridResumida.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_Comiss.prototype.groupBy = function (xs, key) {
        return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    };
    ;
    return R_Comiss;
}(MouraPageRelacaoAngular));
var r_Comiss = new R_Comiss();
//# sourceMappingURL=R_Comiss.js.map