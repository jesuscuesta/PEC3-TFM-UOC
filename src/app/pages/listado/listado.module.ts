import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoRoutingModule } from './listado-routing.module';
import { ListadoComponent } from './listado.component';

import { MatCardModule } from '@angular/material/card';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatIconModule } from '@angular/material/icon';
import { ProductStarComponent } from 'src/app/shared/components/product-star/product-star.component';
import { BuscadorProductosComponent } from 'src/app/shared/components/buscador-productos/buscador-productos.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    ListadoComponent,
    ProductStarComponent,
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
  ],
})
export class ListadoModule {}
