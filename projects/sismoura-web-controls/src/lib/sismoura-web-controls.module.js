"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
// import { ApiModule } from './api/api.module';
var moura_button_component_1 = require("./controles/botoes/moura-button/moura-button.component");
var moura_control_component_1 = require("./controles/core/moura-control/moura-control.component");
var moura_campo_component_1 = require("./controles/campos/moura-campo/moura-campo.component");
var moura_combo_box_component_1 = require("./controles/campos/moura-combo-box/moura-combo-box.component");
var moura_file_upload_component_1 = require("./controles/campos/moura-file-upload/moura-file-upload.component");
var moura_radio_button_list_component_1 = require("./controles/campos/moura-radio-button-list/moura-radio-button-list.component");
var moura_text_box_cep_component_1 = require("./controles/campos/moura-text-box-cep/moura-text-box-cep.component");
var moura_text_box_data_component_1 = require("./controles/campos/moura-text-box-data/moura-text-box-data.component");
var moura_check_box_component_1 = require("./controles/campos/moura-check-box/moura-check-box.component");
var moura_combo_box_empresa_component_1 = require("./controles/campos/moura-combo-box-empresa/moura-combo-box-empresa.component");
var moura_label_component_1 = require("./controles/campos/moura-label/moura-label.component");
var moura_text_box_component_1 = require("./controles/campos/moura-text-box/moura-text-box.component");
var moura_text_box_cpf_component_1 = require("./controles/campos/moura-text-box-cpf/moura-text-box-cpf.component");
var moura_text_box_procura_component_1 = require("./controles/campos/moura-text-box-procura/moura-text-box-procura.component");
var moura_text_box_telefone_component_1 = require("./controles/campos/moura-text-box-telefone/moura-text-box-telefone.component");
var modal_procura_component_1 = require("./controles/dialogs/modal-procura/modal-procura.component");
var moura_email_component_1 = require("./controles/dialogs/moura-email/moura-email.component");
var moura_modal_component_1 = require("./controles/dialogs/moura-modal/moura-modal.component");
var moura_sms_component_1 = require("./controles/dialogs/moura-sms/moura-sms.component");
var moura_grid_view_component_1 = require("./controles/grid/moura-grid-view/moura-grid-view.component");
var moura_menu_component_1 = require("./controles/menu/moura-menu/moura-menu.component");
var moura_menu_item_component_1 = require("./controles/menu/moura-menu-item/moura-menu-item.component");
var moura_accordion_component_1 = require("./controles/painel/moura-accordion/moura-accordion.component");
var moura_tab_page_component_1 = require("./controles/painel/moura-tab-page/moura-tab-page.component");
var moura_tab_panel_component_1 = require("./controles/painel/moura-tab-panel/moura-tab-panel.component");
var jquery_ui_select_menu_directive_1 = require("./diretivas/jquery-ui-select-menu.directive");
var so_numeros_directive_1 = require("./diretivas/so-numeros.directive");
var dev_extreme_grid_view_directive_1 = require("./diretivas/dev-extreme-grid-view.directive");
var moura_service_1 = require("./services/moura.service");
var SismouraWebControlsModule = /** @class */ (function () {
    function SismouraWebControlsModule(parentModule, http) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
                'See also https://github.com/angular/angular/issues/20575');
        }
    }
    SismouraWebControlsModule_1 = SismouraWebControlsModule;
    SismouraWebControlsModule.forRoot = function () {
        return {
            ngModule: SismouraWebControlsModule_1,
            providers: [moura_service_1.MouraService]
        };
    };
    SismouraWebControlsModule = SismouraWebControlsModule_1 = __decorate([
        core_1.NgModule({
            declarations: [
                moura_control_component_1.MouraControlComponent,
                moura_button_component_1.MouraButtonComponent,
                moura_campo_component_1.MouraCampoComponent,
                moura_combo_box_component_1.MouraComboBoxComponent,
                moura_file_upload_component_1.MouraFileUploadComponent,
                moura_radio_button_list_component_1.MouraRadioButtonListComponent,
                moura_text_box_cep_component_1.MouraTextBoxCepComponent,
                moura_text_box_data_component_1.MouraTextBoxDataComponent,
                moura_check_box_component_1.MouraCheckBoxComponent,
                moura_combo_box_empresa_component_1.MouraComboBoxEmpresaComponent,
                moura_label_component_1.MouraLabelComponent,
                moura_text_box_component_1.MouraTextBoxComponent,
                moura_text_box_cpf_component_1.MouraTextBoxCPFComponent,
                moura_text_box_procura_component_1.MouraTextBoxProcuraComponent,
                moura_text_box_telefone_component_1.MouraTextBoxTelefoneComponent,
                modal_procura_component_1.ModalProcuraComponent,
                moura_email_component_1.MouraEmailComponent,
                moura_modal_component_1.MouraModalComponent,
                moura_sms_component_1.MouraSMSComponent,
                moura_grid_view_component_1.MouraGridViewComponent,
                moura_menu_component_1.MouraMenuComponent,
                moura_menu_item_component_1.MouraMenuItemComponent,
                moura_accordion_component_1.MouraAccordionComponent,
                moura_tab_page_component_1.MouraTabPageComponent,
                moura_tab_panel_component_1.MouraTabPanelComponent,
                jquery_ui_select_menu_directive_1.JqueryUiSelectMenuDirective,
                so_numeros_directive_1.SoNumerosDirective,
                dev_extreme_grid_view_directive_1.DevExtremeGridViewDirective
            ],
            imports: [
                common_1.CommonModule,
                // BrowserModule,
                forms_1.FormsModule,
            ],
            providers: [
                moura_service_1.MouraService
            ],
            exports: [
                moura_control_component_1.MouraControlComponent,
                moura_button_component_1.MouraButtonComponent,
                moura_campo_component_1.MouraCampoComponent,
                moura_combo_box_component_1.MouraComboBoxComponent,
                moura_file_upload_component_1.MouraFileUploadComponent,
                moura_radio_button_list_component_1.MouraRadioButtonListComponent,
                moura_text_box_cep_component_1.MouraTextBoxCepComponent,
                moura_text_box_data_component_1.MouraTextBoxDataComponent,
                moura_check_box_component_1.MouraCheckBoxComponent,
                moura_combo_box_empresa_component_1.MouraComboBoxEmpresaComponent,
                moura_label_component_1.MouraLabelComponent,
                moura_text_box_component_1.MouraTextBoxComponent,
                moura_text_box_cpf_component_1.MouraTextBoxCPFComponent,
                moura_text_box_procura_component_1.MouraTextBoxProcuraComponent,
                moura_text_box_telefone_component_1.MouraTextBoxTelefoneComponent,
                modal_procura_component_1.ModalProcuraComponent,
                moura_email_component_1.MouraEmailComponent,
                moura_modal_component_1.MouraModalComponent,
                moura_sms_component_1.MouraSMSComponent,
                moura_grid_view_component_1.MouraGridViewComponent,
                moura_menu_component_1.MouraMenuComponent,
                moura_menu_item_component_1.MouraMenuItemComponent,
                moura_accordion_component_1.MouraAccordionComponent,
                moura_tab_page_component_1.MouraTabPageComponent,
                moura_tab_panel_component_1.MouraTabPanelComponent
            ]
        }),
        __param(0, core_1.Optional()), __param(0, core_1.SkipSelf()),
        __param(1, core_1.Optional())
    ], SismouraWebControlsModule);
    return SismouraWebControlsModule;
    var SismouraWebControlsModule_1;
}());
exports.SismouraWebControlsModule = SismouraWebControlsModule;
//# sourceMappingURL=sismoura-web-controls.module.js.map