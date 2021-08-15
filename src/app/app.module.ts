import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MapComponent } from './map/map.component';
import { FeedbackComponent } from './feedback/feedback.component';
@NgModule({
  declarations: [AppComponent, MapComponent, FeedbackComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    NoopAnimationsModule,
    MatCardModule,
    MatIconModule,

    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
