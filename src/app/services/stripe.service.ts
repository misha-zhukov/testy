import { environment } from "../../environments/environment";
import fetch from "node-fetch";

declare var Stripe;

export class StripeService {
  proSubscriptionId: string = "plan_GJNybL9VTsl0cd";
  constructor() {}

  checkout(planId) {
    this.createCheckoutSession(planId).then(function(data) {
      // Call Stripe.js method to redirect to the new Checkout page
      Stripe(environment.stripePublicKey)
        .redirectToCheckout({
          sessionId: data.sessionId
        })
        .then(res => {
          console.log(res);
        });
    });
  }

  handleResult(result) {}

  private createCheckoutSession(planId) {
    return fetch(`${environment.apiUrl}/stripe/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        planId: planId
      })
    }).then(function(result) {
      return result.json();
    });
  }
}
