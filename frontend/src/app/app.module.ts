import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TransacaoComponent } from './transacao/transacao.component';
import { FormTransacaoComponent } from './transacao/form-transacao/form-transacao.component';

@NgModule({
  declarations: [
    AppComponent,
    TransacaoComponent,
    FormTransacaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
