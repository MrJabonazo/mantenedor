import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
//Modulos
import { MaterialModule } from './material.module';
//Conponentes
import { MantenedorComponent } from './mantenedor.component';
import { BuscadorComponent } from './pages/buscador/buscador.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [MantenedorComponent, BuscadorComponent, TablaComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [MantenedorComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class MantenedorModule { }
