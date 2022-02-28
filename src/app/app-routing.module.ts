import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForecastComponent } from './forecast/forecast.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {path:'', component:MainComponent},
  {path:'forecast/:id', component:ForecastComponent},
  {path:'**', component: MainComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
