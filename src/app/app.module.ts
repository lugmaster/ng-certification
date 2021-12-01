import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ZipcodeComponent} from './components/zipcode/zipcode.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import {WeatherPerZipComponent} from './components/weather-per-zip/weather-per-zip.component';
import {ZipcodeFormComponent} from './components/zipcode-form/zipcode-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';
import {WeatherConditionImageComponent} from './components/weather-condition-image/weather-condition-image.component';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, AppRoutingModule, NgbModule, HttpClientModule ],
  declarations: [ AppComponent, ZipcodeComponent, PageNotFoundComponent, WeatherPerZipComponent, ZipcodeFormComponent, WeatherConditionImageComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
