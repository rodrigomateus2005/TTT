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
var MouraColorEdit = /** @class */ (function (_super) {
    __extends(MouraColorEdit, _super);
    function MouraColorEdit(id) {
        return _super.call(this, id) || this;
        //this.ColorChanged = new MouraEventHandler();
    }
    Object.defineProperty(MouraColorEdit.prototype, "ColorEdit", {
        //public ColorChanged: MouraEventHandler;
        get: function () {
            return window[this.ID + 'ComboComponente'];
        },
        enumerable: true,
        configurable: true
    });
    MouraColorEdit.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
    };
    MouraColorEdit.prototype.SetColor = function (cor) {
        if (this.ColorEdit) {
            this.ColorEdit.SetColor(cor);
        }
    };
    MouraColorEdit.prototype.GetColor = function () {
        var cor;
        if (this.ColorEdit) {
            cor = this.ColorEdit.GetColor();
        }
        return cor;
    };
    MouraColorEdit.prototype.Limpar = function () {
        if (this.ColorEdit) {
            this.ColorEdit.Clear();
        }
    };
    return MouraColorEdit;
}(MouraCampo));
//# sourceMappingURL=MouraColorEdit.js.map