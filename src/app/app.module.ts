import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { ptBrLocale } from 'ngx-bootstrap/locale';
import { AppComponent } from './app.component';
import { GoogleChartsModule } from 'angular-google-charts';
import {SharedModule} from 'src/shared/shared.module'
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


defineLocale('pt-br', ptBrLocale); // setting chronos locale (ngx-bootstrap)
// the second parameter 'fr' is optional
registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    GoogleChartsModule,
    SharedModule,
    NgbModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
