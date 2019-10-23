import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { Configuration } from './configuration';
import { HttpClient } from '@angular/common/http';


import { ClienteService } from './api/cliente.service';
import { FiscalService } from './api/fiscal.service';
import { InternoConfigService } from './api/internoConfig.service';
import { LoginService } from './api/login.service';
import { MaiService } from './api/mai.service';
import { MasterService } from './api/master.service';
import { MasterLogadoService } from './api/masterLogado.service';
import { ModalProcuraService } from './api/modalProcura.service';
import { MouraAccordionService } from './api/mouraAccordion.service';
import { MouraButtonService } from './api/mouraButton.service';
import { MouraCampoService } from './api/mouraCampo.service';
import { MouraCheckBoxService } from './api/mouraCheckBox.service';
import { MouraComboBoxService } from './api/mouraComboBox.service';
import { MouraComboBoxEmpresaService } from './api/mouraComboBoxEmpresa.service';
import { MouraControlService } from './api/mouraControl.service';
import { MouraEmailService } from './api/mouraEmail.service';
import { MouraFileUploadService } from './api/mouraFileUpload.service';
import { MouraGridViewService } from './api/mouraGridView.service';
import { MouraLabelService } from './api/mouraLabel.service';
import { MouraMenuService } from './api/mouraMenu.service';
import { MouraMenuItemService } from './api/mouraMenuItem.service';
import { MouraModalService } from './api/mouraModal.service';
import { MouraRadioButtonListService } from './api/mouraRadioButtonList.service';
import { MouraSMSService } from './api/mouraSMS.service';
import { MouraSelecaoDeImpressoraService } from './api/mouraSelecaoDeImpressora.service';
import { MouraTabPageService } from './api/mouraTabPage.service';
import { MouraTabPanelService } from './api/mouraTabPanel.service';
import { MouraTextBoxService } from './api/mouraTextBox.service';
import { MouraTextBoxCPFService } from './api/mouraTextBoxCPF.service';
import { MouraTextBoxCepService } from './api/mouraTextBoxCep.service';
import { MouraTextBoxDataService } from './api/mouraTextBoxData.service';
import { MouraTextBoxProcuraService } from './api/mouraTextBoxProcura.service';
import { MouraTextBoxTelefoneService } from './api/mouraTextBoxTelefone.service';
import { PdvMobileService } from './api/pdvMobile.service';
import { PedidosService } from './api/pedidos.service';
import { PetMouraAplicativoClienteService } from './api/petMouraAplicativoCliente.service';
import { PetMouraAplicativoInternoService } from './api/petMouraAplicativoInterno.service';
import { PrincipalService } from './api/principal.service';
import { SismouraService } from './api/sismoura.service';
import { SiteInternoService } from './api/siteInterno.service';
import { TesteAngularService } from './api/testeAngular.service';
import { TesteHtmlService } from './api/testeHtml.service';

@NgModule({
  imports:      [],
  declarations: [],
  exports:      [],
  providers: [
    ClienteService,
    FiscalService,
    InternoConfigService,
    LoginService,
    MaiService,
    MasterService,
    MasterLogadoService,
    ModalProcuraService,
    MouraAccordionService,
    MouraButtonService,
    MouraCampoService,
    MouraCheckBoxService,
    MouraComboBoxService,
    MouraComboBoxEmpresaService,
    MouraControlService,
    MouraEmailService,
    MouraFileUploadService,
    MouraGridViewService,
    MouraLabelService,
    MouraMenuService,
    MouraMenuItemService,
    MouraModalService,
    MouraRadioButtonListService,
    MouraSMSService,
    MouraSelecaoDeImpressoraService,
    MouraTabPageService,
    MouraTabPanelService,
    MouraTextBoxService,
    MouraTextBoxCPFService,
    MouraTextBoxCepService,
    MouraTextBoxDataService,
    MouraTextBoxProcuraService,
    MouraTextBoxTelefoneService,
    PdvMobileService,
    PedidosService,
    PetMouraAplicativoClienteService,
    PetMouraAplicativoInternoService,
    PrincipalService,
    SismouraService,
    SiteInternoService,
    TesteAngularService,
    TesteHtmlService ]
})
export class ApiModule {
    public static forRoot(configurationFactory: () => Configuration): ModuleWithProviders {
        return {
            ngModule: ApiModule,
            providers: [ { provide: Configuration, useFactory: configurationFactory } ]
        };
    }

    constructor( @Optional() @SkipSelf() parentModule: ApiModule,
                 @Optional() http: HttpClient) {
        if (parentModule) {
            throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
        }
        if (!http) {
            throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
            'See also https://github.com/angular/angular/issues/20575');
        }
    }
}
