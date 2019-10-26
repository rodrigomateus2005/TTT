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
var C_Cobran = /** @class */ (function (_super) {
    __extends(C_Cobran, _super);
    function C_Cobran() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_Cobran.prototype, "cboConseguiuContato", {
        get: function () {
            return window["cboConseguiuContato_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cobran.prototype, "cboFormaContato", {
        get: function () {
            return window["cboFormaContato_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cobran.prototype, "cboMotivo", {
        get: function () {
            return window["cboMotivo_comboBox"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cobran.prototype, "txtNomeContato", {
        get: function () {
            return window['txtNomeContato_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cobran.prototype, "txtHistorico", {
        get: function () {
            return window['txtHistorico_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cobran.prototype, "txtObservacao", {
        get: function () {
            return window['txtObservacao_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cobran.prototype, "gridContas", {
        get: function () {
            return window["gridContas_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_Cobran.prototype, "btnHistorico", {
        get: function () {
            return window["btnHistorico_Object"];
        },
        enumerable: true,
        configurable: true
    });
    C_Cobran.prototype.Init = function () {
        _super.prototype.Init.call(this);
        this.AdicionarEventosPagina();
        this.OnComboBoxConseguiuContatoSelectedIndexChanged();
    };
    C_Cobran.prototype.OnComboBoxConseguiuContatoSelectedIndexChanged = function () {
        if (this.cboConseguiuContato.GetValue() == 0) {
            this.cboFormaContato.SetSelectedIndex(-1);
            this.cboFormaContato.SetEnabled(false);
            this.cboMotivo.SetEnabled(true);
            this.txtNomeContato.SetTextLabelControl("Contato");
            this.txtObservacao.SetTextLabelControl("Observação");
        }
        else if (this.cboConseguiuContato.GetValue() == 1) {
            this.cboFormaContato.SetEnabled(true);
            this.cboMotivo.SetEnabled(false);
            this.cboMotivo.SetSelectedIndex(-1);
            this.txtNomeContato.SetTextLabelControl("*Contato");
            this.txtObservacao.SetTextLabelControl("*Observação");
        }
    };
    C_Cobran.prototype.AdicionarEventosPagina = function () {
        if (this.cboConseguiuContato) {
            adicionarEventoDevExpress(this.cboConseguiuContato.SelectedIndexChanged, this.OnComboBoxConseguiuContatoSelectedIndexChanged, this);
        }
        if (this.gridContas) {
            adicionarEventoDevExpress(this.gridContas.Grid.EndCallback, this.OnEndCallBack, this);
        }
        if (this.btnHistorico) {
            adicionarEventoMoura(this.btnHistorico.Click, this.OnClickBtnHistorico, this);
        }
    };
    C_Cobran.prototype.OnEndCallBack = function (s, e) {
        this.CarregarHistorico();
    };
    C_Cobran.prototype.OnClickBtnHistorico = function (s, e) {
        e.processOnServer = false;
        this.CarregarHistorico();
    };
    C_Cobran.prototype.CarregarHistorico = function () {
        this.gridContas.Grid.GetSelectedFieldValues("Codigo", $.proxy(this.OnRetornouLinhasSelecionadas, this));
    };
    C_Cobran.prototype.OnRetornouLinhasSelecionadas = function (result) {
        try {
            var retorno;
            var parametros;
            parametros = {
                codigoSelecionados: result
            };
            retorno = this.ExecutarFuncaoServerSideAsynch("CarregarHistorico", parametros, this.OnPrencherHistorico, this.OnErroHistorico, this);
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    C_Cobran.prototype.OnPrencherHistorico = function (d) {
        this.txtHistorico.SetText(JSON.parse(d).d);
    };
    C_Cobran.prototype.OnErroHistorico = function (erro) {
        MostrarError("Ocorreu um erro ao consultar o histórico");
    };
    return C_Cobran;
}(MouraPage));
var c_Cobran = new C_Cobran();
//# sourceMappingURL=C_Cobran.js.map