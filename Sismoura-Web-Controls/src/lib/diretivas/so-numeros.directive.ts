import { Directive, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[soNumeros]'
})
export class SoNumerosDirective {

  // private somentePositivo = false;
  // private somenteNegativo = false;

  // private _$element: HTMLElement;
  // public get $element(): HTMLElement {
  //   return this._$element;
  // }
  // public set $element(value: HTMLElement) {
  //   this._$element = value;

  //   $(value).keypress((event) => {
  //     return this.onKeyPress(event);
  //   });
  // }

  // private $casasDecimais: number;
  // public get casasDecimais(): number {
  //   return this.$casasDecimais;
  // }
  // @Input()
  // public set casasDecimais(value: number) {
  //   this.$casasDecimais = value;
  // }

  // private $ngModel: NgModel;
  // public get ngModel(): NgModel{
  //   return this.$ngModel;
  // }
  // public set ngModel(value: NgModel) {
  //   this.$ngModel = value;

  //   if (value) {
  //     value.$parsers.push((text) => {
  //       return this.parserSoNumeros(text);
  //     });

  //     value.$formatters.push((value: any): any => {
  //       return this.formaterSoNumeros(value);
  //     });

  //     value.$overrideModelOptions({
  //       updateOn: "blur"
  //     });
  //   }
  // }

  // private onKeyPress(event): boolean {
  //   return this.verificadecimais(event);
  // }

  // protected verificadecimais(e): boolean {
  //   var tecla = getTeclaCodeEvent(e);
  //   var separadorDecimal = Globalize.cldr.main("numbers/symbols-numberSystem-latn/decimal");

  //   if (this.casasDecimais) {
  //     if (separadorDecimal.charCodeAt(0) == tecla && !IsFirefoxControlKeyEvent(e)) {
  //       if (this.ngModel.$viewValue.indexOf(separadorDecimal) < 0) {
  //         return true;
  //       }
  //     }
  //   }

  //   return this.verificanumeros(e);
  // }

  // protected verificanumeros(e): boolean {
  //   var tecla = getTeclaCodeEvent(e);

  //   return IsNumberKeyCode(tecla) || IsControlKeyCode(tecla) || IsFirefoxControlKeyEvent(e);
  // }

  // private formaterSoNumeros(valor) {
  //   valor = parseFloat(valor);
  //   if (!isNaN(valor)) {
  //     return valor.Format(this.casasDecimais);
  //   }
  //   return "";
  // }

  // private parserSoNumeros(text) {
  //   if (text) {
  //     var valorParsed;
  //     if (text.CNum) {
  //       valorParsed = text.CNum().Format(this.casasDecimais).CNum();
  //     } else {
  //       valorParsed = text;
  //     }

  //     var transformedInput = valorParsed.Format(this.casasDecimais);

  //     if (transformedInput !== text) {
  //       this.ngModel.$setViewValue(transformedInput);
  //       this.ngModel.$render();
  //     }

  //     return valorParsed;
  //   }
  //   return undefined;
  // }

  // constructor() { }

}
