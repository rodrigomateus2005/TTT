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
var V_Precos_Petz = /** @class */ (function (_super) {
    __extends(V_Precos_Petz, _super);
    function V_Precos_Petz() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(V_Precos_Petz.prototype, "lstListaPreco", {
        get: function () {
            return window['lstListaPreco_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V_Precos_Petz.prototype, "txtServico", {
        get: function () {
            return window['txtServico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V_Precos_Petz.prototype, "cboEmpresa", {
        get: function () {
            return window['cboEmpresa_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V_Precos_Petz.prototype, "grid", {
        get: function () {
            return window['grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(V_Precos_Petz.prototype, "AccordionFiltros", {
        get: function () {
            return window["accFiltros_Object"];
        },
        enumerable: true,
        configurable: true
    });
    V_Precos_Petz.prototype.Init = function () {
        _super.prototype.Init.call(this);
        adicionarEventoMoura(this.txtServico.Procurou, this.OnTxtServicoProcurou, this);
        adicionarEventoMoura(this.txtServico.Limpou, this.OnTxtServicoLimpou, this);
        adicionarEventoMoura(this.cboEmpresa.SelectedItemChanged, this.preencherListas, this);
        this.BotaoRelacao_BotaoGerar.Visible = false;
    };
    V_Precos_Petz.prototype.OnTxtServicoLimpou = function () {
        this.grid.PreencherGrid(null);
    };
    V_Precos_Petz.prototype.OnClickNovo = function (s, e) {
        e.processOnServer = false;
        this.LimparCampos();
    };
    V_Precos_Petz.prototype.OnTxtServicoProcurou = function (s, e) {
        this.preencherListas();
    };
    V_Precos_Petz.prototype.PreencherGrade = function () {
        _super.prototype.PreencherGrade.call(this);
        this.preencherListas();
    };
    V_Precos_Petz.prototype.preencherListas = function () {
        try {
            if (this.txtServico.GetText().CNum() > 0 && this.cboEmpresa.GetValue() > 0) {
                var param = {
                    codigoServico: this.txtServico.GetText(),
                    codigoEmpresa: this.cboEmpresa.GetValue()
                };
                var retorno = this.ExecutarFuncaoServerSideSynch("GetInfoServico", param);
                if (retorno) {
                    this.listaPrecos = retorno['lista_precos'];
                }
                else {
                    this.listaPrecos = [];
                }
                this.grid.PreencherGrid(null);
                this.grid.PreencherGrid(this.listaPrecos);
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    V_Precos_Petz.prototype.LimparCampos = function () {
        _super.prototype.LimparCampos.call(this);
        this.txtServico.Limpar();
        this.grid.PreencherGrid(null);
        this.cboEmpresa.SetValue(ValoresSismoura.EmpresaPadraoUsuario);
        this.RefreshAngular();
    };
    return V_Precos_Petz;
}(MouraPageRelacaoAngular));
var v_Precos_Petz = new V_Precos_Petz();
//# sourceMappingURL=V_Precos_Petz.js.map