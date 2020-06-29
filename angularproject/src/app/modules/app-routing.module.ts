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

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
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
  { path: 'pens', component: PensComponent },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    component: DashboardComponent,
  },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
