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
var MouraListControl = /** @class */ (function (_super) {
    __extends(MouraListControl, _super);
    function MouraListControl(id) {
        var _this = _super.call(this, id) || this;
        _this.SelectionChanged = new MouraEventHandler();
        return _this;
    }
    Object.defineProperty(MouraListControl.prototype, "AspUniqueIdLista", {
        get: function () {
            return this._AspUniqueIdLista;
        },
        set: function (value) {
            this._AspUniqueIdLista = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListControl.prototype, "Lista", {
        get: function () {
            return $('#' + this.ID + '_List')[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListControl.prototype, "btnMarcar", {
        get: function () {
            return window[this.ID + '_btnMarcar_Botao'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListControl.prototype, "btnDesmarcar", {
        get: function () {
            return window[this.ID + '_btnDesmarcar_Botao'];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraListControl.prototype, "PainelList", {
        get: function () {
            return window[this.ID + '_painelList'];
        },
        enumerable: true,
        configurable: true
    });
    MouraListControl.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
        adicionarEventoJQuery($("#" + this.ID + "_List").find("input"), "change", this.OnListChanged, this);
        if (this.btnMarcar) {
            adicionarEventoDevExpress(this.btnMarcar.Click, this.OnListChanged, this);
        }
        if (this.btnDesmarcar) {
            adicionarEventoDevExpress(this.btnDesmarcar.Click, this.OnListChanged, this);
        }
    };
    MouraListControl.prototype.OnListChanged = function () {
        this.SelectionChanged.FireEvent(this, new MouraEventArgs());
    };
    return MouraListControl;
}(MouraCampo));
//# sourceMappingURL=MouraListControl.js.map