import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from './pages/login/login.component';
import { MouraPageComponent } from './pages/core/moura-page/moura-page.component';
import { MouraPageLogadaComponent } from './pages/core/moura-page-logada/moura-page-logada.component';
import { MouraPageLogadaCadastroComponent } from './pages/core/moura-page-logada-cadastro/moura-page-logada-cadastro.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { SismouraWebControlsModule } from 'sismoura-web-controls';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MouraPageComponent,
    MouraPageLogadaComponent,
    MouraPageLogadaCadastroComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    SismouraWebControlsModule.forRoot(),
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
