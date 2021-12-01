import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ZipcodeComponent} from './components/zipcode/zipcode.component';

const routes: Routes = [
  { path: 'zipcode', component: ZipcodeComponent},
  { path: '',   redirectTo: '/zipcode', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
