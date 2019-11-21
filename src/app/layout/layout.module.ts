import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import {
  NbButtonModule,
} from '@nebular/theme';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    NbButtonModule
  ],
  exports: [HeaderComponent]
})
export class LayoutModule { }
