import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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

//Used For Checkbox
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { AllMaterialsModule } from './modules/all-materials.module';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    //AllComponentsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatDatepickerModule,
    AllMaterialsModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
