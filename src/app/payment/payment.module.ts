import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SuccessComponent } from "./success.component";
import { CanceledComponent } from "./canceled.component";
import { PaymentComponent } from "./payment.component";
import { PaymentRoutingModule } from "./payment-routing.module";

@NgModule({
  declarations: [SuccessComponent, CanceledComponent, PaymentComponent],
  imports: [CommonModule, PaymentRoutingModule]
})
export class PaymentModule {}
