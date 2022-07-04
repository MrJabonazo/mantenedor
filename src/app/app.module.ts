import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MantenedorModule } from './mantenedor/mantenedor.module';
// import { MantenedorModule } from './mantenedor/mantenedor.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MantenedorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
