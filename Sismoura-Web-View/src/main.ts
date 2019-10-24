/// <reference path="../../../Repositorio/SismouraWeb/Sismoura.Web/Scripts/Sismoura.Web.View1.d.ts" />

/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/Script/AngularSisMoura.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/Script/Extensions.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/Script/MouraScript.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/Script/PluginMouraWeb.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/Script/ValoresSismoura.ts" />

/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/TypeScriptReferences/angular.d.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/TypeScriptReferences/chrome.d.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/TypeScriptReferences/DevExpress.d.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/TypeScriptReferences/globalize.d.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/TypeScriptReferences/gridstack.d.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/TypeScriptReferences/interact.d.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/TypeScriptReferences/jqlite.d.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/TypeScriptReferences/jquery.dataTables.d.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/TypeScriptReferences/jquery.d.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/TypeScriptReferences/jquery.inputmask.d.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/TypeScriptReferences/jquery.resize.d.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/TypeScriptReferences/jqueryui.d.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/TypeScriptReferences/shortcut.d.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/TypeScriptReferences/signalr.d.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/TypeScriptReferences/toastr.d.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/SiSMoura.Web.Common/TypeScriptReferences/ua-parser.d.ts" />

/// <reference path="../../../Repositorio/SismouraWeb/Sismoura.Web/Classes/MouraPageAngularFullLogadaCadastro.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/Sismoura.Web/Classes/MouraPageAngularFullLogada.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/Sismoura.Web/Classes/MouraPageAngularFull.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/Sismoura.Web/Classes/MouraPageAngular.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/Sismoura.Web/Classes/MouraPageCadastroAngularGenerico.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/Sismoura.Web/Classes/MouraPageCadastroAngular.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/Sismoura.Web/Classes/MouraPageCadastroGenerico.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/Sismoura.Web/Classes/MouraPageCadastro.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/Sismoura.Web/Classes/MouraPageGenerico.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/Sismoura.Web/Classes/MouraPageNaoLogada.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/Sismoura.Web/Classes/MouraPageRelacaoAngular.ts" />
/// <reference path="../../../Repositorio/SismouraWeb/Sismoura.Web/Classes/MouraPage.ts" />

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
