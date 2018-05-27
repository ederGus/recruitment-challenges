// tslint:disable-next-line:import-spacing
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/payvision-home.component';
import { ReadmeComponent } from './readme/payvision-readme.component';

const routes: Routes = [
  { path: '' , redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'readme', component: ReadmeComponent },
  { path: '**', redirectTo: 'readme' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
