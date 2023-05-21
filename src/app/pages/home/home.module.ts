import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/components/shared/shared.module';
import { PrincipalComponent } from 'src/app/shared/components/principal/principal.component';
import { SubheaderComponent } from 'src/app/shared/components/subheader/subheader.component';
import { SectionProductsComponent } from 'src/app/shared/components/section-products/section-products.component';
import { SummaryRefersComponent } from 'src/app/shared/components/summary-refers/summary-refers.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
  declarations: [
    HomeComponent,
    PrincipalComponent,
    SubheaderComponent,
    SectionProductsComponent,
    SummaryRefersComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
