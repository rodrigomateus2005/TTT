import { Directive, Input, ElementRef, HostListener } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[ngModel][soNumeros]'
  , providers: [NgModel]
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

  @HostListener('keypress', ['$event'])
  public onKeyPress(event: KeyboardEvent): boolean {
    return this.verificadecimais(event);
  }

  protected verificadecimais(e): boolean {
    const tecla = getTeclaCodeEvent(e);
    const separadorDecimal = Globalize.cldr.main('numbers/symbols-numberSystem-latn/decimal');

    if (this.casasDecimais) {
      if (separadorDecimal.charCodeAt(0) === tecla && !IsFirefoxControlKeyEvent(e)) {
        if (this.ngModel.value.toString().indexOf(separadorDecimal) < 0) {
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

  private ngModelValueChanged(text) {
    if (text) {
      let valorParsed;
      if (text.CNum) {
        valorParsed = text.CNum().Format(this.casasDecimais).CNum();
        this.ngModel.viewToModelUpdate(valorParsed);
      } else {
        valorParsed = text;
      }

      const transformedInput = valorParsed.Format(this.casasDecimais);

      if (transformedInput !== text.toString()) {
        this.ngModel.valueAccessor.writeValue(transformedInput);
        // this.ngModel.$render();
      }
    }
  }

  constructor(private elementRef: ElementRef, private ngModel: NgModel) {
    ngModel.valueChanges.subscribe((value) => {
      this.ngModelValueChanged(value);
    });

    ngModel.options.updateOn = 'blur';

    // value.$formatters.push((value: any): any => {
    //   return this.formaterSoNumeros(value);
    // });
  }

}
