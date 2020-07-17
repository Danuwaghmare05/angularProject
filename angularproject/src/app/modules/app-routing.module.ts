import { ReactiveFormsComponent } from './../components/forms/reactive-forms/reactive-forms.component';
import { TempFormsComponent } from './../components/forms/temp-forms/temp-forms.component';
import { LoginMrpComponent } from './../admin/dashboard/login-mrp/login-mrp.component';
import { SetMrpComponent } from './../admin/dashboard/set-mrp/set-mrp.component';
import { DashboardNavComponent } from './../admin/dashboard/dashboard-nav/dashboard-nav.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from '../layouts/home/home.component';
import { MobPartsComponent } from '../product/mob-parts/mob-parts.component';
import { BooksComponent } from '../product/books/books.component';
import { LaptopsComponent } from '../product/laptops/laptops.component';
import { PensComponent } from '../product/pens/pens.component';
import { PageNotFoundComponent } from '../layouts/page-not-found/page-not-found.component';
import { MotoComponent } from '../product/mob-parts/moto/moto.component';
import { SamsungComponent } from '../product/mob-parts/samsung/samsung.component';
import { MobileNavComponent } from '../product/mob-parts/mobile-nav/mobile-nav.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { LoginComponent } from '../admin/login/login.component';
import { AuthGuard } from '../guards/auth.guard';
import { AdminGuard } from '../guards/admin.guard';
import { LapiDetailsComponent } from '../product/laptops/lapi-details/lapi-details.component';
import { LapiOffersComponent } from '../product/laptops/lapi-offers/lapi-offers.component';
import { ProductViewComponent } from '../product/product-view/product-view.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'tempForm', component: TempFormsComponent },
  { path: 'reactiveForm', component: ReactiveFormsComponent },
  { path: 'product-view/:prodObj', component: ProductViewComponent },

  { path: '', component: HomeComponent },
  {
    path: 'mobile',
    component: MobileNavComponent,
    children: [
      { path: '', component: MobPartsComponent },
      { path: 'moto', component: MotoComponent },
      { path: 'sansung', component: SamsungComponent },
    ],
  },
  { path: 'books', component: BooksComponent },
  { path: 'laptop', component: LaptopsComponent },
  { path: 'lapiDetails', component: LapiDetailsComponent, outlet: 'outlet1' },
  { path: 'lapiOffers', component: LapiOffersComponent, outlet: 'outlet2' },

  { path: 'pens', component: PensComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardNavComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'setMRP', canActivate: [AdminGuard], component: SetMrpComponent },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'loginmrp', component: LoginMrpComponent },
  { path: 'lazy', loadChildren: '../modules/lazy/lazy.module#LazyModule' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
