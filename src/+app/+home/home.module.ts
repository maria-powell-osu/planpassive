import { NgModule } from '@angular/core';

import { CachedModule } from '../cache/cache.module';
import { SharedModule } from '../shared.modules/shared.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    SharedModule,
    CachedModule
    HomeRoutingModule
    
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule { }
