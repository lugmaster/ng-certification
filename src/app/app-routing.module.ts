import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {WeatherLocationInfoComponent} from './components/weather-per-zip/weather-location-info/weather-location-info.component';

const routes: Routes = [
  { path: 'weather', component: WeatherLocationInfoComponent},
  { path: '',   redirectTo: '/weather', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
