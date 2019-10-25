import { Directive, ElementRef, DoCheck, KeyValueDiffer, KeyValueDiffers } from '@angular/core';

@Directive({
  selector: '[jqueryUiSelectMenu]'
  , exportAs: 'jqSelectMenu'
})
export class JqueryUiSelectMenuDirective implements DoCheck {

  private dataSourceDiffer: KeyValueDiffer<string, any>;

  private instanceSelectmenu: any;
  private instanceCombobox: any;

  public get select(): HTMLSelectElement {
    return this.elementRef.nativeElement;
  }

  public get focusIndex(): number {
    if (this.instanceSelectmenu) {
      return this.instanceSelectmenu.focusIndex;
    } else if (this.instanceCombobox) {
      return 0;
    }
  }

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

  public constructor(private elementRef: ElementRef, private differs: KeyValueDiffers) {
    this.dataSourceDiffer = differs.find({}).create<string, any>();

    this.instanceCombobox = ($(this.select) as any).combobox().combobox('instance');
  }

  ngDoCheck(): void {
    if (this.select && this.select.options && this.instanceCombobox) {
      const changes = this.dataSourceDiffer.diff(this.select.options); // check for changes
      if (changes) {
        this.refresh();
      }
    }
  }

  public getElementOptions() {
    const retorno = [];

    for (let index = 0; index < this.select.options.length; index++) {
      const option = this.select.options[index];

      retorno.push(option.value);
    }

    return retorno;
  }

  public refresh() {
    if (this.instanceSelectmenu) {
      const ref = () => {
        this.instanceSelectmenu.element.selectmenu('refresh');
      }

      if (this.instanceSelectmenu.menuItems) {
        ref();
      // } else {
      //   this.$timeout(() => {
      //     ref();
      //   });
      }
    } else if (this.instanceCombobox) {
      if (this.select.selectedOptions[0]) {
        $(this.instanceCombobox.input).val(this.select.selectedOptions[0].text);
      }
    }
  }

  // public onViewChange() {
  //   this.$timeout(() => {
  //     this.refresh();
  //   }); // depois da tela ser renderizada
  // }

}
