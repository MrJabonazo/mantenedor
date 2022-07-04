import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MantenedorComponent } from './mantenedor/mantenedor.component';

const routes: Routes = [
  {
    path: '',
    component: MantenedorComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo:'' 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
