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
var MouraGridStackPanelCoordenadas = /** @class */ (function () {
    function MouraGridStackPanelCoordenadas() {
    }
    return MouraGridStackPanelCoordenadas;
}());
var MouraGridStackPanel = /** @class */ (function (_super) {
    __extends(MouraGridStackPanel, _super);
    function MouraGridStackPanel(id) {
        var _this = _super.call(this, id) || this;
        $(_this.Panel).gridstack({
            handle: ".panel-heading"
        });
        return _this;
    }
    Object.defineProperty(MouraGridStackPanel.prototype, "Panel", {
        get: function () {
            return $("#" + this.ID + "_Panel")[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraGridStackPanel.prototype, "InstaceGridStack", {
        get: function () {
            return $(this.Panel).data("gridstack");
        },
        enumerable: true,
        configurable: true
    });
    MouraGridStackPanel.prototype.IniciarEventos = function () {
        _super.prototype.IniciarEventos.call(this);
    };
    MouraGridStackPanel.prototype.GetPanelsLocations = function () {
        var retorno = [];
        for (var x = 0; x < this.InstaceGridStack.grid.nodes.length; x++) {
            var node = this.InstaceGridStack.grid.nodes[x];
            retorno.push({
                X: node.x,
                Y: node.y,
                Width: node.width,
                Height: node.height
            });
        }
        return retorno;
    };
    return MouraGridStackPanel;
}(MouraControl));
//# sourceMappingURL=MouraGridStackPanel.js.map