"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var SoNumerosDirective = /** @class */ (function () {
    function SoNumerosDirective(elementRef, ngModel) {
        var _this = this;
        this.elementRef = elementRef;
        this.ngModel = ngModel;
        this.somentePositivo = false;
        this.somenteNegativo = false;
        ngModel.valueChanges.subscribe(function (value) {
            _this.ngModelValueChanged(value);
        });
        ngModel.options.updateOn = 'blur';
        // value.$formatters.push((value: any): any => {
        //   return this.formaterSoNumeros(value);
        // });
    }
    Object.defineProperty(SoNumerosDirective.prototype, "casasDecimais", {
        get: function () {
            return this.$casasDecimais;
        },
        set: function (value) {
            this.$casasDecimais = value;
        },
        enumerable: true,
        configurable: true
    });
    SoNumerosDirective.prototype.onKeyPress = function (event) {
        return this.verificadecimais(event);
    };
    SoNumerosDirective.prototype.verificadecimais = function (e) {
        var tecla = getTeclaCodeEvent(e);
        var separadorDecimal = Globalize.cldr.main('numbers/symbols-numberSystem-latn/decimal');
        if (this.casasDecimais) {
            if (separadorDecimal.charCodeAt(0) === tecla && !IsFirefoxControlKeyEvent(e)) {
                if (this.ngModel.value.toString().indexOf(separadorDecimal) < 0) {
                    return true;
                }
            }
        }
        return this.verificanumeros(e);
    };
    SoNumerosDirective.prototype.verificanumeros = function (e) {
        var tecla = getTeclaCodeEvent(e);
        return IsNumberKeyCode(tecla) || IsControlKeyCode(tecla) || IsFirefoxControlKeyEvent(e);
    };
    SoNumerosDirective.prototype.formaterSoNumeros = function (valor) {
        valor = parseFloat(valor);
        if (!isNaN(valor)) {
            return valor.Format(this.casasDecimais);
        }
        return '';
    };
    SoNumerosDirective.prototype.ngModelValueChanged = function (text) {
        if (text) {
            var valorParsed = void 0;
            if (text.CNum) {
                valorParsed = text.CNum().Format(this.casasDecimais).CNum();
                this.ngModel.viewToModelUpdate(valorParsed);
            }
            else {
                valorParsed = text;
            }
            var transformedInput = valorParsed.Format(this.casasDecimais);
            if (transformedInput !== text.toString()) {
                this.ngModel.valueAccessor.writeValue(transformedInput);
                // this.ngModel.$render();
            }
        }
    };
    __decorate([
        core_1.Input()
    ], SoNumerosDirective.prototype, "casasDecimais", null);
    __decorate([
        core_1.HostListener('keypress', ['$event'])
    ], SoNumerosDirective.prototype, "onKeyPress", null);
    SoNumerosDirective = __decorate([
        core_1.Directive({
            selector: '[ngModel][soNumeros]',
            providers: [forms_1.NgModel]
        })
    ], SoNumerosDirective);
    return SoNumerosDirective;
}());
exports.SoNumerosDirective = SoNumerosDirective;
//# sourceMappingURL=so-numeros.directive.js.map