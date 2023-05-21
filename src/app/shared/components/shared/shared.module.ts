import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStarComponent } from '../product-star/product-star.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

const materialModules = [
  MatSlideToggleModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule,
  MatMenuModule,
  MatCardModule,
  MatDividerModule,
];

@NgModule({
  declarations: [ProductStarComponent],
  imports: [CommonModule, ...materialModules],
  exports: [ProductStarComponent, ...materialModules],
})
export class SharedModule {}
