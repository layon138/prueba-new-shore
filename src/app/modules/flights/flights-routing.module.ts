import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlightsListComponent } from './pages/flights-list/flights-list.component';

const routes: Routes = [
  { 
    path: '',   
   redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path:'list',
    component:FlightsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightsRoutingModule { }
