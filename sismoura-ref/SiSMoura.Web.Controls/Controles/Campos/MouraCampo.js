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
var MouraCampo = /** @class */ (function (_super) {
    __extends(MouraCampo, _super);
    function MouraCampo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._modalPai = "";
        _this._labelInicial = "";
        _this._visibleInicial = true;
        _this._isComponenteInterno = true;
        return _this;
    }
    Object.defineProperty(MouraCampo.prototype, "NgModelController", {
        get: function () {
            return this._NgModelController;
        },
        set: function (value) {
            this._NgModelController = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampo.prototype, "Painel", {
        get: function () {
            return $("#" + this.ID + "_Painel")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampo.prototype, "CallBackPanel", {
        get: function () {
            return window[this.ID + '_callBackPanel_callBackPanel'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampo.prototype, "LabelControl", {
        get: function () {
            return $("#" + this.ID + "_Label")[0];
        },
        enumerable: true,
        configurable: true
    });
    MouraCampo.prototype.GetTextLabelControl = function () {
        if (this.LabelControl) {
            return this.LabelControl.innerText; //.replace("*", "").replace("(F2)","");
        }
        else {
            return this.LabelInicial;
        }
    };
    MouraCampo.prototype.SetTextLabelControl = function (value) {
        var hasObrigatorio = false;
        var hasF2 = false;
        if (value) {
            if (value.startsWith("*")) {
                value = value.substring(1);
                // hasObrigatorio = true;
            }
            if (value.endsWith("(F2)")) {
                value = value.substr(0, value.length - ("(F2)").length);
                // hasF2 = true;
            }
            value = value.trim();
            value = value.GetString();
            if (this.Obrigatorio || this.ObrigatorioUsuario || hasObrigatorio) {
                if (!String.IsNullOrWhiteSpace(value) && value.indexOf("*") == -1) {
                    value = "* " + value;
                }
            }
            var componenteProcura = this;
            if (componenteProcura.PermitirProcurar || hasF2) {
                value = value + " (F2)";
            }
        }
        if (this.LabelControl) {
            this.LabelControl.innerText = value;
        }
        this.LabelInicial = value;
    };
    Object.defineProperty(MouraCampo.prototype, "ModalPai", {
        get: function () {
            return this._modalPai;
        },
        set: function (visible) {
            this._modalPai = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampo.prototype, "LabelInicial", {
        get: function () {
            return this._labelInicial;
        },
        set: function (visible) {
            this._labelInicial = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampo.prototype, "VisibleInicial", {
        get: function () {
            return this._visibleInicial;
        },
        set: function (visible) {
            this._visibleInicial = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampo.prototype, "IsComponenteInterno", {
        get: function () {
            return this._isComponenteInterno;
        },
        set: function (visible) {
            this._isComponenteInterno = visible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampo.prototype, "Visible", {
        get: function () {
            if (this.Painel) {
                return $(this.Painel).is(":visible");
            }
            else {
                return false;
            }
        },
        set: function (visible) {
            if (this.Painel) {
                if (visible) {
                    $(this.Painel).show();
                }
                else {
                    $(this.Painel).hide();
                }
                this.VisibleInicial = visible;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampo.prototype, "Enabled", {
        get: function () {
            if ($("#" + this.ID)[0].attributes.getNamedItem("disabled")) {
                return $("#" + this.ID)[0].attributes.getNamedItem("disabled").value == "false";
            }
            else {
                return true;
            }
        },
        set: function (enabled) {
            if (enabled) {
                $("#" + this.ID).removeAttr("disabled");
            }
            else {
                $("#" + this.ID).attr("disabled", "true");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampo.prototype, "NgModel", {
        get: function () {
            return this._ngModel;
        },
        set: function (value) {
            this._ngModel = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampo.prototype, "Obrigatorio", {
        get: function () {
            return this._obrigatorio;
        },
        set: function (value) {
            this._obrigatorio = value;
            this.SetTextLabelControl(this.GetTextLabelControl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampo.prototype, "ObrigatorioUsuario", {
        get: function () {
            return this._obrigatorioUsuario;
        },
        set: function (value) {
            this._obrigatorioUsuario = value;
            this.SetTextLabelControl(this.GetTextLabelControl());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampo.prototype, "ComponenteValidacao", {
        get: function () {
            return this._componenteValidacao;
        },
        set: function (value) {
            this._componenteValidacao = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampo.prototype, "PermitirOcultar", {
        get: function () {
            return this._permitirOcultar;
        },
        set: function (value) {
            this._permitirOcultar = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampo.prototype, "PermitirConfigurarObrigatorio", {
        get: function () {
            return this._permitirConfigurarObrigatorio;
        },
        set: function (value) {
            this._permitirConfigurarObrigatorio = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCampo.prototype, "ExibirNaConfiguracaoDeCampos", {
        get: function () {
            return this._exibirNaConfiguracaoDeCampos;
        },
        set: function (value) {
            this._exibirNaConfiguracaoDeCampos = value;
        },
        enumerable: true,
        configurable: true
    });
    MouraCampo.prototype.IniciarEventos = function () {
        this.SetTextLabelControl(this.GetTextLabelControl());
    };
    return MouraCampo;
}(MouraControl));
//# sourceMappingURL=MouraCampo.js.map