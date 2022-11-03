import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { FlightsListComponent } from './pages/flights-list/flights-list.component';
import { DropdownModule } from 'primeng/dropdown';
import { ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { UppercaseInputDirective } from 'src/app/directives/custom.directives';


@NgModule({
  declarations: [
    FlightsListComponent,
    UppercaseInputDirective,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    FlightsRoutingModule,
    TableModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule
  ]
})
export class FlightsModule { }
