"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var JqueryUiSelectMenuDirective = /** @class */ (function () {
    // private $ngModel: angular.INgModelController;
    // public get ngModel(): angular.INgModelController {
    //   return this.$ngModel;
    // }
    // public set ngModel(value: angular.INgModelController) {
    //   this.$ngModel = value;
    //   if (value) {
    //     this.$ngModel.$viewChangeListeners.push(() => {
    //       this.onViewChange();
    //     });
    //     this.$ngModel.$validators.select = (model, view) => {
    //       if (model || this.select.hasEmptyOption || (!this.select.emptyOption && this.select.unknownOption)) {
    //         this.refresh();
    //       }
    //       return true;
    //     };
    //   }
    //   this.refresh();
    // }
    function JqueryUiSelectMenuDirective(elementRef, differs) {
        this.elementRef = elementRef;
        this.differs = differs;
        this.dataSourceDiffer = differs.find({}).create();
        this.instanceCombobox = $(this.select).combobox().combobox('instance');
    }
    Object.defineProperty(JqueryUiSelectMenuDirective.prototype, "select", {
        get: function () {
            return this.elementRef.nativeElement;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(JqueryUiSelectMenuDirective.prototype, "focusIndex", {
        get: function () {
            if (this.instanceSelectmenu) {
                return this.instanceSelectmenu.focusIndex;
            }
            else if (this.instanceCombobox) {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    JqueryUiSelectMenuDirective.prototype.ngDoCheck = function () {
        if (this.select && this.select.options && this.instanceCombobox) {
            var changes = this.dataSourceDiffer.diff(this.select.options); // check for changes
            if (changes) {
                this.refresh();
            }
        }
    };
    JqueryUiSelectMenuDirective.prototype.getElementOptions = function () {
        var retorno = [];
        for (var index = 0; index < this.select.options.length; index++) {
            var option = this.select.options[index];
            retorno.push(option.value);
        }
        return retorno;
    };
    JqueryUiSelectMenuDirective.prototype.refresh = function () {
        var _this = this;
        if (this.instanceSelectmenu) {
            var ref = function () {
                _this.instanceSelectmenu.element.selectmenu('refresh');
            };
            if (this.instanceSelectmenu.menuItems) {
                ref();
                // } else {
                //   this.$timeout(() => {
                //     ref();
                //   });
            }
        }
        else if (this.instanceCombobox) {
            if (this.select.selectedOptions[0]) {
                $(this.instanceCombobox.input).val(this.select.selectedOptions[0].text);
            }
        }
    };
    JqueryUiSelectMenuDirective = __decorate([
        core_1.Directive({
            selector: '[jqueryUiSelectMenu]',
            exportAs: 'jqSelectMenu'
        })
    ], JqueryUiSelectMenuDirective);
    return JqueryUiSelectMenuDirective;
}());
exports.JqueryUiSelectMenuDirective = JqueryUiSelectMenuDirective;
//# sourceMappingURL=jquery-ui-select-menu.directive.js.map