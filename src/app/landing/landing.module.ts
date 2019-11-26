import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LandingComponent } from "./landing.component";
import { LandingRoutingModule } from "./landing-routing.module";
import { LayoutModule } from "../layout/layout.module";
import { SharedModule } from "../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {
  NbCardModule,
  NbLayoutModule,
  NbButtonModule,
  NbInputModule,
  NbCheckboxModule,
  NbIconModule
} from "@nebular/theme";

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    LandingRoutingModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    NbInputModule,
    SharedModule,
    NbLayoutModule,
    NbCheckboxModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule
  ]
})
export class LandingModule {}
