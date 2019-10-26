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
var MouraRadioButtonList = /** @class */ (function (_super) {
    __extends(MouraRadioButtonList, _super);
    function MouraRadioButtonList(id) {
        var _this = _super.call(this, id) || this;
        _this.SelectionChanged = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraRadioButtonList.prototype, "ListName", {
        get: function () {
            return this._ListName;
        },
        set: function (value) {
            this._ListName = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraRadioButtonList.prototype, "SelectorJQuery", {
        get: function () {
            return "[mouralistcontrolid='" + this.ID + "'] input[type='radio']";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraRadioButtonList.prototype, "RadioButtonList", {
        get: function () {
            return $(this.SelectorJQuery);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraRadioButtonList.prototype, "PainelList", {
        get: function () {
            return $("#" + this.ID + "_painelList");
        },
        enumerable: true,
        configurable: true
    });
    MouraRadioButtonList.prototype.GetValue = function () {
        if (!this.RadioButtonList) {
            return "";
        }
        else {
            var retorno = $(this.SelectorJQuery + ":checked").val();
            if (String.IsNullOrWhiteSpace(retorno)) {
                retorno = null;
            }
            return retorno;
        }
    };
    MouraRadioButtonList.prototype.SetValue = function (value) {
        $(this.SelectorJQuery + "[value=" + value + "]").prop('checked', true);
        this.OnListChanged();
    };
    MouraRadioButtonList.prototype.GetSelectedText = function () {
        if (!this.RadioButtonList) {
            return "";
        }
        else {
            var retorno = $(this.SelectorJQuery + ":checked").parent().find("label").text();
            if (String.IsNullOrWhiteSpace(retorno)) {
                retorno = null;
            }
            return retorno;
        }
    };
    MouraRadioButtonList.prototype.LimparSelecao = function () {
        if (this.RadioButtonList) {
            var sel = $(this.SelectorJQuery);
            if (sel) {
                for (var x = 0; x <= sel.length - 1; x++) {
                    $(sel[x]).prop('checked', false);
                }
            }
        }
    };
    MouraRadioButtonList.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        adicionarEventoJQuery($("#" + this.ID + "_List").find("input"), "change", this.OnListChanged, this);
    };
    MouraRadioButtonList.prototype.OnListChanged = function () {
        this.SelectionChanged.FireEvent(this, new MouraEventArgs());
    };
    Object.defineProperty(MouraRadioButtonList.prototype, "Disabled", {
        get: function () {
            if ($("#" + this.ID + "_List").find("input").attr("disabled")) {
                return true;
            }
            else {
                return false;
            }
        },
        set: function (disabled) {
            if (disabled) {
                $("#" + this.ID + "_List").find("input").attr("disabled", "true");
            }
            else {
                $("#" + this.ID + "_List").find("input").removeAttr("disabled");
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraRadioButtonList.prototype.AdicionarItem = function (texto, valor) {
        if ($("#" + this.ID + "_List")) {
            if ($("#" + this.ID + "_List").length == 0) {
                this.PainelList.append("<table id=\"" + this.ID + "_List\" class=\"input-xxlarge\" mouralistcontrolid=\"" + this.ID + "\" ng-radiobutton=\"radio\" style=\"height:90px;\"> </table>");
            }
            var table = $("#" + this.ID + "_List")[0];
            var linha = table.insertRow(-1);
            var idItem = this.ID + "_List" + "_" + linha.rowIndex;
            linha.innerHTML = "<td><input id=\"" + idItem + "\" name=\"" + this.ListName + "\" type=\"radio\" value=\"" + valor + "\" ><label for=\"" + idItem + "\">" + texto + "</label></td>";
        }
    };
    MouraRadioButtonList.prototype.RemoverTodosItens = function () {
        $("#" + this.ID + "_List").find('tr').remove();
    };
    MouraRadioButtonList.prototype.SetEnabledByIndex = function (enabled, index) {
        var sel = $(this.SelectorJQuery);
        if (sel) {
            if (enabled) {
                $(sel).eq(index).attr("disabled", "true");
            }
            else {
                $(sel).eq(index).removeAttr("disabled");
            }
        }
    };
    return MouraRadioButtonList;
}(MouraCampo));
//# sourceMappingURL=MouraRadioButtonList.js.map