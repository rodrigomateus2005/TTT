import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { ApiModule } from './api/api.module';

import { MouraButtonComponent } from './controles/botoes/moura-button/moura-button.component';
import { MouraControlComponent } from './controles/core/moura-control/moura-control.component';
import { MouraCampoComponent } from './controles/campos/moura-campo/moura-campo.component';
import { MouraComboBoxComponent } from './controles/campos/moura-combo-box/moura-combo-box.component';
import { MouraFileUploadComponent } from './controles/campos/moura-file-upload/moura-file-upload.component';
import { MouraRadioButtonListComponent } from './controles/campos/moura-radio-button-list/moura-radio-button-list.component';
import { MouraTextBoxCepComponent } from './controles/campos/moura-text-box-cep/moura-text-box-cep.component';
import { MouraTextBoxDataComponent } from './controles/campos/moura-text-box-data/moura-text-box-data.component';
import { MouraCheckBoxComponent } from './controles/campos/moura-check-box/moura-check-box.component';
import { MouraComboBoxEmpresaComponent } from './controles/campos/moura-combo-box-empresa/moura-combo-box-empresa.component';
import { MouraLabelComponent } from './controles/campos/moura-label/moura-label.component';
import { MouraTextBoxComponent } from './controles/campos/moura-text-box/moura-text-box.component';
import { MouraTextBoxCPFComponent } from './controles/campos/moura-text-box-cpf/moura-text-box-cpf.component';
import { MouraTextBoxProcuraComponent } from './controles/campos/moura-text-box-procura/moura-text-box-procura.component';
import { MouraTextBoxTelefoneComponent } from './controles/campos/moura-text-box-telefone/moura-text-box-telefone.component';
import { ModalProcuraComponent } from './controles/dialogs/modal-procura/modal-procura.component';
import { MouraEmailComponent } from './controles/dialogs/moura-email/moura-email.component';
import { MouraModalComponent } from './controles/dialogs/moura-modal/moura-modal.component';
import { MouraSMSComponent } from './controles/dialogs/moura-sms/moura-sms.component';
import { MouraGridViewComponent } from './controles/grid/moura-grid-view/moura-grid-view.component';
import { MouraMenuComponent } from './controles/menu/moura-menu/moura-menu.component';
import { MouraMenuItemComponent } from './controles/menu/moura-menu-item/moura-menu-item.component';
import { MouraAccordionComponent } from './controles/painel/moura-accordion/moura-accordion.component';
import { MouraTabPageComponent } from './controles/painel/moura-tab-page/moura-tab-page.component';
import { MouraTabPanelComponent } from './controles/painel/moura-tab-panel/moura-tab-panel.component';
import { JqueryUiSelectMenuDirective } from './diretivas/jquery-ui-select-menu.directive';
import { SoNumerosDirective } from './diretivas/so-numeros.directive';
import { DevExtremeGridViewDirective } from './diretivas/dev-extreme-grid-view.directive';

@NgModule({
  declarations: [
  MouraControlComponent,
  MouraButtonComponent,
  MouraCampoComponent,
  MouraComboBoxComponent,
  MouraFileUploadComponent,
  MouraRadioButtonListComponent,
  MouraTextBoxCepComponent,
  MouraTextBoxDataComponent,
  MouraCheckBoxComponent,
  MouraComboBoxEmpresaComponent,
  MouraLabelComponent,
  MouraTextBoxComponent,
  MouraTextBoxCPFComponent,
  MouraTextBoxProcuraComponent,
  MouraTextBoxTelefoneComponent,
  ModalProcuraComponent,
  MouraEmailComponent,
  MouraModalComponent,
  MouraSMSComponent,
  MouraGridViewComponent,
  MouraMenuComponent,
  MouraMenuItemComponent,
  MouraAccordionComponent,
  MouraTabPageComponent,
  MouraTabPanelComponent,
  JqueryUiSelectMenuDirective,
  SoNumerosDirective,
  DevExtremeGridViewDirective],
  imports: [
    CommonModule,
    FormsModule,
    // ApiModule,
    HttpClientModule
  ],
  providers: [],
  exports: [
    MouraControlComponent,
    MouraButtonComponent,
    MouraCampoComponent,
    MouraComboBoxComponent,
    MouraFileUploadComponent,
    MouraRadioButtonListComponent,
    MouraTextBoxCepComponent,
    MouraTextBoxDataComponent,
    MouraCheckBoxComponent,
    MouraComboBoxEmpresaComponent,
    MouraLabelComponent,
    MouraTextBoxComponent,
    MouraTextBoxCPFComponent,
    MouraTextBoxProcuraComponent,
    MouraTextBoxTelefoneComponent,
    ModalProcuraComponent,
    MouraEmailComponent,
    MouraModalComponent,
    MouraSMSComponent,
    MouraGridViewComponent,
    MouraMenuComponent,
    MouraMenuItemComponent,
    MouraAccordionComponent,
    MouraTabPageComponent,
    MouraTabPanelComponent]
})
export class SismouraWebControlsModule { }
