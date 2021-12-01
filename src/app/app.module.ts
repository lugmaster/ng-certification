import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {ZipcodeFormComponent} from './components/weather-locations/zipcode-form/zipcode-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {WeatherConditionImageComponent} from './components/weather-condition-image/weather-condition-image.component';
import {WeatherLocationInfoComponent} from './components/weather-locations/weather-location-info/weather-location-info.component';
import {WeatherLocationsComponent} from './components/weather-locations/weather-locations.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, AppRoutingModule, NgbModule, HttpClientModule ],
  declarations: [ AppComponent, WeatherLocationsComponent, PageNotFoundComponent, WeatherLocationInfoComponent, ZipcodeFormComponent, WeatherConditionImageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
