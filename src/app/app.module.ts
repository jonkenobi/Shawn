import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import {MatSelectModule}  from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { MapComponent } from './map/map.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientJsonpModule } from '@angular/common/http';
import { AreaExpansionPanelComponent } from './components/area-expansion-panel/area-expansion-panel.component';
import { SearchInputAreaComponent } from './components/search-input-area/search-input-area.component';

@NgModule({
  declarations: [AppComponent, MapComponent, FeedbackComponent, AreaExpansionPanelComponent,SearchInputAreaComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    HttpClientModule,
    NoopAnimationsModule,
    HttpClientJsonpModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatIconModule,
    MatSelectModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
