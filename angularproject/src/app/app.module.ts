import { AuthGuard } from './guards/auth.guard';
import { CommonService } from './service/common.service';
import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { NavComponent } from './layouts/nav/nav.component';
import { BannerOneComponent } from './layouts/banner-one/banner-one.component';
import { ProductsComponent } from './layouts/products/products.component';
import { BannerTwoComponent } from './layouts/banner-two/banner-two.component';
import { ContactUsComponent } from './layouts/contact-us/contact-us.component';
import { BannerThreeComponent } from './layouts/banner-three/banner-three.component';
import { SimpleStyleDirective } from './directives/simple-style.directive';
import { MobPartsComponent } from './product/mob-parts/mob-parts.component';
import { PensComponent } from './product/pens/pens.component';
import { BooksComponent } from './product/books/books.component';
import { LaptopsComponent } from './product/laptops/laptops.component';
import { HomeComponent } from './layouts/home/home.component';
import { PageNotFoundComponent } from './layouts/page-not-found/page-not-found.component';

import { AppRoutingModule } from './modules/app-routing.module';
import { MotoComponent } from './product/mob-parts/moto/moto.component';
import { SamsungComponent } from './product/mob-parts/samsung/samsung.component';
//import { AllComponentsModule } from './modules/all-components.module';
import { MobileNavComponent } from './product/mob-parts/mobile-nav/mobile-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './admin/login/login.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DashboardNavComponent } from './admin/dashboard/dashboard-nav/dashboard-nav.component';
import { SetMrpComponent } from './admin/dashboard/set-mrp/set-mrp.component';
import { ProductViewComponent } from './product/product-view/product-view.component';

//Used For Checkbox
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AllMaterialsModule } from './modules/all-materials.module';

import { LazyModule } from './modules/lazy/lazy.module';
import { LoginMrpComponent } from './admin/dashboard/login-mrp/login-mrp.component';

//for Cloud Hosting
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { firebaseConfig } from './firebase/firebase-config';
import { HostDirective } from './directives/host.directive';
import { LapiDetailsComponent } from './product/laptops/lapi-details/lapi-details.component';
import { LapiOffersComponent } from './product/laptops/lapi-offers/lapi-offers.component';
import { TempFormsComponent } from './components/forms/temp-forms/temp-forms.component';
import { ReactiveFormsComponent } from './components/forms/reactive-forms/reactive-forms.component';

//for DataTables
import { DataTablesModule } from 'angular-datatables';
import { ChildComponent } from './components/child/child.component';
import { ParentsComponent } from './components/parents/parents.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent,
    BannerOneComponent,
    ProductsComponent,
    BannerTwoComponent,
    ContactUsComponent,
    BannerThreeComponent,
    SimpleStyleDirective,
    MobPartsComponent,
    PensComponent,
    BooksComponent,
    LaptopsComponent,
    HomeComponent,
    PageNotFoundComponent,
    MotoComponent,
    SamsungComponent,
    MobileNavComponent,
    LoginComponent,
    DashboardComponent,
    DashboardNavComponent,
    SetMrpComponent,
    LoginMrpComponent,
    HostDirective,
    LapiDetailsComponent,
    LapiOffersComponent,
    TempFormsComponent,
    ReactiveFormsComponent,
    ProductViewComponent,
    ChildComponent,
    ParentsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    //AllComponentsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    AllMaterialsModule,
    HttpModule,
    LazyModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    DataTablesModule,
  ],

  bootstrap: [AppComponent],
  providers: [CommonService, AuthGuard],
})
export class AppModule {}
