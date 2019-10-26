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
var R_RHiFin = /** @class */ (function (_super) {
    __extends(R_RHiFin, _super);
    function R_RHiFin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(R_RHiFin.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RHiFin.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RHiFin.prototype, "txtCliente", {
        get: function () {
            return window['txtCliente_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RHiFin.prototype, "txtTotal", {
        get: function () {
            return window['txtTotal_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(R_RHiFin.prototype, "lstEmpresa", {
        get: function () {
            return window['lstEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    R_RHiFin.prototype.OnPageLoad = function () {
        _super.prototype.OnPageLoad.call(this);
        this.LimparCampos();
    };
    R_RHiFin.prototype.Init = function () {
        _super.prototype.Init.call(this);
        if (this.grid) {
            adicionarEventoMoura(this.grid.SelecionouLinha, this.ClickBotao, this);
            adicionarEventoMoura(this.grid.CellPrepared, this.RowPrepared, this);
        }
        if (this.txtCliente) {
            adicionarEventoMoura(this.txtCliente.Procurou, this.Procurou, this);
        }
    };
    R_RHiFin.prototype.PreencherGrade = function () {
        var _this = this;
        _super.prototype.PreencherGrade.call(this);
        var lista;
        var parametros;
        if (!this.ValidarCamposObrigatorios()) {
            return;
        }
        try {
            lista = this.lstEmpresa.GetValues().join(",");
            parametros = {
                empresas: lista,
                cliente: CNum(this.Filtro.Cliente)
            };
            abrirEspera("");
            this.ExecutarFuncaoServerSideAsynch("PreencherGrid", parametros, function (d) {
                fecharEspera();
                var retorno = GetRetornoAJAX(d);
                _this.grid.PreencherGrid(retorno.Tabela);
                _this.grid.GroupBy("Tipo");
                _this.txtTotal.SetText(retorno.Total);
                _this.lstEmpresa.txtProcura.value = "";
                AtualizarModelAngular(_this.lstEmpresa.txtProcura);
                _this.RefreshAngular();
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
    R_RHiFin.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.Filtro.Cliente = 0;
        this.lstEmpresa.SelecionarEmpresaPadraoUsuario();
        this.txtTotal.SetText("");
        this.grid.PreencherGrid(null);
        this.RefreshAngular();
    };
    R_RHiFin.prototype.ClickBotao = function (s, e) {
        abrirTelaNovaAbaCodigo(formataURLRelativa(URLTela.CadastroDeContasAReceber), e.data["Codigo"]);
    };
    R_RHiFin.prototype.Procurou = function (s, e) {
        if (this.Filtro.Cliente) {
            this.PreencherGrade();
        }
        else {
            this.grid.PreencherGrid(null);
            this.txtTotal.SetText("");
        }
    };
    R_RHiFin.prototype.RowPrepared = function (s, e) {
        if (e.rowType == "data") {
            var valores;
            valores = [e.data["Valor_Impagavel"], e.data["Valor_Vencido"], e.data["Valor_Pago_Atrasado"]];
            if (CNum(valores[0]) > 0) {
                e.cellElement.css("color", "red");
            }
            else if (CNum(valores[1]) > 0) {
                e.cellElement.css("color", "blue");
            }
            else if (CNum(valores[2]) > 0) {
                e.cellElement.css("color", "green");
            }
        }
    };
    return R_RHiFin;
}(MouraPageRelacaoAngular));
var r_RHiFin = new R_RHiFin();
//# sourceMappingURL=R_RHiFin.js.map