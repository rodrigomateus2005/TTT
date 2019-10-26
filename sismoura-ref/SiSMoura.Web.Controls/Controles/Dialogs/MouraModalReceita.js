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
var MouraModalReceita = /** @class */ (function (_super) {
    __extends(MouraModalReceita, _super);
    function MouraModalReceita() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(MouraModalReceita.prototype, "RenderizarSomenteAoMostrar", {
        get: function () {
            return this.renderizarSomenteAoMostrar;
        },
        set: function (renderizarSomenteAoMostrar) {
            this.renderizarSomenteAoMostrar = renderizarSomenteAoMostrar;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalReceita.prototype, "hdnSomenteLeitura", {
        get: function () {
            return $("#" + this.ID + "_hdnSomenteLeitura")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalReceita.prototype, "hdnLista", {
        get: function () {
            return $("#" + this.ID + "_hdnLista")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalReceita.prototype, "SomenteLeitura", {
        get: function () {
            if (this.hdnSomenteLeitura.value) {
                return this.hdnSomenteLeitura.value == "1" ? true : false;
            }
            return false;
        },
        set: function (value) {
            if (this.hdnSomenteLeitura) {
                this.hdnSomenteLeitura.value = value.toString();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraModalReceita.prototype, "Lista", {
        get: function () {
            var retorno;
            if (this.hdnLista.value == "")
                return {};
            try {
                retorno = JSON.parse(this.hdnLista.value.split("'").join('"'));
            }
            catch (ex) {
                retorno = {};
            }
            return retorno;
        },
        set: function (lista) {
            this.hdnLista.value = JSON.stringify(lista);
        },
        enumerable: true,
        configurable: true
    });
    return MouraModalReceita;
}(MouraControl));
//# sourceMappingURL=MouraModalReceita.js.map