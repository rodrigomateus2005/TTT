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
var MouraComboBoxComponent = /** @class */ (function (_super) {
    __extends(MouraComboBoxComponent, _super);
    function MouraComboBoxComponent() {
        return _super.call(this) || this;
    }
    Object.defineProperty(MouraComboBoxComponent.prototype, "jqueryUiSelectMenu", {
        get: function () {
            return this.$jqueryUiSelectMenu;
        },
        set: function (value) {
            this.$jqueryUiSelectMenu = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxComponent.prototype, "ngDataSource", {
        get: function () {
            return this.$ngDataSource;
        },
        set: function (value) {
            this.$ngDataSource = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxComponent.prototype, "ngModelMoura", {
        get: function () {
            return this.$ngModelMoura;
        },
        set: function (value) {
            this.$ngModelMoura = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MouraComboBoxComponent.prototype, "permiteNulo", {
        get: function () {
            return this.$permiteNulo;
        },
        set: function (value) {
            this.$permiteNulo = value;
        },
        enumerable: true,
        configurable: true
    });
    MouraComboBoxComponent.prototype.preparaValue = function (item) {
        if (this.valueField) {
            return item[this.valueField];
        }
        else {
            return item;
        }
    };
    MouraComboBoxComponent.prototype.preparaText = function (item) {
        if (this.textField) {
            return item[this.textField];
        }
        else {
            return item;
        }
    };
    MouraComboBoxComponent.prototype.preparaTextNull = function () {
        if (this.textNull) {
            return this.textNull;
        }
        else {
            return '';
        }
    };
    MouraComboBoxComponent.prototype.onChange = function () {
        // this.jqueryUiSelectMenu.refresh();
    };
    __decorate([
        core_1.ViewChild('jqueryselect', { static: false })
    ], MouraComboBoxComponent.prototype, "jqueryUiSelectMenu", null);
    __decorate([
        core_1.Input()
    ], MouraComboBoxComponent.prototype, "ngDataSource", null);
    __decorate([
        core_1.Input()
    ], MouraComboBoxComponent.prototype, "ngModelMoura", null);
    __decorate([
        core_1.Input()
    ], MouraComboBoxComponent.prototype, "permiteNulo", null);
    MouraComboBoxComponent = __decorate([
        core_1.Component({
            selector: 'moura-combo-box',
            templateUrl: './moura-combo-box.component.html',
            styleUrls: ['./moura-combo-box.component.scss']
        })
    ], MouraComboBoxComponent);
    return MouraComboBoxComponent;
}(moura_campo_component_1.MouraCampoComponent));
exports.MouraComboBoxComponent = MouraComboBoxComponent;
//# sourceMappingURL=moura-combo-box.component.js.map