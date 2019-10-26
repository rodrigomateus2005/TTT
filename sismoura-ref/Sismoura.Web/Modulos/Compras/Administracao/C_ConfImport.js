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
var C_ConfImport = /** @class */ (function (_super) {
    __extends(C_ConfImport, _super);
    function C_ConfImport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(C_ConfImport.prototype, "Grid", {
        get: function () {
            return window['Grid_Object'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfImport.prototype, "Itens", {
        get: function () {
            if (!this.GetScope()["Itens"]) {
                this.GetScope()["Itens"] = {};
            }
            return this.GetScope()["Itens"];
        },
        set: function (value) {
            this.GetScope()["Itens"] = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(C_ConfImport.prototype, "Item", {
        get: function () {
            if (!this.GetScope()["Item"]) {
                this.GetScope()["Item"] = {};
            }
            return this.GetScope()["Item"];
        },
        set: function (value) {
            this.GetScope()["Item"] = value;
        },
        enumerable: true,
        configurable: true
    });
    C_ConfImport.prototype.Init = function () {
        _super.prototype.Init.call(this);
    };
    C_ConfImport.prototype.OnDepoisLimpar = function (Entity) {
        _super.prototype.OnDepoisLimpar.call(this, Entity);
        this.Itens = [];
        this.Item.Tipo = 1 /* Int */;
    };
    C_ConfImport.prototype.OnAntesGravar = function () {
        _super.prototype.OnAntesGravar.call(this);
        if (this.Itens) {
            this.EntityTela.Itens = this.Itens;
        }
        return true;
    };
    C_ConfImport.prototype.OnDepoisBuscarExistente = function (Entidade) {
        try {
            _super.prototype.OnDepoisBuscarExistente.call(this, Entidade);
            if (Entidade) {
                this.Itens = Entidade.Itens;
            }
        }
        catch (ex) {
            LogarException(ex);
        }
    };
    return C_ConfImport;
}(MouraPageCadastroAngular));
var c_ConfImport = new C_ConfImport();
//# sourceMappingURL=C_ConfImport.js.map