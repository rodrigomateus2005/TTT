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
var MouraTabPanelComponent = /** @class */ (function (_super) {
    __extends(MouraTabPanelComponent, _super);
    function MouraTabPanelComponent() {
        return _super.call(this) || this;
    }
    Object.defineProperty(MouraTabPanelComponent.prototype, "tabs", {
        get: function () {
            return this.$tabs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraTabPanelComponent.prototype, "elementTab", {
        get: function () {
            return $(this.divTab.nativeElement).children();
        },
        enumerable: true,
        configurable: true
    });
    MouraTabPanelComponent.prototype.recarregar = function () {
        if (this.instance) {
            this.elementTab.tabs('refresh');
        }
        else {
            this.elementTab.tabs();
            this.instance = $(this.divTab.nativeElement).children().tabs('instance');
        }
    };
    MouraTabPanelComponent.prototype.adicionarTab = function (tab) {
        var _this = this;
        if (!this.tabs) {
            this.$tabs = [];
        }
        if (this.tabs.filter(function (x) { return x === tab; }).length === 0) {
            this.tabs.push(tab);
            setTimeout(function () {
                _this.recarregar();
            }, 0, false);
        }
        else {
            this.recarregar();
        }
    };
    MouraTabPanelComponent.prototype.selecionar = function (tab) {
        if (this.instance) {
            this.elementTab.tabs('option', 'active', this.tabs.indexOf(tab));
        }
    };
    MouraTabPanelComponent.prototype.getUrlFull = function () {
        return location.toString();
    };
    __decorate([
        core_1.ViewChild('divTab', { static: true })
    ], MouraTabPanelComponent.prototype, "divTab", void 0);
    MouraTabPanelComponent = __decorate([
        core_1.Component({
            selector: 'moura-tab-panel',
            templateUrl: './moura-tab-panel.component.html',
            styleUrls: ['./moura-tab-panel.component.scss']
        })
    ], MouraTabPanelComponent);
    return MouraTabPanelComponent;
}(moura_control_component_1.MouraControlComponent));
exports.MouraTabPanelComponent = MouraTabPanelComponent;
//# sourceMappingURL=moura-tab-panel.component.js.map