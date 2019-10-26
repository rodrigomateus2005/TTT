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
var MouraAcorddionModoFuncionamento;
(function (MouraAcorddionModoFuncionamento) {
    MouraAcorddionModoFuncionamento[MouraAcorddionModoFuncionamento["ClientSide"] = 0] = "ClientSide";
    MouraAcorddionModoFuncionamento[MouraAcorddionModoFuncionamento["ServerSide"] = 1] = "ServerSide";
})(MouraAcorddionModoFuncionamento || (MouraAcorddionModoFuncionamento = {}));
var MouraAccordion = /** @class */ (function (_super) {
    __extends(MouraAccordion, _super);
    function MouraAccordion(id) {
        return _super.call(this, id) || this;
    }
    Object.defineProperty(MouraAccordion.prototype, "Painel", {
        get: function () {
            return $("#" + this.ID + "_PnGeral")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraAccordion.prototype, "ModoFuncioanmento", {
        get: function () {
            return this.modoFuncioanmento;
        },
        set: function (value) {
            this.modoFuncioanmento = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraAccordion.prototype, "LabelLink", {
        get: function () {
            return $("#" + this.ID + "_Label")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraAccordion.prototype, "PnComponentes", {
        get: function () {
            return $("#" + this.ID + "_PnComponentes")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraAccordion.prototype, "MaisCabecalho", {
        get: function () {
            return $("#" + this.ID + "_lblMaisCabecalho")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraAccordion.prototype, "HiddenExpanded", {
        get: function () {
            return $("#" + this.ID + "_hdnExpanded")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraAccordion.prototype, "lblTituloCabecalho", {
        get: function () {
            return $("#" + this.ID + "_lblTituloCabecalho")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraAccordion.prototype, "TituloCabecalho", {
        get: function () {
            if (!this.lblTituloCabecalho)
                return "";
            return this.lblTituloCabecalho.innerHTML;
        },
        set: function (value) {
            if (!this.lblTituloCabecalho)
                return;
            if (!String.IsNullOrWhiteSpace(value)) {
                value = value.GetString();
            }
            this.lblTituloCabecalho.innerHTML = value;
        },
        enumerable: true,
        configurable: true
    });
    MouraAccordion.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        this.TituloCabecalho = this.TituloCabecalho;
        if (this.LabelLink != null && this.LabelLink) {
            adicionarEventoJQuery(this.LabelLink, "click", this.OnLabelLinkClick, this);
        }
    };
    MouraAccordion.prototype.OnLabelLinkClick = function (ev) {
        if (this.ModoFuncioanmento == MouraAcorddionModoFuncionamento.ClientSide) {
            this.Toggle();
            ev.preventDefault();
        }
    };
    MouraAccordion.prototype.SetExpanded = function (value) {
        var change = false;
        if (value) {
            if ($(this.PnComponentes).css('display') == 'none') {
                change = true;
            }
        }
        else {
            if (!($(this.PnComponentes).css('display') == 'none')) {
                change = true;
            }
        }
        if (change) {
            this.Toggle();
        }
    };
    MouraAccordion.prototype.GetExpanded = function () {
        if ($(this.PnComponentes).css('display') == 'none') {
            return false;
        }
        else {
            return true;
        }
    };
    MouraAccordion.prototype.Toggle = function () {
        var _this = this;
        $(this.PnComponentes).toggle(0, function () {
            //No fim do toggle, ele já ocultou a div, portanto deve considerar que ela já estava aberta
            if ($(_this.PnComponentes).css('display') == 'none') {
                $(_this.MaisCabecalho).html('+');
                $(_this.HiddenExpanded).val('0');
            }
            else {
                $(_this.MaisCabecalho).html('-');
                $(_this.HiddenExpanded).val('1');
            }
        });
    };
    Object.defineProperty(MouraAccordion.prototype, "Visible", {
        get: function () {
            return $(this.Painel).is(":visible");
        },
        set: function (visible) {
            if (visible) {
                $(this.Painel).show();
            }
            else {
                $(this.Painel).hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    MouraAccordion.prototype.getControles = function () {
        var retorno = [];
        $(this.Painel).find("*[moura-campo]").each(function (index, element) {
            var campo = window[element.id + "_Object"];
            if (campo) {
                retorno.push(campo);
            }
        });
        return retorno;
    };
    return MouraAccordion;
}(MouraControl));
//# sourceMappingURL=MouraAccordion.js.map