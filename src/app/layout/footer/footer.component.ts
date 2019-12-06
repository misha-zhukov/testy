/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import {Component} from "@angular/core";

@Component({selector: "app-footer", styleUrls: ["./footer.component.scss"], template: `
    <span class="created-by"></span>
    <div class="socials">
      <a href="#" target="_blank"><i class="icon ion-logo-github"></i></a>
      <a href="#" target="_blank"><i class="icon ion-logo-facebook"></i></a>
      <a href="#" target="_blank"><i class="icon ion-logo-twitter"></i></a>
      <a href="#" target="_blank"><i class="icon ion-logo-linkedin"></i></a>
    </div>
  `})
export class FooterComponent {
  get currentYear() : number {
    return new Date().getFullYear();
  }
}
