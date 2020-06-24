import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MobPartsComponent } from '../product/mob-parts/mob-parts.component';
import { PageNotFoundComponent } from '../layouts/page-not-found/page-not-found.component';

@NgModule({
  declarations: [MobPartsComponent, PageNotFoundComponent],
  imports: [CommonModule],
  exports: [MobPartsComponent, PageNotFoundComponent],
})
export class AllComponentsModule {}
