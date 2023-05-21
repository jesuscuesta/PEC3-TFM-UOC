import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetalleRoutingModule } from './detalle-routing.module';
import { DetalleComponent } from './detalle.component';
import { MainDetailComponent } from 'src/app/shared/components/main-detail/main-detail.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  declarations: [DetalleComponent, MainDetailComponent],
  imports: [CommonModule, DetalleRoutingModule, MatIconModule, MatDividerModule],
})
export class DetalleModule {}
