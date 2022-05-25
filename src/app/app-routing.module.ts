import { AulasComponent } from './components/aulas/aulas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcularMediaComponent } from './components/Boletim/calcular-media/calcular-media.component';
import { ConsultarComponent } from './components/Boletim/consultar/consultar.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'Boletim', component:CalcularMediaComponent},

  {path:'Boletim/consultar', component:ConsultarComponent},
  {path:'aulas', component:AulasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
