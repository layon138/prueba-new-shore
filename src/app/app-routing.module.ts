import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: '',   
    redirectTo: 'flights',
    pathMatch: 'full'
  },
  {
    path:'flights',
    loadChildren:()=>import('./modules/flights/flights.module').then(m => m.FlightsModule)
  },
  {
    path:'**',
    redirectTo: 'flights',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
