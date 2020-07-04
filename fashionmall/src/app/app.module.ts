import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FirstComponent } from './app.component';
import { NavComponent } from './layouts/nav/nav.component';
import { SliderheadComponent } from './layouts/sliderhead/sliderhead.component';
import { AboutComponent } from './layouts/about/about.component';
import { TeamComponent } from './layouts/team/team.component';
import { ClientsComponent } from './layouts/clients/clients.component';
import { ContactComponent } from './layouts/contact/contact.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PortfolioComponent } from './layouts/portfolio/portfolio.component';
import { PortfolioModalsComponent } from './layouts/portfolio-modals/portfolio-modals.component';
import { ServicesComponent } from './layouts/services/services.component';

@NgModule({
  declarations: [
    FirstComponent,
    NavComponent,
    SliderheadComponent,
    AboutComponent,
    TeamComponent,
    ClientsComponent,
    ContactComponent,
    FooterComponent,
    PortfolioComponent,
    PortfolioModalsComponent,
    ServicesComponent,
  ],
  imports: [BrowserModule],
  bootstrap: [FirstComponent],
})
export class AppModule {}
