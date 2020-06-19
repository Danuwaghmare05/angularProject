import { Component, NgModule } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SqrtPipe } from './pipes/sqrt.pipe';
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

@NgModule({
  declarations: [
    AppComponent,
    SqrtPipe,
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
  ],
  imports: [BrowserModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
