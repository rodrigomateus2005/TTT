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
var MouraMenuItemComponent = /** @class */ (function (_super) {
    __extends(MouraMenuItemComponent, _super);
    function MouraMenuItemComponent() {
        var _this = _super.call(this) || this;
        _this.aberto = false;
        return _this;
    }
    Object.defineProperty(MouraMenuItemComponent.prototype, "menu", {
        get: function () {
            return this.$menu;
        },
        set: function (value) {
            this.$menu = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraMenuItemComponent.prototype, "aberto", {
        get: function () {
            return this.$aberto;
        },
        set: function (value) {
            this.$aberto = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraMenuItemComponent.prototype, "temFilhos", {
        get: function () {
            return this.menu.MenusFilhos && this.menu.MenusFilhos.length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraMenuItemComponent.prototype, "urlMenu", {
        get: function () {
            if (this.temFilhos) {
                return null;
            }
            var retorno = this.menu.URL;
            if (retorno && retorno.startsWith('~/')) {
                retorno = retorno.substr(2);
            }
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraMenuItemComponent.prototype, "icone", {
        get: function () {
            if (!this.temFilhos) {
                return null;
            }
            if (this.aberto) {
                return 'Images/menuMenos.png';
            }
            else {
                if (this.menu.Titulo.toLowerCase() === 'favoritos') {
                    return 'Images/imgDestaque.png';
                }
                else {
                    return 'Images/imgMaisMenu.png';
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraMenuItemComponent.prototype, "nivelCss", {
        get: function () {
            var nivel = this.nivel;
            if (nivel > 5) {
                nivel = 5;
            }
            return 'menuNivel' + nivel.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraMenuItemComponent.prototype, "nivel", {
        get: function () {
            var parent = this.menu.parent;
            var retorno = 1;
            while (parent) {
                parent = parent.parent;
                retorno++;
            }
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    MouraMenuItemComponent.prototype.clickMenu = function () {
        if (this.temFilhos) {
            this.aberto = !this.aberto;
        }
        else {
            // TODO
        }
    };
    __decorate([
        core_1.Input()
    ], MouraMenuItemComponent.prototype, "menu", null);
    MouraMenuItemComponent = __decorate([
        core_1.Component({
            selector: 'moura-menu-item',
            templateUrl: './moura-menu-item.component.html',
            styleUrls: ['./moura-menu-item.component.scss']
        })
    ], MouraMenuItemComponent);
    return MouraMenuItemComponent;
}(moura_control_component_1.MouraControlComponent));
exports.MouraMenuItemComponent = MouraMenuItemComponent;
//# sourceMappingURL=moura-menu-item.component.js.map