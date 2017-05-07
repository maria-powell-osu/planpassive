import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
    //   { path: '', redirectTo: '/home', pathMatch: 'full' },
    //   { path: 'blogs', loadChildren: getLazyModule },
    //   { path: 'blogs/:name', loadChildren: getLazyModule },
    //   {path: 'investment-calculators', loadChildren: getLazyModule},
    //   {path: 'rental-property-calculator', loadChildren: getLazyModule},
    //   {path: 'investment-return-calculator', loadChildren: getLazyModule}    ])
      { path: '', redirectTo: '/home', pathMatch: 'full' } ])
  ],
})
export class AppRoutingModule { }
