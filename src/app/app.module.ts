import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GiphyComponent } from './giphy/giphy.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { GiphyViewerComponent } from './giphy-viewer/giphy-viewer.component';
import { GiphyService } from './giphy-service.service';

@NgModule({
  declarations: [
    AppComponent,
    GiphyComponent,
    NavBarComponent,
    GiphyViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [GiphyService],
  bootstrap: [AppComponent]

})
export class AppModule { }
