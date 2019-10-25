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
var MouraMenuComponent = /** @class */ (function (_super) {
    __extends(MouraMenuComponent, _super);
    function MouraMenuComponent(mouraService) {
        var _this = _super.call(this) || this;
        _this.mouraService = mouraService;
        return _this;
    }
    Object.defineProperty(MouraMenuComponent.prototype, "procurar", {
        get: function () {
            return this.$procurar;
        },
        set: function (value) {
            this.$procurar = value;
        },
        enumerable: true,
        configurable: true
    });
    MouraMenuComponent.prototype.getMenus = function () {
        var menus;
        if (this.mouraService.sessao) {
            if (this.procurar && !String.IsNullOrWhiteSpace(this.procurar)) {
                menus = this.filtrarMenus(this.mouraService.sessao.menus, null);
            }
            else {
                menus = this.mouraService.sessao.menus;
            }
        }
        return menus;
    };
    MouraMenuComponent.prototype.filtrarMenus = function (menus, retorno) {
        if (!retorno) {
            retorno = [];
        }
        for (var i = 0; i < menus.length; i++) {
            var menu = menus[i];
            if (menu.MenusFilhos && menu.MenusFilhos.length) {
                this.filtrarMenus(menu.MenusFilhos, retorno);
            }
            else {
                if (menu.Titulo.ConverterCaracter()
                    .toLowerCase()
                    .indexOf(this.procurar.ConverterCaracter().toLowerCase()) > -1) {
                    retorno.push(menu);
                }
            }
        }
        return retorno;
    };
    MouraMenuComponent = __decorate([
        core_1.Component({
            selector: 'moura-menu',
            templateUrl: './moura-menu.component.html',
            styleUrls: ['./moura-menu.component.scss']
        })
    ], MouraMenuComponent);
    return MouraMenuComponent;
}(moura_control_component_1.MouraControlComponent));
exports.MouraMenuComponent = MouraMenuComponent;
//# sourceMappingURL=moura-menu.component.js.map