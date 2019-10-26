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
var MouraCheckBoxList = /** @class */ (function (_super) {
    __extends(MouraCheckBoxList, _super);
    function MouraCheckBoxList(id) {
        return _super.call(this, id) || this;
    }
    Object.defineProperty(MouraCheckBoxList.prototype, "SelectorJQuery", {
        get: function () {
            return "[mouralistcontrolid='" + this.ID + "'] input[type='checkbox']";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCheckBoxList.prototype, "CheckBoxList", {
        get: function () {
            return $(this.SelectorJQuery);
        },
        enumerable: true,
        configurable: true
    });
    MouraCheckBoxList.prototype.LimparSelecao = function () {
        if (this.CheckBoxList) {
            var sel = $(this.SelectorJQuery);
            if (sel) {
                for (var x = 0; x <= sel.length - 1; x++) {
                    $(sel[x]).prop('checked', false);
                }
            }
        }
    };
    Object.defineProperty(MouraCheckBoxList.prototype, "SelectedIndexes", {
        get: function () {
            var retorno = [];
            $("#" + this.ID + "_List").find("input").each(function (index, element) {
                if (element.checked) {
                    retorno.push(index);
                }
            });
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    MouraCheckBoxList.prototype.GetValues = function () {
        if (!this.CheckBoxList) {
            return [];
        }
        else {
            var retorno = [];
            var sel = $(this.SelectorJQuery + ":checked");
            if (sel) {
                for (var x = 0; x <= sel.length - 1; x++) {
                    retorno.push(sel[x].value);
                }
            }
            return retorno;
        }
    };
    MouraCheckBoxList.prototype.GetValuesRelacao = function () {
        var retorno = [];
        retorno = this.GetValues();
        if (retorno) {
            if (retorno.length <= 0) {
                if (this.CheckBoxList) {
                    var sel = $(this.SelectorJQuery);
                    for (var x = 0; x <= sel.length - 1; x++) {
                        retorno.push($(sel[x]).val());
                    }
                }
            }
        }
        return retorno;
    };
    MouraCheckBoxList.prototype.SetValues = function (values) {
        if (values == null || values == undefined) {
            values = [];
        }
        if (this.CheckBoxList) {
            var sel = $(this.SelectorJQuery);
            if (sel) {
                for (var x = 0; x <= sel.length - 1; x++) {
                    for (var i = 0; i <= values.length - 1; i++) {
                        if ($(sel[x]).val() == values[i]) {
                            $(sel[x]).prop('checked', true);
                        }
                    }
                }
            }
        }
    };
    MouraCheckBoxList.prototype.LimparSelecaoItems = function (values) {
        if (values == null || values == undefined) {
            values = [];
        }
        if (this.CheckBoxList) {
            var sel = $(this.SelectorJQuery);
            if (sel) {
                for (var x = 0; x <= sel.length - 1; x++) {
                    for (var i = 0; i <= values.length - 1; i++) {
                        if ($(sel[x]).val() == values[i]) {
                            $(sel[x]).prop('checked', false);
                        }
                    }
                }
            }
        }
    };
    Object.defineProperty(MouraCheckBoxList.prototype, "SelectedValues", {
        get: function () {
            var retorno = [];
            $("#" + this.ID + "_List").find("input").each(function (index, element) {
                if (element.checked) {
                    retorno.push(element.value);
                }
            });
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraCheckBoxList.prototype, "SelectedTextes", {
        get: function () {
            var retorno = [];
            $("#" + this.ID + "_List").find("input").each(function (index, element) {
                if (element.checked) {
                    retorno.push($(element).next().text());
                }
            });
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    MouraCheckBoxList.prototype.IsValido = function () {
        var retorno = true;
        var checks = $("#" + this.ID + "_List").find("input");
        if (checks.length > 0) {
            retorno = false;
            for (var x = 0; x < checks.length; x++) {
                var checkbox = checks[x];
                if (checkbox.checked) {
                    retorno = true;
                }
            }
        }
        if (!retorno) {
            return false;
        }
        return _super.prototype.IsValido.call(this);
    };
    //public AdicionarItem(texto: string, valor: any) {
    //    if ($("#" + this.ID + "_List")) {
    //        $("#" + this.ID + "_List").append($('<input type="checkbox">', {
    //            value: valor,
    //            text: texto
    //        }));
    //    }
    //}
    MouraCheckBoxList.prototype.AdicionarItem = function (texto, valor) {
        if ($("#" + this.ID + "_List")) {
            if ($("#" + this.ID + "_List").length == 0) {
                $(this.PainelList).append("<table id=\"" + this.ID + "_List\" class=\"input-block-level\" mouralistcontrolid=\"" + this.ID + "\" style=\"height:100px;\"> </table>");
            }
            var table = $("#" + this.ID + "_List")[0];
            var linha = table.insertRow(-1);
            var idItem = this.ID + "_List_" + linha.rowIndex;
            var nameItem = this.AspUniqueIdLista + "_" + linha.rowIndex;
            linha.innerHTML = "<td><input id=\"" + idItem + "\" name=\"" + nameItem + "\" type=\"checkbox\" value=\"" + valor + "\" ><label for=\"" + idItem + "\">" + texto + "</label></td>";
        }
    };
    //public RemoverTodosItens() {
    //    if ($("#" + this.ID + "_List")) {
    //        $("#" + this.ID + "_List").find('input').remove();
    //    }
    //}
    MouraCheckBoxList.prototype.RemoverTodosItens = function () {
        $("#" + this.ID + "_List").find('tr').remove();
    };
    return MouraCheckBoxList;
}(MouraListControl));
//# sourceMappingURL=MouraCheckBoxList.js.map