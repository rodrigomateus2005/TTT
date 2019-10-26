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
var MouraCentroCustoPagarJS = /** @class */ (function (_super) {
    __extends(MouraCentroCustoPagarJS, _super);
    function MouraCentroCustoPagarJS(id) {
        var _this = _super.call(this, id) || this;
        _this.InformouCentroCusto = new MouraGenericEventHandler();
        return _this;
    }
    Object.defineProperty(MouraCentroCustoPagarJS.prototype, "pnModal", {
        get: function () {
            return window[this.ID + "_pnModal_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCentroCustoPagarJS.prototype, "btnOK", {
        get: function () {
            return window[this.ID + "_btnOk_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCentroCustoPagarJS.prototype, "btnAdicionar", {
        get: function () {
            return window[this.ID + "_btnAdicionar_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCentroCustoPagarJS.prototype, "txtCentroCustoCodigo", {
        get: function () {
            return window[this.ID + "_txtCentroCustoCodigo_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCentroCustoPagarJS.prototype, "lblValor", {
        get: function () {
            return window[this.ID + "_lblValor_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCentroCustoPagarJS.prototype, "txtValorTotal", {
        get: function () {
            return window[this.ID + "_txtValorTotal_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCentroCustoPagarJS.prototype, "lblValorTotalPago", {
        get: function () {
            return window[this.ID + "_lblValorTotalPago_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCentroCustoPagarJS.prototype, "grd", {
        get: function () {
            return window[this.ID + "_grd_Object"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCentroCustoPagarJS.prototype, "hdnCentrosCusto", {
        get: function () {
            return $("#" + this.ID + "_hdnCentrosCusto")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCentroCustoPagarJS.prototype, "hdnCodContaPagar", {
        get: function () {
            return $("#" + this.ID + "_hdnCodContaPagar")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCentroCustoPagarJS.prototype, "hdnValorPago", {
        get: function () {
            return $("#" + this.ID + "_hdnValorPago")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCentroCustoPagarJS.prototype, "hdnCodUsuario", {
        get: function () {
            return $("#" + this.ID + "_hdnCodUsuario")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCentroCustoPagarJS.prototype, "hdnTela", {
        get: function () {
            return $("#" + this.ID + "_hdnTela")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCentroCustoPagarJS.prototype, "CentrosCusto", {
        get: function () {
            var retorno;
            if (this.hdnCentrosCusto.value == "")
                return [];
            try {
                retorno = JSON.parse(this.hdnCentrosCusto.value.split("'").join('"'));
            }
            catch (ex) {
                retorno = [];
            }
            return retorno;
        },
        set: function (centrosCusto) {
            this.hdnCentrosCusto.value = JSON.stringify(centrosCusto);
        },
        enumerable: true,
        configurable: true
    });
    MouraCentroCustoPagarJS.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.btnOK) {
            adicionarEventoMoura(this.btnOK.Click, this.OnClickOk, this);
        }
        if (this.btnAdicionar) {
            adicionarEventoMoura(this.btnAdicionar.Click, this.OnClickAdicionar, this);
        }
        if (this.txtCentroCustoCodigo) {
            adicionarEventoMoura(this.txtCentroCustoCodigo.Procurou, this.OnBuscouCentroCustoCodigo, this);
        }
        if (this.grd) {
            adicionarEventoMoura(this.grd.ExcluiuLinhaGrade, this.OnGridExcluiuItem, this);
        }
    };
    MouraCentroCustoPagarJS.prototype.Mostrar = function (codContaPagar, valorPago, tela, codUsuario) {
        this.LimparCampos();
        this.hdnCodContaPagar.value = "" + codContaPagar;
        this.hdnValorPago.value = "" + valorPago;
        this.hdnTela.value = tela;
        this.hdnCodUsuario.value = "" + codUsuario;
        this.lblValorTotalPago.Text = valorPago.Format(2);
        if (codContaPagar > 0) {
            this.txtCentroCustoCodigo.LimparParametros();
            this.txtCentroCustoCodigo.AddParametro("contasPagar", codContaPagar.toString());
        }
        this.pnModal.Show();
    };
    MouraCentroCustoPagarJS.prototype.LimparCampos = function () {
        this.txtCentroCustoCodigo.SetText("");
        this.lblValor.Text = "0,00";
        this.lblValorTotalPago.Text = "0,00";
        this.txtValorTotal.SetText("");
        this.grd.PreencherGrid(null);
        this.CentrosCusto = [];
    };
    MouraCentroCustoPagarJS.prototype.OnClickOk = function (s, e) {
        e.processOnServer = false;
        var totalPago = this.CentrosCusto.Sum("Valor_Pagar");
        if (totalPago < CNum(this.lblValorTotalPago.Text)) {
            MostrarAlerta("O valor Pago não pode ser menor que o valor");
        }
        else if (totalPago > CNum(this.lblValorTotalPago.Text)) {
            MostrarAlerta("O valor Pago não pode ser maior que o valor");
        }
        else {
            this.InformarCentroCusto();
        }
    };
    MouraCentroCustoPagarJS.prototype.InformarCentroCusto = function () {
        var _this = this;
        var parametros;
        try {
            parametros = {
                centrosCusto: JSON.stringify(this.CentrosCusto),
                codContaPagar: CNum(this.hdnCodContaPagar.value),
                tela: this.hdnTela.value,
                codUsuario: CNum(this.hdnCodUsuario.value)
            };
            abrirEspera("");
            this.ExecutarHttpRequestAsync("InformarCentroCusto", parametros, function (d) {
                fecharEspera();
                _this.LimparCampos();
                _this.pnModal.Hide();
                _this.InformouCentroCusto.FireEvent(_this, new MouraEventArgs());
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
    MouraCentroCustoPagarJS.prototype.OnClickAdicionar = function (s, e) {
        e.processOnServer = false;
        this.AdicionarCentroCusto();
    };
    MouraCentroCustoPagarJS.prototype.AdicionarCentroCusto = function () {
        var mensagem = "Preencha o campo corretamente: ";
        var centroCusto = {};
        var lista = [];
        lista = this.CentrosCusto;
        if (CNum(this.txtCentroCustoCodigo.GetText()) <= 0) {
            MostrarAlerta(mensagem += "CentroCusto");
        }
        else if (CNum(this.txtValorTotal.GetText()) <= 0) {
            MostrarAlerta(mensagem += "Valor_Pago");
        }
        else if (CNum(this.txtValorTotal.GetText()) > CNum(this.lblValor.Text)) {
            MostrarAlerta("O valor pago não pode ser maior que o valor do centro de custo");
        }
        else if (!lista) {
            lista = [];
        }
        centroCusto = this.CentrosCusto.FirstOrDefault("Contas_Pagar_Centro_Custo_Codigo", CNum(this.txtCentroCustoCodigo.GetText()));
        if (!centroCusto) {
            centroCusto = {};
        }
        else {
            MostrarAlerta("O centro de custo já foi adicionado");
        }
        centroCusto.Contas_Pagar_Centro_Custo_Codigo = CNum(this.txtCentroCustoCodigo.GetText());
        centroCusto.Centro_Custo = CNum(this.txtCentroCustoCodigo.GetText());
        centroCusto.Centro_Custo_Descricao = this.txtCentroCustoCodigo.GetResultado();
        centroCusto.Valor = CNum(this.lblValor.Text);
        centroCusto.Valor_Pagar = CNum(this.txtValorTotal.GetText());
        lista.push(centroCusto);
        this.CentrosCusto = lista;
        this.PreencherGrade();
        this.LimparCamposCentroCusto();
    };
    MouraCentroCustoPagarJS.prototype.PreencherGrade = function () {
        this.grd.PreencherGrid(this.CentrosCusto);
    };
    MouraCentroCustoPagarJS.prototype.LimparCamposCentroCusto = function () {
        this.txtCentroCustoCodigo.SetText("");
        this.lblValor.Text = "0,00";
        this.txtValorTotal.SetText("");
    };
    MouraCentroCustoPagarJS.prototype.OnBuscouCentroCustoCodigo = function (s, e) {
        if (CNum(this.txtCentroCustoCodigo.GetText()) > 0) {
            var centroCusto = this.GetByCodPagarCentroCusto();
            if (!centroCusto) {
                this.LimparCamposCentroCusto();
                this.txtCentroCustoCodigo.Focus();
                MostrarAlerta("Este centro de custo não pertence a conta a pagar selecionada.");
            }
            else {
                this.lblValor.Text = centroCusto.Valor.toString();
                this.txtValorTotal.Focus();
            }
        }
    };
    MouraCentroCustoPagarJS.prototype.GetByCodPagarCentroCusto = function () {
        var parametros;
        try {
            parametros = {
                codContaPagar: CNum(this.hdnCodContaPagar.value),
                centroCustoCodigo: CNum(this.txtCentroCustoCodigo.GetText())
            };
            var retorno = JSON.parse(DecodeTextoJSON(this.ExecutarHttpRequest("GetByCodPagarCentroCusto", parametros)));
            return retorno;
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    MouraCentroCustoPagarJS.prototype.OnGridExcluiuItem = function (s, ev) {
        this.CentrosCusto = this.grd.DataSource;
    };
    return MouraCentroCustoPagarJS;
}(MouraControl));
//# sourceMappingURL=MouraCentroCustoPagarJS.js.map