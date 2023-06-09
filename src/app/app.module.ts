import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FooterComponent } from './core/components/footer/footer.component';
import { CardComponent } from './shared/components/card/card.component';
import { HeaderComponent } from './core/components/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { SimilarProductsComponent } from './shared/components/similar-products/similar-products.component';
import { ReviewsComponent } from './shared/components/reviews/reviews.component';
import { RefereersComponent } from './shared/components/refereers/refereers.component';
import { SubheaderComponent } from './shared/components/subheader/subheader.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardComponent,
    SimilarProductsComponent,
    ReviewsComponent,
    RefereersComponent,
    SubheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    TranslateModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
