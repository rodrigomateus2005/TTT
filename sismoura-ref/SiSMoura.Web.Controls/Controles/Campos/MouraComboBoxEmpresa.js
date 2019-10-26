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
var MouraComboBoxEmpresa = /** @class */ (function (_super) {
    __extends(MouraComboBoxEmpresa, _super);
    function MouraComboBoxEmpresa(id) {
        var _this = _super.call(this, id) || this;
        _this.SelectedItemChanged = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraComboBoxEmpresa.prototype, "Combo", {
        get: function () {
            return $("#" + this.ID + "_List")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxEmpresa.prototype, "PainelPrincipal", {
        get: function () {
            return $("#" + this.ID)[0];
        },
        enumerable: true,
        configurable: true
    });
    MouraComboBoxEmpresa.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        if (this.Combo) {
            adicionarEventoJQuery(this.Combo, "change", this.OnComboChange, this);
        }
    };
    MouraComboBoxEmpresa.prototype.OnComboChange = function () {
        this.SelectedItemChanged.FireEvent(this, new MouraEventArgs());
    };
    MouraComboBoxEmpresa.prototype.GetValue = function () {
        if (this.Combo) {
            return this.Combo.value.CNum();
        }
        else {
            return 0;
        }
    };
    MouraComboBoxEmpresa.prototype.GetText = function () {
        return (this.Combo) ? $("#" + this.Combo.id + " option:selected").text() : "";
    };
    Object.defineProperty(MouraComboBoxEmpresa.prototype, "Visible", {
        get: function () {
            return $(this.PainelPrincipal).is(":visible");
        },
        set: function (visible) {
            if (this.PainelPrincipal) {
                if (visible) {
                    $(this.PainelPrincipal).show();
                }
                else {
                    $(this.PainelPrincipal).hide();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxEmpresa.prototype, "Enabled", {
        get: function () {
            if (this.Combo) {
                return !this.Combo.disabled;
            }
            return false;
        },
        set: function (value) {
            if (this.Combo) {
                this.Combo.disabled = !value;
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraComboBoxEmpresa.prototype.SetValue = function (value) {
        if (this.Combo) {
            this.Combo.value = "" + value;
        }
        if (this.NgModelController) {
            this.NgModelController.$setViewValue(value);
        }
    };
    MouraComboBoxEmpresa.prototype.LimparSelecao = function () {
        if (this.Combo) {
            this.Combo.selectedIndex = -1;
        }
    };
    MouraComboBoxEmpresa.prototype.Focus = function () {
        if (this.Combo) {
            this.Combo.focus();
        }
    };
    MouraComboBoxEmpresa.prototype.IsValido = function () {
        if (CNum(this.Combo.value) <= 0) {
            return false;
        }
        return _super.prototype.IsValido.call(this);
    };
    Object.defineProperty(MouraComboBoxEmpresa.prototype, "ReadOnly", {
        get: function () {
            return this.Combo.disabled;
        },
        set: function (readOnly) {
            this.Combo.disabled = readOnly;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxEmpresa.prototype, "Disabled", {
        get: function () {
            if (this.Combo) {
                return this.Combo.disabled;
            }
            else {
                return false;
            }
        },
        set: function (disabled) {
            if (this.Combo) {
                this.Combo.disabled = disabled;
            }
            this.Preencher();
        },
        enumerable: true,
        configurable: true
    });
    MouraComboBoxEmpresa.prototype.Preencher = function (codigoUsuario, regioes, estados, cidades) {
        if (!codigoUsuario) {
            codigoUsuario = 0;
        }
        if (!regioes) {
            regioes = "";
        }
        if (!estados) {
            estados = "";
        }
        if (!cidades) {
            cidades = "";
        }
        var empresas = this.GetEmpresas(codigoUsuario, regioes, estados, cidades);
        this.Limpar();
        for (var i = 0; i < empresas.length; i++) {
            var empresa = empresas[i];
            this.AdicionarItem(empresa.Fantasia, empresa.Codigo.toString());
        }
    };
    MouraComboBoxEmpresa.prototype.AdicionarItem = function (item, key) {
        if (!key) {
            key = item;
        }
        var opt = $('<option value="' + key + '">' + item + '</option>')[0];
        this.Combo.options.add(opt);
    };
    MouraComboBoxEmpresa.prototype.Limpar = function () {
        //while (this.Combo.options.length > 0) {
        //    this.Combo.options.remove(0);
        //}
        $(this.Combo).children().remove();
    };
    return MouraComboBoxEmpresa;
}(MouraListControlEmpresa));
//# sourceMappingURL=MouraComboBoxEmpresa.js.map