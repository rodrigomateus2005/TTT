"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var moura_grid_column_botao_1 = require("./moura-grid-column-botao");
var MouraGridColumnBotaoSelecionar = /** @class */ (function (_super) {
    __extends(MouraGridColumnBotaoSelecionar, _super);
    function MouraGridColumnBotaoSelecionar() {
        var _this = _super.call(this, 'selecionar') || this;
        _this.width = 50;
        return _this;
    }
    Object.defineProperty(MouraGridColumnBotaoSelecionar.prototype, "botaoTemplate", {
        get: function () {
            return $('<input type="button" value="" class="gridDevExtremeBotaoSelecionar" />');
        },
        enumerable: true,
        configurable: true
    });
    MouraGridColumnBotaoSelecionar.prototype.onClick = function (container, options) {
        if (this.mouraGridViewController.onSelecionouLinha) {
            this.mouraGridViewController.onSelecionouLinha({ $options: options });
        }
        // this.mouraGridViewController.$scope.$applyAsync();
    };
    return MouraGridColumnBotaoSelecionar;
}(moura_grid_column_botao_1.MouraGridColumnBotao));
exports.MouraGridColumnBotaoSelecionar = MouraGridColumnBotaoSelecionar;
//# sourceMappingURL=moura-grid-column-botao-selecionar.js.map