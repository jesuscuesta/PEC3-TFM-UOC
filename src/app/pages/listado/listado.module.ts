import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoRoutingModule } from './listado-routing.module';
import { ListadoComponent } from './listado.component';

import { MatCardModule } from '@angular/material/card';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatIconModule } from '@angular/material/icon';
import { BuscadorProductosComponent } from 'src/app/shared/components/buscador-productos/buscador-productos.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from 'src/app/shared/components/shared/shared.module';

@NgModule({
  declarations: [
    ListadoComponent,
    BuscadorProductosComponent,
  ],
  imports: [
    CommonModule,
    ListadoRoutingModule,
    MatCardModule,
    HttpClientModule,
    HttpClientJsonpModule,
    GoogleMapsModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    SharedModule
  ],
})
export class ListadoModule {}
