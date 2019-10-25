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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var moura_control_component_1 = require("../../core/moura-control/moura-control.component");
var MouraButtonComponent = /** @class */ (function (_super) {
    __extends(MouraButtonComponent, _super);
    function MouraButtonComponent() {
        var _this = _super.call(this) || this;
        _this.mouraClick = new core_1.EventEmitter();
        return _this;
    }
    MouraButtonComponent.prototype.click = function () {
        this.mouraClick.emit(null);
    };
    __decorate([
        core_1.Input()
    ], MouraButtonComponent.prototype, "text", void 0);
    __decorate([
        core_1.Output()
    ], MouraButtonComponent.prototype, "mouraClick", void 0);
    MouraButtonComponent = __decorate([
        core_1.Component({
            selector: 'moura-button',
            templateUrl: './moura-button.component.html',
            styleUrls: ['./moura-button.component.scss'],
            providers: []
        })
    ], MouraButtonComponent);
    return MouraButtonComponent;
}(moura_control_component_1.MouraControlComponent));
exports.MouraButtonComponent = MouraButtonComponent;
//# sourceMappingURL=moura-button.component.js.map