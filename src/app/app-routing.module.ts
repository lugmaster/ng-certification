import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {WeatherLocationsComponent} from './components/weather-locations/weather-locations.component';
import {WeatherForecastComponent} from './components/weather-forecast/weather-forecast.component';

const routes: Routes = [
  { path: 'weather', component: WeatherLocationsComponent},
  { path: 'forecast/:zipcode', component: WeatherForecastComponent},
  { path: '',   redirectTo: '/weather', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
