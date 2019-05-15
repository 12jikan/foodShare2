import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommonModule } from '@angular/common';
import { HomepageModule } from './homepage/homepage.module';

const routes: Routes = [
  {path: 'home', loadChildren: './homepage/homepage.module#HomepageModule'},
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomepageModule
  ]
})
export class SharedModule { }
