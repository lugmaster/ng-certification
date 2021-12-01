import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZipcodeComponent } from './components/zipcode/zipcode.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {AppRoutingModule} from './app-routing.module';
import { WeatherPerZipComponent } from './components/weather-per-zip/weather-per-zip.component';
import { ZipcodeFormComponent } from './components/zipcode-form/zipcode-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule, AppRoutingModule, NgbModule ],
  declarations: [ AppComponent, ZipcodeComponent, PageNotFoundComponent, WeatherPerZipComponent, ZipcodeFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
