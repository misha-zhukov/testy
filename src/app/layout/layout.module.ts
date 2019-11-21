import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';

import {
  NbCardModule,
  NbLayoutModule,
  NbSidebarModule,
  NbButtonModule
} from '@nebular/theme';
import { NbIconModule } from '@nebular/theme';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbLayoutModule,
    NbSidebarModule,
    RouterModule,
    NbButtonModule,
    NbIconModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule {
 }
