import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { SuccessComponent } from "./success.component";
import { CanceledComponent } from "./canceled.component";
import { PaymentComponent } from "./payment.component";

const routes: Routes = [
  {
    path: "",
    component: PaymentComponent,
    children: [
      {
        path: "success",
        component: SuccessComponent
      },
      {
        path: "canceled",
        component: CanceledComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: ""
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule {}
