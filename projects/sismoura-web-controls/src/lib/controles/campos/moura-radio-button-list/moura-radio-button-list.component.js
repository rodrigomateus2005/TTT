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
var moura_campo_component_1 = require("../moura-campo/moura-campo.component");
var MouraRadioButtonListComponent = /** @class */ (function (_super) {
    __extends(MouraRadioButtonListComponent, _super);
    function MouraRadioButtonListComponent() {
        return _super.call(this) || this;
    }
    Object.defineProperty(MouraRadioButtonListComponent.prototype, "ngDataSource", {
        get: function () {
            return this.$ngDataSource;
        },
        set: function (value) {
            this.$ngDataSource = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraRadioButtonListComponent.prototype, "ngModelMoura", {
        get: function () {
            return this.$ngModelMoura;
        },
        set: function (value) {
            this.$ngModelMoura = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraRadioButtonListComponent.prototype, "colunas", {
        get: function () {
            return this.$colunas;
        },
        set: function (value) {
            value = Math.floor(value);
            if (value < 1) {
                value = 1;
            }
            else if (value === 5) {
                value = 6;
            }
            else if (value > 6) {
                value = 12;
            }
            this.$colunas = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraRadioButtonListComponent.prototype, "scopeId", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraRadioButtonListComponent.prototype, "cssColunasRadio", {
        get: function () {
            var retorno = 'col-sm-' + (12 / this.colunas).toString();
            return retorno;
        },
        enumerable: true,
        configurable: true
    });
    MouraRadioButtonListComponent.prototype.preparaValue = function (item) {
        if (this.valueField) {
            return item[this.valueField];
        }
        else {
            return item;
        }
    };
    MouraRadioButtonListComponent.prototype.preparaText = function (item) {
        if (this.textField) {
            return item[this.textField];
        }
        else {
            return item;
        }
    };
    MouraRadioButtonListComponent = __decorate([
        core_1.Component({
            selector: 'moura-radio-button-list',
            templateUrl: './moura-radio-button-list.component.html',
            styleUrls: ['./moura-radio-button-list.component.scss']
        })
    ], MouraRadioButtonListComponent);
    return MouraRadioButtonListComponent;
}(moura_campo_component_1.MouraCampoComponent));
exports.MouraRadioButtonListComponent = MouraRadioButtonListComponent;
//# sourceMappingURL=moura-radio-button-list.component.js.map