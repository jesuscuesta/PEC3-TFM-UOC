import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './core/components/footer/footer.component';
import { CardComponent } from './shared/components/card/card.component';
import { HeaderComponent } from './core/components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ReviewsComponent } from './shared/components/reviews/reviews.component';
import { RefereersComponent } from './shared/components/refereers/refereers.component';
import { NavComponent } from './core/components/nav/nav.component';
import { HomeComponent } from './pages/home/home.component';
import { PrincipalComponent } from './shared/components/principal/principal.component';
import { SubheaderComponent } from './shared/components/subheader/subheader.component';
import { SectionProductsComponent } from './shared/components/section-products/section-products.component';
import { SummaryRefersComponent } from './shared/components/summary-refers/summary-refers.component';
import {MatCardModule} from '@angular/material/card';
import { SharedModule } from './shared/components/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    ReviewsComponent,
    RefereersComponent,
    NavComponent,
    HomeComponent,
    PrincipalComponent,
    SubheaderComponent,
    SectionProductsComponent,
    SummaryRefersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    TranslateModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
