import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRoutingModule } from './detalle-routing.module';
import { DetalleComponent } from './detalle.component';
import { MainDetailComponent } from 'src/app/shared/components/main-detail/main-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { SimilarProductsComponent } from 'src/app/shared/components/similar-products/similar-products.component';
import { SharedModule } from 'src/app/shared/components/shared/shared.module';

@NgModule({
  declarations: [
    DetalleComponent,
    MainDetailComponent,
    SimilarProductsComponent,
  ],
  imports: [
    CommonModule,
    DetalleRoutingModule,
    MatIconModule,
    MatDividerModule,
    SharedModule
  ],
})
export class DetalleModule {}
