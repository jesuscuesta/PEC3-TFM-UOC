import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoRoutingModule } from './listado-routing.module';
import { ListadoComponent } from './listado.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [ListadoComponent],
  imports: [CommonModule, ListadoRoutingModule, MatCardModule],
})
export class ListadoModule {}
