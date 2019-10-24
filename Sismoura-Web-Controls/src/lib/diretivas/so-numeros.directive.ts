import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[soNumeros]'
})
export class SoNumerosDirective {

  private somentePositivo = false;
  private somenteNegativo = false;

  private $casasDecimais: number;
  public get casasDecimais(): number {
    return this.$casasDecimais;
  }
  @Input()
  public set casasDecimais(value: number) {
    this.$casasDecimais = value;
  }

  private $ngModel: NgModel;
  public get ngModel(): NgModel {
    return this.$ngModel;
  }
  public set ngModel(value: NgModel) {
    this.$ngModel = value;

    if (value) {
      value.$parsers.push((text) => {
        return this.parserSoNumeros(text);
      });

      value.$formatters.push((value: any): any => {
        return this.formaterSoNumeros(value);
      });

      value.$overrideModelOptions({
        updateOn: 'blur'
      });
    }
  }

  @HostListener('keypress')
  private onKeyPress(event: KeyboardEvent): boolean {
    return this.verificadecimais(event);
  }

  protected verificadecimais(e): boolean {
    const tecla = getTeclaCodeEvent(e);
    const separadorDecimal = Globalize.cldr.main('numbers/symbols-numberSystem-latn/decimal');

    if (this.casasDecimais) {
      if (separadorDecimal.charCodeAt(0) == tecla && !IsFirefoxControlKeyEvent(e)) {
        if (this.ngModel.$viewValue.indexOf(separadorDecimal) < 0) {
          return true;
        }
      }
    }

    return this.verificanumeros(e);
  }

  protected verificanumeros(e): boolean {
    const tecla = getTeclaCodeEvent(e);

    return IsNumberKeyCode(tecla) || IsControlKeyCode(tecla) || IsFirefoxControlKeyEvent(e);
  }

  private formaterSoNumeros(valor) {
    valor = parseFloat(valor);
    if (!isNaN(valor)) {
      return valor.Format(this.casasDecimais);
    }
    return '';
  }

  private parserSoNumeros(text) {
    if (text) {
      let valorParsed;
      if (text.CNum) {
        valorParsed = text.CNum().Format(this.casasDecimais).CNum();
      } else {
        valorParsed = text;
      }

      const transformedInput = valorParsed.Format(this.casasDecimais);

      if (transformedInput !== text) {
        this.ngModel.$setViewValue(transformedInput);
        this.ngModel.$render();
      }

      return valorParsed;
    }
    return undefined;
  }

  constructor(private elementRef: ElementRef) {
  }

}
