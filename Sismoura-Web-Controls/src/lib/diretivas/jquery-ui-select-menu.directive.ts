import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[jqueryUiSelectMenu]'
  , exportAs: 'jqSelectMenu'
})
export class JqueryUiSelectMenuDirective {

  // private instanceSelectmenu: any;
  // private instanceCombobox: any;

  // public get select(): HTMLSelectElement {
  //   return this.elementRef.nativeElement;
  // }

  // public get focusIndex(): number {
  //   if (this.instanceSelectmenu) {
  //     return this.instanceSelectmenu.focusIndex;
  //   } else if (this.instanceCombobox) {
  //     return 0;
  //   }
  // }

  // private $ngModel: angular.INgModelController;
  // public get ngModel(): angular.INgModelController {
  //   return this.$ngModel;
  // }
  // public set ngModel(value: angular.INgModelController) {
  //   this.$ngModel = value;

  //   if (value) {
  //     this._ngModel.$viewChangeListeners.push(() => {
  //       this.onViewChange();
  //     });

  //     this._ngModel.$validators.select = (model, view) => {
  //       if (model || this.select.hasEmptyOption || (!this.select.emptyOption && this.select.unknownOption)) {
  //         this.refresh();
  //       }
  //       return true;
  //     };
  //   }

  //   this.refresh();
  // }

  // public constructor(private elementRef: ElementRef, public $timeout: angular.ITimeoutService) {
  //   if (true) {
  //     this.instanceCombobox = ($(this.select)).combobox().combobox('instance');
  //   } else {
  //     // this.instanceSelectmenu = (<any>$($element)).selectmenu({
  //     //     change: () => {
  //     //         this.$element.trigger("change")
  //     //     }
  //     // }).selectmenu("instance");
  //   }

  //   $scope.$watchCollection(() => this.getElementOptions(), () => {
  //     this.refresh();
  //   });
  // }

  // public getElementOptions() {
  //   const retorno = [];

  //   for (let index = 0; index < this.select.options.length; index++) {
  //     const option = this.select.options[index];

  //     retorno.push(option.value);
  //   }

  //   return retorno;
  // }

  // public refresh() {
  //   if (this.instanceSelectmenu) {
  //     const ref = () => {
  //       this.instanceSelectmenu.element.selectmenu('refresh');
  //     }

  //     if (this.instanceSelectmenu.menuItems) {
  //       ref();
  //     } else {
  //       this.$timeout(() => {
  //         ref();
  //       });
  //     }
  //   } else if (this.instanceCombobox) {
  //     if (this.select.selectedOptions[0]) {
  //       $(this.instanceCombobox.input).val(this.select.selectedOptions[0].text);
  //     }
  //   }
  // }

  // public onViewChange() {
  //   this.$timeout(() => {
  //     this.refresh();
  //   }); // depois da tela ser renderizada
  // }

}
